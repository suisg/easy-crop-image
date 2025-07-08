import Cropper from "@/components/Cropper";
import { Suspense } from "react";
import type { Metadata } from "next";
import { HowItWorks, cropImageSteps } from "@/components/shared/HowItWorks";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Online Image Cropper - EasyCrop",
  description: "EasyCrop Image Cropper is a free online tool to crop your photos with precision. Select preset aspect ratio, drag to crop, and download locally!",
  alternates: {
    canonical: "https://www.easycropimage.com/crop",
  },
};

export default function CropPage() {

  return (
    <>
      <main className="flex flex-col items-center px-2 pt-20">
        <Suspense fallback={<div className="w-full mb-20 flex items-center justify-center h-96">Loading...</div>}>
          <Cropper />
        </Suspense>
        

        <HowItWorks data={cropImageSteps}/>

        <section className="max-w-5xl mx-auto py-18 px-2 text-gray-800">
          <h2 className="text-xl font-bold mb-3">Best Image Cropper Aspect Ratios for Social Media</h2>
          <p className="mb-4">Looking for the <Link className="text-blue-500" href="/">best image cropper</Link>settings for social media? Here's a quick guide to the most popular aspect ratios for each major platform. Using the correct aspect ratio ensures your images look professional, load quickly, and get more engagement. Optimize your content with these image cropper tips:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><b>Pinterest:</b> Use a <b>2:3</b> aspect ratio (e.g., 1000×1500px) for standard Pins. This vertical format stands out and is recommended by Pinterest for maximum visibility.</li>
            <li><b>X (Twitter):</b> <b>16:9</b> is the most common for single images and videos in the feed (e.g., 1600×900px). Perfect for sharing wide visuals and previews.</li>
            <li><b>Facebook:</b> <b>4:5</b> is ideal for vertical feed posts (e.g., 1080×1350px). This aspect ratio ensures your images take up more screen space and attract more attention in the feed.</li>
            <li><b>Instagram:</b> <b>1:1</b> is the classic <Link className="text-blue-500" href="/square-image">square</Link> post (e.g., 1080×1080px), and <b>4:5</b> (e.g., 1080×1350px) is perfect for vertical images, maximizing visual impact in the feed and Stories.</li>
            <li><b>LinkedIn:</b> <b>4:5</b> works well for vertical images in posts (e.g., 1080×1350px), helping your content stand out on mobile devices.</li>
            <li><b>YouTube:</b> <b>16:9</b> is required for <Link className="text-blue-500" href="/youtube-thumbnail-resizer">video thumbnails</Link> and covers (e.g., 1280×720px), maximizing visibility across all devices.</li>
            <li><b>TikTok:</b> <b>9:16</b> is the essential vertical format for videos and cover images (e.g., 1080×1920px), ensuring full-screen display and maximum engagement on TikTok.</li>
          </ul>
          <p className="mb-2">For best results, always use high-resolution images (at least 1200px wide) and compress them for faster load times. An optimized image cropper helps you quickly resize and crop your visuals for every platform, boosting both your SEO and social media performance.</p>
        </section>
     
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
} 