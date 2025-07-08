import { create } from 'zustand';
import { DimensionUnit, ImageFormat, ProcessingMode, ResizeBase, AspectRatio } from './constants';
// Tool-specific data types
interface CropData {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface SquareData {
  processingMode: ProcessingMode;
  backgroundColor: string;
  blurAmount: number;
  resizeBase: ResizeBase;
}

interface ResizeData {
  width: number;
  height: number;
  unit: DimensionUnit;
  dpi: number;
  format: ImageFormat;
  quality: number;
  cropArea: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

interface AvatarData {
  x: number;
  y: number;
  size: number;
  scale: number;
  cropShape: 'circle' | 'square' | 'both';
  showGuideline: boolean;
}

interface InstagramGridData {
  aspectRatio: AspectRatio;
  customRatio?: { width: number; height: number };
  rows: number;
  cols: number;
  processedImages: Blob[];
  previewUrl?: string;
}

// Storage utility functions - All using IndexedDB for better performance and larger capacity
const saveImageToStorage = async (file: File, imageName: string) => {
  return saveToIndexedDB(file, imageName);
};

// Save to IndexedDB
const saveToIndexedDB = async (file: File, imageName: string): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    if (!window.indexedDB) {
      console.error('IndexedDB is not supported in this environment');
      reject(new Error('IndexedDB is not supported'));
      return;
    }

    const request = indexedDB.open('globalImageStore', 1);
    
    request.onerror = () => {
      console.error('IndexedDB open error:', request.error);
      reject(request.error);
    };
    
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains('images')) {
        db.createObjectStore('images', { keyPath: 'id' });
      }
    };
    
    request.onsuccess = () => {
      try {
        const db = request.result;
        const transaction = db.transaction(['images'], 'readwrite');
        const store = transaction.objectStore('images');
        
        const imageData = {
          id: 'current',
          imageName,
          file: file,
          fileName: file.name,
          fileType: file.type,
          fileSize: file.size,
          storageType: 'indexedDB',
          currentPath: window.location.pathname,
          timestamp: Date.now()
        };
        
        const putRequest = store.put(imageData);
        
        putRequest.onsuccess = () => {
          try {
            // Store lightweight metadata in sessionStorage for quick access
            sessionStorage.setItem('globalImageStore-imageData', JSON.stringify({
              imageName,
              fileName: file.name,
              fileType: file.type,
              fileSize: file.size,
              storageType: 'indexedDB',
              currentPath: window.location.pathname,
              timestamp: Date.now()
            }));
            console.log('Image saved successfully to IndexedDB');
            resolve();
          } catch (sessionError) {
            console.error('SessionStorage error:', sessionError);
            
            resolve();
          }
        };
        
        putRequest.onerror = () => {
          console.error('IndexedDB put error:', putRequest.error);
          reject(putRequest.error);
        };

        transaction.onerror = () => {
          console.error('IndexedDB transaction error:', transaction.error);
          reject(transaction.error);
        };
      } catch (error) {
        console.error('IndexedDB operation error:', error);
        reject(error);
      }
    };
  });
};

const loadImageFromStorage = async (): Promise<{ file: File; imageName: string } | null> => {
  try {
    const metaDataStr = sessionStorage.getItem('globalImageStore-imageData');
    if (!metaDataStr) {
      console.log('No metadata found in sessionStorage');
      return null;
    }
    
    const metaData = JSON.parse(metaDataStr);
    console.log('Loading image from storage, metadata:', metaData);
    
    // Check if this is an expected navigation (upload triggered)
    const isExpectedNavigation = sessionStorage.getItem('expected-navigation') === 'true';
    
    if (isExpectedNavigation) {
      // Upload triggered navigation, clear flag and keep image
      sessionStorage.removeItem('expected-navigation');
      console.log('Expected navigation detected, keeping image and updating path');
      
      // Update stored path to current path
      metaData.currentPath = window.location.pathname;
      sessionStorage.setItem('globalImageStore-imageData', JSON.stringify(metaData));
      
      // Update IndexedDB as well
      updateIndexedDBPath(window.location.pathname);
      
      // Direct load from storage without further checks
      if (metaData.storageType === 'indexedDB') {
        console.log('Loading from IndexedDB for expected navigation');
        return loadFromIndexedDB();
      }
    } else {
      const supportedPaths = ['/', '/crop', '/circle-crop', '/square-image', '/resize-image-to-1920x1080', '/3000x3000-image-converter', '/512x512-image-converter', '/avatar-cropper'];
      const currentPath = window.location.pathname;
      const storedPath = metaData.currentPath;
      
      console.log('Checking page navigation:', { currentPath, storedPath, isSupported: supportedPaths.includes(currentPath) });
      

      if (supportedPaths.includes(currentPath) && supportedPaths.includes(storedPath)) {
        console.log(`Navigation between supported pages: ${storedPath} -> ${currentPath}, keeping image`);
        metaData.currentPath = currentPath;
        sessionStorage.setItem('globalImageStore-imageData', JSON.stringify(metaData));
        updateIndexedDBPath(currentPath);
      } else if (metaData.currentPath && metaData.currentPath !== window.location.pathname && !supportedPaths.includes(currentPath)) {
        console.log(`Page changed to unsupported page from ${metaData.currentPath} to ${window.location.pathname}. Clearing image.`);
        clearImageStorage();
        return null;
      }
    }
    
    // All images are now stored in IndexedDB
    if (metaData.storageType === 'indexedDB') {
      console.log('Loading from IndexedDB');
      return loadFromIndexedDB();
    }
    
    // Legacy support: if somehow sessionStorage data exists, migrate to IndexedDB
    if (metaData.storageType === 'sessionStorage' && metaData.imageBase64) {
      console.log('Migrating legacy sessionStorage data to IndexedDB...');
      try {
        const response = await fetch(metaData.imageBase64);
        const blob = await response.blob();
        const file = new File([blob], metaData.fileName || `${metaData.imageName}.jpg`, {
          type: metaData.fileType || 'image/jpeg'
        });
        
        // Save to IndexedDB and update metadata
        await saveToIndexedDB(file, metaData.imageName);
        return { file, imageName: metaData.imageName };
      } catch (error) {
        console.error('Failed to migrate legacy data:', error);
        return null;
      }
    }
    
    console.log('No valid storage type found');
    return null;
  } catch (error) {
    console.error('Failed to load image from storage:', error);
    return null;
  }
};

// Helper function to load from IndexedDB
const loadFromIndexedDB = async (): Promise<{ file: File; imageName: string } | null> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('globalImageStore', 1);
    
    request.onerror = () => reject(request.error);
    
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction(['images'], 'readonly');
      const store = transaction.objectStore('images');
      const getRequest = store.get('current');
      
      getRequest.onsuccess = () => {
        const result = getRequest.result;
        if (result && result.file) {
          resolve({ file: result.file, imageName: result.imageName });
        } else {
          resolve(null);
        }
      };
      
      getRequest.onerror = () => reject(getRequest.error);
    };
  });
};

// Helper function to update IndexedDB path
const updateIndexedDBPath = async (newPath: string) => {
  const request = indexedDB.open('globalImageStore', 1);
  request.onsuccess = () => {
    const db = request.result;
    const transaction = db.transaction(['images'], 'readwrite');
    const store = transaction.objectStore('images');
    const getRequest = store.get('current');
    
    getRequest.onsuccess = () => {
      const result = getRequest.result;
      if (result) {
        result.currentPath = newPath;
        result.timestamp = Date.now();
        store.put(result);
      }
    };
  };
};

const clearImageStorage = () => {
  // Clear sessionStorage
  sessionStorage.removeItem('globalImageStore-imageData');
  
  // Clear IndexedDB
  const request = indexedDB.open('globalImageStore', 1);
  request.onsuccess = () => {
    const db = request.result;
    const transaction = db.transaction(['images'], 'readwrite');
    const store = transaction.objectStore('images');
    store.delete('current');
  };
};

// Helper function to load temp file from IndexedDB
const loadTempFileFromIndexedDB = async (): Promise<File | null> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('reselectTempStore', 1);
    
    request.onerror = () => reject(request.error);
    
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction(['tempFiles'], 'readonly');
      const store = transaction.objectStore('tempFiles');
      const getRequest = store.get('reselect-temp');
      
      getRequest.onsuccess = () => {
        const result = getRequest.result;
        if (result && result.file) {
          // Clear the temp data after successful retrieval
          const deleteTransaction = db.transaction(['tempFiles'], 'readwrite');
          const deleteStore = deleteTransaction.objectStore('tempFiles');
          deleteStore.delete('reselect-temp');
          
          resolve(result.file);
        } else {
          resolve(null);
        }
      };
      
      getRequest.onerror = () => reject(getRequest.error);
    };
  });
};

// Detect page refresh and clear image data
const setupPageRefreshDetection = () => {
  if (typeof window === 'undefined') return;
  
  // Check if this is a ReSelectButton refresh
  const isReselectRefresh = sessionStorage.getItem('reselect-refresh') === 'true';
  
  if (isReselectRefresh) {
    // This is a ReSelectButton refresh, check for new file in IndexedDB
    console.log('ReSelectButton refresh detected');
    sessionStorage.removeItem('reselect-refresh');
    
    loadTempFileFromIndexedDB()
      .then(file => {
        if (file) {
          console.log('Found temp file in IndexedDB, loading...');
          
          // Set the new image using the global store
          const store = useGlobalImageStore.getState();
          store.setImage(file);
          
          console.log('ReSelectButton new file loaded successfully');
        } else {
          console.log('No temp file found in IndexedDB');
        }
      })
      .catch(error => {
        console.error('Failed to load temp file from IndexedDB:', error);
      });
    
    return;
  }
  
  // Use performance.navigation.type to detect manual refresh
  let isManualRefresh = false;
  
  if (performance.getEntriesByType) {
    const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
    if (navEntries.length > 0) {
      isManualRefresh = navEntries[0].type === 'reload';
    }
  } else if (performance.navigation) {
    // Fallback for older browsers
    isManualRefresh = performance.navigation.type === performance.navigation.TYPE_RELOAD;
  }
  
  if (isManualRefresh) {
    // This is a manual page refresh, clear image data
    console.log('Manual page refresh detected, clearing image data');
    clearImageStorage();
    // Set a flag to prevent restoration
    sessionStorage.setItem('skip-image-restore', 'true');
  } else {
    // Normal navigation, remove the skip flag
    sessionStorage.removeItem('skip-image-restore');
  }
};

// Initialize page refresh detection
if (typeof window !== 'undefined') {
  setupPageRefreshDetection();
}

// Global image store interface
interface GlobalImageStore {
  // Core image data
  imageFile: File | null;
  imageName: string;
  imageUrl: string | null; // Temporary URL generated by URL.createObjectURL()
  
  // Tool-specific data
  toolData: {
    crop?: CropData;
    square?: SquareData;
    resize?: ResizeData;
    avatar?: AvatarData;
    instagramGrid?: InstagramGridData;
  };
  
  // Core methods
  setImage: (file: File, toolType?: string) => void;
  clearImage: () => void;
  clearImageUrl: () => void;
  updateImageName: (newName: string) => void;
  checkPageChange: () => void; 
  
  // Tool data management
  setToolData: <T extends keyof GlobalImageStore['toolData']>(
    toolType: T, 
    data: GlobalImageStore['toolData'][T]
  ) => void;
  getToolData: <T extends keyof GlobalImageStore['toolData']>(
    toolType: T
  ) => GlobalImageStore['toolData'][T];
  clearToolData: (toolType?: keyof GlobalImageStore['toolData']) => void;
  
  // Internal method for restoring File object from persistent data
  _restoreFileFromStorage: () => void;
}

export const useGlobalImageStore = create<GlobalImageStore>((set, get) => ({
  // Initial state
  imageFile: null,
  imageName: '',
  imageUrl: null,
  toolData: {},
  
  // 检查页面是否切换并清除图片
  checkPageChange: () => {
    const state = get();
    
    // 如果有图片，检查是否需要清除
    if (state.imageFile) {
      try {
        const metaDataStr = sessionStorage.getItem('globalImageStore-imageData');
        if (metaDataStr) {
          const metaData = JSON.parse(metaDataStr);
          
          // 检查是否是upload触发的预期导航
          const isExpectedNavigation = sessionStorage.getItem('expected-navigation') === 'true';
          
          if (isExpectedNavigation) {
            // upload触发的导航，更新路径但保留图片
            sessionStorage.removeItem('expected-navigation');
            metaData.currentPath = window.location.pathname;
            sessionStorage.setItem('globalImageStore-imageData', JSON.stringify(metaData));
            console.log('Upload triggered navigation, updating path but keeping image');
          } else if (metaData.currentPath && metaData.currentPath !== window.location.pathname) {
            console.log(`Page changed, clearing image. From: ${metaData.currentPath}, To: ${window.location.pathname}`);
            
            // Clean up old URL
            if (state.imageUrl) {
              URL.revokeObjectURL(state.imageUrl);
            }
            
            // Clear storage
            clearImageStorage();
            
            set({
              imageFile: null,
              imageName: '',
              imageUrl: null,
              toolData: {}
            });
          }
        }
      } catch (error) {
        console.error('Failed to check page change:', error);
      }
    }
  },
  
  // Set image
  setImage: (file: File, toolType?: string) => {
    const state = get();
    
    console.log('setImage called with:', {
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type,
      toolType
    });
    
    // Clean up old URL
    if (state.imageUrl) {
      URL.revokeObjectURL(state.imageUrl);
    }
    
    // Create new URL
    const newUrl = URL.createObjectURL(file);
    const cleanName = file.name.replace(/\.[^/.]+$/, "");
    
    // 立即设置状态，不等待存储完成
    console.log('Setting image state immediately...');
    set({
      imageFile: file,
      imageName: cleanName,
      imageUrl: newUrl,
      // If tool type is specified, clear that tool's data
      ...(toolType && { toolData: { ...state.toolData, [toolType]: null } })
    });
    
    // 立即保存 sessionStorage 作为备份
    try {
      const sessionData = {
        imageName: cleanName,
        fileName: file.name,
        fileType: file.type,
        fileSize: file.size,
        storageType: 'indexedDB',
        currentPath: window.location.pathname,
        timestamp: Date.now()
      };
      
      console.log('Saving immediate session backup:', sessionData);
      sessionStorage.setItem('globalImageStore-imageData', JSON.stringify(sessionData));
      
      // 验证保存
      const saved = sessionStorage.getItem('globalImageStore-imageData');
      if (saved) {
        console.log('SessionStorage save verified:', JSON.parse(saved));
      } else {
        console.error('SessionStorage save failed');
      }
    } catch (sessionError) {
      console.error('Failed to save immediate session backup:', sessionError);
    }
    
    // 异步保存到 IndexedDB（不阻塞主流程）
    saveImageToStorage(file, cleanName)
      .then(() => {
        console.log('Image successfully saved to IndexedDB');
      })
      .catch(error => {
        console.error('Failed to save image to IndexedDB:', error);
        // 即使 IndexedDB 失败，sessionStorage 仍可作为备份
      });
  },
  
  // Clear image
  clearImage: () => {
    const state = get();
    
    // Clean up URL
    if (state.imageUrl) {
      URL.revokeObjectURL(state.imageUrl);
    }
    
    // Clear storage
    clearImageStorage();
    
    set({
      imageFile: null,
      imageName: '',
      imageUrl: null,
      toolData: {}
    });
  },
  
  // Clear URL only (keep File object)
  clearImageUrl: () => {
    const state = get();
    
    if (state.imageUrl) {
      URL.revokeObjectURL(state.imageUrl);
    }
    
    set({ imageUrl: null });
  },
  
  // Set tool-specific data
  setToolData: (toolType, data) => {
    const state = get();
    set({
      toolData: {
        ...state.toolData,
        [toolType]: data
      }
    });
  },
  
  // Get tool-specific data
  getToolData: (toolType) => {
    return get().toolData[toolType];
  },
  
  // Clear tool data
  clearToolData: (toolType) => {
    const state = get();
    
    if (toolType) {
      // Clear specific tool data
      const newToolData = { ...state.toolData };
      delete newToolData[toolType];
      set({ toolData: newToolData });
    } else {
      // Clear all tool data
      set({ toolData: {} });
    }
  },
  
  // Restore File object from storage
  _restoreFileFromStorage: () => {
    const state = get();
    console.log('_restoreFileFromStorage called, current state:', {
      hasImageFile: !!state.imageFile,
      hasImageUrl: !!state.imageUrl,
      currentPath: window.location.pathname
    });
    
    if (state.imageFile || typeof window === 'undefined') {
      console.log('Skipping restore: image already exists or not in browser');
      return;
    }
    
    // Check if we should skip restoration (e.g., after page refresh)
    const shouldSkipRestore = sessionStorage.getItem('skip-image-restore') === 'true';
    if (shouldSkipRestore) {
      console.log('Skipping image restoration as requested');
      // Clear the flag after checking
      sessionStorage.removeItem('skip-image-restore');
      return;
    }
    
    console.log('Attempting to restore file from storage...');
    
    loadImageFromStorage()
      .then((result) => {
        if (result) {
          const { file, imageName } = result;
          const newUrl = URL.createObjectURL(file);
          
          console.log('Successfully restored file:', { 
            fileName: file.name, 
            fileSize: file.size,
            imageName: imageName,
            currentPath: window.location.pathname
          });
          
          set({
            imageFile: file,
            imageName: imageName,
            imageUrl: newUrl
          });
        } else {
          console.log('No image data found in storage or restoration failed');
          
          // Try direct IndexedDB access as fallback
          console.log('Attempting direct IndexedDB fallback...');
          loadFromIndexedDB()
            .then((fallbackResult) => {
              if (fallbackResult) {
                const { file, imageName } = fallbackResult;
                const newUrl = URL.createObjectURL(file);
                
                console.log('Fallback restoration successful:', { 
                  fileName: file.name, 
                  fileSize: file.size,
                  imageName: imageName 
                });
                
                set({
                  imageFile: file,
                  imageName: imageName,
                  imageUrl: newUrl
                });
                
                // Update session storage
                try {
                  sessionStorage.setItem('globalImageStore-imageData', JSON.stringify({
                    imageName,
                    fileName: file.name,
                    fileType: file.type,
                    fileSize: file.size,
                    storageType: 'indexedDB',
                    currentPath: window.location.pathname,
                    timestamp: Date.now()
                  }));
                } catch (sessionError) {
                  console.error('Failed to update session storage after fallback:', sessionError);
                }
              } else {
                console.log('Fallback restoration also failed');
              }
            })
            .catch(fallbackError => {
              console.error('Fallback restoration failed:', fallbackError);
            });
        }
      })
      .catch(error => {
        console.error('Failed to restore file from storage:', error);
      });
  },
  
  // Update image name
  updateImageName: (newName: string) => {
    const state = get();
    if (!state.imageFile) return;
    
    // Update the store state
    set({ imageName: newName });
    
    // Update storage data if it exists
    if (typeof window !== 'undefined') {
      try {
        const imageDataStr = sessionStorage.getItem('globalImageStore-imageData');
        if (imageDataStr) {
          const imageData = JSON.parse(imageDataStr);
          imageData.imageName = newName;
          sessionStorage.setItem('globalImageStore-imageData', JSON.stringify(imageData));
          
          // Also update IndexedDB if the image is stored there
          if (imageData.storageType === 'indexedDB') {
            const request = indexedDB.open('globalImageStore', 1);
            request.onsuccess = () => {
              const db = request.result;
              const transaction = db.transaction(['images'], 'readwrite');
              const store = transaction.objectStore('images');
              const getRequest = store.get('current');
              
              getRequest.onsuccess = () => {
                const result = getRequest.result;
                if (result) {
                  result.imageName = newName;
                  store.put(result);
                }
              };
            };
          }
        }
      } catch (error) {
        console.error('Failed to update image name in storage:', error);
      }
    }
  }
}));

// Export types for use in other files
export type { CropData, SquareData, ResizeData, AvatarData, InstagramGridData }; 