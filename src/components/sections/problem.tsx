import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Problem() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="container">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-navy">
              The Problem
            </p>
            <h2 className="mb-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Information is lost at almost every stage.
            </h2>
            <p className="mb-10 text-lg leading-8 text-slate-600">
              In a typical coaching workflow — planner → teaching → homework →
              tests → results → doubt sessions — useful signals about how a
              student learns disappear. Cavalaid preserves them.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                "Planner adjustments and teacher observations are not recorded.",
                "Doubt-session insights are not captured for future batches.",
                "Test data exists as marks alone — no question-level or time analysis.",
                "Reflection happens mentally and is never structured.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-status-red/10">
                    <svg className="h-3.5 w-3.5 text-status-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <p className="text-sm text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
