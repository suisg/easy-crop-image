"use client";

import { useEffect } from 'react';
import { useGlobalImageStore } from './globalImageStore';

export function useToolChangeDetection() {
  const checkPageChange = useGlobalImageStore(state => state.checkPageChange);
  
  useEffect(() => {
    // Check once when the component mounts
    checkPageChange();
    
    // Handle navigation change
    const handleNavigation = () => {
      // Delay a bit to ensure the URL has updated
      setTimeout(() => {
        checkPageChange();
      }, 10);
    };
    
    // Listen for browser forward/back button
    window.addEventListener('popstate', handleNavigation);
    
    // Listen for Next.js client route changes
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;
    
    history.pushState = function(...args) {
      originalPushState.apply(history, args);
      handleNavigation();
    };
    
    history.replaceState = function(...args) {
      originalReplaceState.apply(history, args);
      handleNavigation();
    };
    
    // Cleanup function
    return () => {
      window.removeEventListener('popstate', handleNavigation);
      history.pushState = originalPushState;
      history.replaceState = originalReplaceState;
    };
  }, [checkPageChange]);
} 