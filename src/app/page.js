import Hero from "@/components/Hero";
import WhyJipo from "@/components/WhyJipo";
import ProblemSolution from "@/components/ProblemSolution";
import DiscountShowcase from "@/components/DiscountShowcase";
import LaundrySegments from "@/components/LaundrySegments";
import FeaturesGrid from "@/components/FeaturesGrid";
import LiveSimulator from "@/components/LiveSimulator";
import OnboardingSteps from "@/components/OnboardingSteps";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyJipo />
      <ProblemSolution />
      <DiscountShowcase />
      <LaundrySegments />
      <FeaturesGrid />
      <LiveSimulator />
      <OnboardingSteps />
      <PricingSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
