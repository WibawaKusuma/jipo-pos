import LiveSimulator from "@/components/LiveSimulator";
import WhyJipo from "@/components/WhyJipo";
import FinalCTA from "@/components/FinalCTA";

export const metadata = {
  title: "Interactive Live Demo - Jipo POS",
  description: "Experience the Jipo POS cashier interface, discount engine, and live WhatsApp notifications.",
};

export default function DemoPage() {
  return (
    <div className="pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4">
          Interactive Live Demo
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-4">
          Experience Jipo POS in Real-Time
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Test order checkout, apply promo codes, and watch the customer WhatsApp alert trigger instantly.
        </p>
      </div>

      <LiveSimulator />
      <WhyJipo />
      <FinalCTA />
    </div>
  );
}
