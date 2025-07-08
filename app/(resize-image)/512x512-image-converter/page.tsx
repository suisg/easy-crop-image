import ResizeImagePanel from "@/components/resizeImage/ResizeImagePanel";
import Resize512Content from "./Resize512Content";  
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "512x512 Image Converter - Resize Images to 512x512 Pixels Online - EasyCrop",
  description: "Easily convert images to 512x512 pixels with our free online tool. Resize images to 512x512 without losing quality, crop, and adjust formats in seconds. Try now!",
  alternates: {
    canonical: "https://www.easycropimage.com/512x512-image-converter",
  },
};

export default function ResizeImagePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "EasyCrop - 512x512 Image Converter",
      "url": "https://www.easycropimage.com/512x512-image-converter",
      "description": "Convert images to 512x512 pixels with our free online tool. Resize images to 512x512 without losing quality, crop, and adjust formats in seconds.",
      "applicationCategory": "MultimediaApplication",
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Fast Resize - Convert images to 512x512 in seconds",
        "High Quality - Resize without losing quality, preserving sharpness",
        "Multiple Formats - Support for PNG, JPEG, and more",
        "Easy Crop Tool - Perfect 512x512 pixel dimensions",
        "Free Online Tool - No downloads or subscriptions needed",
        "Perfect for Avatars, App Icons, and Social Media"
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
      "name": "512x512 Image Converter",
      "description": "Professional 512x512 image converter tool. Resize and convert images to perfect 512x512 pixel dimensions for avatars, app icons, and social media.",
      "url": "https://www.easycropimage.com/512x512-image-converter",
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
      "name": "How to Use Our 512x512 Image Converter",
      "description": "Learn how to convert images to 512x512 pixels quickly and efficiently. Perfect for creating avatars, app icons, and social media images.",
      "totalTime": "PT1M",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "USD",
        "value": "0"
      },
      "supply": [
        {
          "@type": "HowToSupply",
          "name": "Any image file (all image formats supported)"
        },
        {
          "@type": "HowToSupply", 
          "name": "Web browser"
        }
      ],
      "tool": [
        {
          "@type": "HowToTool",
          "name": "EasyCrop 512x512 Image Converter",
          "url": "https://www.easycropimage.com/512x512-image-converter"
        }
      ],
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Upload",
          "text": "Drag and drop or select your image file. All image formats are supported for maximum compatibility."
        },
        {
          "@type": "HowToStep", 
          "position": 2,
          "name": "Convert Image",
          "text": "Our tool automatically resizes your image to 512x512 pixels while maintaining high quality and sharpness."
        },
        {
          "@type": "HowToStep",
          "position": 3, 
          "name": "Download",
          "text": "Save your perfectly resized image in your preferred format. Ready for use as avatars, app icons, or social media posts."
        }
      ]
    }
  ];

  return (
    <>
      <main className="min-h-screen flex flex-col items-center px-2 pt-20 bg-white">
        <div className="w-full max-w-6xl flex flex-col items-center justify-center">
          <h1 className="text-2xl lg:text-3xl font-bold text-center mb-2">
          512x512 Image Converter - Resize Images to 512x512 Pixels Instantly
          </h1>
          <p className="text-sm lg:text-lg text-center">
          Transform your images to a perfect 512x512 resolution with our fast, free online tool. Resize images without losing quality and get pixel-perfect results in seconds. Start now!
          </p>
        </div>
        <ResizeImagePanel title="512x512 Image Converter" width={512} height={512} />
        
        <Resize512Content />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
