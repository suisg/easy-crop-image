import {  Circle, Diameter, Gift,  Rocket, ShieldCheck, UserX, Lightbulb, Target, Image, Palette } from "lucide-react"
import WhyChoose from "@/components/shared/WhyChoose"
import { HowItWorks } from "@/components/shared/HowItWorks"
import { Testimonials } from "@/components/shared/Testimonials"
import { FAQ } from "@/components/shared/FAQ"
import { CTA } from "@/components/shared/CTA"
import Link from "next/link"

const whyChooseFeatures =
{
  title: "Free, Effortless, and Precise Circle Crop",
  subtitle: (
    <>
      Perfect circle crops for{" "}
      <Link className="text-blue-500" href="/avatar-cropper">
        avatars
      </Link>{" "}
      and social media, fast and secure in your browser
    </>
  ),
  features: [
    {
      icon: ShieldCheck,
      headline: "Privacy First Circle Crop",
      description: "Crop image into circle directly in your browser, your photo never leave your device, ensuring total privacy at every step."
    },
    {
      icon: Gift,
      headline: "100% Free",
      description: "Crop and download unlimited circle images with no fees, subscriptions, or watermarks."
    },
    {
      icon: Circle,
      headline: "Transparent Background",
      description: "Save circle crops as PNGs with transparent backgrounds, ideal for Instagram, Discord, or designs."
    },
    {
        icon: Rocket,
      headline: "Fast and Intuitive",
      description: "Circle crop your image in seconds, just upload, drag, and crop. No confusing steps or technical skills required."
    },
    {
      icon: Diameter,
      headline: "Custom Diameter and Position",
      description: "Set the exact diameter or pixel size for your circle crop, and precisely position the crop area for the best composition."
    },
    {
      icon: UserX,
      headline: "No Download or Registration",
      description: "Crop a circle image instantly online, no software to install, no sign-ups, and no personal information required."
    },
  ]
}

const howToSteps = {
  title: "How to Crop Your Image into a Perfect Circle",
  steps: [
    {
      title: "1. Select Image",
      desc: "Select or drag & drop your image.",
    },
    {
      title: "2. Circle Crop",
      desc: "Move and resize the circle to select the area you want.",
    },
    {
      title: "3. Download",
      desc: "Save your new circle image as a PNG (transparent background).",
    },
  ]
}

const testimonialsData = {
  title: "What Our Users Say",
  testimonials: [
    {
      quote: (
        <>
          I needed a quick way to crop my{" "}
          <Link className="text-blue-500" href="/discord-pfp-cropper">
            profile photo
          </Link>{" "}
          into a perfect circle for LinkedIn. The circle cropper was simple, and I liked that I could export the image with a transparent background—no extra editing needed.
        </>
      ),
      author: "Emily L., Marketing Specialist",
      bgColor: "bg-blue-50",
    },
    {
      quote: "Most image crop tools only do rectangles, but this circle cropper let me easily adjust the size and position for my website avatar. The process was fast, and I didn't have to register or download anything.",
      author: "Jason M., Web Developer",
      bgColor: "bg-blue-50",
    },
    {
      quote: "I use the circle crop feature to make round product images for my online shop. It's great that my images stay private and I can get high-quality PNG files every time.",
      author: "Sarah P., Small Business Owner",
      bgColor: "bg-blue-50",
    },
  ]
  }

  const faqData = {
    title: "Frequently Asked Questions",
    faqs: [
      {
        question: "Can I crop my image into a perfect circle with this tool?",
        answer: "Yes, our circle cropper lets you easily crop images into a perfect circle. You can drag and resize the circular frame to select exactly the area you want."
      },
      {
        question: "Will my circle-cropped image have a transparent background?",
        answer: "Absolutely. When you crop your image into a circle, you can download it as a PNG file with a transparent background—ideal for social media avatars, websites, or design projects."
      },
      {
        question: "Is it necessary to create an account or download software to use the circle cropper?",
        answer: "No registration or software download is required. You can use the circle crop image tool instantly online, right in your browser."
      },
      {
        question: "What image formats are supported for circle cropping?",
        answer: "You can upload and crop JPG, PNG, or WEBP images. The cropped circle image can be downloaded as a high-quality PNG (with transparency) or JPG file."
      },
      {
        question: "Is my image safe and private when I use the circle cropper?",
        answer: "Yes, all cropping happens locally in your browser. Your images never leave your device, so your privacy is always protected when you crop images online."
      }
    ]
  }

const ctaData = {
  title: "Ready to Crop a picture?",
  description: "Don't wait to create stunning circular images! Our free online circle crop tool makes round image cropping fast, easy, and professional. Whether you're enhancing your social media profiles, designing logos, or creating marketing visuals, our circle crop tool has you covered. No downloads, no sign-ups, no hassle—just flawless circle crop results in seconds. Try it now and see the difference a circle crop can make!",
  buttonText: "Start Circle Cropping Now"
}

const expertTipsData = {
  title: "Expert Tips for Perfect Circle Crop",
  tips: [
    {
      icon: Target,
      title: "Keep Your Subject Front and Center",
      description: "Position the main focus—like a face or logo—right in the middle of the circle. Use drag-and-drop feature to line it up perfectly, so nothing important gets cropped out."
    },
    {
      icon: Image,
      title: "Go High-Res for Sharp Results",
      description: "Start with a high-resolution image to keep your circle crop crisp and clear, even on high-definition screens. Larger images give you better quality after cropping."
    },
    {
      icon: Palette,
      title: "Choose the Right Format",
      description: "Pick PNG for a transparent background, ideal for logos or overlays. Go with JPEG for vibrant photos when you don't need transparency. EasyCrop supports both for free!"
    },
    {
      icon: Lightbulb,
      title: "Create a Unified Look",
      description: "For galleries, like team photos or product displays, keep all circle crops the same size and style. Consistent diameters and borders make your visuals pop with a professional vibe."
    }
  ]
}

export default function CircleContent() {
  return (
    <>
      {/* why choose section */}
      <WhyChoose {...whyChooseFeatures} />

      {/* How To Section */}
      <HowItWorks data={howToSteps} />

      {/* Expert Tips Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {expertTipsData.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertTipsData.tips.map((tip, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4 mx-auto">
                  <tip.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">
                  {tip.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
       
       {/* Testimonials Section */}
       <Testimonials testimonialsData={testimonialsData} />

      {/* FAQ Section */}
      <FAQ faqData={faqData} />

      {/* Final CTA Section */}
      <CTA ctaData={ctaData} />

    </>
  )
}     
