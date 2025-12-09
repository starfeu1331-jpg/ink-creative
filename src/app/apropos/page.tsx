'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionReveal from '@/components/SectionReveal';
import { TrendingUp, Users, Target, CheckCircle } from 'lucide-react';

const valeurs = [
  {
    titre: "ROI Mesurable",
    description: "Chaque campagne est optimisée pour générer des résultats concrets et mesurables pour votre entreprise.",
    icon: "target"
  },
  {
    titre: "Sélection Rigoureuse",
    description: "Nous identifions les influenceurs qui partagent vraiment les valeurs de votre marque et touchent votre cible.",
    icon: "users"
  },
  {
    titre: "Accompagnement Complet",
    description: "De la stratégie à l'analyse des résultats, nous gérons l'intégralité de vos campagnes d'influence.",
    icon: "trending"
  }
];

const expertises = [
  "Stratégie d'influence sur-mesure",
  "Sélection et qualification d'influenceurs",
  "Négociation des partenariats",
  "Pilotage de campagnes multi-canaux",
  "Création de contenus sponsorisés",
  "Analyse de performance & reporting"
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
                  <strong className="text-white">Ink Creative</strong> aide les PME à développer 
                  leur visibilité et leurs ventes grâce à des campagnes d&apos;influence marketing 
                  ciblées et performantes.
                </p>
                
                <p className="text-white/70">
                  L&apos;influence marketing est aujourd&apos;hui un canal incontournable pour développer 
                  sa notoriété. Notre mission : vous accompagner de A à Z, de la sélection 
                  des créateurs de contenu jusqu&apos;à l&apos;analyse des résultats.
                </p>
                
                <p className="text-white/70">
                  Nous sélectionnons, négocions et pilotons vos campagnes d&apos;influence pour 
                  augmenter votre visibilité et vos ventes avec un ROI mesurable.
                </p>
              </motion.div>
            </SectionReveal>

            {/* Photo */}
            <SectionReveal delay={0.3}>
              <motion.div 
                className="relative h-[380px] max-w-[500px] mx-auto lg:ml-auto lg:mr-0"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {/* Carte avec overflow visible */}
                <div className="relative h-full rounded-3xl overflow-visible bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10">
                  {/* Photo qui dépasse */}
                  <div className="absolute bottom-0 left-0 right-0 h-[120%] rounded-3xl overflow-hidden">
                    <Image 
                      src="/marceau.png" 
                      alt="Marceau JUILLET" 
                      fill
                      className="object-cover object-center"
                      priority
                    />
                  </div>
                  
                  {/* Overlay avec nom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/95 via-gray-900/50 to-transparent p-6 z-10">
                    <h3 className="text-xl md:text-2xl font-light text-white mb-1">
                      Marceau JUILLET
                    </h3>
                    <p className="text-white/70 text-sm">
                      Créateur de Ink
                    </p>
                  </div>
                </div>
              </motion.div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <SectionReveal>
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { valeur: "+150%", label: "Visibilité moyenne" },
                { valeur: "+200K", label: "Portée générée" },
                { valeur: "3-6x", label: "ROI moyen" },
                { valeur: "24h", label: "Temps de réponse" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-light text-green-400 mb-2">
                    {stat.valeur}
                  </div>
                  <div className="text-sm text-white/60">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Valeurs */}
      <SectionReveal>
        <section className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-5xl md:text-6xl font-light text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Ce qui nous <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">différencie</span>
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-12">
              {valeurs.map((valeur, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    {valeur.icon === "target" && <Target className="w-8 h-8 text-green-400 flex-shrink-0" />}
                    {valeur.icon === "users" && <Users className="w-8 h-8 text-green-400 flex-shrink-0" />}
                    {valeur.icon === "trending" && <TrendingUp className="w-8 h-8 text-green-400 flex-shrink-0" />}
                  </div>
                  <h3 className="text-2xl font-light mb-3 text-white group-hover:text-green-400 transition-colors">
                    {valeur.titre}
                  </h3>
                  <p className="text-white/60 leading-relaxed font-light">
                    {valeur.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Expertises */}
      <SectionReveal>
        <section className="py-32 px-6 bg-white/5">
          <div className="max-w-5xl mx-auto">
            <motion.h2 
              className="text-5xl md:text-6xl font-light text-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Notre <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">expertise</span>
            </motion.h2>
            
            <p className="text-center text-white/60 text-lg mb-16 max-w-2xl mx-auto">
              Un accompagnement à 360° pour vos campagnes d&apos;influence
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {expertises.map((expertise, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-green-400/30 transition-all duration-300"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-lg font-light text-white/90">{expertise}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* CTA Final */}
      <SectionReveal>
        <section className="py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-5xl md:text-6xl font-light">
                Prêt à <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">booster</span> votre visibilité ?
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
                Discutons de votre projet et découvrez comment l&apos;influence marketing 
                peut transformer votre stratégie commerciale.
              </p>
              <Link 
                href="/#contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-black font-medium rounded-2xl hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300 hover:scale-105"
              >
                Demander un audit gratuit
              </Link>
            </motion.div>
          </div>
        </section>
      </SectionReveal>
    </div>
  );
}
