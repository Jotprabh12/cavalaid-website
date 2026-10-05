import Link from "next/link";

const check = <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4"><path d="m4 10 3.2 3.2L16 4.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
const arrow = <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4"><path d="M4 10h11M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;

const principles = [
  {
    title: "Learning is richer than a score",
    description:
      "A mark is a moment. Real support comes from seeing the habits, confidence and concepts behind it.",
    proof: "When a student scores 72%, Cavalaid shows: they spent 3x more time on calculus vs algebra, their reflection noted 'concept not clicking', and revision attempts dropped after test 2.",
  },
  {
    title: "Insight must earn trust",
    description:
      "Recommendations should be easy to interrogate. Cavalaid makes the evidence visible—not hidden behind a black box.",
    proof:
      "Every flag follows Finding → Evidence → Reason → Confidence. Example: 'Electrostatics confidence dip' shows the 3 questions, the student's reflection, time patterns, and a 78% confidence score.",
  },
  {
    title: "Technology should respect the classroom",
    description:
      "Our job is to remove friction around good teaching, never to prescribe what great teachers already know.",
    proof:
      "Teachers get a 90-second morning briefing, not another dashboard. No forced workflows—Cavalaid plugs into existing test tools, Excel, and Google Sheets.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero overflow-hidden py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -right-32 -top-44 h-[36rem] w-[36rem] rounded-full bg-cyan-400/15 blur-3xl" />
          <div className="absolute -bottom-48 left-1/4 h-[28rem] w-[28rem] rounded-full bg-indigo-500/10 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
            <div>
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200/30 bg-white px-3.5 py-1.5 text-sm font-medium text-[#0b7285]"><span className="h-1.5 w-1.5 rounded-full bg-[#0b7285]" />Why Cavalaid</p>
              <h1 className="section-title">Better academic decisions start with better context.</h1>
              <p className="section-copy mt-4">Coaching teams already hold valuable information about learning. Cavalaid helps turn question-level test results and student reflection into clear, explainable context for the teachers supporting students.</p>
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
                {["Built from firsthand coaching institute experience", "Teacher judgement remains central", "Designed for real academic workflows"].map((item) => <span key={item} className="flex items-center gap-2"><span className="text-[#0b7285]">{check}</span>{item}</span>)}
              </div>
            </div>
            <div className="rounded-2xl border border-cyan-brand/10 bg-white/80 p-6 shadow-xl shadow-cyan-brand/5">
              <p className="text-sm font-medium text-cyan-brand">Our belief</p>
              <p className="mt-3 text-xl font-medium leading-8 tracking-tight text-slate-800">When teachers can see the evidence behind a learning pattern, they can make more thoughtful decisions about what to do next.</p>
            </div>
          </div>
        </div>
      </section>

<section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-4 rounded-[2rem] bg-cyan-300/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-cyan-950/10">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Cavalaid</p>
                    <p className="mt-1 text-lg font-semibold text-slate-900">Coaching insight</p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">Live</span>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  <div className="rounded-lg bg-slate-50 p-3"><span className="block h-1.5 w-8 rounded-full bg-cyan-500" /><p className="mt-2 text-sm font-semibold text-slate-800">248</p><p className="mt-0.5 text-[10px] text-slate-500">Students</p></div>
                  <div className="rounded-lg bg-slate-50 p-3"><span className="block h-1.5 w-8 rounded-full bg-amber-400" /><p className="mt-2 text-sm font-semibold text-slate-800">12</p><p className="mt-0.5 text-[10px] text-slate-500">Flagged</p></div>
                  <div className="rounded-lg bg-slate-50 p-3"><span className="block h-1.5 w-8 rounded-full bg-emerald-500" /><p className="mt-2 text-sm font-semibold text-slate-800">94%</p><p className="mt-0.5 text-[10px] text-slate-500">On track</p></div>
                </div>
                <div className="mt-4 rounded-xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between"><p className="font-medium text-slate-800">Topic progress</p><p className="text-xs font-medium text-cyan-700">View evidence →</p></div>
                  <div className="mt-3 space-y-2">
                    <div><div className="flex justify-between text-[10px] text-slate-500"><span>Electrostatics</span><span>82%</span></div><div className="mt-1 h-1.5 overflow-hidden rounded-full bg-slate-200"><div className="h-full rounded-full bg-cyan-500" style={{ width: "82%" }} /></div></div>
                    <div><div className="flex justify-between text-[10px] text-slate-500"><span>Current electricity</span><span>63%</span></div><div className="mt-1 h-1.5 overflow-hidden rounded-full bg-slate-200"><div className="h-full rounded-full bg-cyan-500" style={{ width: "63%" }} /></div></div>
                    <div><div className="flex justify-between text-[10px] text-slate-500"><span>Magnetism</span><span>38%</span></div><div className="mt-1 h-1.5 overflow-hidden rounded-full bg-slate-200"><div className="h-full rounded-full bg-amber-400" style={{ width: "38%" }} /></div></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="eyebrow">Why us</p>
              <h2 className="section-title">Built by people who understand the coaching institute reality.</h2>
              <p className="section-copy mt-4">
                We are former JEE students who studied at coaching institutes — and we cleared the exam.
                That experience gives us firsthand understanding of the pressures students face and the
                systems that surround them. We know the coaching environment because we lived inside it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7fafc] py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#e8f8fa] text-sm font-semibold text-[#0b7285]">01</span>
              <h3 className="mt-8 text-xl font-semibold tracking-tight text-slate-900">We know the student struggle</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Having navigated the JEE process ourselves, we understand that a student's performance is
                shaped by far more than a single test. The pressure, the pattern gaps, the moments of
                doubt — we have felt them all, and we built Cavalaid to surface what matters most.
              </p>
            </article>
            <article className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#e8f8fa] text-sm font-semibold text-[#0b7285]">02</span>
              <h3 className="mt-8 text-xl font-semibold tracking-tight text-slate-900">We know what teachers face</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Teachers juggle multiple batches simultaneously, making it nearly impossible to give
                every student the personalized attention they deserve. Cavalaid provides teachers with
                the individual-level data they need — so they can understand each learner's gaps and
                step in with exactly the right support, at exactly the right time.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#f7fafc] py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="eyebrow">What guides us</p>
            <h2 className="section-title">Built around the realities of teaching and learning.</h2>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {principles.map((principle, i) => (
              <article
                key={principle.title}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#e8f8fa] text-sm font-semibold text-[#0b7285]">
                  0{i + 1}
                </span>
                <h3 className="mt-8 text-xl font-semibold tracking-tight text-slate-900">
                  {principle.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{principle.description}</p>
                <div className="mt-4 rounded-lg bg-slate-50 border border-slate-100 p-4">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    How this shows up in Cavalaid
                  </p>
                  <p className="mt-2 text-sm text-slate-600">{principle.proof}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#081b33] py-20 text-white sm:py-28">
        <div className="container mx-auto grid gap-12 px-4 sm:px-6 lg:px-8 lg:gap-20 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <p className="eyebrow text-cyan-300">The standard we hold</p>
<h2 className="section-title section-title-on-dark">
               Useful enough for a busy day. Thoughtful enough for a learner's future.
             </h2>
             <p className="section-copy-on-dark mt-4">
               We hold ourselves to a standard that is practical for educators in their busiest moments and meaningful for the students they serve.
             </p>
          </div>
          <div className="space-y-5">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="font-semibold">For students</p>
              <p className="mt-2 leading-7 text-slate-300">
                Progress that feels understandable, encouraging and connected to what they can do next.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="font-semibold">For teachers</p>
              <p className="mt-2 leading-7 text-slate-300">
                A clearer starting point for mentoring, without asking for more reporting or less
                professional judgement.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="font-semibold">For academic leaders</p>
              <p className="mt-2 leading-7 text-slate-300">
                A connected view of what is working, where attention is needed, and how to improve the
                system around learners.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e8f8fa] py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white px-6 py-14 text-center sm:px-12 sm:py-20">
            <p className="eyebrow">See the approach in practice</p>
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Start with the workflow you have today.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-600">
              We work with your existing academic rhythm to uncover the decisions that matter most.
            </p>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#0b5f70] px-6 py-3.5 font-semibold text-white transition hover:bg-[#084a57]">
              Talk to our team {arrow}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
