import type { Metadata } from "next";
import AvatarCropperPanel from "@/components/avatarCropper/AvatarCropperPanel";
import PageContent from "@/components/shared/PageContent";

export const metadata: Metadata = {
  title: "Discord PFP Cropper: Free Online Avatar Cropper - EasyCrop",
  description: "Crop your Discord avatar with our free online tool. Drag and zoom your photo to fit the fixed frame with real-time previews. Instantly create a perfect PFP.",
  alternates: {
    canonical: "https://www.easycropimage.com/discord-pfp-cropper",
  },
};

// 页面内容数据
const pageContentData = {
  whyUseData: {
    whyUseTitle: "Why Use Our Discord PFP Cropper",
    features: [
      {
        image: "/discord-avatar.jpg",
        alt: "Perfectly Cropped Avatar for Discord",
        title: "Perfectly Cropped Avatar for Discord",
        description: "Get precise control to crop an avatar that fits Discord's requirements. Upload any image, adjust in the frame, and see real-time previews in multiple sizes.",
      },
      {
        image: "/fast-and-secure-discord-pfp-cropper.jpg",
        alt: "Fast and Secure Online Experience",
        title: "Fast and Secure Online Experience",
        description: "No downloads or sign-ups. Our web-based tool ensures your files stay safe, with no server storage after download.",
      },
      {
        image: "/circle-and-square-avatar.jpg",
        alt: "Flexible Circle and Square Options",
        title: "Flexible Circle and Square Options",
        description: "Choose circle, square, or both frames to crop avatars that match your style. Download high-quality files for your Discord profile.",
      }
    ]
  },

  howItWorksData: { 
    title: "How to Crop Your Discord Avatar",
    steps: [
      {
        title: "1. Select Your Photo",
        desc: "Select your photo to our avatar cropper.",
      },
      {
        title: "2. Drag and Zoom",
        desc: "Drag and zoom your photo in a fixed frame. Preview in real-time across four sizes.",
      },
      {
        title: "3. Download Avatar",
        desc: "Choose circle, square, or both, and download secure, high-quality avatar files for Discord.",
      },
    ]
  },

  featuresData: {
    title: "Features of Our Avatar Cropper",
    features: [
      {
        title: "Real-Time Avatar Previews",
        description: "See your cropped avatar in four sizes as you adjust, ensuring a perfect Discord PFP."
      },
      {
        title: "Fixed Circle and Square Frames",
        description: "Our specific cropping tools offer circle, square, or both options, tailored for Discord's profile requirements."
      },
      {
        title: "Secure and Private Processing",
        description: "Your files are processed securely on the web, with no data stored on servers."
      }
    ]
  },

  testimonialsData: {
    title: "What Users Say About Our Discord PFP Cropper",
    testimonials: [
      {
        quote: "This tool made cropping my Discord avatar so easy! The real-time previews helped me get the perfect circle frame in seconds.",
        author: "— Alex, Discord User",
        bgColor: "bg-blue-50"
      },
      {
        quote: "I love how secure and fast this cropper is. I uploaded a GIF, adjusted it, and downloaded both square and circle PFPs instantly.",
        author: "— Jamie, Content Creator",
        bgColor: "bg-blue-50"
      },
      {
        quote: "No other online tool compares. It's simple, free, and gives me exactly what I need for my Discord profile.",
        author: "— Taylor, Gamer",
        bgColor: "bg-blue-50"
      }
    ]
  },

  faqData: {
    title: "Frequently Asked Questions",
    faqs: [
      {
        question: "Is this avatar cropper secure?",
        answer: "Absolutely. Your files are processed securely, and we don't store them on our servers after you download."
      },
      {
        question: "Can I resize my image before cropping?",
        answer: "Yes, you can drag and resize your image within the fixed frame to select the perfect position for your avatar."
      },
      {
        question: "What formats can I download?",
        answer: "Choose circle, square, or both frames, and download high-quality files tailored for Discord."
      }
    ]
  },

  ctaData: {
    title: "Create Your Perfect Discord PFP Now",
    description: "Ready to crop an avatar that stands out on Discord? Upload your image, select a frame, and download a high-quality, secure PFP in seconds. Our free online tool makes it effortless.",
    buttonText: "Crop Your Discord Avatar Now"
  }
};

export default function DiscordPfpCropperPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "EasyCrop - Discord PFP Cropper",
      "url": "https://www.easycropimage.com/discord-pfp-cropper",
      "description": "Crop your Discord avatar with our free online tool. Drag and zoom your photo to fit the fixed frame with real-time previews. Instantly create a perfect PFP.",
      "applicationCategory": "MultimediaApplication",
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Real-Time Avatar Previews - See your cropped avatar in four sizes",
        "Fixed Circle and Square Frames - Choose circle, square, or both options",
        "Secure and Private Processing - Files processed securely with no server storage",
        "Perfectly Cropped Avatar for Discord - Fits Discord's requirements precisely",
        "Fast and Secure Online Experience - No downloads or sign-ups required",
        "Flexible Circle and Square Options - Download high-quality files for Discord"
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
      "name": "Discord PFP Cropper",
      "description": "Free online Discord avatar cropper with real-time previews, fixed frames, and secure processing. Perfect for creating Discord profile pictures.",
      "url": "https://www.easycropimage.com/discord-pfp-cropper",
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
      "name": "How to Crop Your Discord Avatar",
      "description": "Learn how to crop the perfect Discord avatar using our free online tool. Drag, zoom, and preview in real-time to create a perfect Discord PFP.",
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
          "name": "EasyCrop Discord PFP Cropper",
          "url": "https://www.easycropimage.com/discord-pfp-cropper"
        }
      ],
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Select Your Photo",
          "text": "Select your photo to our avatar cropper. All image formats are supported for maximum compatibility with Discord requirements."
        },
        {
          "@type": "HowToStep", 
          "position": 2,
          "name": "Drag and Zoom",
          "text": "Drag and zoom your photo in a fixed frame. Preview in real-time across four sizes to ensure your Discord avatar looks perfect at every resolution."
        },
        {
          "@type": "HowToStep",
          "position": 3, 
          "name": "Download Avatar",
          "text": "Choose circle, square, or both, and download secure, high-quality avatar files for Discord. Your PFP is ready to upload to Discord immediately."
        }
      ]
    }
  ];

  return (
    <>
      <main className="min-h-screen flex flex-col items-center px-2 pt-20 bg-white">
        <div className="w-full max-w-6xl flex flex-col items-center justify-center">
          <h1 className="text-2xl lg:text-3xl font-bold text-center mb-2">
            Discord PFP Cropper - Crop Your Perfect Avatar in Seconds
          </h1>
          <p className="text-sm lg:text-lg text-center">
            Select your image, adjust it in a fixed frame with real-time previews, and download a perfectly cropped avatar for Discord — fast, secure.
          </p>
        </div>
        <AvatarCropperPanel title="Discord PFP Cropper" />


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
