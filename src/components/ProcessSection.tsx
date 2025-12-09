"use client";

import { motion } from 'framer-motion';
import { Search, Users, TrendingUp, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Définition du besoin',
    description: 'Analyse de votre marché, cible et objectifs pour identifier la stratégie d\'influence optimale.',
    color: 'from-green-400 to-green-500'
  },
  {
    icon: Users,
    title: 'Sélection des influenceurs',
    description: 'Identification et qualification des créateurs alignés avec votre marque et votre audience.',
    color: 'from-blue-400 to-blue-500'
  },
  {
    icon: TrendingUp,
    title: 'Négociation & pilotage',
    description: 'Gestion des contrats, brief créatif, coordination des publications et respect du planning.',
    color: 'from-purple-400 to-purple-500'
  },
  {
    icon: BarChart3,
    title: 'Reporting ROI',
    description: 'Suivi des KPIs, analyse de performance et recommandations pour optimiser vos prochaines campagnes.',
    color: 'from-orange-400 to-orange-500'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  },
};

export default function ProcessSection() {
  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4">
            Comment je travaille
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Un processus structuré en 7 étapes pour s&apos;adapter à chaque PME
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className="group relative"
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]">
                  {/* Numéro */}
                  <div className="absolute top-6 right-6 text-6xl font-bold text-white/5 group-hover:text-white/10 transition-colors">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>

                  {/* Icône */}
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${step.color} mb-6`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Contenu */}
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Flèche de connexion (desktop only) */}
                {index < steps.length - 1 && index % 2 === 0 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-white/20">
                      <path d="M8 16H24M24 16L18 10M24 16L18 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
