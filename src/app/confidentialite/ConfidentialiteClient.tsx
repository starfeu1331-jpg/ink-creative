'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ConfidentialiteClient() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-light mb-12 text-white">
            Politique de Confidentialité
          </h1>

          <div className="space-y-8 text-white/80">
            {/* Introduction */}
            <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  La présente Politique de Confidentialité décrit la façon dont <strong className="text-white">Ink</strong> collecte, utilise et protège les données personnelles des utilisateurs du site <strong className="text-white">ink-creative.fr</strong>.
                </p>
                <p>
                  Ink s'engage à protéger la vie privée de ses utilisateurs et à respecter la réglementation applicable en matière de protection des données personnelles, notamment le Règlement Général sur la Protection des Données (RGPD) et la loi Informatique et Libertés.
                </p>
              </div>
            </section>

            {/* Responsable du traitement */}
            <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">1. Responsable du traitement des données</h2>
              <div className="space-y-2 text-white/70 leading-relaxed">
                <p><strong className="text-white">Responsable :</strong> Marceau JUILLET</p>
                <p><strong className="text-white">Entreprise :</strong> Ink</p>
                <p><strong className="text-white">SIRET :</strong> 891 272 536 00022</p>
                <p><strong className="text-white">Adresse :</strong> 17 Place de la Fontaine, Étage 0, 26120 Montmeyran, France</p>
                <p><strong className="text-white">Email :</strong> <a href="mailto:marceau.juillet.pro@gmail.com" className="text-green-400 hover:underline">marceau.juillet.pro@gmail.com</a></p>
                <p><strong className="text-white">Téléphone :</strong> 07 67 33 02 98</p>
              </div>
            </section>

            {/* Données collectées */}
            <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">2. Données personnelles collectées</h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  Nous collectons les données personnelles suivantes lorsque vous utilisez notre formulaire de contact :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">Nom complet</strong></li>
                  <li><strong className="text-white">Adresse email professionnelle</strong></li>
                  <li><strong className="text-white">Numéro de téléphone</strong></li>
                  <li><strong className="text-white">Nom de l'entreprise</strong></li>
                  <li><strong className="text-white">Message</strong> (description de votre projet ou demande)</li>
                </ul>
                <p className="pt-4">
                  Ces données sont collectées uniquement lorsque vous remplissez volontairement notre formulaire de contact.
                </p>
              </div>
            </section>

            {/* Finalités */}
            <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">3. Finalités du traitement</h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  Les données personnelles collectées sont utilisées exclusivement pour les finalités suivantes :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">Traitement de votre demande de contact</strong> : répondre à vos questions et demandes d'information</li>
                  <li><strong className="text-white">Établissement d'un devis</strong> : préparer une proposition commerciale adaptée à votre projet</li>
                  <li><strong className="text-white">Suivi de la relation client</strong> : assurer le suivi de nos échanges professionnels</li>
                </ul>
                <p className="pt-4 font-semibold text-white">
                  Nous ne faisons pas de prospection commerciale non sollicitée et n'envoyons pas de newsletter.
                </p>
              </div>
            </section>

            {/* Base légale */}
            <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">4. Base légale du traitement</h2>
              <p className="text-white/70 leading-relaxed">
                Le traitement de vos données personnelles repose sur votre <strong className="text-white">consentement explicite</strong> lors de la soumission du formulaire de contact, ainsi que sur l'<strong className="text-white">exécution de mesures précontractuelles</strong> prises à votre demande (article 6.1.a et 6.1.b du RGPD).
              </p>
            </section>

            {/* Destinataires */}
            <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">5. Destinataires des données</h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  Vos données personnelles sont destinées uniquement à :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">Marceau JUILLET</strong>, responsable de Ink, pour le traitement de votre demande</li>
                  <li><strong className="text-white">Vercel Inc.</strong>, notre hébergeur, qui assure le stockage sécurisé des données sur ses serveurs</li>
                </ul>
                <p className="pt-4">
                  <strong className="text-white">Nous ne vendons, ne louons et ne partageons jamais vos données personnelles avec des tiers à des fins commerciales.</strong>
                </p>
              </div>
            </section>

            {/* Durée de conservation */}
            <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">6. Durée de conservation</h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  Vos données personnelles sont conservées pour une durée maximale de :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">3 ans</strong> à compter de votre dernier contact avec nous</li>
                </ul>
                <p className="pt-4">
                  Au-delà de ce délai, vos données sont automatiquement supprimées de nos bases de données, sauf obligation légale de conservation plus longue (comptabilité, etc.).
                </p>
              </div>
            </section>

            {/* Vos droits */}
            <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">7. Vos droits</h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">Droit d'accès</strong> : obtenir une copie de vos données personnelles</li>
                  <li><strong className="text-white">Droit de rectification</strong> : corriger des données inexactes ou incomplètes</li>
                  <li><strong className="text-white">Droit à l'effacement</strong> : demander la suppression de vos données</li>
                  <li><strong className="text-white">Droit à la limitation du traitement</strong> : limiter l'utilisation de vos données</li>
                  <li><strong className="text-white">Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
                  <li><strong className="text-white">Droit d'opposition</strong> : vous opposer au traitement de vos données</li>
                  <li><strong className="text-white">Droit de retirer votre consentement</strong> à tout moment</li>
                </ul>
                <p className="pt-4">
                  Pour exercer ces droits, contactez-nous à :
                </p>
                <p className="pt-2">
                  <strong className="text-white">Email :</strong> <a href="mailto:marceau.juillet.pro@gmail.com" className="text-green-400 hover:underline">marceau.juillet.pro@gmail.com</a><br />
                  <strong className="text-white">Courrier :</strong> Ink - 17 Place de la Fontaine, Étage 0, 26120 Montmeyran, France
                </p>
                <p className="pt-4">
                  Nous nous engageons à répondre à votre demande dans un délai maximum d'un mois.
                </p>
                <p className="pt-4">
                  Vous disposez également du droit d'introduire une réclamation auprès de la <strong className="text-white">CNIL</strong> (Commission Nationale de l'Informatique et des Libertés) si vous estimez que vos droits ne sont pas respectés.
                </p>
              </div>
            </section>

            {/* Cookies */}
            <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">8. Cookies et technologies similaires</h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  Notre site utilise des cookies pour améliorer votre expérience de navigation et analyser notre audience.
                </p>
                
                <h3 className="text-xl font-semibold text-white pt-4">Types de cookies utilisés :</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong className="text-white">Cookies de mesure d'audience (Google Analytics)</strong> : 
                    pour comprendre comment les visiteurs utilisent notre site et améliorer nos services
                  </li>
                  <li>
                    <strong className="text-white">Cookies de conversion (Google Ads)</strong> : 
                    pour mesurer l'efficacité de nos campagnes publicitaires
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-white pt-4">Gestion des cookies :</h3>
                <p>
                  Vous pouvez à tout moment désactiver les cookies depuis les paramètres de votre navigateur. Notez que la désactivation des cookies peut affecter certaines fonctionnalités du site.
                </p>
                
                <p className="pt-2">
                  <strong className="text-white">Instructions pour les navigateurs courants :</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">Chrome :</strong> Paramètres → Confidentialité et sécurité → Cookies</li>
                  <li><strong className="text-white">Firefox :</strong> Options → Vie privée et sécurité → Cookies</li>
                  <li><strong className="text-white">Safari :</strong> Préférences → Confidentialité → Cookies</li>
                  <li><strong className="text-white">Edge :</strong> Paramètres → Cookies et autorisations de site</li>
                </ul>
              </div>
            </section>

            {/* Sécurité */}
            <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">9. Sécurité des données</h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre la destruction, la perte, l'altération, la divulgation ou l'accès non autorisé.
                </p>
                <p>
                  <strong className="text-white">Mesures de sécurité :</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Chiffrement HTTPS pour toutes les communications</li>
                  <li>Hébergement sécurisé chez Vercel avec protection DDoS</li>
                  <li>Base de données protégée avec accès restreint</li>
                  <li>Sauvegardes régulières des données</li>
                </ul>
              </div>
            </section>

            {/* Transferts internationaux */}
            <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">10. Transferts de données hors UE</h2>
              <p className="text-white/70 leading-relaxed">
                Nos données sont hébergées par Vercel Inc., dont les serveurs peuvent être situés aux États-Unis ou dans d'autres pays hors de l'Union Européenne. Ces transferts sont effectués dans le respect du RGPD et des clauses contractuelles types approuvées par la Commission Européenne.
              </p>
            </section>

            {/* Modifications */}
            <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">11. Modifications de la politique</h2>
              <p className="text-white/70 leading-relaxed">
                Nous nous réservons le droit de modifier cette Politique de Confidentialité à tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour. Nous vous encourageons à consulter régulièrement cette page pour rester informé de nos pratiques en matière de protection des données.
              </p>
            </section>

            {/* Contact */}
            <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">12. Contact</h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  Pour toute question concernant cette Politique de Confidentialité ou le traitement de vos données personnelles, vous pouvez nous contacter :
                </p>
                <div className="space-y-2">
                  <p><strong className="text-white">Par email :</strong> <a href="mailto:marceau.juillet.pro@gmail.com" className="text-green-400 hover:underline">marceau.juillet.pro@gmail.com</a></p>
                  <p><strong className="text-white">Par téléphone :</strong> 07 67 33 02 98</p>
                  <p><strong className="text-white">Par courrier :</strong><br />
                  Ink<br />
                  17 Place de la Fontaine, Étage 0<br />
                  26120 Montmeyran<br />
                  France</p>
                </div>
              </div>
            </section>

            {/* Date de mise à jour */}
            <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <p className="text-white/60 text-sm">
                <strong>Dernière mise à jour :</strong> 10 décembre 2025
              </p>
            </section>

            {/* Retour */}
            <div className="text-center pt-8">
              <Link 
                href="/"
                className="inline-block px-8 py-4 bg-white/10 text-white rounded-2xl font-medium hover:bg-white/20 transition-all duration-300 hover:scale-105 backdrop-blur-xl border border-white/20"
              >
                Retour à l'accueil
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
