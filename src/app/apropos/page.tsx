'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import SectionReveal from '@/components/SectionReveal';
import { Star, Lightbulb, Handshake, Sparkles, User } from 'lucide-react';

const competences = [
  {
    categorie: "Création Visuelle",
    skills: ["Montage Vidéo", "Infographie", "Illustration", "Typography"],
    niveau: 95
  },
  {
    categorie: "Identité & Branding", 
    skills: ["Logo Design", "Charte Graphique", "Brand Strategy", "Guidelines"],
    niveau: 90
  },
  {
    categorie: "Outils Creative",
    skills: ["After Effects", "Premiere Pro", "Illustrator", "Photoshop"],
    niveau: 92
  },
  {
    categorie: "Production",
    skills: ["Gestion de Projet", "Relation Client", "Respect des Délais", "Qualité"],
    niveau: 88
  }
];

const valeurs = [
  {
    titre: "Excellence",
    description: "Chaque détail compte. Je m&apos;engage à livrer un travail irréprochable qui dépasse vos attentes.",
    icon: "star"
  },
  {
    titre: "Innovation",
    description: "Toujours à l&apos;affût des dernières tendances pour proposer des solutions créatives modernes.",
    icon: "lightbulb"
  },
  {
    titre: "Collaboration",
    description: "Votre vision guide ma créativité. Ensemble, nous créons quelque chose d&apos;exceptionnel.",
    icon: "handshake"
  }
];

export default function AProposPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Texte */}
            <SectionReveal>
              <motion.h1 
                className="text-6xl md:text-7xl font-light mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                  À Propos
                </span>
              </motion.h1>
              
              <motion.div
                className="space-y-6 text-lg font-light leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-white/80">
                  Passionné par l&apos;art visuel depuis plus de 8 ans, je transforme 
                  les idées en expériences visuelles mémorables qui captivent et inspirent.
                </p>
                
                <p className="text-white/70">
                  Mon approche combine créativité artistique et précision technique 
                  pour créer des contenus qui résonnent avec votre audience et 
                  renforcent votre identité de marque.
                </p>
                
                <p className="text-white/70">
                  Chaque projet est une opportunité d&apos;innover, de repousser les 
                  limites créatives et de donner vie à des visions uniques.
                </p>
              </motion.div>
            </SectionReveal>

            {/* Avatar/Illustration */}
            <SectionReveal delay={0.3}>
              <div className="relative max-w-xl mx-auto lg:ml-auto lg:mr-0 mt-16">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 h-64">
                  <div className="text-left pr-20 md:pr-24">
                    <h3 className="text-xl md:text-2xl font-light text-white mb-2">
                      Marceau JUILLET
                    </h3>
                    <p className="text-white/60 text-sm md:text-base">
                      Créateur de Ink
                    </p>
                  </div>
                </div>
                
                {/* Photo positionnée par-dessus le bloc */}
                <div className="absolute bottom-0 right-0 w-48 md:w-64 lg:w-72 h-80 md:h-96 lg:h-[32rem] overflow-hidden rounded-br-3xl">
                  <img 
                    src="/marceau.png" 
                    alt="Marceau - Creative Designer" 
                    className="w-full h-auto object-cover"
                    style={{ 
                      objectPosition: '50% 20%',
                      minHeight: '120%'
                    }}
                  />
                </div>
                
                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-12 h-12 bg-blue-400/20 rounded-2xl flex items-center justify-center"
                  animate={{ 
                    y: [-10, 10, -10],
                    rotate: [0, 5, 0, -5, 0]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Sparkles className="w-4 h-4 text-white" />
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-400/20 rounded-2xl flex items-center justify-center"
                  animate={{ 
                    y: [10, -10, 10],
                    rotate: [0, -5, 0, 5, 0]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                >
                  <Sparkles className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                Expertises
              </h2>
              <p className="text-xl text-white/60 font-light">
                Des compétences techniques au service de votre créativité
              </p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {competences.map((comp, index) => (
              <SectionReveal key={comp.categorie} delay={index * 0.1}>
                <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                  <h3 className="text-xl font-light text-white mb-6">
                    {comp.categorie}
                  </h3>
                  
                  {/* Barre de progression */}
                  <div className="mb-6">
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <motion.div 
                        className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${comp.niveau}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                    </div>
                    <div className="text-right mt-2">
                      <span className="text-sm text-white/60">{comp.niveau}%</span>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {comp.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="text-xs text-white/70 bg-white/10 px-3 py-1 rounded-full border border-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                Mes Valeurs
              </h2>
              <p className="text-xl text-white/60 font-light">
                Les principes qui guident chaque création
              </p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {valeurs.map((valeur, index) => (
              <SectionReveal key={valeur.titre} delay={index * 0.2}>
                <motion.div
                  className="text-center group cursor-default"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 h-full">
                    <div className="mb-6 flex justify-center">
                      <div className="p-4 bg-white/10 rounded-2xl">
                        {valeur.icon === "star" && <Star className="w-12 h-12 text-white" />}
                        {valeur.icon === "lightbulb" && <Lightbulb className="w-12 h-12 text-white" />}
                        {valeur.icon === "handshake" && <Handshake className="w-12 h-12 text-white" />}
                      </div>
                    </div>
                    <h3 className="text-2xl font-light text-white mb-4 group-hover:text-white/90 transition-colors">
                      {valeur.titre}
                    </h3>
                    <p className="text-white/60 font-light leading-relaxed">
                      {valeur.description}
                    </p>
                  </div>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Expérience Timeline */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                Parcours
              </h2>
              <p className="text-xl text-white/60 font-light">
                Une évolution constante vers l&apos;excellence créative
              </p>
            </div>
          </SectionReveal>

          <div className="space-y-8">
            {[
              { 
                annee: "2024", 
                titre: "Creative Director Freelance", 
                description: "Accompagnement de marques premium dans leur stratégie visuelle globale"
              },
              { 
                annee: "2022", 
                titre: "Monteur Vidéo Senior", 
                description: "Spécialisation en animations complexes et direction artistique"
              },
              { 
                annee: "2019", 
                titre: "Graphiste Multimédia", 
                description: "Développement de compétences en identité visuelle et montage vidéo"
              },
              { 
                annee: "2016", 
                titre: "Début de l&apos;Aventure", 
                description: "Formation autodidacte et premiers projets créatifs"
              }
            ].map((etape, index) => (
              <SectionReveal key={etape.annee} delay={index * 0.1}>
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-20 text-right">
                    <span className="text-white/60 font-light">{etape.annee}</span>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <h4 className="text-xl font-light text-white mb-2">{etape.titre}</h4>
                    <p className="text-white/60 font-light">{etape.description}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <SectionReveal>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              Créons ensemble
            </h2>
            <p className="text-xl text-white/60 mb-12 font-light">
              Votre projet mérite une approche créative unique
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.div
                  className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-8 py-4 text-white font-medium hover:bg-white/15 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Commencer un projet
                </motion.div>
              </Link>
              
              <Link href="/projets">
                <motion.div
                  className="border border-white/30 rounded-2xl px-8 py-4 text-white/80 font-medium hover:bg-white/5 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Voir mon travail
                </motion.div>
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}