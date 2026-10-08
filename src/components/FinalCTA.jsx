import Link from "next/link";
import { MessageCircle, Play, ShieldCheck, ArrowUpRight, Sparkles } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Bento Banner Container */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 rounded-[40px] p-10 sm:p-16 text-center text-white shadow-2xl shadow-slate-900/20 relative overflow-hidden border border-slate-800">
          
          {/* Ambient Glow Bubbles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-emerald-300 text-xs font-medium uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>UPGRADE YOUR LAUNDRY BUSINESS TODAY</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Ready for a modern POS <br />
              <span className="text-emerald-400">without the setup hassle?</span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto font-normal">
              Send us your price list today. The Jipo POS concierge team will have your complete system configured and ready to operate within 24 hours!
            </p>

            {/* Dual Pill CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8">
              <a
                href="https://wa.me/6281996307784?text=Hello%20Jipo%20POS%20Team,%20I%20am%20ready%20to%20get%20free%20setup%20assistance"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-lg shadow-emerald-950/20 transition-all active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Claim Free Concierge Setup</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <Link
                href="/demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm transition-all active:scale-95"
              >
                <Play className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                <span>Try Live Demo</span>
              </Link>
            </div>

            {/* Guarantee Tag */}
            <div className="inline-flex items-center justify-center gap-2 text-xs text-slate-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Free Assisted Setup &amp; Staff Training Guarantee</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
