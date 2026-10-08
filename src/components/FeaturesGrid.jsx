import { Calculator, MessageCircle, Crown, Network, Boxes, BarChart3, Check } from "lucide-react";

export default function FeaturesGrid() {
  const features = [
    {
      icon: Calculator,
      title: "15s Cashier Checkout",
      desc: "Fast item taps for kiloan, satuan, dry cleaning, and meterage. Process walk-in drop-offs in under 15 seconds.",
      bullets: [
        "Voucher discount engine",
        "50% Down Payment & QRIS",
        "Multiple price tiers",
      ],
      tag: "POS Engine",
    },
    {
      icon: MessageCircle,
      title: "Automated WhatsApp Bot",
      desc: "Send branded WhatsApp order receipts, pickup ready notifications, and reminders with zero manual typing.",
      bullets: [
        "Instant digital receipt link",
        "Shelf location ready alert",
        "Automated overdue reminders",
      ],
      tag: "Most Popular",
      featured: true,
    },
    {
      icon: Crown,
      title: "VIP Loyalty & Prepaid Kilos",
      desc: "Sell upfront laundry packages (e.g. 50kg bundle) for instant business cashflow and customer lock-in.",
      bullets: [
        "Prepaid kilo balance tracking",
        "Remaining quota WhatsApp alert",
        "Tiered member discounts",
      ],
      tag: "Cashflow Booster",
    },
    {
      icon: Network,
      title: "Multi-Branch HQ Dashboard",
      desc: "Monitor revenue across 2, 5, or 10 branches in real-time from your smartphone without visiting stores.",
      bullets: [
        "Branch-specific pricing",
        "Owner vs Cashier roles",
        "Live branch revenue comparison",
      ],
      tag: "Multi-Store HQ",
    },
    {
      icon: Boxes,
      title: "Garment & Shelf Tracking",
      desc: "Track status: Queued ➔ Washing ➔ Drying ➔ Ironing ➔ Packed ➔ Rack Assigned. Never lose garments again.",
      bullets: [
        "Cabinet & shelf slot codes",
        "Express deadline flags",
        "Staff accountability logs",
      ],
      tag: "Operations",
    },
    {
      icon: BarChart3,
      title: "Shift Reconciliation Reports",
      desc: "End-of-day register closing reports, cashier cash audits, top services, and 1-click Excel/PDF export.",
      bullets: [
        "Cash drawer mismatch alerts",
        "Payment mode breakdown",
        "1-Click Excel / PDF export",
      ],
      tag: "Financials",
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-28 bg-white border-y border-slate-200/80 atomato-grid-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium uppercase tracking-wider mb-4">
            <span>• COMPLETE FEATURE SUITE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4 leading-tight">
            Built for everyday laundry operations, <br />
            <span className="atomato-gradient-text">not generic retail</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            Every screen and button is tailored specifically for wash &amp; fold, garment care, and multi-branch management.
          </p>
        </div>

        {/* Bento Grid 3x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className={`rounded-3xl p-7 border transition-all flex flex-col justify-between ${
                  feat.featured
                    ? "bg-emerald-50/50 border-emerald-300 ring-2 ring-emerald-500/20 shadow-xl shadow-emerald-600/5"
                    : "bg-slate-50/70 border-slate-200/80 atomato-card-glow"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-white border border-slate-200/80 text-emerald-700 flex items-center justify-center shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-medium uppercase tracking-wider bg-white border border-slate-200 text-slate-700 px-3 py-1 rounded-full">
                      {feat.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{feat.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">{feat.desc}</p>
                </div>

                <div className="pt-4 border-t border-slate-200/60">
                  <ul className="space-y-2">
                    {feat.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
