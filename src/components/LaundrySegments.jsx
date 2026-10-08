import { Store, Sparkles, Network, CheckCircle2 } from "lucide-react";

export default function LaundrySegments() {
  const segments = [
    {
      tag: "Kiloan / Wash & Fold",
      icon: Store,
      title: "Neighborhood Laundromats",
      desc: "Ideal for laundry operators upgrading from paper notebooks to fast digital receipts.",
      bullets: [
        "Runs on any Android phone, tablet, or PC",
        "15-second fast checkout with WhatsApp receipts",
        "Organized shelf tags prevent clothing mix-ups",
        "Zero expensive hardware requirement",
      ],
      badge: "Fast & Practical",
    },
    {
      tag: "Shoes, Bags & Premium Care",
      icon: Sparkles,
      title: "Sneaker & Specialty Cleaners",
      desc: "For specialty care shops requiring detailed treatment checklists and garment condition logs.",
      bullets: [
        "Custom service tags (Unyellowing, Repaint, Deep Clean)",
        "Pre-treatment photo & stain condition logs",
        "Special item tagging for suits & bed covers",
        "Live treatment stage updates via WhatsApp",
      ],
      badge: "High Ticket Care",
      featured: true,
    },
    {
      tag: "Multi-Store Chains",
      icon: Network,
      title: "Branch Franchises & Chains",
      desc: "For laundry owners managing 2 to 20+ outlets who require centralized business intelligence.",
      bullets: [
        "1 Central HQ Dashboard across all branches",
        "Granular permissions (Owner, Cashier, Courier)",
        "Live cross-branch revenue benchmarking",
        "Detergent & chemical inventory transfers",
      ],
      badge: "Multi-Outlet HQ",
    },
  ];

  return (
    <section id="segments" className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200/80 atomato-grid-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium uppercase tracking-wider mb-4">
            <span>• SCALES WITH YOUR BUSINESS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4 leading-tight">
            Tailored for all scales &amp; <br />
            <span className="atomato-gradient-text">types of laundry operations</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            From single-counter kiloan shops to 10+ branch networks, Jipo POS adapts to your business model.
          </p>
        </div>

        {/* 3 Bento Segment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {segments.map((seg, idx) => {
            const Icon = seg.icon;
            return (
              <div
                key={idx}
                className={`rounded-3xl p-7 sm:p-8 border transition-all flex flex-col justify-between ${
                  seg.featured
                    ? "bg-white border-emerald-300 ring-2 ring-emerald-500/20 shadow-xl shadow-emerald-600/5"
                    : "bg-white border-slate-200/80 atomato-card-glow"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-medium uppercase tracking-wider bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                      {seg.tag}
                    </span>
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      {seg.badge}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5 shadow-2xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{seg.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">{seg.desc}</p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <ul className="space-y-2.5">
                    {seg.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
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
