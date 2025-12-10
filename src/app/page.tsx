"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { InkLiquidFill } from "@/components/animations";
import { ArrowRight, MapPin, TrendingUp, Users, Target, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import TrustSection from "@/components/TrustSection";
import ProcessSection from "@/components/ProcessSection";
import FAQSection from "@/components/FAQSection";

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
  // Tracking pour clic téléphone mobile
  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': `${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}/${process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL}_call`,
        'event_category': 'contact',
        'event_label': 'phone_click_mobile'
      });
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section - Focus Influence Marketing B2B */}
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
                  <span className="text-white/70 font-light">Valence (26) - Intervention nationale</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
                  <span className="font-medium bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Stratégie d&apos;influence
                  </span>
                  <br />
                  pour PME
                </h1>
                
                <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed font-medium">
                  Je sélectionne, négocie et pilote vos campagnes d&apos;influence pour augmenter votre visibilité et vos ventes
                </p>

                <p className="text-lg text-white/70 mb-8 leading-relaxed font-light">
                  Vous êtes une PME et vous souhaitez exploiter le potentiel de l&apos;influence marketing ? 
                  Je vous accompagne de A à Z : du choix des créateurs jusqu&apos;au reporting ROI.
                </p>
              </motion.div>
              
              <motion.div 
                className="flex flex-col gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <a 
                  href="#contact"
                  className="group px-8 py-5 bg-gradient-to-r from-green-400 to-green-500 text-gray-900 rounded-2xl font-semibold 
                             hover:from-green-500 hover:to-green-600 transition-all duration-300 hover:scale-105
                             shadow-xl shadow-green-500/20
                             flex items-center justify-center gap-2"
                >
                  Je suis intéressé
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                <a 
                  href="#methode"
                  className="px-8 py-4 bg-white/10 text-white rounded-2xl font-medium 
                             hover:bg-white/20 transition-all duration-300 hover:scale-105
                             backdrop-blur-xl border border-white/30 text-center"
                >
                  Comment ça marche ?
                </a>
              </motion.div>

              {/* Statistiques/preuves sociales */}
              <motion.div 
                className="flex flex-wrap gap-6 mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="flex items-center gap-2 text-white/60">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-light">+150% de visibilité moyenne</span>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-light">Réseau 500+ influenceurs</span>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <Target className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-light">ROI moyen 3 à 7,5x</span>
                </div>
              </motion.div>
            </div>

            {/* Logo animé */}
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
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent rounded-full blur-3xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Pourquoi l'influence marketing */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6">
            Pourquoi l&apos;influence marketing pour votre PME ?
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            Supprimer les freins des consommateurs n&apos;a jamais été aussi facile. 
            L&apos;influence marketing génère de l&apos;authenticité, de l&apos;engagement et des ventes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-white mb-3">Visibilité ultra ciblée</h3>
            <p className="text-white/70 font-light leading-relaxed">
              Touchez précisément votre audience grâce à des créateurs qui partagent vos valeurs et s&apos;adressent à vos clients idéaux.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-semibold text-white mb-3">ROI mesurable</h3>
            <p className="text-white/70 font-light leading-relaxed">
              Chaque euro investi est tracké : impressions, clics, conversions. Vous savez exactement ce qui fonctionne.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-white mb-3">Gain de temps</h3>
            <p className="text-white/70 font-light leading-relaxed">
              Pas besoin de prospecter, négocier et gérer les influenceurs vous-même. Je m&apos;occupe de tout.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Clients */}
      <TrustSection />

      {/* Comment je travaille */}
      <div id="methode">
        <ProcessSection />
      </div>

      {/* FAQ */}
      <FAQSection />

      {/* Formulaire de contact */}
      <section id="contact" className="py-20 px-6 md:px-12 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4">
              Prêt à booster votre visibilité ?
            </h2>
            <p className="text-xl text-white/70">
              Remplissez ce formulaire et je vous recontacte dans les 24h pour discuter de votre projet.
            </p>
          </motion.div>

          <ContactForm />
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
              Vous hésitez encore ?
            </h3>
            <p className="text-lg text-white/70 mb-8 font-light max-w-2xl mx-auto">
              Échangeons 15 minutes au téléphone pour voir si l&apos;influence marketing est adapté à votre entreprise. 
              Aucun engagement, juste des conseils.
            </p>
            
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-400 to-green-500 text-gray-900 rounded-xl font-semibold hover:from-green-500 hover:to-green-600 transition-all duration-300 hover:scale-105 shadow-lg shadow-green-500/20"
            >
              <Phone className="w-5 h-5" />
              Demander un rappel gratuit
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer - Nos autres services en bas */}
      <footer className="py-20 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          
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
                  <div className="text-white/60 text-sm">Influence Marketing</div>
                </div>
              </div>
              
              <p className="text-white/70 font-light leading-relaxed">
                Agence spécialisée en stratégie d&apos;influence marketing pour PME. 
                Sélection, négociation et pilotage de campagnes avec reporting ROI complet.
              </p>
              
              <div className="flex items-center gap-2 text-white/60">
                <MapPin className="w-4 h-4 text-green-400" />
                <span className="text-sm">Valence (26) - Intervention France entière</span>
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-medium text-lg">Navigation</h4>
              <nav className="space-y-3">
                <a href="#methode" className="block text-white/70 hover:text-white transition-colors font-light">
                  Comment ça marche
                </a>
                <Link href="/projets" className="block text-white/70 hover:text-white transition-colors font-light">
                  Nos campagnes
                </Link>
                <Link href="/apropos" className="block text-white/70 hover:text-white transition-colors font-light">
                  À propos
                </Link>
                <a href="#contact" className="block text-white/70 hover:text-white transition-colors font-light">
                  Contact
                </a>
              </nav>
            </motion.div>

            {/* Contact */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-medium text-lg">Contact</h4>
              <div className="space-y-3 text-white/60 text-sm font-light">
                <p>Boostez votre visibilité dès maintenant</p>
                <a href="#contact" className="inline-block px-6 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-black font-semibold rounded-xl hover:shadow-lg hover:shadow-green-400/20 transition-all">
                  Lancer ma campagne
                </a>
              </div>
            </motion.div>
          </div>

          {/* Copyright */}
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
              <Link href="/mentions-legales" className="hover:text-white/60 transition-colors">
                Mentions légales
              </Link>
              <Link href="/confidentialite" className="hover:text-white/60 transition-colors">
                Confidentialité
              </Link>
            </div>
          </motion.div>
        </div>
      </footer>
    </main>
  );
}
