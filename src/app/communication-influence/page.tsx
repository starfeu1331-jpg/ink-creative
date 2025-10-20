"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { trackQuoteRequest } from "@/components/Analytics";
import { Handshake, Users, TrendingUp, MessageCircle, BarChart, Shield, ArrowRight, CheckCircle } from "lucide-react";

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

export default function CommunicationInfluencePage() {
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
            <Handshake className="w-6 h-6 text-purple-400" />
            <span className="text-white/80 font-light">Communication & Stratégie d'Influence</span>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Communication d'Influence à Valence (26)
            <br />
            <span className="font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Stratégie & Impact
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Stratégie d'influence, gestion de campagnes et positionnement de marque. 
            Communication authentique et performante pour votre entreprise en Drôme.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link 
              href="/contact"
              onClick={() => trackQuoteRequest('communication-influence')}
              className="px-8 py-4 bg-white/95 text-gray-900 rounded-2xl font-medium 
                         hover:bg-white transition-all duration-300 hover:scale-105
                         backdrop-blur-xl border border-white/20 shadow-xl
                         flex items-center justify-center gap-2"
            >
              Audit communication gratuit
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/projets#communication"
              className="px-8 py-4 bg-white/10 text-white rounded-2xl font-medium 
                         hover:bg-white/20 transition-all duration-300 hover:scale-105
                         backdrop-blur-xl border border-white/30 text-center"
            >
              Voir nos campagnes
            </Link>
          </motion.div>
        </header>

        {/* Services de communication */}
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
            Services Communication d'Influence
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart className="w-8 h-8 text-purple-400" />,
                title: "Audit Communication",
                description: "Analyse complète de votre présence actuelle, benchmark concurrentiel et identification des opportunités.",
                features: ["Audit réseaux sociaux", "Analyse concurrentielle", "Points d'amélioration", "Recommandations prioritaires"]
              },
              {
                icon: <Users className="w-8 h-8 text-blue-400" />,
                title: "Stratégie d'Influence",
                description: "Définition de votre stratégie globale, sélection d'influenceurs et création de partenariats durables.",
                features: ["Mapping d'influenceurs", "Négociation partenariats", "Brief créatifs", "Suivi des collaborations"]
              },
              {
                icon: <MessageCircle className="w-8 h-8 text-green-400" />,
                title: "Gestion de Campagnes",
                description: "Pilotage complet de vos campagnes d'influence du brief à l'analyse des résultats.",
                features: ["Planning éditorial", "Coordination équipes", "Suivi temps réel", "Reporting détaillé"]
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-orange-400" />,
                title: "Positionnement de Marque",
                description: "Définition de votre positionnement unique, storytelling de marque et messages clés différenciants.",
                features: ["Analyse positionnement", "Storytelling sur-mesure", "Messages clés", "Ton de communication"]
              },
              {
                icon: <Shield className="w-8 h-8 text-pink-400" />,
                title: "Gestion e-Réputation",
                description: "Surveillance et amélioration de votre réputation en ligne. Gestion proactive des avis et mentions.",
                features: ["Monitoring mentions", "Gestion avis clients", "Stratégie de réponse", "Amélioration image"]
              },
              {
                icon: <Handshake className="w-8 h-8 text-cyan-400" />,
                title: "Formation Équipes",
                description: "Formation de vos équipes aux bonnes pratiques de communication et d'influence digitale.",
                features: ["Workshops pratiques", "Guidelines internes", "Outils de mesure", "Suivi personnalisé"]
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
                      <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* Approche méthodologique */}
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
            Notre Approche Stratégique
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Analyse & Diagnostic",
                description: "Audit complet de votre communication actuelle et identification des enjeux."
              },
              {
                step: "02", 
                title: "Stratégie Sur-Mesure",
                description: "Définition d'une stratégie personnalisée selon vos objectifs business."
              },
              {
                step: "03",
                title: "Mise en Œuvre",
                description: "Déploiement des actions avec suivi rigoureux et ajustements en temps réel."
              },
              {
                step: "04",
                title: "Mesure & Optimisation", 
                description: "Analyse des performances et optimisation continue pour maximiser le ROI."
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="text-center"
                variants={itemVariants}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-2xl flex items-center justify-center border border-purple-400/30">
                  <span className="text-purple-400 font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">{step.title}</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Pourquoi la communication d'influence */}
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
              Pourquoi Investir dans la Communication d'Influence ?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <ul className="space-y-6">
                  {[
                    {
                      title: "Authenticité & Confiance",
                      description: "L'influence génère 11x plus d'engagement que la publicité traditionnelle."
                    },
                    {
                      title: "Ciblage Précis",
                      description: "Atteignez exactement votre cible grâce aux communautés d'influenceurs."
                    },
                    {
                      title: "ROI Mesurable", 
                      description: "Trackez précisément l'impact de chaque action sur vos ventes."
                    },
                    {
                      title: "Durabilité des Résultats",
                      description: "Construisez une réputation solide qui génère du bouche-à-oreille."
                    }
                  ].map((benefit, index) => (
                    <li key={index} className="flex gap-4">
                      <div className="w-2 h-2 rounded-full bg-purple-400 mt-3 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-white font-medium mb-2">{benefit.title}</h3>
                        <p className="text-white/70 font-light">{benefit.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-2xl p-6 border border-purple-400/20 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">+89%</div>
                  <p className="text-white/80 font-light text-sm">
                    d'augmentation de notoriété
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-2xl p-6 border border-blue-400/20 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">6.5x</div>
                  <p className="text-white/80 font-light text-sm">
                    ROI moyen des campagnes
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Formules d'accompagnement */}
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
            Formules d'Accompagnement Communication
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Audit Express",
                price: "490€",
                description: "Diagnostic complet de votre communication actuelle",
                features: [
                  "Audit réseaux sociaux complet",
                  "Analyse benchmark concurrentiel",
                  "Plan d'action prioritaire", 
                  "Recommandations chiffrées",
                  "Présentation 1h incluse"
                ]
              },
              {
                name: "Accompagnement Mensuel", 
                price: "1290€/mois",
                description: "Stratégie et pilotage de votre communication",
                features: [
                  "Stratégie personnalisée",
                  "Sélection & gestion influenceurs",
                  "Pilotage 2 campagnes/mois",
                  "Reporting mensuel détaillé",
                  "Ajustements en temps réel"
                ],
                popular: true
              },
              {
                name: "Projet Sur-Mesure",
                price: "Sur devis", 
                description: "Solution complète adaptée à vos enjeux spécifiques",
                features: [
                  "Audit approfondi",
                  "Stratégie long-terme",
                  "Formation équipes internes",
                  "Mise en place outils",
                  "Suivi performance 6 mois"
                ]
              }
            ].map((plan, index) => (
              <motion.div 
                key={index}
                className={`relative bg-white/5 backdrop-blur-xl border rounded-3xl p-8 ${
                  plan.popular ? 'border-purple-400/50 bg-purple-400/5' : 'border-white/10'
                }`}
                variants={itemVariants}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-400 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Populaire
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-light text-white mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-purple-400 mb-4">{plan.price}</div>
                  <p className="text-white/70 font-light">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-white/70">
                      <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span className="text-sm font-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href="/contact"
                  onClick={() => trackQuoteRequest('communication-influence')}
                  className={`block w-full py-3 rounded-2xl text-center font-medium transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-purple-400 text-white hover:bg-purple-300' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Choisir cette formule
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* FAQ Communication */}
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
            Questions Fréquentes - Communication d'Influence
          </motion.h2>

          <div className="space-y-6">
            {[
              {
                question: "Comment choisissez-vous les influenceurs pour ma marque ?",
                answer: "Nous analysons l'alignement des valeurs, l'engagement réel de la communauté, la qualité du contenu et la cohérence avec votre cible. Nous privilégions la micro-influence (1K-100K) pour un meilleur ROI."
              },
              {
                question: "Combien de temps faut-il pour voir des résultats ?",
                answer: "Premiers indicateurs dès 2-4 semaines (engagement, mentions). Impact sur notoriété et ventes visible à partir de 2-3 mois avec une stratégie continue et cohérente."
              },
              {
                question: "Travaillez-vous avec tous les secteurs d'activité ?",
                answer: "Oui, nous adaptons notre approche : B2B (LinkedIn, leaders d'opinion), B2C (Instagram, TikTok), secteurs réglementés (pharma, finance) avec respect des contraintes légales."
              },
              {
                question: "Comment mesurez-vous le retour sur investissement ?",
                answer: "KPIs personnalisés selon vos objectifs : reach, engagement, trafic web, leads générés, ventes attribuables. Dashboard temps réel et reporting mensuel détaillé."
              },
              {
                question: "Proposez-vous une gestion de crise ?",
                answer: "Oui, notre service e-réputation inclut la veille proactive et la gestion de crise. Protocole de réponse rapide, communication de crise et plan de redressement d'image si nécessaire."
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
            Prêt à transformer votre communication ?
          </h3>
          <p className="text-lg text-white/70 mb-8 font-light max-w-2xl mx-auto">
            Expert en communication d'influence à Valence (26). Stratégie sur-mesure, 
            résultats mesurables. Audit gratuit sous 48h.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              onClick={() => trackQuoteRequest('communication-influence')}
              className="px-8 py-4 bg-white/95 text-gray-900 rounded-2xl font-medium 
                         hover:bg-white transition-all duration-300 hover:scale-105"
            >
              Audit communication gratuit
            </Link>
            <Link 
              href="/projets" 
              className="px-8 py-4 bg-white/10 text-white rounded-2xl font-medium 
                         hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              Voir nos campagnes
            </Link>
          </div>
        </motion.footer>
      </div>
    </main>
  );
}