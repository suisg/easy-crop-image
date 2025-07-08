import ImageUploader from "@/components/shared/ImageUploader";
import { Testimonials } from "@/components/shared/Testimonials";
import { FAQ } from "@/components/shared/FAQ";
import { HowItWorks, cropImageSteps } from "@/components/shared/HowItWorks";
import type { Metadata } from "next";
import WhyChoose from "@/components/shared/WhyChoose";
import { ShieldCheck, Gift, Rocket, LayoutGrid, UserX, Crop } from "lucide-react";
import { CTA } from "@/components/shared/CTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Image Cropper: Crop Image Online Fast - EasyCrop",
  description: "Crop images online with our free easy-to-use image cropper! Crop photos quickly and easily, resize JPG & PNG in your browser! No uploads, privacy secure & high quality!​",
  alternates: {
    canonical: "https://www.easycropimage.com/",
  }
};

const whyChooseData = {
  title: "Why Choose Our Image Cropper",
  subtitle: "Crop Image Instantly: Free, Private, and Effortless - Right in Your Browser",
  features: [
    {
      icon: ShieldCheck,
      headline: "Privacy First",
      description: "Your images never leave your device. All crop image actions happen right in your browser for total privacy."
    },
    {
      icon: Gift,
      headline: "Free Image Cropper",
      description: "No hidden costs, no subscription required, no watermarks. Use our free image cropper to crop image without paying a cent."
    },
    {
      icon: Rocket,
      headline: "Fast and Easy",
      description: "Crop image online instantly with just a few clicks. No learning curve, no waiting."
    },
    {
      icon: LayoutGrid,
      headline: "Preset Crop Aspect Ratios",
      description: "Choose from popular crop aspect ratios like 1:1, 9:16, 2:3, and more for Instagram, Pintrest, LinkedIn, presentations, or custom ratios."
    },
    {
      icon: UserX,
      headline: "No Download or Registration",
      description: "Crop your image instantly online, no software to install, no sign-ups, works on desktop and mobile devices."
    },
    {
      icon: Crop,
      headline: "Support for multiple formats",
      description: "Supports JPG, PNG, GIF, and WebP formats. You can crop images in any image format and export them in jpg, png, or webp."
    }
  ]
}

const testimonialsData = {
  title: "What Our Users Say",
  rating: 4.8,
  reviewCount: 284,
  testimonials: [
    {
      quote: "I needed to crop a few photos for a presentation. This tool was straightforward and didn't ask me to sign up or download anything.",
      author: "Mark S., Teacher",
      bgColor: "bg-blue-50"
    },
    {
      quote: "I like that my images stay on my computer. The cropping options are simple, and I could export in the format I wanted.",
      author: "Julia R., Small Business Owner",
      bgColor: "bg-green-50"
    },
    {
      quote: "The preset aspect ratios made it easy to get my images ready for Instagram. It worked well on my laptop and phone.",
      author: "Alex T., Student",
      bgColor: "bg-purple-50"
    }
  ]
}

const faqData = {
  title: "Frequently Asked Questions",
  faqs: [
    {
      question: "Do I need to upload my images to use this image cropper?",
      answer: "No, you can crop images directly in your browser. Our image cropper ensures your files never leave your device, so your privacy is always protected."
    },
    {
      question: "What image formats can I crop and export?",
      answer: "You can crop and export images as JPG, PNG, or WebP. The crop image tool supports these common formats for easy sharing and use."
    },
    {
      question: "Is there a limit on image file size or dimensions for cropping?",
      answer: (
        <>
          Yes, the image cropper supports files up to 20MB. If your image is larger, please{" "}
          <Link className="text-blue-500" href="/image-resizer">
            resize
          </Link>{" "}
          or compress it before you crop.
        </>
      )
    },
    {
      question: "Can I crop images to custom sizes or aspect ratios?",
      answer: "Absolutely. You can crop images by freely dragging to select the area, entering exact dimensions, or choosing from preset aspect ratios like 1:1, 16:9, 9:16, and 2:3."
    },
    {
      question: "Do I need to create an account or download any software to use the image cropper?",
      answer: "No account or software download is needed. Just open the image cropper online and start cropping your images right away."
    }
  ]
}

const ctaData = {
  title: "Start Cropping Your Images Today",
  description: "Ready to crop your image with professional results? Our free online photo editor makes it easy to adjust your photos and create the perfect composition. Whether you want to crop a single image or process multiple files, our tool provides the flexibility and quality you need.",
  subDescription: "Join thousands of users who trust our platform for their image editing needs. Experience the convenience of professional-grade cropping tools accessible from any device, anywhere, anytime.",
  subDescription2: "Crop images online free | Image editor | Photo cropper | Resize tool",
  buttonText: "Get Started Now"
}

export default function Home() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "EasyCrop - Free Online Image Cropper",
      "url": "https://www.easycropimage.com",
      "description": "Crop images online for free with our easy-to-use image cropper. Supports JPG, PNG, WebP formats with preset aspect ratios. No upload required, privacy-first.",
      "applicationCategory": "MultimediaApplication",
      "operatingSystem": "Web Browser",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "284",
        "bestRating": "5",
        "worstRating": "1"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Privacy First - Images never leave your device",
        "100% Free - No hidden costs, subscriptions, or watermarks",
        "Fast and Easy - Crop images instantly with just a few clicks",
        "Preset Crop Aspect Ratios - 1:1, 9:16, 2:3 and more for social media",
        "No Download or Registration - Instant online cropping",
        "Flexible Cropping & Export - Save as JPG, PNG, or WebP"
      ],
      "publisher": {
        "@type": "Organization",
        "name": "EasyCrop",
        "url": "https://www.easycropimage.com"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "EasyCrop",
      "url": "https://www.easycropimage.com",
      "description": "Free online image cropper and photo editing tools",
      "potentialAction": {
        "@type": "Action",
        "name": "Crop Image",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.easycropimage.com/crop"
        }
      },
      "publisher": {
        "@type": "Organization",
        "name": "EasyCrop",
        "url": "https://www.easycropimage.com"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "EasyCrop Image Cropper",
      "description": "Free online image cropper tool for cropping photos and images in your browser",
      "url": "https://www.easycropimage.com",
      "applicationCategory": "PhotoApplication",
      "operatingSystem": "Web Browser",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "284",
        "bestRating": "5",
        "worstRating": "1"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Crop Image Online",
      "description": "Learn how to crop images online for free using our easy-to-use image cropper tool. Perfect for social media, profiles, and professional use.",
      "image": "https://www.easycropimage.com/EasyCrop-image-cropper-demo.jpg",
      "totalTime": "PT2M",
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
          "name": "EasyCrop Image Cropper",
          "url": "https://www.easycropimage.com"
        }
      ],
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Select Image",
          "text": "Select or drag & drop your image on the homepage. All image formats are supported. After uploading, you'll be automatically redirected to the cropping interface."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Adjust Crop Frame",
          "text": "Choose a crop frame and adjust its size and position on the cropping page. You can select from preset aspect ratios like 1:1, 16:9, 9:16, or create a custom crop area by dragging the corners."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Crop Image",
          "text": "Crop your image and download it automatically. The cropped image can be saved in JPG, PNG, or WebP format with maintained quality."
        }
      ]
    }
  ]

  return (
    <>
      <main className="flex flex-col items-center justify-center pt-20">
        <section className="w-full">
          <div className="max-w-6xl mx-auto px-4 text-center ">
            <h1 className="text-2xl md:text-4xl font-bold  mb-2">
              Crop Image Online - Free Image Cropper Tool
            </h1>
            <p className="text-sm lg:text-lg">
              Easily crop an image online with our powerful crop tool. Perfect for JPG, PNG, GIF, and WebP formats.
            </p>
          </div>
        </section>

        <section className="w-full py-16">
          <ImageUploader destination="crop" />  
        </section>

        {/* Professional Image Cropping Introduction */}
        <section className="w-full py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              Professional Crop Tool to Crop an Image Online
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our crop image online tool allows you to crop photos quickly and efficiently. Whether you need to crop image for social media, resize for Instagram, Facebook, or YouTube, our online <Link href="/crop" className="text-blue-500">image cropper tool</Link> provides the perfect solution.
            </p>
          </div>
        </section>

        <WhyChoose {...whyChooseData} />

        <HowItWorks
          data={cropImageSteps}
          demoImage={{
            src: "/EasyCrop-image-cropper-demo.jpg",
            alt: "Demo of EasyCrop image cropper adjusting a puppy photo into a square 1:1 ratio for social media.",
          }}
        />

        {/* Advanced Image Editing Features */}
        <section className="w-full py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
              Advanced Image Editing Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Multiple Format Support</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our online photo editor supports various image formats including PNG, JPG, GIF, and WebP. The image cropper allows you to crop image files without worrying about format compatibility.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Aspect Ratio Control</h3>
                <p className="text-gray-700 leading-relaxed">
                  Choose from predefined aspect ratios perfect for social media platforms like Instagram, Facebook, Twitter, or YouTube. Our tool also supports custom ratios for specific requirements.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Quality Preservation</h3>
                <p className="text-gray-700 leading-relaxed">
                  Maintain optimal image quality while reducing file size. Our algorithm ensures your cropped images retain their clarity and sharpness.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Batch Processing</h3>
                <p className="text-gray-700 leading-relaxed">
                  Need to crop multiple images? Our batch processing feature is coming soon! You'll be able to process several photos at once, making it perfect for bulk image editing tasks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Perfect for Every Image Editing Need */}
        <section className="w-full py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
              Perfect for Every Image Cropping Need
            </h2>
            <p className="text-lg text-gray-700 text-center mb-8 max-w-4xl mx-auto">
              Whether you're a professional photographer, social media manager, or casual user, our free image cropper serves a variety of purposes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-lg font-semibold mb-3 text-gray-900">Social Media</p>
                <p className="text-gray-700">Create perfect thumbnails for Instagram, Facebook, Twitter posts</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-lg font-semibold mb-3 text-gray-900">Professional Use</p>
                <p className="text-gray-700">Crop a picture for business presentations or marketing materials</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-lg font-semibold mb-3 text-gray-900">Personal Projects</p>
                <p className="text-gray-700">Remove unwanted parts from family photos</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-lg font-semibold mb-3 text-gray-900">E-commerce</p>
                <p className="text-gray-700">Create consistent product images with uniform dimensions</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-lg font-semibold mb-3 text-gray-900">Blog Content</p>
                <p className="text-gray-700">Optimize images for web use while maintaining quality</p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Crop Templates */}
        <section className="w-full py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-6">
              Popular Crop Templates
            </h2>
            <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
              Save time with our pre-designed template options:
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Social Media Templates */}
              <div>
                <h3 className="text-xl font-semibold mb-6 text-gray-900 flex items-center">
                  <svg className="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                  </svg>
                  Social Media Templates
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">Instagram Square</span>
                      <span className="text-sm text-gray-500">1:1</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">Instagram Story</span>
                      <span className="text-sm text-gray-500">9:16</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">Facebook Cover</span>
                      <span className="text-sm text-gray-500">16:9</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">Twitter Header</span>
                      <span className="text-sm text-gray-500">3:1</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <Link href="/youtube-thumbnail-resizer" className="text-blue-500">YouTube Thumbnail</Link>
                      <span className="text-sm text-gray-500">16:9</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">LinkedIn Profile</span>
                      <span className="text-sm text-gray-500">1:1</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Print Templates */}
              <div>
                <h3 className="text-xl font-semibold mb-6 text-gray-900 flex items-center">
                  <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                  Print Templates
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">Standard Photo</span>
                      <span className="text-sm text-gray-500">4:3</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">Portrait</span>
                      <span className="text-sm text-gray-500">3:4</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">Landscape</span>
                      <span className="text-sm text-gray-500">16:9</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <Link href="/square-image" className="text-blue-500">Square Format</Link>
                      <span className="text-sm text-gray-500">1:1</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Streamline Your Photo Editing Workflow */}
        <section className="w-full py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                Streamline Your Photo Editing Workflow
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our tool is designed to make cropping a photo as efficient as possible
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">1</div>
                <p className="font-semibold text-gray-900 mb-2">Upload</p>
                <p className="text-gray-600 text-sm">Drag and drop your images</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">2</div>
                <p className="font-semibold text-gray-900 mb-2">Adjust</p>
                <p className="text-gray-600 text-sm">Fine-tune your selection</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">3</div>
                <p className="font-semibold text-gray-900 mb-2">Crop</p>
                <p className="text-gray-600 text-sm">Use the crop tool with precision controls</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">4</div>
                <p className="font-semibold text-gray-900 mb-2">Preview</p>
                <p className="text-gray-600 text-sm">See your desired image before saving</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">5</div>
                <p className="font-semibold text-gray-900 mb-2">Download</p>
                <p className="text-gray-600 text-sm">Get your professionally cropped image</p>
              </div>
            </div>
          </div>
        </section>

        <Testimonials testimonialsData={testimonialsData} />

        <FAQ faqData={faqData} />

        <CTA ctaData={ctaData} />

      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}