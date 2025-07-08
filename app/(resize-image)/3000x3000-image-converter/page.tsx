import ResizeImagePanel from "@/components/resizeImage/ResizeImagePanel";
import Resize3000Content from "./Resize3000Content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "3000x3000 Image Converter | Resize Image to 3000x3000 - EasyCrop",
  description: "Convert images to 3000x3000 instantly with our free online tool. Crop, and resize images to 3000x3000 privately in your browser—no server uploads. Try now!",
  alternates: {
    canonical: "https://www.easycropimage.com/3000x3000-image-converter",
  },
};

export default function ResizeImagePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "EasyCrop - 3000x3000 Image Converter",
      "url": "https://www.easycropimage.com/3000x3000-image-converter",
      "description": "Convert images to 3000x3000 pixels with our free online tool. Create perfect square images while maintaining quality. Perfect for e-commerce, social media, and print materials.",
      "applicationCategory": "MultimediaApplication",
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Resize images to exact 3000×3000 pixels without losing quality",
        "Support for all common image formats (JPEG, PNG, GIF, TIFF, BMP, HEIC)",
        "User-friendly interface with simple drag-and-drop",
        "Options to crop or maintain square aspect ratio",
        "Completely free to use with no watermarks",
        "Secure local processing - files never leave your browser"
      ],
      "publisher": {
        "@type": "Organization",
        "name": "EasyCrop",
        "url": "https://www.easycropimage.com"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "3000x3000 Image Converter",
      "description": "Professional 3000x3000 image converter tool. Perfect for e-commerce product photos, social media profiles, digital artwork, and high-resolution print materials.",
      "url": "https://www.easycropimage.com/3000x3000-image-converter",
      "applicationCategory": "PhotoApplication",
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Resize Image to 3000x3000",
      "description": "Learn how to convert images to 3000x3000 pixels effortlessly. Perfect for e-commerce, social media, digital artwork, and print materials.",
      "totalTime": "PT2M",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "USD",
        "value": "0"
      },
      "supply": [
        {
          "@type": "HowToSupply",
          "name": "Image file (JPG, PNG, GIF, WebP, TIFF, BMP, HEIC - up to 20MB)"
        },
        {
          "@type": "HowToSupply", 
          "name": "Web browser"
        }
      ],
      "tool": [
        {
          "@type": "HowToTool",
          "name": "EasyCrop 3000x3000 Image Converter",
          "url": "https://www.easycropimage.com/3000x3000-image-converter"
        }
      ],
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Upload Image",
          "text": "Upload your image (JPG, PNG, GIF, WebP, etc.) using drag-and-drop or file selection."
        },
        {
          "@type": "HowToStep", 
          "position": 2,
          "name": "Automatic Resize",
          "text": "Our resizer automatically sets dimensions to 3000 x 3000 pixels while maintaining quality."
        },
        {
          "@type": "HowToStep",
          "position": 3, 
          "name": "Choose Crop or Aspect Ratio",
          "text": "Choose to crop your image or keep the aspect ratio for perfect square dimensions."
        },
        {
          "@type": "HowToStep",
          "position": 4, 
          "name": "Select Format and Download",
          "text": "Select output format (JPG, PNG, WebP) and download your perfectly resized 3000x3000 image."
        }
      ]
    }
  ];

  return (
    <>
      <main className="min-h-screen flex flex-col items-center px-2 pt-20 bg-white">
        <div className="w-full max-w-6xl flex flex-col items-center justify-center">
          <h1 className="text-2xl lg:text-3xl font-bold text-center mb-2">
          Free Online 3000x3000 Image Converter - Resize Image to 3000x3000 Pixels
          </h1>
          <p className="text-sm lg:text-lg text-center">
          Effortlessly resize any image to 3000x3000 pixels with our free online tool. This 3000x3000 image converter helps you create perfect square images while maintaining quality. Convert images for social media, product listings, or digital images in seconds!
          </p>
        </div>
        <ResizeImagePanel title="3000x3000 Image Converter" width={3000} height={3000} />

        <Resize3000Content />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
