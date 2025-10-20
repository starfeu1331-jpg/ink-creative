"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { trackQuoteRequest } from "@/components/Analytics";
import { Video, Play, Clock, Zap, Eye, TrendingUp, ArrowRight, CheckCircle } from "lucide-react";

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
  },
};

export default function MontageVideoPage() {
  return (
    <main className="min-h-screen py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        
        {/* Header SEO optimisé */}
        <header className="text-center mb-20">
          <motion.div
            className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Video className="w-6 h-6 text-green-400" />
            <span className="text-white/80 font-light">Montage Vidéo Professionnel</span>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Montage Vidéo à Valence (26)
            <br />
            <span className="font-medium bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Créateur de Contenus
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transformez vos rushes en contenus percutants pour YouTube, Instagram, TikTok. 
            Montage professionnel, étalonnage et post-production en Drôme.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link 
              href="/contact"
              onClick={() => trackQuoteRequest('montage-video')}
              className="px-8 py-4 bg-white/95 text-gray-900 rounded-2xl font-medium 
                         hover:bg-white transition-all duration-300 hover:scale-105
                         backdrop-blur-xl border border-white/20 shadow-xl
                         flex items-center justify-center gap-2"
            >
              Devis gratuit montage vidéo
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/projets#videos"
              className="px-8 py-4 bg-white/10 text-white rounded-2xl font-medium 
                         hover:bg-white/20 transition-all duration-300 hover:scale-105
                         backdrop-blur-xl border border-white/30 text-center"
            >
              Voir nos montages
            </Link>
          </motion.div>
        </header>

        {/* Expertise détaillée */}
        <motion.section 
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-light text-white mb-12 text-center"
            variants={itemVariants}
          >
            Expertise Montage Vidéo Multi-Plateformes
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Play className="w-8 h-8 text-green-400" />,
                title: "YouTube & Long Format",
                description: "Montage narratif, transitions fluides, optimisation SEO vidéo. Perfect pour vlogs, tutos et contenus éducatifs.",
                features: ["Intro/Outro personnalisés", "Chapitres et timestamps", "Optimisation 1080p/4K"]
              },
              {
                icon: <Zap className="w-8 h-8 text-blue-400" />,
                title: "Instagram Reels & Stories",
                description: "Montage dynamique au format vertical. Captez l'attention en 3 secondes et maintenez l'engagement.",
                features: ["Format 9:16 optimisé", "Sous-titres automatiques", "Effects et transitions tendance"]
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
                title: "TikTok & Shorts",
                description: "Montage ultra-dynamique, jump cuts, effets viraux. Maîtrise des codes de chaque plateforme.",
                features: ["Rythme viral", "Trending sounds", "Hooks percutants"]
              },
              {
                icon: <Eye className="w-8 h-8 text-orange-400" />,
                title: "Étalonnage Pro",
                description: "Correction colorimétrique professionnelle. Ambiance cinématographique pour vos contenus.",
                features: ["LUTs personnalisées", "Color grading", "Uniformisation des rushes"]
              },
              {
                icon: <Clock className="w-8 h-8 text-pink-400" />,
                title: "Montage Express",
                description: "Service rapide 24-48h pour vos urgences. Qualité garantie même en délai serré.",
                features: ["Livraison 24-48h", "Révisions incluses", "Formats prêts à publier"]
              },
              {
                icon: <Video className="w-8 h-8 text-cyan-400" />,
                title: "Post-Production Complète",
                description: "Sound design, motion graphics, habillage. Tout pour sublimer vos contenus.",
                features: ["Mixage audio", "Animations 2D", "Sous-titrage pro"]
              }
            ].map((service, index) => (
              <motion.article 
                key={index}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
                variants={itemVariants}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-white/10 rounded-xl mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-light text-white">{service.title}</h3>
                </div>
                
                <p className="text-white/70 font-light leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-white/60">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* Process de travail */}
        <motion.section 
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-light text-white mb-12 text-center"
            variants={itemVariants}
          >
            Notre Processus de Montage Vidéo
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Brief & Analyse",
                description: "Analyse de vos rushes, définition du style et du message à transmettre."
              },
              {
                step: "02", 
                title: "Montage Initial",
                description: "Première version avec structure narrative, rythme et transitions de base."
              },
              {
                step: "03",
                title: "Post-Production",
                description: "Étalonnage, sound design, effets, sous-titrage et optimisations techniques."
              },
              {
                step: "04",
                title: "Livraison Multi-Format", 
                description: "Formats optimisés pour chaque plateforme avec fichiers sources."
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="text-center"
                variants={itemVariants}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-2xl flex items-center justify-center border border-green-400/30">
                  <span className="text-green-400 font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">{step.title}</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Tarifs transparents */}
        <motion.section 
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" 
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-light text-white mb-12 text-center"
            variants={itemVariants}
          >
            Tarifs Montage Vidéo Transparents
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Short Format",
                price: "150€",
                duration: "30-60s",
                description: "Perfect pour TikTok, Reels, YouTube Shorts",
                features: [
                  "Montage dynamique",
                  "Étalonnage de base", 
                  "Sous-titres inclus",
                  "Export multi-format",
                  "1 révision gratuite"
                ]
              },
              {
                name: "Format Standard", 
                price: "300€",
                duration: "2-5min",
                description: "Idéal pour YouTube, présentation produit",
                features: [
                  "Montage narratif",
                  "Étalonnage professionnel",
                  "Sound design",
                  "Motion graphics simples", 
                  "2 révisions gratuites"
                ],
                popular: true
              },
              {
                name: "Long Format",
                price: "Sur mesure", 
                duration: "5min+",
                description: "Documentaire, événementiel, corporate",
                features: [
                  "Post-production complète",
                  "Étalonnage cinéma",
                  "Animations complexes",
                  "Mixage audio pro",
                  "Révisions illimitées"
                ]
              }
            ].map((plan, index) => (
              <motion.div 
                key={index}
                className={`relative bg-white/5 backdrop-blur-xl border rounded-3xl p-8 ${
                  plan.popular ? 'border-green-400/50 bg-green-400/5' : 'border-white/10'
                }`}
                variants={itemVariants}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-400 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                    Populaire
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-light text-white mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-green-400 mb-2">{plan.price}</div>
                  <div className="text-white/60 text-sm">{plan.duration}</div>
                  <p className="text-white/70 font-light mt-4">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-white/70">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm font-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href="/contact"
                  onClick={() => trackQuoteRequest('montage-video')}
                  className={`block w-full py-3 rounded-2xl text-center font-medium transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-green-400 text-gray-900 hover:bg-green-300' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Commander maintenant
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* FAQ Montage Vidéo */}
        <motion.section 
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-light text-white mb-12 text-center"
            variants={itemVariants}
          >
            Questions Fréquentes - Montage Vidéo
          </motion.h2>

          <div className="space-y-6">
            {[
              {
                question: "Quels formats de fichiers acceptez-vous ?",
                answer: "Nous travaillons avec tous les formats courants : MP4, MOV, AVI, MKV. Nous pouvons également traiter les fichiers RAW et LOG pour un meilleur contrôle colorimétrique."
              },
              {
                question: "Combien de temps prend un montage vidéo ?",
                answer: "Délai standard 3-5 jours ouvrés pour un montage classique. Service express 24-48h disponible avec supplément. Les projets complexes peuvent nécessiter 1-2 semaines."
              },
              {
                question: "Proposez-vous des révisions ?",
                answer: "Oui ! 1-2 révisions gratuites incluses selon la formule. Révisions supplémentaires facturées 50€/h. Nous privilégions un brief détaillé pour limiter les allers-retours."
              },
              {
                question: "Livrez-vous dans plusieurs formats ?",
                answer: "Absolument. Export optimisé pour chaque plateforme : YouTube (1080p/4K), Instagram (1080x1080, 1080x1920), TikTok (1080x1920), plus formats sur mesure."
              },
              {
                question: "Travaillez-vous avec des équipes en remote ?",
                answer: "Oui, nous collaborons facilement à distance via WeTransfer, Google Drive ou Dropbox. Suivi projet par email/WhatsApp avec previews réguliers."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
                variants={itemVariants}
              >
                <h3 className="text-lg font-medium text-white mb-3">{faq.question}</h3>
                <p className="text-white/70 font-light leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA final */}
        <motion.footer 
          className="text-center py-16 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
            Prêt à transformer vos rushes en contenus viraux ?
          </h3>
          <p className="text-lg text-white/70 mb-8 font-light max-w-2xl mx-auto">
            Montage vidéo professionnel à Valence (26). Devis gratuit sous 24h, 
            livraison rapide, qualité garantie.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              onClick={() => trackQuoteRequest('montage-video')}
              className="px-8 py-4 bg-white/95 text-gray-900 rounded-2xl font-medium 
                         hover:bg-white transition-all duration-300 hover:scale-105"
            >
              Demander un devis gratuit
            </Link>
            <Link 
              href="/projets" 
              className="px-8 py-4 bg-white/10 text-white rounded-2xl font-medium 
                         hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              Voir le portfolio
            </Link>
          </div>
        </motion.footer>
      </div>
    </main>
  );
}