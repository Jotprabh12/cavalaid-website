import { NextRequest, NextResponse } from "next/server";

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const MAX_ATTEMPTS = 3;
const TIMEOUT_MS = 8000;

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;",
  })[character] ?? character);
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function isRetryable(status: number) {
  return status === 408 || status === 429 || status >= 500;
}

async function sendWithRetry(payload: {
  apiKey: string;
  from: string;
  to: string[];
  subject: string;
  html: string;
}) {
  let lastError = "Failed to send";

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      const response = await fetch(RESEND_ENDPOINT, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${payload.apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: payload.from,
          to: payload.to,
          subject: payload.subject,
          html: payload.html,
        }),
        signal: AbortSignal.timeout(TIMEOUT_MS),
      });

      const data = (await response.json().catch(() => ({}))) as { id?: string; message?: string };

      if (response.ok) {
        return { ok: true as const, id: data.id, attempts: attempt };
      }

      lastError = data.message || `Resend returned HTTP ${response.status}`;
      if (!isRetryable(response.status)) {
        return { ok: false as const, error: lastError, attempts: attempt };
      }
    } catch (error) {
      lastError =
        error instanceof Error ? `${error.name}: ${error.message}` : "Network request failed";
    }

    if (attempt < MAX_ATTEMPTS) {
      await sleep(400 * 2 ** (attempt - 1));
    }
  }

  return { ok: false as const, error: lastError, attempts: MAX_ATTEMPTS };
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = [process.env.RESEND_TO_EMAIL, "recipient@example.com"].filter(
    (value): value is string => Boolean(value && value.includes("@")),
  );

  if (to.length === 0 || !apiKey) {
    return NextResponse.json({ error: "Email not configured" }, { status: 500 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { institute, email, students, message } = body as Record<string, unknown>;
  if (
    typeof institute !== "string" ||
    !institute.trim() ||
    typeof email !== "string" ||
    !email.includes("@")
  ) {
    return NextResponse.json(
      { error: "Institute name and a valid email are required" },
      { status: 400 },
    );
  }

  const safeInstitute = escapeHtml(institute.trim());
  const safeEmail = escapeHtml(email.trim());
  const safeStudents = typeof students === "string" ? escapeHtml(students.trim()) : "—";
  const safeMessage =
    typeof message === "string" && message.trim() ? escapeHtml(message.trim()) : "—";

  const from = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

  const result = await sendWithRetry({
    apiKey,
    from: `Cavalaid <${from}>`,
    to,
    subject: `New pilot request from ${institute.trim().slice(0, 120)}`,
    html: `
      <h2>New Pilot Request</h2>
      <table>
        <tr><td><strong>Institute:</strong></td><td>${safeInstitute}</td></tr>
        <tr><td><strong>Email:</strong></td><td>${safeEmail}</td></tr>
        <tr><td><strong>Students:</strong></td><td>${safeStudents}</td></tr>
        <tr><td><strong>Message:</strong></td><td>${safeMessage}</td></tr>
      </table>
    `,
  });

  if (!result.ok) {
    console.error(
      `[contact] send failed after ${result.attempts} attempt(s): ${result.error}`,
    );
    return NextResponse.json({ error: "Failed to send" }, { status: 502 });
  }

  return NextResponse.json({ ok: true, id: result.id });
}