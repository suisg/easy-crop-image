import Image from "next/image";

export interface Step {
  title: string;
  desc: string;
}

export interface HowItWorksData {
  title: string;
  description?: string;
  steps: Step[];
}

export interface DemoImage {
  src: string;
  alt: string;
}

export interface HowItWorksProps {
  data: HowItWorksData;
  demoImage?: DemoImage; // Optional demo image
}

export const cropImageSteps = {
  title: "How to Crop an Image",
  description: "Using our image cropping tool is simple and straightforward",
  steps: [
    {
      title: "1. Select Image",
      desc: "Select or drag & drop your image.",
    },
    {
      title: "2. Adjust Crop Frame",
      desc: "Choose a crop frame, adjust its size and position.",
    },
    {
      title: "3. Crop Image",
      desc: "Crop image and download it automatically.",
    },
  ]
};

export function HowItWorks({ 
  data,
  demoImage
}: HowItWorksProps) {
  return (
    <section className="w-full bg-gray-200 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-2">{data.title}</h2>
        {data.description && (
          <p className="text-lg text-gray-700 max-w-4xl mx-auto text-center mb-6">
            {data.description}
          </p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.steps.map((s) => (
            <div key={s.title} className="flex flex-col items-center bg-white rounded-xl shadow px-4 py-4 text-center">
              <h3 className="text-lg font-semibold mb-1">{s.title}</h3>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
        
        {/* Demo image section - only show if demoImage is provided */}
        {demoImage && (
          <div className="mt-8 text-center">
            <Image 
              src={demoImage.src} 
              alt={demoImage.alt} 
              width={1280} 
              height={720}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
}

