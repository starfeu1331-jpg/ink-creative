"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Quel budget prévoir pour une campagne d'influence marketing ?",
    answer: "Entre 500€ et 1500€. Autant vous dire que c'est vague car chaque projet est différent, chaque besoin est unique. Nous adaptons la stratégie à votre budget pour maximiser le ROI."
  },
  {
    question: "Combien de temps dure une campagne typique ?",
    answer: "Une campagne complète s'étend généralement sur 2 à 3 mois : 2-3 semaines de préparation, 3-4 semaines de diffusion, puis 2 semaines d'analyse. Les premiers résultats sont visibles dès la première semaine de publication."
  },
  {
    question: "Quels secteurs accompagnez-vous ?",
    answer: "Tous les secteurs sont communicables, c'est la grande force de l'influence. Nos partenaires de prédilection sont autour de la rénovation et du lifestyle au vu du nombre d'agents et agences dans nos répertoires, mais nous nous adaptons à tous les secteurs."
  },
  {
    question: "Comment mesurez-vous le retour sur investissement ?",
    answer: "Nous trackons les métriques clés : portée, engagement, trafic web, conversions et ventes générées. Vous recevez un dashboard en temps réel et un rapport détaillé avec recommandations pour optimiser les prochaines campagnes."
  },
  {
    question: "Dois-je avoir des comptes sur tous les réseaux sociaux ?",
    answer: "Non, nous identifions les plateformes où se trouve votre audience cible. Souvent, 1 à 2 réseaux bien exploités suffisent. Instagram et TikTok dominent pour le B2C, LinkedIn pour le B2B."
  },
  {
    question: "Que se passe-t-il si un influenceur ne respecte pas le brief ?",
    answer: "Nos contrats incluent des clauses de validation. Chaque contenu est revu avant publication. En cas de non-conformité, nous demandons des ajustements ou des re-publications sans frais supplémentaires pour vous."
  },
  {
    question: "Puis-je choisir les influenceurs moi-même ?",
    answer: "Absolument ! Nous vous présentons une sélection qualifiée et vous validez les profils. Vous pouvez aussi suggérer des créateurs. Notre rôle est de vérifier leur authenticité et pertinence pour votre marque."
  },
  {
    question: "L'influence marketing fonctionne-t-elle pour les petites entreprises ?",
    answer: "Oui, c'est même idéal ! Les micro et nano-influenceurs (5K-50K abonnés) ont des taux d'engagement supérieurs et des tarifs accessibles. Ils créent une proximité authentique parfaite pour les PME."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4">
            Questions fréquentes
          </h2>
          <p className="text-xl text-white/70">
            Tout ce que vous devez savoir sur l&apos;influence marketing
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-left hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                aria-expanded={openIndex === index}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-white pr-8 group-hover:text-green-400 transition-colors">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 text-white/50 group-hover:text-green-400"
                  >
                    <ChevronDown className="w-6 h-6" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-white/70 leading-relaxed mt-4 pr-8">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA après FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-white/60 mb-6">
            Une autre question ? Parlons-en directement
          </p>
          <a
            href="#contact"
            className="inline-flex px-8 py-4 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-all duration-300 hover:scale-105 backdrop-blur-xl border border-white/20"
          >
            Contactez-nous
          </a>
        </motion.div>
      </div>
    </section>
  );
}
