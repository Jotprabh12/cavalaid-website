"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="mb-3 text-2xl font-bold text-slate-900">
        Something went wrong.
      </h1>
      <p className="mb-6 max-w-md text-slate-600">
        {error.message || "An unexpected error occurred."}
      </p>
      <button
        onClick={() => reset()}
        className="rounded-lg bg-navy px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-navy-dark"
      >
        Try Again
      </button>
    </div>
  );
}
