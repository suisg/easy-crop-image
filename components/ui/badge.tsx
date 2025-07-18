import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline";
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
          {
            "border-transparent bg-blue-600 text-white hover:bg-blue-700":
              variant === "default",
            "border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200":
              variant === "secondary",
            "border-transparent bg-red-600 text-white hover:bg-red-700":
              variant === "destructive",
            "border-gray-300 text-gray-700 bg-white hover:bg-gray-50": variant === "outline",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";

export { Badge }; 