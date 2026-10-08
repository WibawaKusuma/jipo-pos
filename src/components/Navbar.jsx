"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, Play, MessageCircle, Menu, X, ArrowUpRight } from "lucide-react";

import Logo from "@/components/Logo";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-3 sm:top-4 z-50 px-4 sm:px-6 max-w-6xl mx-auto w-full">
      <div className="bg-white/85 backdrop-blur-xl border border-slate-200/90 shadow-lg shadow-slate-900/5 rounded-full px-4 sm:px-6 py-2 flex items-center justify-between transition-all">
        {/* Brand Logo */}
        <Link href="/" className="group inline-flex items-center">
          <Logo variant="dark" size="md" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7">
          <Link href="/features" className="text-xs font-medium text-slate-600 hover:text-emerald-700 transition-colors">
            Features
          </Link>
          <Link href="/demo" className="text-xs font-medium text-slate-600 hover:text-emerald-700 transition-colors">
            Live Demo
          </Link>
          <Link href="/pricing" className="text-xs font-medium text-slate-600 hover:text-emerald-700 transition-colors">
            Pricing Plans
          </Link>
          <Link href="/faq" className="text-xs font-medium text-slate-600 hover:text-emerald-700 transition-colors">
            FAQ
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          <Link
            href="/demo"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-2xs"
          >
            <Play className="w-3 h-3 text-emerald-600 fill-emerald-600" />
            Try Demo
          </Link>
          <a
            href="https://wa.me/6281996307784?text=Hello%20Jipo%20POS%20Team,%20I%20want%20to%20consult%20and%20claim%20free%20setup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all active:scale-95 btn-glow"
          >
            <span>Book Free Setup</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-full text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-5 shadow-2xl transition-all animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3">
            <Link
              href="/features"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-700 hover:text-emerald-600 py-1.5 px-3 rounded-xl hover:bg-slate-50"
            >
              Features
            </Link>
            <Link
              href="/demo"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-700 hover:text-emerald-600 py-1.5 px-3 rounded-xl hover:bg-slate-50"
            >
              Live Demo
            </Link>
            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-700 hover:text-emerald-600 py-1.5 px-3 rounded-xl hover:bg-slate-50"
            >
              Pricing Plans
            </Link>
            <Link
              href="/faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-700 hover:text-emerald-600 py-1.5 px-3 rounded-xl hover:bg-slate-50"
            >
              FAQ
            </Link>
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="https://wa.me/6281996307784?text=Hello%20Jipo%20POS%20Team,%20I%20want%20to%20consult%20and%20claim%20free%20setup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-emerald-600 text-white font-semibold text-xs text-center shadow-lg shadow-emerald-600/30"
              >
                <MessageCircle className="w-4 h-4" />
                Book Free Setup via WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

