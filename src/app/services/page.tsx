"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { trackServiceView } from "@/components/Analytics";
import { Palette, Handshake, Video, Package } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Header SEO optimisé */}
        <header className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Services Ink Creative à Valence (26)
          </motion.h1>
          <motion.p 
            className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Expert en graphisme, montage vidéo et communication d&apos;influence en Drôme. 
            Prestations personnalisées selon vos besoins et objectifs.
          </motion.p>
        </header>

        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Graphisme & Infographie */}
          <motion.section 
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
            variants={cardVariants}
          >
            <header className="flex items-center mb-6">
              <div className="mr-6 p-3 bg-white/10 rounded-xl">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-light text-white">
                Graphisme & Infographie
              </h2>
            </header>
            
            <p className="text-lg text-white/70 italic mb-4 font-light">
              Donnez une image claire et moderne à votre marque.
            </p>
            
            <p className="text-lg text-white/80 leading-relaxed mb-8 font-light">
              Je conçois des visuels qui reflètent votre identité, que ce soit pour vos réseaux sociaux 
              ou pour vos supports professionnels. Chaque création est pensée pour capter l&apos;attention, 
              transmettre votre message et renforcer la cohérence de votre communication.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-xl font-light text-white mb-4">Identité Visuelle</h3>
                <ul className="space-y-2 text-white/70 font-light">
                  <li>• Création de logo et charte graphique</li>
                  <li>• Univers visuel complet</li>
                  <li>• Déclinaisons tous supports</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-light text-white mb-4">Supports Print & Digital</h3>
                <ul className="space-y-2 text-white/70 font-light">
                  <li>• Catalogues, brochures, flyers</li>
                  <li>• Visuels pour réseaux sociaux</li>
                  <li>• Mise en page professionnelle</li>
                </ul>
              </div>
            </div>
            
            <p className="text-sm text-white/50 italic mb-6">
              Prestations personnalisées selon votre secteur, votre style et vos objectifs
            </p>
            
            {/* Bouton vers page dédiée */}
            <Link 
              href="/identite-visuelle"
              onClick={() => trackServiceView('identite-visuelle')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/20 hover:bg-blue-500/30 
                         border border-blue-500/30 hover:border-blue-500/50 rounded-2xl 
                         text-blue-400 hover:text-blue-300 font-medium transition-all duration-300
                         hover:scale-105 backdrop-blur-sm"
            >
              <Palette className="w-4 h-4" />
              Voir tous nos services d'identité visuelle
            </Link>
          </motion.section>

          {/* Accompagnement stratégique */}
          <motion.section 
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
            variants={cardVariants}
          >
            <header className="flex items-center mb-6">
              <div className="mr-6 p-3 bg-white/10 rounded-xl">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-light text-white">
                Communication & Stratégie d&apos;Influence
              </h2>
            </header>
            
            <p className="text-lg text-white/70 italic mb-4 font-light">
              Je vous aide à bâtir une communication cohérente, efficace et humaine.
            </p>
            
            <p className="text-lg text-white/80 leading-relaxed mb-8 font-light">
              J&apos;accompagne les marques dans leur stratégie globale de communication, 
              en combinant influence, réseaux sociaux et positionnement. L&apos;objectif : 
              vous rendre visible, crédible et impactant — sans artifice.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-xl font-light text-white mb-4">Accompagnement Stratégique</h3>
                <ul className="space-y-2 text-white/70 font-light">
                  <li>• Audit de communication existante</li>
                  <li>• Plan d&apos;action personnalisé</li>
                  <li>• Positionnement et storytelling</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-light text-white mb-4">Gestion d&apos;Influence</h3>
                <ul className="space-y-2 text-white/70 font-light">
                  <li>• Sélection et suivi d&apos;influenceurs</li>
                  <li>• Pilotage de campagnes</li>
                  <li>• Analyse de performance</li>
                </ul>
              </div>
            </div>
            
            <p className="text-sm text-white/50 italic mb-6">
              Approche sur-mesure selon votre secteur et vos objectifs business
            </p>
            
            {/* Bouton vers page dédiée */}
            <Link 
              href="/communication-influence"
              onClick={() => trackServiceView('communication-influence')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500/20 hover:bg-purple-500/30 
                         border border-purple-500/30 hover:border-purple-500/50 rounded-2xl 
                         text-purple-400 hover:text-purple-300 font-medium transition-all duration-300
                         hover:scale-105 backdrop-blur-sm"
            >
              <Handshake className="w-4 h-4" />
              Découvrir notre expertise en communication d'influence
            </Link>
          </motion.section>

          {/* Montage vidéo */}
          <motion.section 
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
            variants={cardVariants}
          >
            <header className="flex items-center mb-6">
              <div className="mr-6 p-3 bg-white/10 rounded-xl">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-light text-white">
                Montage Vidéo & Contenu Social
              </h2>
            </header>
            
            <p className="text-lg text-white/70 italic mb-4 font-light">
              Donnez vie à votre message grâce à des vidéos percutantes.
            </p>
            
            <p className="text-lg text-white/80 leading-relaxed mb-8 font-light">
              Je réalise des vidéos dynamiques et modernes pensées pour les réseaux sociaux 
              (Instagram, TikTok, YouTube). Chaque montage est ajusté à votre ton de marque 
              et votre public.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-xl font-light text-white mb-4">Montage Courts Formats</h3>
                <ul className="space-y-2 text-white/70 font-light">
                  <li>• Reels Instagram / TikToks</li>
                  <li>• YouTube Shorts</li>
                  <li>• Stories animées</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-light text-white mb-4">Post-Production</h3>
                <ul className="space-y-2 text-white/70 font-light">
                  <li>• Étalonnage et habillage</li>
                  <li>• Sous-titrage et motion graphics</li>
                  <li>• Adaptation multi-plateformes</li>
                </ul>
              </div>
            </div>
            
            <p className="text-sm text-white/50 italic mb-6">
              Prestations adaptées à vos besoins : du clip rapide à la série de contenus
            </p>
            
            {/* Bouton vers page dédiée */}
            <Link 
              href="/montage-video"
              onClick={() => trackServiceView('montage-video')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/20 hover:bg-green-500/30 
                         border border-green-500/30 hover:border-green-500/50 rounded-2xl 
                         text-green-400 hover:text-green-300 font-medium transition-all duration-300
                         hover:scale-105 backdrop-blur-sm"
            >
              <Video className="w-4 h-4" />
              Voir tous nos services de montage vidéo
            </Link>
          </motion.section>

          {/* Packs réseaux sociaux */}
          <motion.section 
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
            variants={cardVariants}
          >
            <header className="flex items-center mb-6">
              <div className="mr-6 p-3 bg-white/10 rounded-xl">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-light text-white">
                Packs Réseaux Sociaux
              </h2>
            </header>
            
            <p className="text-lg text-white/70 italic mb-6 font-light">
              Des formules simples et transparentes pour vous faire gagner du temps et de la cohérence.
            </p>

            {/* Table responsive */}
            <div className="overflow-x-auto mb-6">
              <table className="table-auto w-full border-collapse bg-white/5 rounded-xl overflow-hidden border border-white/10">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10">
                    <th className="px-6 py-4 text-left font-light text-white">Pack</th>
                    <th className="px-6 py-4 text-left font-light text-white">Contenu</th>
                    <th className="px-6 py-4 text-left font-light text-white">Objectif</th>
                    <th className="px-6 py-4 text-left font-light text-white">Prix mensuel (HT)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 font-medium text-white">Essentiel</td>
                    <td className="px-6 py-4 text-white/70 font-light">4 visuels + 2 vidéos (15s) / mois</td>
                    <td className="px-6 py-4 text-white/70 font-light">Donner une présence pro sur les réseaux</td>
                    <td className="px-6 py-4 font-semibold text-green-400">390 €</td>
                  </tr>
                  <tr className="bg-white/5 border-b border-white/10">
                    <td className="px-6 py-4 font-medium text-white">Créatif</td>
                    <td className="px-6 py-4 text-white/70 font-light">8 visuels + 4 vidéos / mois + suivi visuel global</td>
                    <td className="px-6 py-4 text-white/70 font-light">Créer une identité reconnaissable et régulière</td>
                    <td className="px-6 py-4 font-semibold text-green-400">690 €</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 font-medium text-white">Stratégique</td>
                    <td className="px-6 py-4 text-white/70 font-light">12 visuels + 6 vidéos / mois + accompagnement stratégique + reporting</td>
                    <td className="px-6 py-4 text-white/70 font-light">Construire une communication complète et performante</td>
                    <td className="px-6 py-4 font-semibold text-green-400">990 €</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-light text-white mb-3">Inclus dans tous les packs :</h3>
              <ul className="space-y-2 text-white/70 font-light">
                <li>• Un brief initial (style, ton, objectifs)</li>
                <li>• Fichiers finaux prêts à publier</li>
                <li>• 1 révision gratuite par contenu</li>
                <li>• Suivi mensuel selon la formule choisie</li>
              </ul>
            </div>
          </motion.section>
        </motion.div>

        {/* Conclusion SEO optimisée */}
        <motion.footer 
          className="text-center mt-16 py-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-2xl text-white/90 italic font-light leading-relaxed">
            Trois expertises, une même vision : rendre les marques visibles, cohérentes et inspirantes.
          </p>
          <p className="text-lg text-white/70 mt-4">
            Basé à Valence (26), j&apos;accompagne les entreprises de la Drôme, Rhône-Alpes et au-delà.
          </p>
          
          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <motion.div
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-8 py-4 text-white font-medium hover:bg-white/15 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Demander un devis gratuit
              </motion.div>
            </Link>
            
            <Link href="/projets">
              <motion.div
                className="border border-white/30 rounded-2xl px-8 py-4 text-white/80 font-medium hover:bg-white/5 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Voir nos réalisations
              </motion.div>
            </Link>
          </div>
        </motion.footer>
      </div>
    </main>
  );
}