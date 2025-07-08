import type { Metadata } from "next";
import ResizeImagePanel from "@/components/resizeImage/ResizeImagePanel";
import WhyChoose from "@/components/shared/WhyChoose";
import { Testimonials } from "@/components/shared/Testimonials";
import { FAQ } from "@/components/shared/FAQ";
import { CTA } from "@/components/shared/CTA";
import { Gift, Layers, Rocket, ShieldCheck, Move, FileImage } from "lucide-react";
import { HowItWorks } from "@/components/shared/HowItWorks";

export const metadata: Metadata = {
  title: "Free 300x300 Image Converter: Resize Image to 300x300 online | EasyCrop",
  description: "Resize your image to 300x300 pixels free online. Convert any image to 300x300 pixel using our easy-to-use 300x300 image converter for instant results.",
  alternates: {
    canonical: "https://www.easycropimage.com/300x300-image-converter",
  },
};

const whyChooseFeatures = {
  title: "Why Choose Our 300x300 Image Converter",
  subtitle: "Fast, reliable, and user-friendly tool to create flawless 300x300 images every time.",
  features: [
    {
      icon: Rocket,
      headline: "Lightning Fast Processing",
      description: "Processes your photos in seconds, resize to perfect 300x300 dimensions while maintaining optimal quality."
    },
    {
      icon: Layers,
      headline: "Multiple Format Support",
      description: "Convert images from JPG, PNG, HEIC, WEBP, and BMP to your preferred 300x300 image output, compatible with all major image file types."
    },
    {
      icon: Move,
      headline: "Intuitive Crop and Adjust",
      description: "Easily select the perfect portion of your image for 300x300 dimensions with user-friendly crop tools, featuring drag and zoom controls."
    },
    {
      icon: FileImage,
      headline: "Quality Preservation Technology",
      description: "Advanced algorithms ensure crisp details and vibrant colors in your 300x300 image without pixelation or quality loss."
    },
    {
      icon: ShieldCheck,
      headline: "Privacy First",
      description: "Images are processed locally in your browser, ensuring complete privacy protection with no server uploads."
    },
    {
      icon: Gift,
      headline: "Free Image Converter Tool",
      description: "Completely free 300x300 image converter with no hidden fees, registration, or premium limitations."
    }
  ]
}

const howItWorksData = {
  title: "How to resize image to 300x300 pixel",
  steps: [
    {
      title: "1. Select Image",
      desc: "Select or drag & drop your image.",
    },
    {
      title: "2. Preview and Adjust",
      desc: "Preview and use drag-and-drop crop frame to select the precise 300x300 image area for perfect positioning and composition.",
    },
    {
      title: "3. Download 300x300 Image",
      desc: " Click download to save your perfectly sized 300x300 image to your device in your preferred format.",
    },
  ]
}

const testimonialsData = {
  title: "What Our Users Say",
  testimonials: [
    {
      quote: "This 300x300 Image Converter saved me hours of work! I needed to resize product photos for my online store. The quality is incredible—perfect every time.",
      author: "Sarah M., Content Creator",
      bgColor: "bg-blue-50",
    },
    {
      quote: "Finally found the perfect tool for my Spotify playlist covers. The 300x300 image output is exactly what I needed, and the quality is outstanding. No more pixelated covers!",
      author: "Mike R., Music Producer",
      bgColor: "bg-green-50",
    },
    {
      quote: "As someone managing multiple brand profiles, this 300x300 Image Converter is a lifesaver. Fast, reliable, and the privacy feature gives me peace of mind when handling client images.",
      author: "Jennifer L., Social Media Manager",
      bgColor: "bg-purple-50",
    },
  ]
}

const faqData = {
  title: "Frequently Asked Questions",
  faqs: [
    {
      "question": "What are the benefits of using 300x300 image dimensions?",
      "answer": "300x300 pixels is perfect for social media profile pictures, Spotify playlist covers, product thumbnails, and web avatars. This square format ensures consistent display across all platforms."
    },
    {
      "question": "What file formats does the 300x300 Image Converter support?",
      "answer": "Our converter supports JPG, JPEG, PNG, HEIC, WEBP, and BMP image files. You can convert any image file formats to a perfect 300x300 image."
    },
    {
      "question": "Will resizing to 300x300 reduce my image quality?",
      "answer": "No, our advanced algorithms maintain image quality while converting to 300x300 dimensions. The tool uses smart compression techniques to preserve details and prevent pixelation."
    },
    {
      "question": "What output formats are available for my 300x300 image?",
      "answer": "Your converted 300x300 image can be downloaded in JPG, PNG, or WebP format, optimized for web use and maximum compatibility."
    },
    {
      "question": "Is the 300x300 Image Converter free to use?",
      "answer": "Absolutely! Our tool is completely free with no hidden charges, registration requirements, or usage limits. Convert unlimited images to 300x300 dimensions."
    },
    {
      "question": "What's the maximum file size for 300x300 image conversion?",
      "answer": "Our converter supports uploads up to 20MB, which accommodates high-resolution photos from modern cameras and smartphones. The resulting 300x300 image will be optimized for web use with significantly reduced file size."
    }
  ]
}

const ctaData = {
  title: "Start Convert 300x300 image Now",
  description: "Ready to create perfect 300x300 images? Upload your photo and experience the fastest, most reliable 300x300 Image Converter available. ",
  subDescription: "Whether you need square images for social media profiles, Spotify playlists, or professional applications, our tool delivers exceptional results every time.",
  buttonText: "Convert Your Images to 300x300 Now",
}

export default function ImageConverter300Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "EasyCrop - 300x300 Image Converter",
      "url": "https://www.easycropimage.com/300x300-image-converter",
      "description": "Resize your image to 300x300 pixels free online. Convert any image to 300x300 pixel using our easy-to-use 300x300 image converter for instant results.",
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
        "Lightning Fast Processing - Resize images to 300x300 in seconds",
        "Quality Preservation - Advanced algorithms maintain image quality",
        "Multiple Format Support - JPG, PNG, HEIC, WEBP, and BMP support",
        "Intuitive Crop and Adjust - Easy drag and zoom controls"
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
      "name": "300x300 Image Converter",
      "description": "Professional 300x300 image converter tool. Resize and convert images to perfect 300x300 dimensions with quality preservation technology.",
      "url": "https://www.easycropimage.com/300x300-image-converter",
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
      "name": "How to resize image to 300x300 pixel",
      "description": "Learn how to resize any image to perfect 300x300 dimensions using our free online image converter with quality preservation.",
      "totalTime": "PT1M",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "USD",
        "value": "0"
      },
      "supply": [
        {
          "@type": "HowToSupply",
          "name": "Any image file (JPG, PNG, HEIC, WEBP, BMP supported)"
        },
        {
          "@type": "HowToSupply", 
          "name": "Web browser"
        }
      ],
      "tool": [
        {
          "@type": "HowToTool",
          "name": "EasyCrop 300x300 Image Converter",
          "url": "https://www.easycropimage.com/300x300-image-converter"
        }
      ],
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Select Image",
          "text": "Select or drag & drop your image. All major image formats are supported including JPG, PNG, HEIC, WEBP, and BMP."
        },
        {
          "@type": "HowToStep", 
          "position": 2,
          "name": "Preview and Adjust",
          "text": "Preview and use drag-and-drop crop frame to select the precise 300x300 image area for perfect positioning and composition."
        },
        {
          "@type": "HowToStep",
          "position": 3, 
          "name": "Download 300x300 Image",
          "text": "Click download to save your perfectly sized 300x300 image to your device in your preferred format."
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
             Free 300x300 Image Converter
            </h1>
            <p className="text-sm lg:text-lg">
            Transform your photos into the ideal 300x300 image format with our professional 300x300 Image Converter. 
            </p>
          </div>
        </section>

        <ResizeImagePanel title="300x300 Image Converter" width={300} height={300} />
        
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