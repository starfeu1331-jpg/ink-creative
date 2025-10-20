'use client';

import { useEffect } from 'react';

export default function AnimatedBackground() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = scrollY / maxScroll;

      // Animation subtile des points de couleur
      const x1 = 20 + Math.sin(scrollProgress * Math.PI * 2) * 5; // Bouge de 5% max
      const y1 = 20 + Math.cos(scrollProgress * Math.PI * 1.5) * 3;
      
      const x2 = 80 + Math.sin(scrollProgress * Math.PI * 1.8) * 4;
      const y2 = 20 + Math.cos(scrollProgress * Math.PI * 2.2) * 6;
      
      const x3 = 20 + Math.sin(scrollProgress * Math.PI * 1.3) * 3;
      const y3 = 80 + Math.cos(scrollProgress * Math.PI * 1.7) * 4;
      
      const x4 = 80 + Math.sin(scrollProgress * Math.PI * 2.5) * 5;
      const y4 = 80 + Math.cos(scrollProgress * Math.PI * 1.1) * 3;

      // Applique les nouvelles positions
      document.documentElement.style.setProperty('--x', `${x1}%`);
      document.documentElement.style.setProperty('--y', `${y1}%`);
      document.documentElement.style.setProperty('--x2', `${x2}%`);
      document.documentElement.style.setProperty('--y2', `${y2}%`);
      document.documentElement.style.setProperty('--x3', `${x3}%`);
      document.documentElement.style.setProperty('--y3', `${y3}%`);
      document.documentElement.style.setProperty('--x4', `${x4}%`);
      document.documentElement.style.setProperty('--y4', `${y4}%`);
    };

    // Position initiale
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null; // Ce composant ne rend rien visuellement
}