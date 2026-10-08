import FeaturesGrid from "@/components/FeaturesGrid";
import AiScannerShowcase from "@/components/AiScannerShowcase";
import DiscountShowcase from "@/components/DiscountShowcase";
import LaundrySegments from "@/components/LaundrySegments";
import FinalCTA from "@/components/FinalCTA";

export const metadata = {
  title: "Features - Jipo POS Laundry Management",
  description: "Explore the comprehensive features of Jipo POS: AI Vision scanning, 15-second checkout, WhatsApp receipts, promo engine, and shelf tracking.",
};

export default function FeaturesPage() {
  return (
    <div className="pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4">
          All Features &amp; Capabilities
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-4">
          Engineered to Streamline Every Step of Laundry Operations
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          From drop-off ticket generation and AI Computer Vision inspection to multi-store accounting, discover why hundreds of laundry operators rely on Jipo POS.
        </p>
      </div>

      <FeaturesGrid />
      <AiScannerShowcase />
      <DiscountShowcase />
      <LaundrySegments />
      <FinalCTA />
    </div>
  );
}
