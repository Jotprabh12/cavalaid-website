import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Cta() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-24">
      <div className="absolute inset-0 opacity-10" />
      <div className="container relative text-center">
        <ScrollReveal>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to see Cavalaid in your institute?
          </h2>
          <p className="mb-8 text-lg text-slate-300">
            Join a pilot. No revenue until validation works.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3.5 text-base font-medium text-navy transition-colors hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          >
            Request a Pilot
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
