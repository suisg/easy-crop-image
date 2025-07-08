import { WhyUse, WhyUseData } from "@/components/shared/whyUse";
import { HowItWorks, HowItWorksData } from "@/components/shared/HowItWorks";
import { FAQ, FAQData } from "@/components/shared/FAQ";
import { Features, FeaturesData } from "@/components/shared/Features";  
import { Testimonials, TestimonialsData } from "@/components/shared/Testimonials";
import { CTA, CTAData } from "@/components/shared/CTA";

interface PageContentProps {
  // Main introduction section (integrated with WhyUse)
  whyUseData: WhyUseData;
  
  // How it works section
  howItWorksData: HowItWorksData;
  
  // Features section
  featuresData: FeaturesData;
  
  // Testimonials section
  testimonialsData: TestimonialsData;
  
  // FAQ section
  faqData: FAQData;
  
  // CTA section
  ctaData: CTAData;
}

export default function PageContent({
  whyUseData,
  howItWorksData,
  featuresData,
  testimonialsData,
  faqData,
  ctaData
}: PageContentProps) {
  return (
    <div className="w-full mx-auto">
      {/* Main Introduction and Why Use */}
      <WhyUse whyUseData={whyUseData} />

      {/* How It Works */}
      <HowItWorks data={howItWorksData} />

      {/* Features */}
      <Features featuresData={featuresData} />

      {/* Testimonials */}
      <Testimonials testimonialsData={testimonialsData} />

      {/* FAQ */}
      <FAQ faqData={faqData} />

      {/* CTA */}
      <CTA ctaData={ctaData} />
    </div>
  );
}