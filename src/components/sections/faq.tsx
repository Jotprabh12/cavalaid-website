import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Faq() {
  const items = [
    {
      q: "What is Cavalaid?",
      a: "An academic intelligence platform for coaching institutes. It acts as an intelligence layer over your existing workflow — it does not replace teachers, deliver content, or function as an LMS.",
    },
    {
      q: "Does Cavalaid replace teachers?",
      a: "No. The AI detects patterns, summarizes, organizes, and explains — but the teacher remains the final decision-maker.",
    },
    {
      q: "Who is the pilot for?",
      a: "JEE and NEET coaching institutes with 100–500 students. We start with one niche before expanding.",
    },
    {
      q: "Does Cavalaid integrate with existing software?",
      a: "Yes. It's built to sit on top of your existing tools — attendance software, testing software, Excel, Google Sheets — so you do not need to change your workflow.",
    },
    {
      q: "Is student data safe?",
      a: "Every insight follows Finding → Evidence → Reason → Confidence. We collect only signals that directly reduce uncertainty for a stakeholder.",
    },
    {
      q: "How does the pilot work?",
      a: "We validate workflow adoption, not revenue. Success is measured by teacher and student engagement — not by immediate sales.",
    },
  ];

  return (
    <section className="py-20 sm:py-24">
      <div className="container">
        <ScrollReveal>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-navy">
              FAQ
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Common questions
            </h2>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <div className="mx-auto max-w-3xl space-y-3">
            {items.map((item) => (
              <details
                key={item.q}
                className="group rounded-lg border border-slate-200 bg-white p-5 transition-colors hover:border-slate-300"
              >
                <summary className="cursor-pointer select-none list-none px-1 text-left font-semibold text-slate-900">
                  <span>{item.q}</span>
                  <span className="float-right text-navy transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 px-1 text-sm text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
