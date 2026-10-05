import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function HowItWorks() {
  const steps = [
    {
      title: "Integrate",
      desc: "Connects to your existing workflow — attendance, tests, planner — with minimal friction.",
    },
    {
      title: "Collect signals",
      desc: "Objective, behavioural, teacher, and generated signals are captured automatically as students work.",
    },
    {
      title: "Intelligence layer",
      desc: "Cavalaid detects patterns, summarizes, organizes, and explains — with Finding → Evidence → Reason → Confidence for every insight.",
    },
    {
      title: "Decide better",
      desc: "Teachers see what needs attention. Mentors intervene early. Institutes gain academic visibility — without adding workload.",
    },
  ];

  return (
    <section className="py-20 sm:py-24">
      <div className="container">
        <ScrollReveal>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-navy">
              How It Works
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              The least intrusive intelligence layer.
            </h2>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <div className="relative space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-12">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200 md:left-1/2 md:-translate-x-1/2" />
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={step.title} className="relative flex items-start gap-4 md:grid md:grid-cols-[1fr,2fr] md:gap-8">
                  <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                    {i + 1}
                  </div>
                  <div className={`pt-1 ${isLeft ? "" : "md:text-right"}`}>
                    <h3 className="mb-2 text-lg font-semibold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
