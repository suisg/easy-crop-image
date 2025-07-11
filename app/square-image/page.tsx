import type { Metadata } from "next";
import SquareImagePanel from "@/components/squareImage/SquareImagePanel";
import SquareContent from "./SquareContent";


export const metadata: Metadata = {
  title: "Make Image Square Online, Fast Square Photo for Instagram & Social Media - Easycrop",
  description: " Instantly make image square for Instagram, social media, or profile photos. Resize and convert any photo to a perfect square online - quick, easy, and free.",
  alternates: {
    canonical: "https://www.easycropimage.com/square-image",
  },
};

export default function SquareImage() {

  return (
    <>
      <main className="min-h-screen flex flex-col items-center px-2 pt-20 bg-white">
        <div className="w-full max-w-6xl flex flex-col items-center justify-center">
          <h1 className="text-2xl lg:text-3xl font-bold text-center mb-2">
            Make Image Square in Seconds, Your Way!
          </h1>
          <p className="text-sm lg:text-lg text-center">
          Easily create square images with blur or color backgrounds, resize scaling, or manual cropping—fast and flexible!
          </p>
        </div>
        <SquareImagePanel />

        <SquareContent />
      </main>
    
    </>
  );
}