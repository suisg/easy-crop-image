import InstagramGridMakerPanel from "@/components/InstagramGridMakerPanel";
import type { Metadata } from "next";
import PageContent from "@/components/shared/PageContent";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Instagram Grid Maker - Create Stunning Grids for Instagram - EasyCrop",
  description: "Create a stunning Instagram grid with our easy online tool! Split images, make carousels, customize your layout and preview your feed. Free grid maker! ",
  alternates: {
    canonical: "https://www.easycropimage.com/instagram-grid-maker",
  },
};

const pageContentData = {

  whyUseData: {
    whyUseTitle: "Why Your Instagram Grid Layout Matters Now More Than Ever",
    whyUseDescription: "Instagram has officially switched to a 3:4 grid ratio on profile pages, revolutionizing how your content displays. Our image splitter tool helps you adapt to this change while maintaining your creative vision.",
    features: [
      {
        image: "/create-instagram-grid-posts.jpg",
        alt: "Create Stunning Grid Posts Without Photoshop",
        title: "Create Stunning Grid Posts Without Photoshop",
        description: "Forget complicated photo editing software. Our user-friendly tool lets you upload any image and instantly transform it into a beautiful Instagram grid or carousel in seconds. No design skills required!"
      },
      {
        image: "/instagram-grid-preview.jpg",
        alt: "Preview Before You Post",
        title: "Preview Before You Post",
        description: "Visualize exactly how your split images will appear on your Instagram profile. Our preview feature eliminates guesswork and ensures your grid layout looks perfect before publishing."
      },
      {
        image: "/instagram-grid-planner.jpg",
        alt: "Save Time Planning Your Feed",
        title: "Save Time Planning Your Feed",
        description: "Streamline your content creation process with our intuitive Instagram feed planner. Create weeks of content in minutes rather than hours spent in Photoshop or other apps."
      }
    ]
  },

  howItWorksData: {
    title: "How Our Instagram Grid Maker Works",
    steps: [
      {
        title: "1. Upload Your Image",
        desc: "Simply drag and drop your photo into our tool. Our grid maker works with any image dimension.",
      },
      {
        title: "2. Customize Your Grid Layout",
        desc: "Select your preferred grid configuration - preset grid item aspect ratio and custom layout up to 10×10. Our tool automatically adapts to Instagram's new 4:5 ratio display, ensuring your content looks perfect.",
      },
      {
        title: "3. Download",
        desc: "Download your split images individually or as a package with a single click. Then upload to Instagram in reverse order for a seamless grid that will leave an impression on your followers.",
      },
    ]
  },

  featuresData: {
    title: "5 Powerful Features That Make Our Grid Maker Stand Out",
    features: [
      {
        title: "Flexible Aspect Ratio Options for Perfect Instagram Photos",
        description: "Choose from multiple preset aspect ratios (1:1, 3:4, 4:5, 2:1, 9:16) or customize your own to match Instagram's latest display rules. This ensures your split photos maintain their quality without stretching or distortion."
      },
      {
        title: "Highly Customizable Grid Templates",
        description: "Create your ideal layout with adjustable rows and columns (up to 10×10). Perfect for brands, artists, and content creators who need versatile Instagram grid posts that stand out."
      },
      {
        title: "Adjustable Grid Lines for Visual Clarity",
        description: "Customize grid line colors to ensure your split images maintain visual coherence. This seemingly small feature makes a huge difference in the final appearance of your Instagram carousel slides."
      },
      {
        title: "Precise Position Control",
        description: "Our grid maker and image splitter lets you adjust grid position to keep important elements in frame. Ensure your subject stays perfectly centered across multiple posts."
      },
      {
        title: "Flexible Download Options",
        description: "Choose between downloading images individually or as a complete package. This feature streamlines your workflow whether you're managing your own account or multiple social media accounts."
      }
    ]
  },

  testimonialsData: {
    title: "What Our Users Say",
    testimonials: [
      {
        quote: (
          <>
            After Instagram killed the{" "}
            <Link className="text-blue-500" href="/square-image">
              square
            </Link>{" "}
            grid, I was lost until I found this tool. The 4:5 layout preview feature saved my feed's aesthetic completely!
          </>
        ),
        author: "- Sarah K., Lifestyle Influencer",
        bgColor: "bg-blue-50"
      },
      {
        quote: "The aspect ratio options made adapting to Instagram's new 3:4 grid incredibly simple. I can create stunning Instagram grids in minutes now.",
        author: "- Mark T., Professional Photographer",
        bgColor: "bg-green-50"
      },
      {
        quote: "I love how I can crop and resize my images exactly how I want them. This image splitter tool is essential for planning your feed in 2025.",
        author: "- Jessica M., Social Media Manager",
        bgColor: "bg-purple-50"
      }
    ]
  },

  faqData: {
    title: "Frequently Asked Questions",
    faqs: [
      {
        question: "How does the Instagram grid maker adapt to Instagram's new 3:4 ratio?",
        answer: "Our tool has been fully updated to accommodate Instagram's January 2025 image size change. You can now create grid posts that perfectly align with the new display format while maintaining image quality.",
      },
      {
        question: "Can I create both grid and carousel posts with this tool?",
        answer: "Yes! Our Instagram grid or carousel generator works for both types of content. Split your image into a grid for your profile or create compelling carousel slides from a single image.",
      },
      {
        question: "Do I need to create an account to use the grid maker?",
        answer: "No account needed! Our free Instagram grid maker is accessible instantly. Just upload, customize, and download.",
      },
      {
        question: "How is this different from using Canva or Photoshop?",
        answer: "Unlike complex design tools, our Instagram grid maker is specifically designed for creating grid posts. It's faster, simpler, and optimized for Instagram's specific requirements without the learning curve.",
      },
      {
        question: "Will my split images look seamless on Instagram?",
        answer: "Absolutely. Our tool ensures perfectly aligned edges so your split photos create a seamless final image when posted correctly.",
      }
    ]
  },

  ctaData: {
    title: "Start Creating Your Perfect Instagram Grid Today",
    description: "Ready to transform your Instagram profile? Our professional grid maker works with any image dimension, allows complete customization, and adapts perfectly to Instagram's new 3:4 grid ratio.",
    subDescription: "No more struggling with extra apps or complicated editing software. Create stunning Instagram grids that capture attention and elevate your social media presence today!",
    buttonText: "Try Our Instagram Grid Maker Now"
  }
};

export default function InstagramGridMaker() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "EasyCrop - Instagram Grid Maker",
      "url": "https://www.easycropimage.com/instagram-grid-maker",
      "description": "Create stunning Instagram grids with our easy online tool! Split images, make carousels, customize your layout and preview your feed. Perfect for Instagram's new 3:4 ratio.",
      "applicationCategory": "MultimediaApplication",
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Flexible Aspect Ratio Options - Multiple preset ratios including Instagram's new 4:5",
        "Highly Customizable Grid Templates - Up to 10×10 grid layouts",
        "Adjustable Grid Lines for Visual Clarity - Customize colors for coherence",
        "Precise Position Control - Keep important elements perfectly centered",
        "Flexible Download Options - Individual or package downloads",
        "Instagram 3:4 Ratio Optimization - Fully updated for 2025 changes"
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
      "name": "Instagram Grid Maker",
      "description": "Professional Instagram grid maker and image splitter tool. Create stunning grid layouts and carousel posts optimized for Instagram's new 3:4 ratio display.",
      "url": "https://www.easycropimage.com/instagram-grid-maker",
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
      "name": "How Our Instagram Grid Maker Works",
      "description": "Learn how to create stunning Instagram grids and carousel posts using our professional grid maker. Split images and customize layouts for perfect Instagram profiles.",
      "totalTime": "PT3M",
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
          "name": "EasyCrop Instagram Grid Maker",
          "url": "https://www.easycropimage.com/instagram-grid-maker"
        }
      ],
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Upload Your Image",
          "text": "Simply drag and drop your photo into our tool. Our grid maker works with any image dimension and supports all image formats for maximum compatibility."
        },
        {
          "@type": "HowToStep", 
          "position": 2,
          "name": "Customize Your Grid Layout",
          "text": "Select your preferred grid configuration - preset grid item aspect ratio and custom layout up to 10×10. Our tool automatically adapts to Instagram's new 4:5 ratio display, ensuring your content looks perfect."
        },
        {
          "@type": "HowToStep",
          "position": 3, 
          "name": "Download",
          "text": "Download your split images individually or as a package with a single click. Then upload to Instagram in reverse order for a seamless grid that will leave an impression on your followers."
        }
      ]
    }
  ];

  return (
    <>
      <main className="flex flex-col items-center pt-20 bg-white">
        <div className="w-full max-w-6xl flex flex-col items-center justify-center">
          <h1 className="text-2xl lg:text-3xl font-bold text-center mb-2">
            Instagram Grid Maker: Create Stunning Layouts for Your Profile
          </h1>
          <p className="text-sm lg:text-lg text-center mb-4">
            Professional Instagram Grid Maker | Split Photos Easily | Perfect for the Instagram's New grid ratio introduced in 2025
          </p>
        </div>
        <InstagramGridMakerPanel />

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