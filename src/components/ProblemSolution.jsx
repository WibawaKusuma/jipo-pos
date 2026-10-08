import { AlertTriangle, UserX, Calculator, PhoneOff, Receipt, ShieldCheck, Tags, Send, X, Check } from "lucide-react";

export default function ProblemSolution() {
  const oldWay = [
    {
      title: "Lost or Wet Paper Tickets",
      desc: "Manual paper receipts tear, get wet, or disappear on shelves, causing angry customer disputes.",
    },
    {
      title: "Cashier Fraud & Missing Cash",
      desc: "Orders go unrecorded and cash disappears when the owner isn't physically monitoring the shop.",
    },
    {
      title: "Math Errors on Promos & DP",
      desc: "Manual calculator mistakes lead to daily cash shortages during end-of-day register reconciliation.",
    },
    {
      title: "Endless 'Is My Laundry Ready?' Calls",
      desc: "Staff waste valuable productive hours searching piles of clothes just to confirm order readiness.",
    },
  ];

  const newWay = [
    {
      title: "Cloud Digital Receipts + 2s Search",
      desc: "Every order is stored permanently in the cloud. Look up any customer by phone number in 2 seconds.",
    },
    {
      title: "Live Cloud Audit & Anti-Theft Logs",
      desc: "Real-time shift logs and timestamped cash audit prevent leakage even when you are out of town.",
    },
    {
      title: "Automated Discounts & 50% DP Engine",
      desc: "Auto-applies VIP member tiers, coupon codes, and partial deposit terms with 100% calculation accuracy.",
    },
    {
      title: "Instant 1-Click WhatsApp Pickup Alerts",
      desc: "When clothes are packed, 1 click sends an automated WhatsApp with the exact cabinet & shelf slot!",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-medium uppercase tracking-wider mb-4">
            <span>• OPERATIONAL TRANSFORMATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4 leading-tight">
            Say goodbye to paper chaos, <br />
            <span className="atomato-gradient-text">welcome automated clarity</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            See the direct difference between manual paper operations and the automated Jipo POS standard.
          </p>
        </div>

        {/* Bento Grid 2-Column Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Old Way Bento Card */}
          <div className="bg-slate-50/70 border border-rose-200/80 rounded-3xl p-7 sm:p-9 shadow-xs flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-semibold uppercase tracking-wider mb-6">
                <X className="w-3.5 h-3.5" />
                <span>The Old Manual Way</span>
              </div>

              <div className="space-y-5">
                {oldWay.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-rose-100 shadow-2xs">
                    <div className="w-6 h-6 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 text-xs font-semibold mt-0.5">
                      ✕
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-0.5">{item.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-rose-200/60 text-xs text-rose-700 font-medium flex items-center justify-between">
              <span>⚠️ Result: Stressed owners & lost revenue</span>
            </div>
          </div>

          {/* Jipo POS Way Bento Card */}
          <div className="bg-white border border-emerald-300 rounded-3xl p-6 sm:p-8 shadow-xl shadow-emerald-900/5 flex flex-col justify-between overflow-hidden relative">
            <div>
              {/* Photo Preview of Happy Customer Handover */}
              <div className="relative rounded-2xl overflow-hidden mb-6 border border-slate-200 aspect-[16/9]">
                <img
                  src="/images/laundry_cashier_customer.jpg"
                  alt="Friendly laundry cashier handing clean pressed laundry to a happy customer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-emerald-700 text-white text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  ✓ The Jipo POS Experience
                </div>
              </div>

              <div className="space-y-4">
                {newWay.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 text-xs font-semibold mt-0.5">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-0.5">{item.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-emerald-800 font-medium flex items-center justify-between">
              <span>✨ Result: 15s checkout &amp; happy loyal customers</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
