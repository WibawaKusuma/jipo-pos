import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Play, CheckCircle2, Zap, ArrowUpRight, Star, ShieldCheck, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-6 pb-16 md:pt-10 md:pb-24 overflow-hidden bg-subtle-grid">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Split Grid Hero: Left Copy, Right Authentic Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT: Copy & CTA */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Grounded Category Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span>Modern POS &amp; Operations for Laundromats</span>
            </div>

            {/* Authoritative B2B Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-slate-900 tracking-tight leading-[1.15] mb-5">
              Run your laundry operations with <span className="text-emerald-700">speed, clarity &amp; zero chaos.</span>
            </h1>

            {/* Grounded Subtitle */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 font-normal">
              Built specifically for wash &amp; fold, dry cleaning, sneaker care, and multi-branch chains. Enjoy 15-second customer checkout, automated WhatsApp receipts, and <strong>100% white-glove setup assistance</strong> by our team.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8">
              <a
                href="https://wa.me/6281996307784?text=Hello%20Jipo%20POS%20Team,%20I%20want%20help%20setting%20up%20my%20laundry%20app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs sm:text-sm shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book Free Concierge Setup</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-semibold text-xs sm:text-sm shadow-2xs hover:bg-slate-50 transition-all active:scale-95"
              >
                <Play className="w-3.5 h-3.5 text-emerald-700 fill-emerald-700" />
                <span>Try Live Demo</span>
              </Link>
            </div>

            {/* Trust Markers */}
            <div className="pt-6 border-t border-slate-200/80 w-full flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-1 text-amber-500">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-slate-800 ml-1 font-semibold">5.0 / 5.0</span>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                <span>Free Initial Price List Setup</span>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-emerald-700" />
                <span>Runs on Any Phone/Tablet</span>
              </div>
            </div>

          </div>

          {/* RIGHT: Real Commercial Photography with Floating Micro-UI Badges */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-900/5 bg-slate-100">
              <img
                src="/images/hero_laundry_pos.jpg"
                alt="Modern Jipo POS laundry counter with tablet stand and organized clean linen"
                className="w-full h-auto object-cover transform hover:scale-[1.01] transition-transform duration-500"
              />

              {/* Subtle Gradient Vignette at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Floating Badge 1: 15s Fast Checkout */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-2.5 sm:p-3 border border-slate-200/80 shadow-md flex items-center gap-2.5 sm:gap-3 max-w-[190px] sm:max-w-none">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0">
                  ⚡
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-semibold text-slate-900 leading-tight">15s Customer Checkout</div>
                  <div className="text-[9px] sm:text-[10px] text-slate-500 font-normal">3-tap drop-off &amp; barcode tag</div>
                </div>
              </div>

              {/* Floating Badge 2: Real-time WhatsApp Notification */}
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-slate-900/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-2.5 sm:p-3 border border-slate-800 text-white shadow-lg flex items-center gap-2.5 sm:gap-3 max-w-[210px] sm:max-w-[280px]">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center font-bold text-xs shrink-0">
                  💬
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] sm:text-xs font-semibold text-white leading-tight truncate">WhatsApp Receipt Sent</div>
                  <div className="text-[9px] sm:text-[10px] text-slate-300 font-normal truncate">Auto-dispatched with shelf slot #03</div>
                </div>
              </div>
            </div>

            {/* Micro Caption */}
            <div className="mt-3 text-center lg:text-left">
              <span className="text-[11px] text-slate-500 font-normal">
                ✓ Commercial cloud POS deployed across single-store laundromats &amp; 10+ branch chains.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
