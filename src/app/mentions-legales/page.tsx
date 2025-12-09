import { Metadata } from 'next';
import MentionsLegalesClient from './MentionsLegalesClient';

export const metadata: Metadata = {
  title: 'Mentions Légales | Ink Creative',
  description: 'Mentions légales du site Ink Creative - Agence d\'influence marketing pour PME. Informations légales, éditeur, hébergement et propriété intellectuelle.',
  robots: 'noindex, follow',
};

export default function MentionsLegalesPage() {
  return <MentionsLegalesClient />;
}

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-light mb-12 text-white">
            Mentions Légales
          </h1>

          <div className="space-y-8 text-white/80">
            {/* Éditeur du site */}
            <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">1. Éditeur du site</h2>
              <div className="space-y-2 text-white/70 leading-relaxed">
                <p><strong className="text-white">Raison sociale :</strong> Ink</p>
                <p><strong className="text-white">Forme juridique :</strong> Auto-entrepreneur</p>
                <p><strong className="text-white">Responsable :</strong> Marceau JUILLET</p>
                <p><strong className="text-white">Numéro SIRET :</strong> 891 272 536 00022</p>
                <p><strong className="text-white">Adresse :</strong> 17 Place de la Fontaine, Étage 0<br />26120 Montmeyran, France</p>
                <p><strong className="text-white">Téléphone :</strong> 07 67 33 02 98</p>
                <p><strong className="text-white">Email :</strong> <a href="mailto:marceau.juillet.pro@gmail.com" className="text-green-400 hover:underline">marceau.juillet.pro@gmail.com</a></p>
              </div>
            </section>

            {/* Directeur de publication */}
            <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">2. Directeur de publication</h2>
              <p className="text-white/70 leading-relaxed">
                Le directeur de la publication du site est <strong className="text-white">Marceau JUILLET</strong>, en sa qualité de responsable de l'entreprise Ink.
              </p>
            </section>

            {/* Hébergeur */}
            <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">3. Hébergement</h2>
              <div className="space-y-2 text-white/70 leading-relaxed">
                <p><strong className="text-white">Hébergeur :</strong> Vercel Inc.</p>
                <p><strong className="text-white">Adresse :</strong> 340 S Lemon Ave #4133<br />Walnut, CA 91789, USA</p>
                <p><strong className="text-white">Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">vercel.com</a></p>
              </div>
            </section>

            {/* Propriété intellectuelle */}
            <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">4. Propriété intellectuelle</h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  L'ensemble de ce site (structure, textes, logos, images, vidéos, graphismes, etc.) relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
                </p>
                <p>
                  Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques. La reproduction de tout ou partie de ce site sur un support électronique ou physique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                </p>
                <p>
                  <strong className="text-white">Exception :</strong> Les logos et marques des entreprises clientes présentés sur ce site restent la propriété exclusive de leurs détenteurs respectifs.
                </p>
              </div>
            </section>

            {/* Données personnelles */}
            <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">5. Données personnelles</h2>
              <p className="text-white/70 leading-relaxed">
                Pour plus d'informations sur la collecte et le traitement de vos données personnelles, veuillez consulter notre{' '}
                <Link href="/confidentialite" className="text-green-400 hover:underline">
                  Politique de Confidentialité
                </Link>.
              </p>
            </section>

            {/* Cookies */}
            <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">6. Cookies</h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  Ce site utilise des cookies pour améliorer votre expérience de navigation et mesurer l'audience. En poursuivant votre navigation sur ce site, vous acceptez l'utilisation de cookies.
                </p>
                <p>
                  Les cookies utilisés sur ce site sont :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Cookies de mesure d'audience (Google Analytics)</li>
                  <li>Cookies de conversion publicitaire (Google Ads)</li>
                </ul>
                <p>
                  Vous pouvez à tout moment désactiver ces cookies depuis les paramètres de votre navigateur.
                </p>
              </div>
            </section>

            {/* Responsabilité */}
            <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">7. Limitation de responsabilité</h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  Ink s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de corriger, à tout moment et sans préavis, le contenu.
                </p>
                <p>
                  Toutefois, Ink ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.
                </p>
                <p>
                  En conséquence, Ink décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur ce site.
                </p>
              </div>
            </section>

            {/* Liens hypertextes */}
            <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">8. Liens hypertextes</h2>
              <p className="text-white/70 leading-relaxed">
                Ce site peut contenir des liens hypertextes vers d'autres sites présents sur le réseau Internet. Les liens vers ces autres ressources vous font quitter le site. Ink ne peut être tenue responsable du contenu de ces sites externes.
              </p>
            </section>

            {/* Droit applicable */}
            <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">9. Droit applicable</h2>
              <p className="text-white/70 leading-relaxed">
                Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux français conformément aux règles de compétence en vigueur.
              </p>
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
