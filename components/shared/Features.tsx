import React from "react"

export interface FeatureItem {
  title: string;
  description: string | React.ReactNode;
}

export interface FeaturesData {
  title: string;
  features: FeatureItem[];
}

export interface FeaturesProps {
  featuresData: FeaturesData;
}

export function Features({ featuresData }: FeaturesProps) {
  const { title, features } = featuresData;
  
  return (
    <section className="w-full mx-auto py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-center">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {features.map((feature: FeatureItem, index: number) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 