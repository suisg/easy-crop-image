import ResizeImagePanel from "@/components/resizeImage/ResizeImagePanel";
import type { Metadata } from "next";
import Resize1920Content from "./Resize1920Content";

export const metadata: Metadata = {
  title: "Resize Image to 1920x1080: Free Image Resizer Online - EasyCrop",
  description: "Resize images to 1920x1080 online for free, no software needed. Maintain aspect ratio and achieve high-quality results for HD displays, social media, and more.",
  alternates: {
    canonical: "https://www.easycropimage.com/resize-image-to-1920x1080",
  },
};

export default function ResizeImagePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "EasyCrop - Resize Image to 1920x1080",
      "url": "https://www.easycropimage.com/resize-image-to-1920x1080",
      "description": "Resize images to 1920x1080 online for free. Perfect for HD displays, social media, YouTube thumbnails, and professional projects with high-quality results.",
      "applicationCategory": "MultimediaApplication",
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Resize Images to 1920x1080 Without Losing Quality",
        "Upload and Convert Images to 1920x1080 Instantly",
        "Maintain Aspect Ratio with Smart Crop Options",
        "Upscale or Adjust Resolution for Any Project",
        "Download Your Resized Image Instantly",
        "Preview Feature - See results before downloading"
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
      "name": "Resize Image to 1920x1080",
      "description": "Professional 1920x1080 image resizer tool. Perfect for Full HD content, YouTube thumbnails, social media posts, desktop wallpapers, and presentations.",
      "url": "https://www.easycropimage.com/resize-image-to-1920x1080",
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
      "name": "How to Resize Your Image to 1920x1080",
      "description": "Learn how to resize images to 1920x1080 resolution effortlessly. Perfect for HD displays, social media, YouTube thumbnails, and professional projects.",
      "totalTime": "PT1M",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "USD",
        "value": "0"
      },
      "supply": [
        {
          "@type": "HowToSupply",
          "name": "Image file (JPG, PNG, and more formats supported)"
        },
        {
          "@type": "HowToSupply", 
          "name": "Web browser"
        }
      ],
      "tool": [
        {
          "@type": "HowToTool",
          "name": "EasyCrop 1920x1080 Image Resizer",
          "url": "https://www.easycropimage.com/resize-image-to-1920x1080"
        }
      ],
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Upload Your Image",
          "text": "Upload your image using drag-and-drop or file selection. Supports JPG, PNG, and more formats."
        },
        {
          "@type": "HowToStep", 
          "position": 2,
          "name": "Choose 1920x1080 Resolution",
          "text": "The tool automatically sets to 1920x1080 resolution. Fine-tune aspect ratio settings as needed to maintain quality."
        },
        {
          "@type": "HowToStep",
          "position": 3, 
          "name": "Download Your Resized Image",
          "text": "Download your resized image instantly with perfect 1920x1080 dimensions, ready for HD displays, social media, or professional use."
        }
      ]
    }
  ];

  return (
    <>
      <main className="min-h-screen flex flex-col items-center px-2 pt-20 bg-white">
        <div className="w-full max-w-6xl flex flex-col items-center justify-center">
          <h1 className="text-2xl lg:text-3xl font-bold text-center mb-2">
          Instantly Resize Images to 1920x1080 - Free Online Image Resizer 
          </h1>
          <p className="text-sm lg:text-lg text-center">
          Looking to resize an image to 1920x1080? Our free online image resizer lets you do it in seconds. Perfect for HD displays, social media, YouTube thumbnails, or professional projects, our tool delivers high-quality results directly in your browser.
          </p>
        </div>
        <ResizeImagePanel title="Resize Image to 1920x1080" width={1920} height={1080} />

        <Resize1920Content />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
