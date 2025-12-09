# 🎯 Ink Creative - Agence d'Influence Marketing pour PME

Site web professionnel spécialisé en **stratégie d'influence marketing B2B**. Sélection, négociation et pilotage de campagnes d'influence pour augmenter la visibilité et les ventes des PME.

## 🚀 Technologies

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** (animations)
- **Prisma ORM** + **PostgreSQL**
- **Zod** (validation)
- **Google Analytics 4** + **Google Ads Conversion Tracking**

---

## ⚡ Démarrage Rapide

### 1. Installation

```bash
npm install
```

### 2. Configuration BDD

Créer une base PostgreSQL locale :
```sql
CREATE DATABASE ink_creative;
```

Configurer `.env.local` :
```env
DATABASE_URL="postgresql://postgres:PASSWORD@localhost:5432/ink_creative?schema=public"
NEXT_PUBLIC_GA_ID=G-LXKM95N6VX
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL=YYYYYYYYYY
```

Initialiser Prisma :
```bash
npx prisma generate
npx prisma db push
```

### 3. Lancer le serveur

```bash
npm run dev
```

Accès : http://localhost:3000

---

## 📚 Documentation Complète

- **🚀 [Guide de démarrage](GUIDE_DEMARRAGE.md)** - Setup local et déploiement
- **💾 [Setup Base de données](DATABASE_SETUP.md)** - PostgreSQL local + Vercel
- **📊 [Google Ads Tracking](GOOGLE_ADS_SETUP.md)** - Configuration conversions
- **✅ [Récapitulatif Refonte](RECAPITULATIF_REFONTE.md)** - Toutes les modifications

---

## 🎯 Fonctionnalités Principales

### Page d'accueil Influence Marketing
- Hero avec phrase claire et CTA unique
- Section "Pourquoi l'influence marketing"
- Section "Ils nous font confiance" (logos clients + stats)
- Section "Comment je travaille" (4 étapes)
- FAQ complète (8 Q&R)
- Formulaire de contact intégré

### Formulaire de Contact Pro
- Validation Zod côté serveur
- Stockage PostgreSQL sécurisé
- Tracking Google Ads automatique
- Messages succès/erreur

### Tracking Conversions
- Envoi formulaire → Google Ads
- Clic téléphone mobile → Google Ads
- Google Analytics 4 intégré

### SEO Optimisé B2B
- Meta tags focus influence marketing
- Schema.org ProfessionalService
- Keywords ciblés PME B2B

---

## 📁 Structure du Projet

```
src/
├── app/
│   ├── api/contact/route.ts      # API formulaire
│   ├── page.tsx                   # Page d'accueil
│   ├── layout.tsx                 # Layout + SEO
│   └── [pages...]                 # Pages secondaires
├── components/
│   ├── ContactForm.tsx            # Formulaire pro
│   ├── TrustSection.tsx           # Section clients
│   ├── ProcessSection.tsx         # Processus 4 étapes
│   ├── FAQSection.tsx             # FAQ accordion
│   └── Dock.tsx                   # Navigation
├── lib/
│   └── prisma.ts                  # Client Prisma
prisma/
└── schema.prisma                  # Schéma BDD
```

---

## 🚀 Déploiement Vercel

### 1. Créer BDD Postgres Vercel
Dans le dashboard Vercel : Storage > Create Database > Postgres

### 2. Variables d'environnement
```
DATABASE_URL=postgresql://...
NEXT_PUBLIC_GA_ID=G-LXKM95N6VX
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL=YYYYYYYYYY
NEXT_PUBLIC_SITE_URL=https://ink-creative.fr
```

### 3. Déployer
```bash
git push origin main
```

Vercel build automatiquement avec Prisma.

---

## ✅ Checklist Avant Production

- [ ] Google Ads conversions créées
- [ ] IDs Google Ads dans `.env.local`
- [ ] PostgreSQL configuré
- [ ] Logos clients remplacés
- [ ] Numéro téléphone réel
- [ ] Test formulaire local
- [ ] Test tracking conversions
- [ ] Test responsive mobile

---

## 🎨 Personnalisation

### Logos clients
Remplacer dans `/public/logos/` :
- `decor-discount.svg`
- `kerma-concept.svg`
- `bedinshop.svg`

### Téléphone
`src/app/page.tsx` ligne ~85 :
```tsx
<a href="tel:+33612345678">
```

### Stats
`src/components/TrustSection.tsx` :
- Modifier les stats +150%, +200K, 3-6x

---

## 🆘 Support

### Problèmes courants

**Erreur Prisma** :
```bash
npx prisma generate
```

**BDD inaccessible** :
- Vérifier PostgreSQL démarré
- Vérifier `.env.local`

**Conversions non trackées** :
- Attendre 24-48h
- Vérifier IDs Google Ads
- Utiliser Google Tag Assistant

---

## 📞 Contact

**Ink Creative**  
📍 Valence (26) - France  
🌐 ink-creative.fr

---

## 📄 Licence

© 2025 Ink Creative. Tous droits réservés.
