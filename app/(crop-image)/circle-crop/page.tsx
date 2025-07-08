import ImageUploader from "@/components/shared/ImageUploader";
import CircleContent from "./CircleContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Online Circle Cropper: Crop Images into Perfect Circles - EasyCrop",
  description: "Easily crop your images into perfect circles online with our free circle cropper. No registration or download needed. Create round profile photos and avatars with transparent backgrounds in seconds.",
  alternates: {
    canonical: "https://www.easycropimage.com/circle-crop",
  },
};

export default function CircleCropPage() {


  return (
    <>
      <main className="flex flex-col items-center justify-center pt-20">
        <section className="w-full">
          <div className="max-w-6xl mx-auto text-center px-4">
            <h1 className="text-2xl lg:text-3xl font-bold mb-2">
            Circle Crop Image online for free - Crop Circle Image Instantly!
            </h1>
            <p className="text-sm lg:text-lg">
              Create stunning circular images right in your browser for any profile or project. No registration, no uploads, just instant, flawless results!
            </p>
          </div>
        </section>

        <section className="w-full py-16">
          <ImageUploader destination="circle" shape="circle" />
        </section>

        <CircleContent />

      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}