import React, { useEffect, useState, type HTMLAttributes, type ReactNode } from "react";
import type { ComponentType } from "react";
import { cn } from "../../lib/cn";

interface MotionRevealProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  delay?: number;
  y?: number;
}

export const MotionReveal = ({ children, className, delay = 0, y = 12, ...props }: MotionRevealProps) => {
  const [MotionDiv, setMotionDiv] = useState<ComponentType<any> | null>(null);

  useEffect(() => {
    let mounted = true;

    import("framer-motion").then(({ motion }) => {
      if (mounted) {
        setMotionDiv(() => motion.div as ComponentType<any>);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  if (!MotionDiv) {
    return (
      <div className={cn(className)} {...props}>
        {children}
      </div>
    );
  }

  return (
    <MotionDiv
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </MotionDiv>
  );
};
