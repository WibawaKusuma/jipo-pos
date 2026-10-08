import PricingSection from "@/components/PricingSection";
import AiCalculator from "@/components/AiCalculator";
import OnboardingSteps from "@/components/OnboardingSteps";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";

export const metadata = {
  title: "Pricing Plans - Jipo POS",
  description: "Flexible pricing plans for Jipo POS. Choose between Cloud Subscription (SaaS) or One-Time Lifetime License.",
};

export default function PricingPage() {
  return (
    <div className="pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-4">
          Transparent Pricing
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-4">
          Fair, Predictable Plans for Single Stores &amp; Chains
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          No hidden fees, no contract lock-ins. Pick monthly cloud access or buy once for a lifetime.
        </p>
      </div>

      <PricingSection />
      <AiCalculator />
      <OnboardingSteps />
      <FAQSection />
      <FinalCTA />
    </div>
  );
}
