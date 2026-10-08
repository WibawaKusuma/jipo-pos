import { Crown, Scale, Ticket, HandCoins, Sparkles } from "lucide-react";

export default function DiscountShowcase() {
  const promos = [
    {
      icon: Crown,
      iconColor: "text-amber-600 bg-amber-50",
      title: "Tiered VIP Member Discounts",
      desc: "Auto-applies member pricing (e.g. Gold 10%, Silver 5%) the moment a registered phone number is keyed in.",
      chip: "VIP Gold (-10%)",
      metric: "+34% Customer Retention",
    },
    {
      icon: Scale,
      iconColor: "text-emerald-600 bg-emerald-50",
      title: "Volume & Bulk Laundry Rules",
      desc: "Incentivize larger drop-offs with threshold pricing (e.g. drop-offs over 10kg automatically get Rp 1.000/kg off).",
      chip: "Bulk >10kg Promo",
      metric: "+28% Avg Order Weight",
    },
    {
      icon: Ticket,
      iconColor: "text-indigo-600 bg-indigo-50",
      title: "Marketing Vouchers & Coupons",
      desc: "Run viral campaigns with custom promo codes (e.g. CLEAN10K) featuring expiration dates and redemption caps.",
      chip: "Coupon -Rp 10.000",
      metric: "Track Promo ROI",
    },
    {
      icon: HandCoins,
      iconColor: "text-cyan-600 bg-cyan-50",
      title: "50% Down Payment & QRIS",
      desc: "Support Full Payment, 50% Deposit, or Pay at Pickup. Built-in QRIS, Cash, Bank Transfer, and Card reconciliation.",
      chip: "50% Deposit Accepted",
      metric: "Zero Cash Mismatch",
    },
  ];

  return (
    <section id="discounts" className="py-20 lg:py-28 bg-slate-50/60 border-y border-slate-200/80 atomato-grid-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>• REVENUE & LOYALTY ENGINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Dynamic discounts that drive <br />
            <span className="atomato-gradient-text">repeat laundry visits</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            Automate membership tiers, bulk incentives, and partial deposit terms with zero mental math for your cashiers.
          </p>
        </div>

        {/* 4 Bento Promo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {promos.map((item, idx) => {
            const Icon = item.icon;
            return (
               <div
                 key={idx}
                 className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 atomato-card-glow transition-all flex flex-col justify-between"
               >
                 <div>
                   <div className={`w-12 h-12 rounded-2xl ${item.iconColor} flex items-center justify-center mb-5 shadow-2xs`}>
                     <Icon className="w-6 h-6" />
                   </div>
                   <h3 className="text-base font-semibold text-slate-900 mb-2">{item.title}</h3>
                   <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">{item.desc}</p>
                 </div>

                 <div className="pt-4 border-t border-slate-100 space-y-2">
                   <div className="inline-block bg-slate-50 border border-slate-200 text-slate-800 text-[11px] font-medium px-3 py-1 rounded-full">
                     {item.chip}
                   </div>
                   <div className="text-[10px] text-emerald-700 font-medium">
                     ⚡ {item.metric}
                   </div>
                 </div>
               </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
