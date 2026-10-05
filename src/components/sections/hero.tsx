import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28 lg:py-32">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <ScrollReveal>
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-navy">
                Academic Intelligence Platform
              </p>
              <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Every student deserves more than a score.
              </h1>
              <p className="mb-8 text-lg leading-8 text-slate-600">
                Cavalaid is an intelligence layer over your existing coaching
                workflow. It detects patterns, summarizes, organizes, and explains
                — so teachers can mentor better and institutes can decide with
                clarity.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-navy px-6 py-3.5 text-base font-medium text-white transition-colors hover:bg-navy-dark focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
                >
                  Request a Pilot
                </a>
                <a
                  href="/product"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-6 py-3.5 text-base font-medium text-slate-700 transition-colors hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
                >
                  Explore Product
                </a>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <div className="flex justify-center">
              <MockupHero />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function MockupHero() {
  return (
    <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white shadow-lg">
      <div className="flex items-center gap-2 border-b border-slate-200 px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-status-red/80" />
          <div className="h-3 w-3 rounded-full bg-status-orange/80" />
          <div className="h-3 w-3 rounded-full bg-status-green/80" />
        </div>
        <div className="ml-3 flex-1 rounded-md border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-400">
          app.cavalaid.com/dashboard
        </div>
      </div>
      <div className="p-5">
        <div className="mb-4 flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-status-green" />
          <span className="text-xs font-medium text-slate-500">Teacher Dashboard</span>
        </div>
        <div className="mb-4 h-4 w-3/4 rounded bg-slate-200" />
        <div className="mb-4 grid grid-cols-3 gap-2">
          <div className="rounded-lg bg-slate-50 p-3">
            <div className="h-2 w-12 rounded bg-slate-300" />
            <div className="mt-2 h-6 w-8 rounded bg-navy" />
            <div className="mt-1 h-2 w-16 rounded bg-slate-300" />
          </div>
          <div className="rounded-lg bg-slate-50 p-3">
            <div className="h-2 w-12 rounded bg-slate-300" />
            <div className="mt-2 h-6 w-8 rounded bg-status-orange" />
            <div className="mt-1 h-2 w-16 rounded bg-slate-300" />
          </div>
          <div className="rounded-lg bg-slate-50 p-3">
            <div className="h-2 w-12 rounded bg-slate-300" />
            <div className="mt-2 h-6 w-8 rounded bg-status-green" />
            <div className="mt-1 h-2 w-16 rounded bg-slate-300" />
          </div>
        </div>
        <div className="space-y-2">
          {["Weak topic: Calculus", "6 students flagged", "Avg confidence: 72%"].map((l, i) => (
            <div key={i} className="flex items-center gap-2 rounded bg-slate-50 px-3 py-2">
              <div className="h-2 w-2 rounded-full bg-navy" />
              <span className="text-xs text-slate-600">{l}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
