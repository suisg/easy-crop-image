"use client";

import { useEffect } from 'react';
import { useGlobalImageStore } from './globalImageStore';

/**
 * Custom hook to handle image restoration from storage
 * Consolidates the common image restore logic used across Panel components
 */
export function useImageRestore() {
  const { imageFile, imageUrl, imageName, _restoreFileFromStorage, checkPageChange } = useGlobalImageStore();

  // Restore image data on component mount
  useEffect(() => {
    console.log('Component mounted, checking for image data:', { 
      hasImageFile: !!imageFile, 
      hasImageUrl: !!imageUrl, 
      imageName,
      currentPath: window.location.pathname
    });
    
    // First check for page change logic
    checkPageChange();
    
    // If still no image after page change check, try to restore from storage
    setTimeout(() => {
      const currentState = useGlobalImageStore.getState();
      if (!currentState.imageFile && !currentState.imageUrl) {
        console.log('No image found after page change check, attempting to restore from storage...');
        _restoreFileFromStorage();
      }
    }, 50);
  }, []); // Only run once on component mount

  // Monitor restoration result
  useEffect(() => {
    if (imageFile && imageUrl) {
      console.log('Image successfully loaded:', { 
        fileName: imageFile.name, 
        fileSize: imageFile.size,
        imageName,
        currentPath: window.location.pathname
      });
    }
  }, [imageFile, imageUrl, imageName]);

  return { imageFile, imageUrl, imageName };
} 