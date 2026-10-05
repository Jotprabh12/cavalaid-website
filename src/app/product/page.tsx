import Link from "next/link";

const layers = [
  [
    "See beyond the score",
    "Bring together question-level test performance, topic patterns and reflections to understand what a mark alone cannot show.",
  ],
  [
    "Understand the learner",
    "Build a clearer picture of where understanding is strong, where a learner is struggling and what may be getting in the way.",
  ],
  [
    "Guide the next step",
    "Give teachers meaningful context for more relevant teaching support and academic decisions.",
  ],
];

const views = [
  [
    "Teachers",
    "See the learning patterns behind performance and enter each academic conversation with clearer context.",
  ],
  [
    "Students",
    "Understand strengths, gaps and next steps through feedback that feels relevant to their learning journey.",
  ],
  [
    "Academic leaders",
    "See where the learning experience can improve and support the systems around teachers and students.",
  ],
];

const insightFlow = [
  {
    step: "What changed",
    detail: "Accuracy in electrostatics fell in the latest test (68% → 54%).",
  },
  {
    step: "What the evidence shows",
    detail:
      "The pattern appears across 4 mapped questions, the student's reflection noted 'concept not clicking', and revision time dropped 40%.",
  },
  {
    step: "What to explore next",
    detail:
      "Use the next doubt session to revisit the underlying concept and check understanding with a targeted mini-assessment.",
  },
];

export default function ProductPage() {
  return (
    <>
      <section className="page-hero overflow-hidden py-20 sm:py-28">
        <div className="container mx-auto grid gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-8">
          <div>
            <p className="eyebrow">The Cavalaid intelligence layer</p>
            <h1 className="section-title max-w-3xl">
              A clearer understanding of learning, leads to better student experiences.
            </h1>
            <p className="section-copy">
              Cavalaid transforms academic data into a fuller picture of each learner. It helps coaching
              teams see the patterns behind performance, understand what students need and respond with
              more relevant support.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-lg bg-[#0b5f70] px-6 py-3.5 font-semibold text-white transition hover:bg-[#084a57]"
              >
                Request a walkthrough
              </Link>
              <Link
                href="/pilot"
                className="rounded-lg border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-cyan-700 hover:text-cyan-800"
              >
                Explore a pilot
              </Link>
            </div>
          </div>
          <ProductPanel />
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="eyebrow">From signals to support</p>
            <h2 className="section-title">
              Make the learning journey easier to understand—and easier to improve.
            </h2>
            <p className="section-copy">
              Cavalaid connects the information around learning and turns it into practical context for the
              people supporting students every day.
            </p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {layers.map(([title, copy], i) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-brand/10 text-sm font-semibold text-cyan-brand">
                  0{i + 1}
                </span>
                <h3 className="mt-8 text-xl font-semibold tracking-tight text-slate-900">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#081b33] py-20 text-white sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="eyebrow text-cyan-300">A shared understanding of learning</p>
            <h2 className="section-title section-title-on-dark">
              Clearer context for everyone shaping a student's journey.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {views.map(([title, copy]) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-white/5 p-7">
                <p className="text-sm font-semibold text-cyan-300">For {title.toLowerCase()}</p>
                <h3 className="mt-7 text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container mx-auto grid gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8">
          <div className="rounded-3xl bg-cyan-brand/5 p-7 sm:p-10">
            <p className="text-sm font-semibold text-cyan-brand">Every insight tells a story</p>
            <div className="mt-6 space-y-3">
              {insightFlow.map((item) => (
                <div key={item.step} className="rounded-xl bg-white p-4 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">{item.step}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow">Explainable by design</p>
            <h2 className="section-title">
              Insight that gives teachers context, not just another alert.
            </h2>
            <p className="section-copy">
              Cavalaid makes the reasoning behind each learning pattern visible. Teachers can understand
              what changed, review the supporting evidence and use their judgement to decide the right
              next step for each individual.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function ProductPanel() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -inset-4 rounded-[2rem] bg-cyan-brand/10 blur-2xl" />
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl shadow-cyan-brand/10">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <p className="text-xs font-medium text-slate-400">Academic pulse</p>
            <p className="mt-1 font-semibold text-slate-900">Grade 12 · Physics</p>
          </div>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            Steady
          </span>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            ["Learners", "126"],
            ["Need attention", "08"],
            ["Reflections", "82%"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl bg-slate-50 p-3">
              <p className="text-[10px] text-slate-500">{label}</p>
              <p className="mt-1 text-lg font-semibold text-slate-800">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl bg-[#081b33] p-4 text-white">
          <p className="text-xs font-semibold text-cyan-300">A signal to review</p>
          <p className="mt-2 text-sm font-medium">Concept confidence has dipped in electrostatics.</p>
          <p className="mt-2 text-xs leading-5 text-slate-300">
            See the assessment, revision and reflection patterns behind this change.
          </p>
        </div>
      </div>
    </div>
  );
}