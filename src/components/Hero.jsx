import Link from "next/link";
import { MessageCircle, Play, CheckCircle2, Zap, ArrowUpRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden atomato-mesh-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Top Centered Content */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
          
          {/* Atomato-Style Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-6 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>• POS & OPERATIONS PLATFORM FOR MODERN LAUNDRIES</span>
          </div>

          {/* Atomato-Style Bold Headline with Highlighted Gradient */}
          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-slate-900 tracking-tight leading-[1.15] mb-6">
            Run your laundry with <br className="hidden sm:inline" />
            <span className="atomato-gradient-text">15s checkout & zero headaches</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl font-normal">
            The complete cloud POS designed by experienced laundry operators. Featuring automated WhatsApp receipts, flexible member discounts, multi-branch control, and <strong>100% free white-glove setup assistance</strong>.
          </p>

          {/* Dual Action Pill Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto mb-10">
            <a
              href="https://wa.me/6281996307784?text=Hello%20Jipo%20POS%20Team,%20I%20want%20help%20setting%20up%20my%20laundry%20app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:shadow-[0_0_35px_rgba(16,185,129,0.5)] transition-all active:scale-95 btn-glow"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Book Free Concierge Setup</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <Link
              href="/demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white border border-slate-300 hover:border-emerald-500 text-slate-800 hover:text-emerald-700 font-semibold text-sm shadow-xs hover:shadow-md transition-all active:scale-95"
            >
              <Play className="w-4 h-4 text-emerald-600 fill-emerald-600" />
              <span>Try Interactive Demo</span>
            </Link>
          </div>

          {/* Social Proof & Guarantee Pill Bar */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 py-2 px-5 rounded-full bg-white/80 border border-slate-200/80 shadow-2xs text-xs text-slate-600 mb-12 font-medium">
            <div className="flex items-center gap-1 text-amber-500 font-semibold">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-slate-800 ml-1">5.0 / 5.0 Rating</span>
            </div>
            <span className="hidden sm:inline text-slate-300">•</span>
            <div className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Free Initial Price List Setup</span>
            </div>
            <span className="hidden sm:inline text-slate-300">•</span>
            <div className="flex items-center gap-1.5 font-medium">
              <Zap className="w-3.5 h-3.5 text-emerald-600" />
              <span>No Hardware Lock-in</span>
            </div>
          </div>
        </div>

        {/* Atomato-Style Layered Hero Bento Display */}
        <div className="relative rounded-3xl bg-gradient-to-b from-slate-100/90 to-slate-200/50 p-3 sm:p-5 border border-slate-200/90 shadow-2xl shadow-slate-300/40">
          
          {/* Top Window Bar */}
          <div className="flex items-center justify-between px-3 py-2 bg-white/90 rounded-2xl border border-slate-200/80 mb-3 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="ml-2 font-mono text-[11px] text-slate-400">app.jipopos.com/pos/station-01</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live Cashier & WhatsApp Gateway Sync
            </div>
          </div>

          {/* Bento Preview Grid Inside Hero */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5">
            
            {/* Bento Card 1: Fast POS Order Input */}
            <div className="md:col-span-7 bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                  <div>
                    <span className="text-[10px] font-semibold uppercase text-emerald-700 tracking-wider">Fast Checkout Engine</span>
                    <h3 className="font-bold text-sm text-slate-900">3-Click Laundry Dropoff</h3>
                  </div>
                  <span className="bg-slate-100 text-slate-700 text-[10px] font-semibold px-2.5 py-1 rounded-full">
                    15s / Transaction
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 flex items-center justify-between">
                    <div className="text-xs font-semibold text-slate-800">👕 Wash & Iron (4kg)</div>
                    <span className="text-xs font-bold text-emerald-700">Rp 32.000</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 flex items-center justify-between">
                    <div className="text-xs font-semibold text-slate-800">🛏️ King Bed Cover</div>
                    <span className="text-xs font-bold text-emerald-700">Rp 30.000</span>
                  </div>
                </div>
              </div>

              {/* Promo & Terms pill tags */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="flex gap-1.5">
                  <span className="bg-amber-50 text-amber-800 border border-amber-200 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                    VIP Member (-10%)
                  </span>
                  <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                    50% DP Accepted
                  </span>
                </div>
                <div className="font-bold text-slate-900 text-sm">
                  Total: <span className="text-emerald-700">Rp 55.800</span>
                </div>
              </div>
            </div>

            {/* Bento Card 2: Live WhatsApp Receipt Notification */}
            <div className="md:col-span-5 bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-2xl p-5 border border-slate-800 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-2.5 border-b border-white/10 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xs">
                      💬
                    </div>
                    <span className="text-xs font-bold text-white">Instant WhatsApp Receipt</span>
                  </div>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-semibold px-2 py-0.5 rounded-full">
                    Auto-Sent
                  </span>
                </div>

                <div className="bg-white/10 rounded-xl p-3 text-[11px] space-y-1 text-slate-200 border border-white/10">
                  <p className="font-bold text-emerald-300">🧺 Laundry Order #JP-2026-091</p>
                  <p className="text-slate-300 text-[10px]">Customer: Maya Pratiwi (Paid in Full)</p>
                  <p className="text-slate-400 text-[10px]">Est. Ready: Tomorrow, 4:00 PM</p>
                </div>
              </div>

              <div className="pt-2 text-[10px] text-slate-400 flex items-center justify-between">
                <span>✓✓ Delivered in 1.2s</span>
                <span className="text-emerald-400 font-medium">99.4% Read Rate</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
