"use client";

import { useRef, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { useGlobalImageStore } from "@/lib/globalImageStore";

interface ImageUploaderProps {
  destination: "crop" | "square" | "circle" | "resize" | "avatar" | "instagram-grid";
  shape?: "rectangle" | "circle" | "square";
  className?: string;
}

export default function ImageUploader({
  destination,
  shape = "rectangle",
  className = ""
}: ImageUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { setImage } = useGlobalImageStore();

  const handleFile = async (file: File) => {
    // Check file type first
    if (!file.type.startsWith("image/")) {
      alert("Only image files are allowed");
      return;
    }
    
    // Check file size (20MB limit)
    const maxSizeInBytes = 20 * 1024 * 1024; // 20MB
    if (file.size > maxSizeInBytes) {
      const fileSizeMB = (file.size / (1024 * 1024)).toFixed(1);
      alert(`File size (${fileSizeMB}MB) exceeds the 20MB limit. Please choose a smaller image.`);
      return;
    }

    try {

      if (typeof window === 'undefined') {
        throw new Error('Window object is not available');
      }

      if (!window.URL || !window.URL.createObjectURL) {
        throw new Error('URL.createObjectURL is not supported');
      }

      // Determine tool type based on destination
      const toolType = destination === "circle" ? "crop" : destination;
      
      setImage(file, toolType);
      
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Page navigation logic
      switch (destination) {
        case "crop":
          sessionStorage.setItem('expected-navigation', 'true');
          router.push("/crop");
          break;
        case "circle":     
          sessionStorage.setItem('expected-navigation', 'true');
          router.push("/crop?mode=circle");
          break;
        case "square":
        case "resize":
        case "avatar":
        case "instagram-grid":
          break;
      }
    } catch (error) {
      console.error('Failed to process file:', error);
    }
  };

  const handleDemoImage = async (imagePath: string, imageName: string) => {
    try {
      // Convert demo image to File object
      const response = await fetch(imagePath);
      const blob = await response.blob();
      const file = new File([blob], `${imageName}.jpg`, { type: blob.type });
      
      // Process demo image using handleFile
      await handleFile(file);
    } catch (error) {
      console.error('Failed to load demo image:', error);
    }
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();  
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  const uploadArea = (
    <div
      className={`border-2 border-dashed border-blue-300 bg-blue-100 hover:bg-blue-200 flex flex-col items-center justify-center cursor-pointer transition relative ${
        shape === "circle" ? "w-80 h-80 rounded-full" :
        shape === "square" ? "w-80 h-80" :
        "w-full h-80"
      } ${className}`}
      onClick={() => inputRef.current?.click()}
      onDrop={onDrop}
      onDragOver={(e) => e.preventDefault()}
      tabIndex={0}
      role="button"
      aria-label="Upload image"
    >
      <ImageIcon className="w-8 h-8 text-blue-400 mb-4" />
      <div className="text-lg mb-4 text-gray-700 text-center">Drag and drop an image here</div>
      <Button className="bg-blue-500 text-white font-semibold hover:bg-blue-700 text-sm px-4 py-2">
        Select Image
      </Button>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={onInputChange}
      />
    </div>
  );

  const demoSection = (
    <div className="w-full mt-6">
      <div className="text-center mb-4">
        <p className="text-gray-600 text-sm">Or try editing with EasyCrop sample images:</p>
      </div>
      <div className="flex justify-center gap-4">
        <div 
          className="cursor-pointer group"
          onClick={() => handleDemoImage('/try-female-portrait-editing-EasyCrop.jpg', 'try-female-portrait-editing-EasyCrop')}
        >
          <div className="w-20 h-30 rounded-lg overflow-hidden border-2 border-gray-200 group-hover:border-blue-400 transition-colors">
            <Image 
              src="/try-female-portrait-editing-EasyCrop.jpg" 
              alt="Female portrait for trying EasyCrop image editing tools including crop, resize, and grid maker"
              width={1024}
              height={1536}
              className="object-cover group-hover:scale-105 transition-transform"
            />
          </div>
        </div>
        <div 
          className="cursor-pointer group"
          onClick={() => handleDemoImage('/try-male-portrait-editing-EasyCrop.jpg', 'try-male-portrait-editing-EasyCrop')}
        >
          <div className="w-20 h-30 rounded-lg overflow-hidden border-2 border-gray-200 group-hover:border-blue-400 transition-colors">
            <Image 
              src="/try-male-portrait-editing-EasyCrop.jpg" 
              alt="Male portrait for trying EasyCrop image editing tools including crop, resize, and grid maker"
              width={1024}
              height={1536}
              className="object-cover group-hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-lg mx-auto flex flex-col items-center justify-center px-4">
      {uploadArea}
      {demoSection}
    </div>
  );
} 