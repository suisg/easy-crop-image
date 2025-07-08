import type { Metadata } from "next";
import ResizeImagePanel from "@/components/resizeImage/ResizeImagePanel";
import WhyChoose from "@/components/shared/WhyChoose";
import { Testimonials } from "@/components/shared/Testimonials";
import { FAQ } from "@/components/shared/FAQ";
import { CTA } from "@/components/shared/CTA";
import { FileCheck, Gift, Layers, Proportions, Rocket, ShieldCheck } from "lucide-react";
import { HowItWorks } from "@/components/shared/HowItWorks";

export const metadata: Metadata = {
  title: "YouTube Thumbnail Resizer - Free & Fast | EasyCrop",
  description: "Resize YouTube thumbnails to 1280x720 or 1920x1080 pixels. Fast, free, secure, and always under 2MB.",
  alternates: {
    canonical: "https://www.easycropimage.com/youtube-thumbnail-resizer",
  },
};

const whyChooseFeatures = {
  title: "YouTube Thumbnail Resizer Features",
  subtitle: "Fast, Free, and Secure Image Resizing for Perfect YouTube Thumbnails",
  features: [
    {
      icon: Gift,
      headline: "Free & Instant Access",
      description: "Use the tool immediately without sign-up or payment, perfect for quick thumbnail creation."
    },
    {
      icon: ShieldCheck,
      headline: "Privacy-First",
      description: "All images are processed locally, ensuring your data stays secure and never leaves your device."
    },
    {
      icon: Rocket,
      headline: "Fast Processing",
      description: "Resize and compress thumbnails in seconds, ensuring a smooth workflow."
    },
    {
      icon: FileCheck,
      headline: "Under 2MB Guarantee",
      description: "Automatically optimizes images to stay under YouTube’s 2MB limit, eliminating upload errors."
    },
    {
      icon: Proportions,
      headline: "HD & Full HD Support",
      description: "Easily resize to 1280×720 (YouTube’s standard) or 1920×1080 pixels for crisp, high-quality thumbnails."
    },
    {
      icon: Layers,
      headline: "Multi-Format Support",
      description: "Works seamlessly with JPG, PNG, WEBP, and more, offering flexibility for all image types."
    }
  ],
}

const howItWorksData = {
  title: "How to Resize YouTube Thumbnail",
  steps: [
    {
      title: "1. Select Image",
      desc: "Select or drag & drop your image.",
    },
    {
      title: "2. Select Thumbnail Size",
      desc: "Choose the recommended YouTube thumbnail dimensions—1280×720 or 1920×1080 pixels",
    },
    {
      title: "3. Download Optimized Thumbnail",
      desc: "Instantly get your resized and compressed youtube thumbnail, under 2MB.",
    },
  ]
}

const testimonialsData = {
  title: "What Our Users Say",
  testimonials: [
    {
      quote: "YouTube Thumbnail Resizer made it so easy to get my thumbnails to the right size and under 2MB. Now my uploads are smooth every time!",
      author: "Alex, Content Creator",
      bgColor: "bg-blue-50",
    },
    {
      quote: "I love how fast and secure this tool is. With EasyCrop YouTube Thumbnail Resizer, I never worry about privacy or complicated steps—just upload, resize, and download.",
      author: "Jamie, Vlogger",
      bgColor: "bg-green-50",
    },
    {
      quote: "I needed to crop a few photos for a presentation. This tool was straightforward and didn't ask me to sign up or download anything.",
      author: "Mark S., Teacher",
      bgColor: "bg-purple-50",
    },
  ]
}

const faqData = {
  title: "Frequently Asked Questions",
  faqs: [
    {
      question: "What image sizes does YouTube Thumbnail Resizer support?",
      answer: "You can easily resize images to YouTube’s recommended dimensions, including 1280×720 and 1920×1080 pixels."
    },
    {
      question: "Will my thumbnail always be under 2MB?",
      answer: "Yes, YouTube Thumbnail Resizer automatically compresses your image so it’s ready for upload and meets YouTube’s 2MB limit."
    },
    {
      question: "Do I need to sign up to use YouTube Thumbnail Resizer?",
      answer: "No registration is needed—just upload your image and start resizing instantly."
    },
    {
      question: "Is my image data safe when using this tool?",
      answer: "Absolutely. YouTube Thumbnail Resizer processes all images locally, so your files never leave your device."
    },
    {
      question: "Can I use different image formats?",
      answer: "Yes, YouTube Thumbnail Resizer supports popular formats like JPG and PNG, making it easy to work with your existing images."
    },
  ]
}

const ctaData = {
  title: "Ready to Create Perfect Thumbnails?",
  description: "Start using YouTube Thumbnail Resizer now—it's free, fast, and secure.",
  subDescription: "Resize your images to YouTube's recommended dimensions and make every video stand out!",
  buttonText: "Start Resizing Now",
}

export default function YoutubeThumbnailResizerPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "EasyCrop - YouTube Thumbnail Resizer",
      "url": "https://www.easycropimage.com/youtube-thumbnail-resizer",
      "description": "Resize YouTube thumbnails to 1280x720 or 1920x1080 pixels. Fast, free, secure, and always under 2MB. Perfect for YouTube content creators.",
      "applicationCategory": "MultimediaApplication",
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Free & Instant Access - No sign-up or payment required",
        "Privacy-First - Images processed locally, never leave your device",
        "Fast Processing - Resize and compress thumbnails in seconds",
        "Under 2MB Guarantee - Automatically optimizes to meet YouTube's limit",
        "HD & Full HD Support - 1280×720 and 1920×1080 pixel options",
        "Multi-Format Support - Works with JPG, PNG, WEBP and more"
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
      "name": "YouTube Thumbnail Resizer",
      "description": "Professional YouTube thumbnail resizer tool. Resize and compress images to YouTube's recommended dimensions with automatic 2MB optimization.",
      "url": "https://www.easycropimage.com/youtube-thumbnail-resizer",
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
      "name": "How to Resize YouTube Thumbnail",
      "description": "Learn how to resize YouTube thumbnails to the perfect dimensions (1280×720 or 1920×1080) and compress them under 2MB for optimal YouTube uploads.",
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
          "name": "EasyCrop YouTube Thumbnail Resizer",
          "url": "https://www.easycropimage.com/youtube-thumbnail-resizer"
        }
      ],
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Select Image",
          "text": "Select or drag & drop your image into the resizer. All image formats are supported for maximum compatibility with your existing thumbnail designs."
        },
        {
          "@type": "HowToStep", 
          "position": 2,
          "name": "Select Thumbnail Size",
          "text": "Choose the recommended YouTube thumbnail dimensions—1280×720 (HD) or 1920×1080 (Full HD) pixels. Both options ensure crisp, high-quality thumbnails that look great on all devices."
        },
        {
          "@type": "HowToStep",
          "position": 3, 
          "name": "Download Optimized Thumbnail",
          "text": "Instantly get your resized and compressed YouTube thumbnail, automatically optimized to stay under 2MB. Your thumbnail is ready for immediate upload to YouTube."
        }
      ]
    }
  ];

  return (
    <>
      <main className="flex flex-col items-center justify-center pt-20">
        <section className="w-full">
          <div className="max-w-6xl mx-auto text-center px-4">
            <h1 className="text-2xl lg:text-3xl font-bold mb-2">
            Effortless YouTube Thumbnail Resizer
            </h1>
            <p className="text-sm lg:text-lg">
            Instantly resize and compress thumbnails to YouTube's ideal 1280x720 or 1920x1080, ensuring sharp, clickable visuals—all for free, with no sign-up.
            </p>
          </div>
        </section>

        <ResizeImagePanel title="Youtube Thumbnail Resizer" platform="youtube" />
        
        <WhyChoose {...whyChooseFeatures} />

        <HowItWorks data={howItWorksData} />

        <Testimonials testimonialsData={testimonialsData} />

        <FAQ faqData={faqData} />

        <CTA ctaData={ctaData} />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}