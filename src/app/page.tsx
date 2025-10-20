"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";
import { InkLiquidFill } from "@/components/animations";
import { Palette, Video, Handshake, ArrowRight, MapPin, Award } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Plus compact et professionnel */}
      <header className="min-h-screen flex items-center justify-center px-6 md:px-12 pt-20" role="banner">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Contenu principal */}
            <div>
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-5 h-5 text-green-400" />
                  <span className="text-white/70 font-light">Valence (26) - Drôme</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
                  Ink Creative
                  <br />
                  <span className="font-medium bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Professionnel
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed font-light">
                  Montage vidéo, identité visuelle et communication d&apos;influence.
                  <br />
                  <span className="text-white/60">
                    Des créations qui marquent, des stratégies qui convertissent.
                  </span>
                </p>
              </motion.div>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Link 
                  href="/services"
                  className="group px-8 py-4 bg-white/95 text-gray-900 rounded-2xl font-medium 
                             hover:bg-white transition-all duration-300 hover:scale-105
                             backdrop-blur-xl border border-white/20 shadow-xl
                             flex items-center justify-center gap-2"
                >
                  Découvrir nos services
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/projets"
                  className="px-8 py-4 bg-white/10 text-white rounded-2xl font-medium 
                             hover:bg-white/20 transition-all duration-300 hover:scale-105
                             backdrop-blur-xl border border-white/30 text-center"
                >
                  Portfolio
                </Link>
              </motion.div>

              {/* Statistiques/badges */}
              <motion.div 
                className="flex flex-wrap gap-6 mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="flex items-center gap-2 text-white/60">
                  <Award className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-light">+50 projets réalisés</span>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <Award className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-light">Expert certifié</span>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <Award className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-light">Disponible immédiatement</span>
                </div>
              </motion.div>
            </div>

            {/* Logo animé - Plus subtil */}
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              <div className="relative">
                <InkLiquidFill 
                  width={280} 
                  height={210} 
                  duration={3.5}
                  delay={1}
                  className="text-white/90 drop-shadow-2xl"
                />
                
                {/* Effet de brillance subtil */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent rounded-full blur-3xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Services Highlight */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-32" role="main">
        <motion.div 
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-light text-white mb-6"
            variants={itemVariants}
          >
            Trois expertises au service de votre succès
          </motion.h2>
          <motion.p 
            className="text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed"
            variants={itemVariants}
          >
            Allier créativité, stratégie et technique pour donner vie à vos projets 
            et construire une communication qui vous ressemble.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Montage Vidéo */}
          <motion.article 
            className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/8 transition-all duration-500"
            variants={itemVariants}
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-xl mr-4">
                <Video className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-light text-white">Montage Vidéo</h3>
            </div>
            
            <p className="text-white/70 font-light leading-relaxed mb-6">
              Reels, YouTube Shorts, contenu social : donnez de l&apos;impact à vos messages 
              avec des montages percutants adaptés à chaque plateforme.
            </p>
            
            <ul className="space-y-2 text-sm text-white/60 font-light mb-6">
              <li>• Courts formats pour réseaux sociaux</li>
              <li>• Étalonnage et post-production</li>
              <li>• Adaptation multi-plateformes</li>
            </ul>
            
            <Link 
              href="/montage-video"
              className="inline-flex items-center text-green-400 font-medium hover:text-green-300 transition-colors group-hover:translate-x-1"
            >
              En savoir plus
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.article>

          {/* Identité Visuelle */}
          <motion.article 
            className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/8 transition-all duration-500"
            variants={itemVariants}
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-xl mr-4">
                <Palette className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-light text-white">Identité Visuelle</h3>
            </div>
            
            <p className="text-white/70 font-light leading-relaxed mb-6">
              Logo, charte graphique, supports de communication : créons ensemble 
              une identité forte qui vous distingue et marque les esprits.
            </p>
            
            <ul className="space-y-2 text-sm text-white/60 font-light mb-6">
              <li>• Création de logo et branding</li>
              <li>• Supports print et digital</li>
              <li>• Charte graphique complète</li>
            </ul>
            
            <Link 
              href="/identite-visuelle"
              className="inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors"
            >
              En savoir plus
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.article>

          {/* Communication & Stratégie */}
          <motion.article 
            className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/8 transition-all duration-500"
            variants={itemVariants}
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-xl mr-4">
                <Handshake className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-light text-white">Communication</h3>
            </div>
            
            <p className="text-white/70 font-light leading-relaxed mb-6">
              Stratégie d&apos;influence, gestion de campagnes, positionnement de marque : 
              transformons votre vision en communication performante.
            </p>
            
            <ul className="space-y-2 text-sm text-white/60 font-light mb-6">
              <li>• Stratégie d&apos;influence</li>
              <li>• Gestion de campagnes</li>
              <li>• Accompagnement personnalisé</li>
            </ul>
            
            <Link 
              href="/communication-influence"
              className="inline-flex items-center text-purple-400 font-medium hover:text-purple-300 transition-colors"
            >
              En savoir plus
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.article>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12">
            <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
              Prêt à donner vie à votre projet ?
            </h3>
            <p className="text-lg text-white/70 mb-8 font-light max-w-2xl mx-auto">
              Discutons de vos besoins et construisons ensemble une stratégie sur mesure. 
              Devis gratuit et sans engagement.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-white/95 text-gray-900 rounded-2xl font-medium 
                           hover:bg-white transition-all duration-300 hover:scale-105
                           backdrop-blur-xl border border-white/20 shadow-xl"
              >
                Demander un devis gratuit
              </Link>
              <Link 
                href="/projets"
                className="px-8 py-4 bg-white/10 text-white rounded-2xl font-medium 
                           hover:bg-white/20 transition-all duration-300 hover:scale-105
                           backdrop-blur-xl border border-white/30"
              >
                Voir nos réalisations
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer professionnel */}
      <footer className="py-20 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section principale */}
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            
            {/* Informations studio */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4">
                <svg
                  width="48"
                  height="36"
                  viewBox="0 0 237.8 168.72"
                  className="text-white/80 fill-current"
                >
                  <g>
                    <rect x="0" y="28.61" width="33.95" height="33.95" rx="16.98" ry="16.98" />
                    <rect x="3.26" y="71.72" width="27.44" height="97" rx="13.72" ry="13.72" />
                    <rect x="43.26" y="28.61" width="27.44" height="140.11" rx="13.72" ry="13.72" />
                    <path d="M100.4,168.72h0c-8.74,0-15.21-8.19-13.12-16.67,2.97-12.06,8.49-24.43,13.88-36.51,15.43-34.59,18.28-47.3,4.77-54.37-11.71-6.13-22.12,1.08-34.16,13.79-1.86,1.96-3.2,3.38-4.74,4.55l-16.35-21.49c-.12.09-.27.21-.43.35.31-.28,1.2-1.22,1.92-1.98,8.43-8.9,34.09-36,66.28-19.14,11.96,6.26,25.63,18.95,22.78,43.83-1.67,14.63-8.66,30.3-15.42,45.45-4.9,10.98-9.91,22.23-12.31,31.9-1.5,6.04-6.88,10.29-13.1,10.29Z" />
                    <path d="M142.44,168.66c-8.42-.04-14.87-7.7-13.27-15.97,2.4-12.38,7.43-23.33,12.34-34.02,3.12-6.79,6.34-13.8,8.8-21.06,9.36-27.64-.88-49.32-13.59-60.38-9.41-8.2-23.41-15.4-38.6-13.61-6.26.74-11.72-4.27-11.72-10.58h0c0-4.5,2.82-8.57,7.08-10.03,20.17-6.89,42.91-1.88,60.97,13.85,19.3,16.81,35.06,49.12,21.43,89.4-2.91,8.59-6.43,16.26-9.84,23.68-4.42,9.63-8.42,18.59-10.25,27.75-1.28,6.38-6.85,10.99-13.36,10.96h0Z" />
                    <path d="M176.16,88.56c-2.48,0-4.46-.14-5.79-.28l2.73-26.86c2.69.27,16.67,1.13,27.38-8.9,7.04-6.59,9.51-14.98,10.21-21.79.71-6.98,6.5-12.33,13.52-12.33h0c7.68,0,13.91,6.36,13.57,14.03-.47,10.79-4.21,26.1-18.85,39.81-15.02,14.06-32.85,16.33-42.78,16.33Z" />
                    <path d="M200.48,168.63c-7.76-.05-13.86-6.62-13.39-14.37.37-6.09.93-11.87,1.46-17.25,2.95-30.11,4.17-42.58-24.43-51l7.62-25.9c22.27,6.56,35.93,17.64,41.78,33.88,5,13.91,3.49,29.32,1.9,45.65-.51,5.23-1.03,10.72-1.37,16.31-.43,7.16-6.4,12.72-13.57,12.67h0Z" />
                  </g>
                </svg>
                <div>
                  <div className="text-white font-medium text-lg">Ink Creative</div>
                  <div className="text-white/60 text-sm">Creative & Strategic</div>
                </div>
              </div>
              
              <p className="text-white/70 font-light leading-relaxed">
                Agence créative spécialisée en montage vidéo, identité visuelle et communication d&apos;influence. 
                Basée à Valence, nous accompagnons les marques vers le succès.
              </p>
              
              <div className="flex items-center gap-2 text-white/60">
                <MapPin className="w-4 h-4 text-green-400" />
                <span className="text-sm">Valence (26) - Drôme, France</span>
              </div>
            </motion.div>

            {/* Navigation rapide */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-medium text-lg">Navigation</h4>
              <nav className="space-y-3">
                <Link href="/services" className="block text-white/70 hover:text-white transition-colors font-light">
                  Nos Services
                </Link>
                <Link href="/projets" className="block text-white/70 hover:text-white transition-colors font-light">
                  Portfolio
                </Link>
                <Link href="/apropos" className="block text-white/70 hover:text-white transition-colors font-light">
                  À propos
                </Link>
                <Link href="/contact" className="block text-white/70 hover:text-white transition-colors font-light">
                  Contact
                </Link>
              </nav>
            </motion.div>

            {/* Expertise */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-medium text-lg">Expertises</h4>
              <ul className="space-y-3 text-white/70 font-light">
                <li>Montage Vidéo Social Media</li>
                <li>Identité Visuelle & Branding</li>
                <li>Communication d&apos;Influence</li>
                <li>Stratégie Créative</li>
              </ul>
              
              <div className="pt-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 text-green-400 font-medium hover:text-green-300 transition-colors"
                >
                  Démarrer un projet
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Copyright et mentions */}
          <motion.div 
            className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-white/40 text-sm font-light">
              © 2025 Ink Creative. Tous droits réservés.
            </div>
            
            <div className="flex gap-6 text-sm text-white/40 font-light">
              <a href="#" className="hover:text-white/60 transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-white/60 transition-colors">
                Confidentialité
              </a>
            </div>
          </motion.div>
        </div>
      </footer>
    </main>
  );
}
