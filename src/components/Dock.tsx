"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { id: "home", label: "Accueil", href: "/" },
  { id: "method", label: "Comment ça marche", href: "/#methode" },
  { id: "about", label: "À propos", href: "/apropos" },
  { id: "contact", label: "Contact", href: "/#contact" },
];

// Icônes SVG vectorielles
const HomeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ProjectsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9L11 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ServicesIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ContactIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const iconMap = {
  home: HomeIcon,
  method: ServicesIcon,
  about: ProjectsIcon,
  contact: ContactIcon,
};

export default function Navbar() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [autoExpanded, setAutoExpanded] = useState(true);

  // Auto-expand pour les 10 premières secondes
  useEffect(() => {
    const timer = setTimeout(() => {
      setAutoExpanded(false);
    }, 10000); // 10 secondes

    return () => clearTimeout(timer);
  }, []);

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
    setHoveredItem(null);
  };

  const getIcon = (itemId: string) => {
    const IconComponent = iconMap[itemId as keyof typeof iconMap];
    return IconComponent ? <IconComponent /> : null;
  };

  return (
    <>
      <motion.nav
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Barre navigation épurée */}
          <motion.div
            className="bg-white/90 backdrop-blur-xl rounded-full shadow-lg border border-white/20"
            animate={{
              width: isExpanded || autoExpanded ? "320px" : "260px",
              height: isExpanded || autoExpanded ? "48px" : "10px",
            }}
            style={{
              transformOrigin: "center center",
            }}
            transition={{ 
              duration: 0.3,
              ease: [0.25, 0.1, 0.25, 1]
            }}
          />
          
          {/* Contenu des icônes */}
          <motion.div
            className="absolute top-0 left-0 w-full h-12 flex items-center justify-center gap-6 px-6"
            animate={{
              opacity: isExpanded || autoExpanded ? 1 : 0,
            }}
            transition={{ 
              duration: 0.2,
              delay: isExpanded || autoExpanded ? 0.1 : 0
            }}
          >
          {navItems.map((item) => (
            <motion.div
              key={item.id}
              className="relative group"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Tooltip */}
              {hoveredItem === item.id && (
                <motion.div
                  className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 
                             bg-gray-900/90 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                </motion.div>
              )}

              {/* Nav item */}
              <Link href={item.href}>
                <motion.div
                  className="p-3 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100/60 
                             transition-colors cursor-pointer flex items-center justify-center relative"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                >
                  {getIcon(item.id)}
                  
                  {/* Indicateur actif */}
                  <motion.div
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-800 rounded-full"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: hoveredItem === item.id ? 1 : 0,
                      scale: hoveredItem === item.id ? 1 : 0
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
              </Link>
            </motion.div>
          ))}
          </motion.div>
        </motion.div>
      </motion.nav>
    </>
  );
}