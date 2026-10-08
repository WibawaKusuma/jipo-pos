import FAQSection from "@/components/FAQSection";
import OnboardingSteps from "@/components/OnboardingSteps";
import FinalCTA from "@/components/FinalCTA";

export const metadata = {
  title: "FAQ & Support - Jipo POS",
  description: "Frequently Asked Questions regarding Jipo POS hardware, setup process, and features.",
};

export default function FAQPage() {
  return (
    <div className="pt-10">
      <FAQSection />
      <OnboardingSteps />
      <FinalCTA />
    </div>
  );
}
