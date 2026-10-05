import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#081b33] text-slate-400">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="sm:col-span-2 md:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <Image src="/logoss.svg" alt="Cavalaid" width={24} height={24} className="h-6 w-6" />
              <span className="font-bold text-white">Cavalaid</span>
            </div>
            <p className="text-sm text-slate-400">
              Explainable academic insights for coaching institutes.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Explore</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="/product" className="transition-colors hover:text-white">Platform overview</a></li>
              <li><a href="/product" className="transition-colors hover:text-white">Test data and topics</a></li>
              <li><a href="/product" className="transition-colors hover:text-white">Student reflection</a></li>
              <li><a href="/product" className="transition-colors hover:text-white">Explainable insights</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="/about" className="transition-colors hover:text-white">About</a></li>
              <li><a href="/pilot" className="transition-colors hover:text-white">Pilot Program</a></li>
              <li><a href="/contact" className="transition-colors hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div><h4 className="mb-3 text-sm font-semibold text-white">Get started</h4><p className="text-sm leading-6 text-slate-400">Start with one academic workflow and learn what genuinely helps your team.</p><a href="/contact" className="mt-3 inline-block text-sm font-semibold text-cyan-300 transition hover:text-white">Request a walkthrough →</a></div>
        </div>
        <div className="mt-8 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Cavalaid. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
