import ScrollTopButton from "@/components/ScrollTopButton";

export interface CTAData {
  title: string;
  description: string;
  subDescription?: string;
  subDescription2?: string;
  buttonText: string;
}

export interface CTAProps {
  ctaData: CTAData;
}

export function CTA({ ctaData }: CTAProps) {
  const { title, description, subDescription, subDescription2, buttonText } = ctaData;

  return (
    <section className="w-full bg-gradient-to-r from-blue-50 to-purple-50 py-16">
      <div className="max-w-6xl mx-auto text-center space-y-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          {title}
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          {description}
        </p>
        <ScrollTopButton ctaText={buttonText} /> 
        {subDescription && (
          <p className="text-gray-700 max-w-3xl mx-auto">
            {subDescription}
          </p>
        )}
        {subDescription2 && (
          <p className="text-gray-700 max-w-3xl mx-auto">
            {subDescription2}
          </p>
        )}


      </div>
    </section>
  );
} 