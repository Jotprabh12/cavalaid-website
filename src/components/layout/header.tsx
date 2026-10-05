"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/logoss.svg" alt="Cavalaid" width={32} height={32} className="h-8 w-8" />
          <span className="text-xl font-bold text-navy">Cavalaid</span>
        </Link>
        <nav className="hidden items-center gap-1 text-sm font-medium text-slate-600 md:flex">
          <Link href="/product" className="rounded-md px-3 py-2 transition-colors hover:text-navy hover:bg-slate-50">Product</Link>
          <Link href="/pilot" className="rounded-md px-3 py-2 transition-colors hover:text-navy hover:bg-slate-50">Pilot</Link>
          <Link href="/about" className="rounded-md px-3 py-2 transition-colors hover:text-navy hover:bg-slate-50">About</Link>
          <Link
            href="/contact"
            className="ml-2 rounded-lg bg-navy px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-navy-dark focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
          >
            Request a Pilot
          </Link>
        </nav>
        <button
          className="rounded-md p-2 text-slate-600 hover:bg-slate-100 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white px-4 pb-4 pt-2 md:hidden">
          <nav className="flex flex-col gap-1">
            <Link href="/product" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-navy">Product</Link>
            <Link href="/pilot" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-navy">Pilot</Link>
            <Link href="/about" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-navy">About</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="mt-1 rounded-lg bg-navy px-4 py-2 text-center text-sm font-medium text-white">Request a Pilot</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
