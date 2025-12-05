import type { HTMLMotionProps } from "framer-motion";
import * as React from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  hoverEffect?: boolean;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, hoverEffect = true, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "rounded-lg border border-border/50 bg-background/80 shadow-sm backdrop-blur-md backdrop-filter dark:bg-card/30 dark:backdrop-blur-md",
          hoverEffect &&
            "transition-all duration-300 ease-in-out hover:shadow-md",
          className,
        )}
        whileHover={
          hoverEffect
            ? {
                y: -5,
                transition: { duration: 0.2 },
              }
            : undefined
        }
        {...props}
      />
    );
  },
);

GlassCard.displayName = "GlassCard";

export { GlassCard };
