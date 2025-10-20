'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import SectionReveal from '@/components/SectionReveal';
import ProjectTimeline from '@/components/ProjectTimeline';



export default function ProjetsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <SectionReveal>
            <motion.h1 
              className="text-6xl md:text-8xl font-light mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                Projets
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/60 font-light max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Une sélection de créations qui incarnent la fusion entre art et technologie
            </motion.p>
          </SectionReveal>
        </div>
      </section>

      {/* Timeline Interactive des Projets */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <ProjectTimeline />
          </SectionReveal>
        </div>
      </section>

      {/* Call to Action */}
      <section className="pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <SectionReveal>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              Prêt à créer ensemble ?
            </h2>
            <p className="text-xl text-white/60 mb-12 font-light">
              Transformons votre vision en réalité visuelle
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.div
                  className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-8 py-4 text-white font-medium hover:bg-white/15 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Démarrer un projet
                </motion.div>
              </Link>
              
              <Link href="/services">
                <motion.div
                  className="border border-white/30 rounded-2xl px-8 py-4 text-white/80 font-medium hover:bg-white/5 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Voir les services
                </motion.div>
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}