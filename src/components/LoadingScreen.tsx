'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { InkLiquidFill } from './animations';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    // Animation logo démarre IMMÉDIATEMENT
    setShowAnimation(true);

    // Chargement un peu plus rapide
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          // Attendre 1 seconde après la fin du chargement
          setTimeout(() => setIsLoading(false), 1000);
          return 100;
        }
        // Chargement qui dure environ 4.5 secondes
        return prev + Math.random() * 5 + 3; // Entre 3 et 8 par étape
      });
    }, 150); // Toutes les 150ms

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center"
          style={{
            background: "radial-gradient(circle at 50% 50%, #00350d 0%, transparent 50%), radial-gradient(circle at 80% 20%, #1d1d1b 0%, transparent 50%), radial-gradient(circle at 20% 80%, #1d1d1b 0%, transparent 50%), radial-gradient(circle at 80% 80%, #305210 0%, transparent 50%), #1a1a18"
          }}
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 0.95,
            transition: { 
              duration: 0.8, 
              ease: "easeInOut",
              when: "beforeChildren" 
            }
          }}
        >
          {/* Logo animé avec liquid fill */}
          <div className="text-center">
            <motion.div
              className="mb-12 flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Animation Liquid Fill du logo */}
              {showAnimation && (
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <InkLiquidFill 
                    width={200} 
                    height={150} 
                    duration={4}
                    delay={0}
                    className="text-white drop-shadow-2xl"
                  />
                </motion.div>
              )}

              <motion.p
                className="text-white/70 font-light text-lg tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.8 }}
              >
                Design & Motion
              </motion.p>
            </motion.div>

            {/* Barre de progression élégante */}
            <div className="w-96 mx-auto">
              <motion.div
                className="w-full h-0.5 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-white/60 via-white/80 to-white/60 rounded-full shadow-lg"
                  style={{
                    boxShadow: "0 0 10px rgba(255,255,255,0.3)"
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </motion.div>
              
              <motion.div
                className="text-center mt-6 text-white/50 text-sm font-light tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 0.5 }}
              >
                {Math.round(progress)}% • Chargement
              </motion.div>
            </div>

            {/* Éléments décoratifs flottants */}
            <div className="absolute inset-0 pointer-events-none">
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white/20 rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + (i % 2) * 40}%`,
                  }}
                  animate={{
                    y: [-20, 20, -20],
                    opacity: [0.2, 0.8, 0.2],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>

            {/* Cercles concentriques */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {Array.from({ length: 3 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute border border-white/5 rounded-full"
                  style={{
                    width: `${200 + i * 100}px`,
                    height: `${200 + i * 100}px`,
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}