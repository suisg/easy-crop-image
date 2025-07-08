"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";

export default function ReSelectButton() {
  const inputRef = useRef<HTMLInputElement>(null);

  const saveToIndexedDBTemp = async (file: File): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
      const request = indexedDB.open('reselectTempStore', 1);
      
      request.onerror = () => reject(request.error);
      
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains('tempFiles')) {
          db.createObjectStore('tempFiles', { keyPath: 'id' });
        }
      };
      
      request.onsuccess = () => {
        const db = request.result;
        const transaction = db.transaction(['tempFiles'], 'readwrite');
        const store = transaction.objectStore('tempFiles');
        
        const tempData = {
          id: 'reselect-temp',
          file: file,
          fileName: file.name,
          fileType: file.type,
          fileSize: file.size,
          timestamp: Date.now()
        };
        
        const putRequest = store.put(tempData);
        
        putRequest.onsuccess = () => {
          console.log('Temp file saved to IndexedDB successfully');
          resolve();
        };
        
        putRequest.onerror = () => reject(putRequest.error);
      };
    });
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

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
      // Show loading indicator for large files
      const fileSizeMB = file.size / (1024 * 1024);
      if (fileSizeMB > 5) {
        console.log(`Processing large file (${fileSizeMB.toFixed(1)}MB), this may take a moment...`);
      }

      sessionStorage.setItem('reselect-refresh', 'true');
      
      await saveToIndexedDBTemp(file);
      
     
      window.location.reload();
      
    } catch (error) {
      console.error('Failed to process file:', error);
      
      if (error instanceof Error) {
        if (error.message.includes('quota') || error.message.includes('storage')) {
          alert('Storage quota exceeded. Please try with a smaller image or clear your browser data.');
        } else {
          alert(`Failed to process the image file: ${error.message}`);
        }
      } else {
        alert('Failed to process the image file. Please try again.');
      }
    }
  };

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
      <Button 
        className="w-full" 
        onClick={() => inputRef.current?.click()}
      >
        Select Another Image
      </Button>
    </>
  );
} 