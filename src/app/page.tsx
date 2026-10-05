import Link from "next/link";

const icons = {
  arrow: <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4"><path d="M4 10h11M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  check: <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4"><path d="m4 10 3.2 3.2L16 4.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
};

const outcomes = [
  ["Understand learning, not just results", "Bring test performance, topic patterns and student reflections together to reveal the story behind a score."],
  ["Support timely teaching decisions", "Help teachers identify the topics and learners that deserve focused support before the next academic conversation."],
  ["Improve the learning experience", "Give students clearer feedback, more relevant guidance and a better understanding of their own progress."],
];

const capabilities = [
  ["Assessment intelligence", "Move beyond total marks to understand topic performance, question attempt patterns and common mistakes."],
  ["Topic-level understanding", "Link questions to topics so every test cycle adds to a clearer picture of where learning needs support."],
  ["Student reflection", "Capture a learner’s confidence, understanding and approach while the assessment experience is still fresh."],
  ["Explainable insights", "Present every insight with its finding, evidence, reasoning and level of confidence."],
  ["Teacher action", "Give teachers a practical starting point for a more focused doubt session, review or intervention."],
  ["Continuous learning", "Use every cycle to understand what works, improve the academic workflow and strengthen the student experience."],
];

export default function Home() {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-navy">Skip to content</a>

      <section className="relative isolate overflow-hidden bg-[#081b33] pb-20 pt-16 text-white sm:pb-28 sm:pt-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -right-32 -top-44 h-[36rem] w-[36rem] rounded-full bg-cyan-400/15 blur-3xl" />
          <div className="absolute -bottom-48 left-1/4 h-[28rem] w-[28rem] rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.45)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.45)_1px,transparent_1px)] [background-size:64px_64px]" />
        </div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
            <div className="max-w-2xl">
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-white/10 px-3.5 py-1.5 text-sm font-medium text-cyan-100"><span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />An intelligence layer for coaching institutes</p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-6xl">Cavalaid is the missing layer between academic data and student growth.</h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">Cavalaid turns assessment data and student reflection into clear, explainable insight—helping teachers understand learning more deeply and create better experiences for every student.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-300 px-6 py-3.5 font-semibold text-[#08203b] transition hover:bg-cyan-200">Request a walkthrough {icons.arrow}</Link>
                <Link href="/product" className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10">Explore the platform</Link>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
                {["Designed around real academic workflows", "Teacher judgement remains central", "Built to strengthen the student experience"].map((item) => <span key={item} className="flex items-center gap-2"><span className="text-cyan-300">{icons.check}</span>{item}</span>)}
              </div>
            </div>
            <DashboardPreview />
          </div>
        </div>
      </section>

      <section className="bg-[#f7fafc] py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl"><p className="eyebrow">The Cavalaid objective</p><h2 className="section-title">A clearer view of learning. A better experience for every student.</h2><p className="section-copy">Cavalaid is built to make learning more visible. It connects the signals around an assessment, helps teachers understand what they mean, and supports more timely, relevant guidance for students.</p></div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {outcomes.map(([title, copy], index) => <article key={title} className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><span className="mb-8 flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8f8fa] font-semibold text-cyan-700">0{index + 1}</span><h3 className="text-xl font-semibold tracking-tight text-slate-900">{title}</h3><p className="mt-3 leading-7 text-slate-600">{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container mx-auto grid gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8">
          <div className="rounded-3xl bg-[#eaf7f8] p-6 sm:p-10"><div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-cyan-950/10"><div className="flex items-center justify-between border-b border-slate-100 pb-4"><div><p className="text-xs font-medium uppercase tracking-wider text-slate-400">Academic overview</p><p className="mt-1 text-lg font-semibold text-slate-900">Physics · Batch A</p></div><span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">On track</span></div><div className="mt-5 grid grid-cols-3 gap-3"><Metric label="Concept clarity" value="74%" tone="bg-cyan-500" /><Metric label="Attention needed" value="06" tone="bg-amber-400" /><Metric label="Reflections" value="82%" tone="bg-emerald-500" /></div><div className="mt-5 rounded-xl bg-slate-50 p-4"><div className="flex items-center justify-between"><p className="font-medium text-slate-800">Topic attention</p><p className="text-xs font-medium text-cyan-700">View evidence →</p></div><div className="mt-4 space-y-3"><Bar label="Electrostatics" width="82%" /><Bar label="Current electricity" width="63%" /><Bar label="Magnetism" width="38%" warn /></div></div></div></div>
          <div><p className="eyebrow">The learning intelligence layer</p><h2 className="section-title">Turn the learning journey into a shared understanding.</h2><p className="section-copy">Cavalaid brings together test results, topic patterns and reflection so the people supporting a learner can see more than their marks. They can see where understanding is strong, where support is needed and what to do next.</p><ul className="mt-7 space-y-4">{["Students gain a clearer view of their strengths, gaps and next steps", "Teachers prepare more relevant academic conversations", "Academic leaders identify where the learning experience can improve"].map((item) => <li key={item} className="flex gap-3 text-slate-700"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-cyan-700">{icons.check}</span>{item}</li>)}</ul><Link href="/product" className="mt-8 inline-flex items-center gap-2 font-semibold text-[#0c6071] hover:text-[#083f4a]">Explore the intelligence layer {icons.arrow}</Link></div>
        </div>
      </section>

      <section className="bg-[#081b33] py-20 text-white sm:py-28"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-2xl"><p className="eyebrow text-cyan-300">How Cavalaid helps</p><h2 className="section-title section-title-on-dark">An intelligence layer built around how students learn.</h2><p className="section-copy section-copy-on-dark">Cavalaid adds context to the academic information institutes already collect. It helps transform that context into clearer support for students and more confident decisions for the teachers guiding them.</p></div><div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">{capabilities.map(([title, copy], i) => <article key={title} className="bg-[#0b213b] p-7 transition hover:bg-[#102b49]"><span className="mb-6 flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-300/10 text-sm font-semibold text-cyan-300">0{i + 1}</span><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{copy}</p></article>)}</div></div></section>

      <section className="py-20 sm:py-28"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="rounded-3xl bg-[#e8f8fa] px-6 py-14 text-center sm:px-12 sm:py-20"><p className="eyebrow">See the difference clarity can make</p><h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Build a better learning experience, one insight at a time.</h2><p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-600">Tell us how your academic team works today. Together, we can explore where clearer learning intelligence can make the greatest difference for your students.</p><Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#0b5f70] px-6 py-3.5 font-semibold text-white transition hover:bg-[#084a57]">Request a walkthrough {icons.arrow}</Link></div></div></section>
    </>
  );
}

function DashboardPreview() {
  return <div className="relative mx-auto w-full max-w-xl"><div className="absolute -inset-4 rounded-[2rem] bg-cyan-300/10 blur-2xl" /><div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white p-3 text-slate-900 shadow-2xl shadow-black/30"><div className="flex items-center gap-2 border-b border-slate-100 px-2 pb-3"><span className="h-2 w-2 rounded-full bg-rose-400" /><span className="h-2 w-2 rounded-full bg-amber-300" /><span className="h-2 w-2 rounded-full bg-emerald-400" /><span className="ml-2 text-[10px] font-medium text-slate-400">Cavalaid / Academic intelligence</span></div><div className="grid gap-3 p-2 sm:grid-cols-[.65fr_1.35fr]"><aside className="rounded-xl bg-slate-50 p-3"><p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Today</p><p className="mt-2 text-sm font-semibold">Good morning, Ananya</p><div className="mt-5 space-y-3">{["Overview", "Learners", "Assessments", "Reflections"].map((x, i) => <div className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-xs ${i === 0 ? "bg-white font-semibold text-cyan-700 shadow-sm" : "text-slate-500"}`} key={x}><span className="h-1.5 w-1.5 rounded-full bg-current" />{x}</div>)}</div></aside><div className="p-2"><div className="flex justify-between"><div><p className="text-[10px] text-slate-400">Teacher view</p><p className="text-sm font-semibold">Your batch, at a glance</p></div><span className="rounded bg-cyan-50 px-2 py-1 text-[10px] font-semibold text-cyan-700">This week</span></div><div className="mt-4 grid grid-cols-3 gap-2"><Metric label="Active learners" value="126" tone="bg-cyan-500" /><Metric label="Need review" value="08" tone="bg-amber-400" /><Metric label="On track" value="91%" tone="bg-emerald-500" /></div><div className="mt-3 rounded-lg border border-slate-100 p-3"><p className="text-xs font-semibold">Signals worth your attention</p>{["Concept confidence shifted in Calculus", "Reflection pattern suggests follow-up", "Three learners ready for a challenge"].map((x, i) => <div key={x} className="mt-2 flex items-center gap-2 text-[10px] text-slate-600"><span className={`h-1.5 w-1.5 rounded-full ${i === 0 ? "bg-amber-400" : "bg-cyan-500"}`} />{x}</div>)}</div></div></div></div></div>;
}

function Metric({ label, value, tone }: { label: string; value: string; tone: string }) { return <div className="rounded-lg bg-slate-50 p-2.5"><span className={`mb-2 block h-1.5 w-8 rounded-full ${tone}`} /><p className="text-[9px] text-slate-500">{label}</p><p className="mt-0.5 text-sm font-semibold text-slate-800">{value}</p></div>; }
function Bar({ label, width, warn = false }: { label: string; width: string; warn?: boolean }) { return <div><div className="flex justify-between text-[10px] text-slate-500"><span>{label}</span><span>{width}</span></div><div className="mt-1 h-1.5 overflow-hidden rounded-full bg-slate-200"><div className={`h-full rounded-full ${warn ? "bg-amber-400" : "bg-cyan-500"}`} style={{ width }} /></div></div>; }
