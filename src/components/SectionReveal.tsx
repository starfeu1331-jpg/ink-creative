"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default function SectionReveal({ 
  children, 
  className = "", 
  delay = 0,
  direction = 'up'
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-100px",
    amount: 0.3
  });

  const directionOffset = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { y: 0, x: 60 },
    right: { y: 0, x: -60 }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ 
        opacity: 0, 
        ...directionOffset[direction],
        scale: 0.95,
        filter: "blur(4px)"
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
        x: 0,
        scale: 1,
        filter: "blur(0px)"
      } : {}}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.16, 1, 0.3, 1], // Apple-style easing
        filter: { duration: 0.6 }
      }}
    >
      {children}
    </motion.div>
  );
}