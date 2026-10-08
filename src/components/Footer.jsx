import Link from "next/link";
import { Sparkles, MessageCircle, Mail, MapPin, ArrowUpRight } from "lucide-react";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-[#09090B] text-slate-400 pt-16 pb-12 border-t border-slate-800 atomato-grid-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <Link href="/" className="group inline-flex items-center mb-4">
              <Logo variant="light" size="md" />
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed mb-6 font-normal max-w-sm">
              Modern cloud POS &amp; operations system designed by laundry operators to eliminate manual bottlenecks and scale stores effortlessly.
            </p>
            <div className="inline-flex items-center gap-2 text-[11px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              100% Free Concierge Setup &amp; Training
            </div>
          </div>

          {/* Features Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">Core Modules</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/features" className="hover:text-emerald-400 transition-colors">
                  15s Fast POS &amp; Dropoff
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-emerald-400 transition-colors">
                  Automated WhatsApp Gateway
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-emerald-400 transition-colors">
                  Smart Discount &amp; Promo Engine
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-emerald-400 transition-colors">
                  Prepaid Kilo Packages &amp; VIP
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-emerald-400 transition-colors">
                  Sneaker &amp; Bag Specialty Care
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-emerald-400 transition-colors">
                  Multi-Branch HQ Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/features" className="hover:text-emerald-400 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/demo" className="hover:text-emerald-400 transition-colors">
                  Interactive Demo
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-emerald-400 transition-colors">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-emerald-400 transition-colors">
                  FAQ &amp; Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">Direct Concierge</h4>
            <div className="space-y-3 text-xs">
              <a
                href="https://wa.me/6281996307784?text=Hello%20Jipo%20POS%20Team,%20I%20want%20to%20consult%20and%20get%20started"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors bg-slate-900/80 p-2.5 rounded-xl border border-slate-800"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-semibold">+62 819-9630-7784</span>
              </a>

              <a
                href="mailto:jipoinfo@gmail.com"
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors bg-slate-900/80 p-2.5 rounded-xl border border-slate-800"
              >
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>jipoinfo@gmail.com</span>
              </a>

              <div className="flex items-center gap-2 text-slate-400 text-[11px] px-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Jakarta, Indonesia • Worldwide Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>&copy; 2026 Jipo POS. All rights reserved. Empowering modern laundries worldwide.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
