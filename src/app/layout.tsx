import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Dock";
import AnimatedBackground from "@/components/AnimatedBackground";
import SmoothScrolling from "@/components/SmoothScrolling";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";
import Analytics from "@/components/Analytics";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Ink Creative - Stratégie d'Influence Marketing pour PME | Agence Spécialisée",
  description: "Agence d'influence marketing B2B pour PME. Je sélectionne, négocie et pilote vos campagnes d'influence pour augmenter votre visibilité et vos ventes. ROI mesurable.",
  keywords: "influence marketing, stratégie influence PME, campagne influence, influenceurs B2B, marketing influence entreprise, ROI influence, agence influence, sélection influenceurs, gestion campagne influence",
  authors: [{ name: "Ink Creative" }],
  creator: "Ink Creative",
  publisher: "Ink Creative",
  robots: "index, follow",
  openGraph: {
    title: "Ink Creative - Stratégie d'Influence Marketing pour PME",
    description: "Je sélectionne, négocie et pilote vos campagnes d'influence pour augmenter votre visibilité et vos ventes. Accompagnement complet de A à Z.",
    url: "https://ink-creative.fr",
    siteName: "Ink Creative",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ink Creative - Stratégie d'Influence Marketing pour PME",
    description: "Accompagnement en influence marketing pour PME : sélection, négociation et pilotage de campagnes avec ROI mesurable.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LXKM95N6VX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LXKM95N6VX', {
              page_title: document.title,
              page_location: window.location.href,
              custom_map: {
                'dimension1': 'service_type',
                'dimension2': 'user_journey_stage'
              }
            });
          `}
        </Script>
      </head>
      <body className="antialiased font-system text-white cursor-none">
        {/* Données structurées JSON-LD pour le SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Ink Creative",
              "description": "Agence spécialisée en stratégie d'influence marketing pour PME",
              "url": "https://ink-creative.fr",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Valence",
                "postalCode": "26000",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "44.9334",
                "longitude": "4.8924"
              },
              "priceRange": "€€",
              "serviceType": ["Influence Marketing", "Stratégie d'Influence", "Gestion de Campagne d'Influence"],
              "areaServed": {
                "@type": "Country",
                "name": "France"
              },
              "sameAs": [
                "https://instagram.com/ink_creative",
                "https://linkedin.com/company/ink-creative"
              ]
            })
          }}
        />
        
        {/* Background gradient fixe avec animation au scroll */}
        <div 
          className="fixed inset-0 z-0"
          style={{
            background: "radial-gradient(circle at var(--x, 20%) var(--y, 20%), #00350d 0%, transparent 50%), radial-gradient(circle at var(--x2, 80%) var(--y2, 20%), #1d1d1b 0%, transparent 50%), radial-gradient(circle at var(--x3, 20%) var(--y3, 80%), #1d1d1b 0%, transparent 50%), radial-gradient(circle at var(--x4, 80%) var(--y4, 80%), #305210 0%, transparent 50%), #1a1a18"
          }}
        />
        <LoadingScreen />
        <Analytics />
        <SmoothScrolling />
        <CustomCursor />
        <div className="relative z-10">
          {children}
        </div>
        <AnimatedBackground />
        <Navbar />
      </body>
    </html>
  );
}
