import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { DashboardTeacher } from "@/components/demos/dashboard-teacher";
import { DashboardStudent } from "@/components/demos/dashboard-student";
import { DashboardMentor } from "@/components/demos/dashboard-mentor";

function BrowserFrame({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
      <div className="flex items-center gap-2 border-b border-slate-200 bg-gradient-to-r from-slate-50 to-slate-100 px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-status-red/80" />
          <div className="h-3 w-3 rounded-full bg-status-orange/80" />
          <div className="h-3 w-3 rounded-full bg-status-green/80" />
        </div>
        <div className="ml-3 flex-1 rounded-md border border-slate-200 bg-white px-3 py-1 text-xs text-slate-400">
          app.cavalaid.com/{title.toLowerCase()}
        </div>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

export function Mockups() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container">
        <ScrollReveal>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-navy">See it in action</p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Built for every stakeholder.</h2>
            <p className="mt-4 text-lg text-slate-600">Four dashboards, one clear purpose. Illustrative preview.</p>
          </div>
        </ScrollReveal>
        <div className="grid gap-8 lg:grid-cols-3">
          <ScrollReveal delay={1}>
            <BrowserFrame title="dashboard">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-3 w-3 rounded-full bg-navy" />
                <span className="text-sm font-semibold text-slate-700">Teacher</span>
              </div>
              <DashboardTeacher />
            </BrowserFrame>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <BrowserFrame title="dashboard">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-3 w-3 rounded-full bg-status-green" />
                <span className="text-sm font-semibold text-slate-700">Student</span>
              </div>
              <DashboardStudent />
            </BrowserFrame>
          </ScrollReveal>
          <ScrollReveal delay={3}>
            <BrowserFrame title="dashboard">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-3 w-3 rounded-full bg-status-orange" />
                <span className="text-sm font-semibold text-slate-700">Mentor</span>
              </div>
              <DashboardMentor />
            </BrowserFrame>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
