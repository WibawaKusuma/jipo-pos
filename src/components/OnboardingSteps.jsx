import { FileText, Laptop, Rocket, Clock, Zap, CheckCircle2, MessageCircle, ArrowUpRight } from "lucide-react";

export default function OnboardingSteps() {
  const steps = [
    {
      num: "01",
      icon: FileText,
      title: "Send Us Your Price List",
      desc: "Take a photo of your existing price board or brochure, and send it via WhatsApp along with your store name.",
      time: "Your Time: 5 Mins",
      tag: "Step 1",
    },
    {
      num: "02",
      badge: "DONE-FOR-YOU",
      icon: Laptop,
      title: "We Configure Everything",
      desc: "Our concierge team inputs your 20+ service tiers, discounts, member perks, and WhatsApp receipt templates.",
      time: "Ready in < 24 Hours",
      tag: "Step 2",
      highlight: true,
    },
    {
      num: "03",
      icon: Rocket,
      title: "Train Staff & Start Checkout",
      desc: "We train your team through guided video walkthroughs and WhatsApp support. Start serving customers on Day 1!",
      time: "Lifetime Support",
      tag: "Step 3",
    },
  ];

  return (
    <section id="onboarding" className="py-20 lg:py-28 bg-white border-y border-slate-200/80 atomato-grid-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium uppercase tracking-wider mb-4">
            <span>• ZERO-FRICTION ONBOARDING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4 leading-tight">
            3 simple steps. <br />
            <span className="atomato-gradient-text">We do all the setup work</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            No technical knowledge or manual data entry needed. We handle your entire setup from start to finish.
          </p>
        </div>

        {/* 3 Bento Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className={`rounded-3xl p-7 border transition-all flex flex-col justify-between relative ${
                  step.highlight
                    ? "bg-emerald-50/40 border-emerald-300 ring-2 ring-emerald-500/20 shadow-xl shadow-emerald-600/5"
                    : "bg-slate-50/70 border-slate-200/80 atomato-card-glow"
                }`}
              >
                {step.badge && (
                  <span className="absolute -top-3.5 right-6 bg-emerald-600 text-white text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {step.badge}
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-bold text-slate-300 font-mono">{step.num}</span>
                    <span className="text-[10px] font-medium uppercase tracking-wider bg-white border border-slate-200 text-slate-700 px-3 py-1 rounded-full">
                      {step.tag}
                    </span>
                  </div>

                  <div className="w-11 h-11 rounded-2xl bg-white border border-slate-200/80 text-emerald-700 flex items-center justify-center mb-4 shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">{step.desc}</p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-emerald-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{step.time}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Onboarding Bento Banner */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-7 sm:p-9 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-1">Have Custom Requirements or Multiple Stores?</h3>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              Talk directly with our solutions team on WhatsApp. We will configure Jipo POS to your specific branch workflows.
            </p>
          </div>
          <a
            href="https://wa.me/6281996307784?text=Hello%20Jipo%20POS%20Team,%20I%20have%20custom%20setup%20questions"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs shadow-md transition-all active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat with Setup Team</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
