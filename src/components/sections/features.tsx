import { ScrollReveal } from "@/components/ui/scroll-reveal";
import type { ReactNode } from "react";

const iconMap: Record<string, ReactNode> = {
  "Four dashboards, one purpose": (
    <svg className="h-6 w-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
  ),
  "Test intelligence": (
    <svg className="h-6 w-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>
  ),
  "90-second reflection": (
    <svg className="h-6 w-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  ),
  "Explainability": (
    <svg className="h-6 w-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></svg>
  ),
  "Flagging system": (
    <svg className="h-6 w-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>
  ),
  "Planner": (
    <svg className="h-6 w-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.171 2.25m0-4.5l5.571 3 5.571-3m-11.143-1.25L4.5 12c0 .78.437 1.5 1.11 1.746l.542.226c.325.136.685.226 1.052.226l9.246 0c.367 0 .727-.09 1.052-.226l.542-.226c.674-.246 1.11-1.002 1.11-1.746l-4.171-2.25m0 0l-1.571-1.25m0 0l1.571-1.25m1.571 1.25l-1.571 1.25m0 0l1.571 1.25M4.5 12h15" /></svg>
  ),
};

export function Features() {
  const items = [
    { title: "Four dashboards, one purpose", desc: "Student, Teacher, Mentor, and Admin — each answering one question clearly." },
    { title: "Test intelligence", desc: "Marks, time-per-question, revisit count, option switching, and guess probability — never claiming certainty." },
    { title: "90-second reflection", desc: "Replace long feedback forms. Students reflect on confidence, concept, and approach in under two minutes." },
    { title: "Explainability", desc: "Every insight follows Finding → Evidence → Reason → Confidence. No unexplained AI conclusions." },
    { title: "Flagging system", desc: "Academic, behavioural, administrative, and engagement flags at Low / Medium / High severity." },
    { title: "Planner", desc: "Monthly and weekly teacher planner with version history. Student planner for self-study tracking." },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <ScrollReveal key={item.title} delay={i < 3 ? 1 : 2}>
          <div className="hover-lift flex gap-4 rounded-lg bg-white p-6 shadow-sm">
            <div className="flex-shrink-0 rounded-lg bg-navy/10 p-2 text-navy">
              {iconMap[item.title]}
            </div>
            <div>
              <h3 className="mb-1 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.desc}</p>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
