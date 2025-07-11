"use client";

import { Button } from "@/components/ui/button";

interface ScrollTopButtonProps {
  ctaText: string;
}

export default function ScrollTopButton({ ctaText }: ScrollTopButtonProps) {
  return (
    <Button size="lg" className="mt-6 bg-blue-500 hover:bg-blue-700 text-white" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      {ctaText}
    </Button>
  );
} 