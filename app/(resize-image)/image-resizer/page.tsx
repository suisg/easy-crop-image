import type { Metadata } from "next";
import PageContent from "@/components/shared/PageContent";
import ImageResizerPanel from "@/components/resizeImage/ResizeImagePanel";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Free Image Resizer: Resize Image Without Distortion - EasyCrop",
  description: "Resize images fast and easily. Instantly set your size and download—no distortion, always keeps your image looking right.",
  alternates: {
    canonical: "https://www.easycropimage.com/image-resizer",
  },
};

// 页面内容数据
const pageContentData = {
  whyUseData: {
    whyUseTitle: "Why Choose Our Image Resizer?",
    whyUseDescription: "Our image resizer lets you resize images by pixel, inch, cm, or mm and adjust DPI for professional-quality output. Unlike basic tools that just shrink images, we provide precise dimension control to ensure your resized images look exactly how you want them.",
    features: [
      {
        image: "/exact-resize-images.jpg",
        alt: "Exact Resize Images",
        title: "Exact Resize Images",
        description: "Resize image by pixel, inch, cm, or mm and adjust DPI for professional-quality output. Our tool ensures precise dimension control for perfect results every time."
      },
      {
        image: "/preserve-quality-image-resizer.jpg",
        alt: "Preserve Quality",
        title: "Preserve Quality",
        description: "Our smart crop and resize technology maintains image aspect ratio and clarity, preventing distortion and ensuring natural, professional-looking results."
      },
      {
        image: "/easy-to-use-image-resizer.jpg", 
        alt: "Easy to Use",
        title: "Easy to Use",
        description: "Resize images in just a few clicks. Drag and drop, set dimensions, adjust the area, and download—no sign-up or watermarks required."
      }
    ]
  },

  howItWorksData: {
    title: "How to Resize Image Online - Quick and Easy Steps",
    steps: [
      {
        title: "1. Upload Your Image",
        desc: "Drag and drop your photo or select an image to upload."
      },
      {
        title: "2. Set Target Dimensions",
        desc: "Choose your preferred size in pixels, inches, centimeters, or millimeters. Adjust DPI for print-ready results."
      },
      {
        title: "3. Adjust Position",
        desc: "Drag the crop box to select the area you want to keep. The tool automatically preserves the aspect ratio and prevents distortion."
      },
      {
        title: "4. Download Resized Image",
        desc: "Click to download your perfectly resized image—ready for use anywhere."
      }
    ]
  },

  featuresData: {
    title: "Powerful Features of Our Image Resizer",
    features: [
      {
        title: "Flexible Target Dimensions with DPI Control",
        description: "Easily resize image by pixel, inch, cm, or mm, and fine-tune DPI for digital or print."
      },
      {
        title: "Smart Crop & Aspect Ratio Preservation",
        description: (
          <>
            Select exactly what you want to keep. The tool resizes and{" "}
            <Link className="text-blue-500" href="/crop">
              crops your image
            </Link>{" "}
            without distortion, always delivering the right dimension.
          </>
        )
      },
      {
        title: "Multiple Output Formats",
        description: "Download your resized photos in JPG, PNG, or WEBP format—perfect for any use case."
      },
      {
        title: "Quality & Compression Control",
        description: "Adjust image quality to balance file size and clarity, and compress your images for faster loading."
      },
      {
        title: "Privacy-Focused and Easy to Use",
        description: "No sign-up, no storage—just upload, resize, and download your JPEG or PNG safely and quickly."
      }
    ]
  },

  testimonialsData: {
    title: "What Our Users Say",
    testimonials: [
      {
        quote: "I needed to resize images for our company website and this tool made it incredibly simple. The quality remained perfect even after resizing.",
        author: "- Sarah T., Web Designer",
        bgColor: "bg-blue-50"
      },
      {
        quote: "As a blogger who constantly needs to resize photos for different platforms, this tool has been a lifesaver. Quick, easy, and the results look professional every time.",
        author: "- Michael K., Content Creator",
        bgColor: "bg-green-50"
      },
      {
        quote: "The ability to maintain aspect ratio while resizing is exactly what I needed. No more distorted images!",
        author: "- Jennifer L., Social Media Manager",
        bgColor: "bg-purple-50"
      }
    ]
  },

  faqData: {
    title: "Frequently Asked Questions",
    faqs: [
      {
        question: "How do I resize an image without losing quality?",
        answer: "Our tool preserves your image's aspect ratio and lets you set custom dimensions, so your resized image stays sharp and undistorted."
      },
      {
        question: "Can I resize image in different formats?",
        answer: "Yes! You can upload and resize image in JPG, PNG, or WEBP, and download in your preferred format."
      },
      {
        question: "Is this image resizer really free?",
        answer: "Absolutely. You can resize images online for free, with no hidden fees or watermarks."
      },
      {
        question: "Does the tool support DPI adjustment?",
        answer: "Yes, you can set DPI when resizing your image for print or digital use."
      },
      {
        question: "Will my images be stored?",
        answer: "No, your images are processed on your device and are never stored on our servers."
      }
    ]
  },

  ctaData: {
    title: "Ready to Resize Your Images?",
    description: "Don't struggle with complicated software or compromise on quality. Our free image resizer gives you professional results in seconds.",
    subDescription: "Perfect for social media, websites, email attachments, printing, and more. Join thousands of satisfied users who trust our tool for all their image resizing needs.",
    buttonText: "Resize Your Images Now"
  }
};

export default function ImageResizer() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "EasyCrop - Free Image Resizer",
      "url": "https://www.easycropimage.com/image-resizer",
      "description": "Resize images fast and easily. Instantly set your size and download—no distortion, always keeps your image looking right. Resize by pixel, inch, cm, or mm with DPI control.",
      "applicationCategory": "MultimediaApplication",
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Flexible Target Dimensions with DPI Control - Resize by pixel, inch, cm, or mm",
        "Smart Crop & Aspect Ratio Preservation - No distortion, perfect dimensions",
        "Multiple Output Formats - JPG, PNG, or WEBP format support",
        "Quality & Compression Control - Balance file size and clarity",
        "Privacy-Focused and Easy to Use - No sign-up, no storage, quick processing"
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
      "name": "Free Image Resizer",
      "description": "Professional image resizer tool with precise dimension control. Resize images by pixel, inch, cm, or mm and adjust DPI for professional-quality output.",
      "url": "https://www.easycropimage.com/image-resizer",
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
      "name": "How to Resize Image Online - Quick and Easy Steps",
      "description": "Learn how to resize images online with precise dimension control. Perfect for websites, social media, email attachments, and print materials.",
      "totalTime": "PT2M",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "USD",
        "value": "0"
      },
      "supply": [
        {
          "@type": "HowToSupply",
          "name": "Any image file (all formats supported)"
        },
        {
          "@type": "HowToSupply", 
          "name": "Web browser"
        }
      ],
      "tool": [
        {
          "@type": "HowToTool",
          "name": "EasyCrop Free Image Resizer",
          "url": "https://www.easycropimage.com/image-resizer"
        }
      ],
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Upload Your Image",
          "text": "Drag and drop your photo or select an image to upload. All image formats are supported."
        },
        {
          "@type": "HowToStep", 
          "position": 2,
          "name": "Set Target Dimensions",
          "text": "Choose your preferred size in pixels, inches, centimeters, or millimeters. Adjust DPI for print-ready results."
        },
        {
          "@type": "HowToStep",
          "position": 3, 
          "name": "Adjust Position",
          "text": "Drag the crop box to select the area you want to keep. The tool automatically preserves aspect ratio and prevents distortion."
        },
        {
          "@type": "HowToStep",
          "position": 4, 
          "name": "Download Resized Image",
          "text": "Click to download your perfectly resized image—ready for use anywhere with professional quality."
        }
      ]
    }
  ];

  return (
    <>
      <main className="min-h-screen flex flex-col items-center px-2 pt-20 bg-white">
        <div className="w-full max-w-6xl flex flex-col items-center justify-center">
          <h1 className="text-2xl lg:text-3xl font-bold text-center mb-2">
          Free Image Resizer: Resize Image Without Distortion
          </h1>
          <p className="text-sm lg:text-lg text-center mb-4">
          Easy-to-use image resizer, resize your image in seconds.
          </p>
        </div>
        <ImageResizerPanel title="Image Resizer"/>

        {/* Content Section */}
        <PageContent {...pageContentData} />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}