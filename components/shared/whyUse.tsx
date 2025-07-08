import Image from "next/image";

export interface WhyUseFeature {
  image: string;
  alt: string;
  title: string;
  description: string;
}

export interface WhyUseData {
  whyUseTitle: string;
  whyUseDescription?: string;
  features: WhyUseFeature[];
}

export interface WhyUseProps {
  whyUseData: WhyUseData;
}

export function WhyUse({ whyUseData }: WhyUseProps) {
  const { whyUseTitle, whyUseDescription, features } = whyUseData;
  
  return (
    <section className="w-full py-16 px-4 text-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
        {/* Introduction Section */}
        <div className="text-center space-y-6 mb-8">
          <h2 className="max-w-5xl mx-auto text-2xl md:text-4xl font-bold text-gray-900 text-center">
            {whyUseTitle}
          </h2>
          {whyUseDescription && (
            <p className="text-lg max-w-5xl mx-auto text-gray-700 leading-relaxed">
              {whyUseDescription}
            </p>
          )}
        </div>

        {/* Why Use Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature: WhyUseFeature, index: number) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg"
            >
              <div className="w-full h-48 mb-4 relative overflow-hidden rounded-lg">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={450}
                  height={300}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  priority={index < 3}
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 