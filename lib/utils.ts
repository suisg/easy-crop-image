import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Common utility functions

/**
 * Clamp a value between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

/**
 * Get clean filename without extension
 */
export function getCleanFileName(fileName: string): string {
  return fileName.replace(/\.[^/.]+$/, "");
}

/**
 * Check if file is a valid image
 */
export function isValidImageFile(file: File): boolean {
  // Check file type
  if (!file.type.startsWith("image/")) {
    return false;
  }
  
  // Check file size (20MB limit)
  const maxSizeInBytes = 20 * 1024 * 1024; // 20MB
  if (file.size > maxSizeInBytes) {
    return false;
  }
  
  return true;
}

/**
 * Convert file to data URL
 */
export function fileToDataURL(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target?.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
