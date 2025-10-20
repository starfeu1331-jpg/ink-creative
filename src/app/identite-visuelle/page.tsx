"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { trackQuoteRequest } from "@/components/Analytics";
import { Palette, Layers, Eye, Sparkles, Target, Briefcase, ArrowRight, CheckCircle } from "lucide-react";

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

export default function IdentiteVisuellePage() {
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
            <Palette className="w-6 h-6 text-blue-400" />
            <span className="text-white/80 font-light">Création d'Identité Visuelle</span>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Identité Visuelle à Valence (26)
            <br />
            <span className="font-medium bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Logo & Branding
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Création de logos mémorables, chartes graphiques complètes et identités visuelles 
            qui marquent les esprits. Graphiste professionnel en Drôme.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link 
              href="/contact"
              onClick={() => trackQuoteRequest('identite-visuelle')}
              className="px-8 py-4 bg-white/95 text-gray-900 rounded-2xl font-medium 
                         hover:bg-white transition-all duration-300 hover:scale-105
                         backdrop-blur-xl border border-white/20 shadow-xl
                         flex items-center justify-center gap-2"
            >
              Devis création logo
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/projets#identite"
              className="px-8 py-4 bg-white/10 text-white rounded-2xl font-medium 
                         hover:bg-white/20 transition-all duration-300 hover:scale-105
                         backdrop-blur-xl border border-white/30 text-center"
            >
              Voir nos créations
            </Link>
          </motion.div>
        </header>

        {/* Services d'identité visuelle */}
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
            Services Création d'Identité Visuelle
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8 text-blue-400" />,
                title: "Création de Logo",
                description: "Logo unique et mémorable qui raconte votre histoire. Plusieurs propositions, déclinaisons complètes.",
                features: ["3-5 propositions créatives", "Logo vectoriel évolutif", "Déclinaisons couleur/N&B", "Guide d'utilisation"]
              },
              {
                icon: <Layers className="w-8 h-8 text-purple-400" />,
                title: "Charte Graphique",
                description: "Univers visuel cohérent avec couleurs, typographies, style. Document de référence complet.",
                features: ["Palette couleurs custom", "Typographies harmonieuses", "Règles d'utilisation", "Templates de base"]
              },
              {
                icon: <Briefcase className="w-8 h-8 text-green-400" />,
                title: "Supports Print",
                description: "Cartes de visite, flyers, brochures. Tous vos supports print dans votre nouvelle identité.",
                features: ["Cartes de visite premium", "Papier à en-tête", "Brochures & catalogues", "Signalétique"]
              },
              {
                icon: <Eye className="w-8 h-8 text-orange-400" />,
                title: "Identité Digitale",
                description: "Avatar réseaux sociaux, bannières, favicon. Cohérence parfaite sur tous vos canaux digitaux.",
                features: ["Avatars multi-plateformes", "Bannières personnalisées", "Templates posts", "Favicon & assets web"]
              },
              {
                icon: <Sparkles className="w-8 h-8 text-pink-400" />,
                title: "Refonte d'Identité",
                description: "Modernisation de votre image existante. Évolution respectueuse de votre historique.",
                features: ["Audit identité actuelle", "Évolution progressive", "Conservation éléments forts", "Migration en douceur"]
              },
              {
                icon: <Palette className="w-8 h-8 text-cyan-400" />,
                title: "Packaging Design",
                description: "Design packaging produit qui se démarque en rayon. Créativité et contraintes techniques maîtrisées.",
                features: ["Design sur-mesure", "Contraintes techniques", "Mockups réalistes", "Déclinaisons gamme"]
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
                      <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* Processus de création */}
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
            Notre Processus de Création d'Identité
          </motion.h2>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                title: "Brief Créatif",
                description: "Analyse approfondie de votre marque, concurrence, cibles et objectifs."
              },
              {
                step: "02", 
                title: "Recherches",
                description: "Exploration créative, moodboards, références et directions artistiques."
              },
              {
                step: "03",
                title: "Concepts",
                description: "Création de 3-5 propositions de logos avec différentes approches."
              },
              {
                step: "04",
                title: "Développement", 
                description: "Affinage du concept choisi, déclinaisons et tests d'applications."
              },
              {
                step: "05",
                title: "Livraison", 
                description: "Charte graphique complète, fichiers sources et guide d'utilisation."
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="text-center"
                variants={itemVariants}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-2xl flex items-center justify-center border border-blue-400/30">
                  <span className="text-blue-400 font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-lg font-light text-white mb-4">{step.title}</h3>
                <p className="text-white/70 font-light leading-relaxed text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Tarifs identité visuelle */}
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
            Tarifs Identité Visuelle & Logo
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Logo Essentiel",
                price: "490€",
                description: "Perfect pour startups et petites entreprises",
                features: [
                  "3 propositions de logo",
                  "Logo vectoriel final",
                  "Déclinaisons N&B/couleur", 
                  "Fichiers print & web",
                  "1 révision incluse"
                ]
              },
              {
                name: "Identité Complète", 
                price: "890€",
                description: "Solution complète pour une identité forte",
                features: [
                  "Création logo + charte",
                  "Palette couleurs custom",
                  "Typographies & règles",
                  "Templates de base",
                  "Cartes de visite incluses"
                ],
                popular: true
              },
              {
                name: "Identité Premium",
                price: "1490€", 
                description: "Identité haut de gamme avec accompagnement",
                features: [
                  "Identité visuelle complète",
                  "Supports print & digital",
                  "Packaging si applicable", 
                  "Suivi mise en place",
                  "Révisions illimitées"
                ]
              }
            ].map((plan, index) => (
              <motion.div 
                key={index}
                className={`relative bg-white/5 backdrop-blur-xl border rounded-3xl p-8 ${
                  plan.popular ? 'border-blue-400/50 bg-blue-400/5' : 'border-white/10'
                }`}
                variants={itemVariants}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-400 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                    Recommandé
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-light text-white mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-blue-400 mb-4">{plan.price}</div>
                  <p className="text-white/70 font-light">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-white/70">
                      <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span className="text-sm font-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href="/contact"
                  onClick={() => trackQuoteRequest('identite-visuelle')}
                  className={`block w-full py-3 rounded-2xl text-center font-medium transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-blue-400 text-gray-900 hover:bg-blue-300' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Choisir cette formule
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Pourquoi l'identité visuelle est cruciale */}
        <motion.section 
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12"
            variants={itemVariants}
          >
            <h2 className="text-3xl md:text-4xl font-light text-white mb-8 text-center">
              Pourquoi Investir dans une Identité Visuelle ?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <ul className="space-y-6">
                  {[
                    {
                      title: "Reconnaissance Immédiate",
                      description: "Un logo mémorable permet d'être identifié en moins de 3 secondes."
                    },
                    {
                      title: "Confiance & Crédibilité",
                      description: "Une identité professionnelle rassure vos clients et partenaires."
                    },
                    {
                      title: "Différenciation Concurrentielle", 
                      description: "Sortez du lot avec une identité unique qui vous appartient."
                    },
                    {
                      title: "Cohérence Omnicanale",
                      description: "Même image sur tous vos supports : print, web, réseaux sociaux."
                    }
                  ].map((benefit, index) => (
                    <li key={index} className="flex gap-4">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mt-3 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-white font-medium mb-2">{benefit.title}</h3>
                        <p className="text-white/70 font-light">{benefit.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-2xl p-8 border border-blue-400/20">
                  <div className="text-4xl font-bold text-blue-400 mb-2">85%</div>
                  <p className="text-white/80 font-light">
                    des consommateurs prennent une décision d'achat basée sur l'apparence visuelle
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* FAQ Identité Visuelle */}
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
            Questions Fréquentes - Identité Visuelle
          </motion.h2>

          <div className="space-y-6">
            {[
              {
                question: "Combien de temps pour créer un logo ?",
                answer: "Comptez 2-3 semaines pour une création complète. 1 semaine de recherche/concepts, puis 1-2 semaines de développement selon les révisions. Service express possible en 1 semaine avec supplément."
              },
              {
                question: "Que contient exactement une charte graphique ?",
                answer: "Logo et déclinaisons, palette couleurs avec codes, typographies principales et secondaires, règles d'utilisation, exemples d'applications, templates de base (cartes, en-têtes)."
              },
              {
                question: "Puis-je utiliser mon logo partout après création ?",
                answer: "Absolument ! Vous recevez tous les fichiers sources (AI, EPS, PNG, SVG) et les droits d'utilisation commerciale illimités. Le logo vous appartient entièrement."
              },
              {
                question: "Proposez-vous des révisions ?",
                answer: "Oui, révisions incluses selon la formule (1 à illimitées). Au-delà, 80€/h. Notre processus de brief détaillé minimise généralement les révisions importantes."
              },
              {
                question: "Travaillez-vous avec de grandes entreprises ?",
                answer: "Nous accompagnons TPE, PME et grands comptes. Nos processus s'adaptent à vos contraintes : validation hierarchique, brief marketing, respect de guidelines existantes."
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
            Prêt à créer une identité visuelle mémorable ?
          </h3>
          <p className="text-lg text-white/70 mb-8 font-light max-w-2xl mx-auto">
            Graphiste professionnel à Valence (26). Création de logo et identité sur-mesure. 
            Devis gratuit sous 24h.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              onClick={() => trackQuoteRequest('identite-visuelle')}
              className="px-8 py-4 bg-white/95 text-gray-900 rounded-2xl font-medium 
                         hover:bg-white transition-all duration-300 hover:scale-105"
            >
              Demander un devis logo
            </Link>
            <Link 
              href="/projets" 
              className="px-8 py-4 bg-white/10 text-white rounded-2xl font-medium 
                         hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              Voir nos créations
            </Link>
          </div>
        </motion.footer>
      </div>
    </main>
  );
}