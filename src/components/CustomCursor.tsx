'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Détecter les éléments interactifs
    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    // Ajouter les listeners
    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Sélectionner tous les éléments interactifs
    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, select, [role="button"], [onClick]'
    );

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);

      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, []);

  return (
    <>
      {/* Curseur principal */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
        }}
        transition={{
          opacity: { duration: 0.2 },
          scale: { duration: 0.2, ease: "easeOut" }
        }}
      >
        <div className={`
          w-8 h-8 rounded-full border-2 border-white
          ${isHovering ? 'bg-white/20' : 'bg-transparent'}
          transition-all duration-200 ease-out
        `} />
      </motion.div>

      {/* Point central */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          opacity: isVisible ? (isHovering ? 0 : 1) : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        <div 
          className="w-8 h-8 flex items-center justify-center"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white" />
        </div>
      </motion.div>
    </>
  );
}