# 🚀 Guide de Démarrage - Ink Creative Influence Marketing

## ✅ Refonte Complète Effectuée

Votre site a été transformé en une **agence d'influence marketing B2B pour PME** avec :

- ✅ Page d'accueil focus influence marketing
- ✅ CTA unique "Je suis intéressé" 
- ✅ Formulaire de contact avec BDD PostgreSQL
- ✅ Section "Ils nous font confiance" avec logos clients
- ✅ Section "Comment je travaille" (4 étapes)
- ✅ FAQ complète (8 questions/réponses)
- ✅ Tracking Google Ads conversion (formulaire + appel mobile)
- ✅ SEO optimisé pour influence marketing B2B
- ✅ Navigation restructurée (Accueil / Comment ça marche / Portfolio / Contact)
- ✅ Design responsive mobile

---

## 🛠️ Installation & Démarrage Local

### 1. Installer PostgreSQL

**Windows** :
```powershell
# Télécharger depuis https://www.postgresql.org/download/windows/
# Installer et noter le mot de passe
```

**Créer la base de données** :
```powershell
psql -U postgres
CREATE DATABASE ink_creative;
\q
```

### 2. Configuration environnement

Éditer `.env.local` avec vos vraies credentials :
```env
DATABASE_URL="postgresql://postgres:VOTRE_MOT_DE_PASSE@localhost:5432/ink_creative?schema=public"
NEXT_PUBLIC_GA_ID=G-LXKM95N6VX
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL=YYYYYYYYYY
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Initialiser Prisma

```powershell
# Générer le client Prisma
npx prisma generate

# Créer les tables dans la BDD
npx prisma db push

# (Optionnel) Ouvrir Prisma Studio pour voir les données
npx prisma studio
```

### 4. Lancer le serveur de dev

```powershell
npm run dev
```

Accédez à http://localhost:3000

---

## 📊 Configuration Google Ads (Obligatoire)

### Étapes :

1. **Créer les conversions dans Google Ads**
   - Aller sur Google Ads > Outils > Conversions
   - Créer 2 conversions :
     - "Contact Influence Marketing" (envoi formulaire)
     - "Appel Mobile" (clic téléphone)

2. **Récupérer les identifiants**
   - ID Google Ads : `AW-XXXXXXXXX`
   - Libellé conversion : `YYYYYYYYYY`

3. **Mettre à jour `.env.local`**
   ```env
   NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXX
   NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL=YYYYYYYYYY
   ```

📖 **Guide complet** : Voir `GOOGLE_ADS_SETUP.md`

---

## 🎨 Personnalisation

### Remplacer les logos clients

Les fichiers placeholders sont dans `/public/logos/` :
- `decor-discount.svg`
- `kerma-concept.svg`
- `bedinshop.svg`

Remplacez-les par vos vrais logos (format SVG ou PNG).

### Modifier le numéro de téléphone

Dans `src/app/page.tsx`, ligne ~85 :
```tsx
<a href="tel:+33612345678" ...>
```
Remplacez par votre vrai numéro.

### Personnaliser les stats

Dans `src/components/TrustSection.tsx`, modifiez :
- +150% visibilité
- +200K portée
- 3-6x ROI

---

## 🚀 Déploiement sur Vercel

### 1. Préparer la base de données

**Option recommandée : Vercel Postgres**

1. Aller sur [Vercel Dashboard](https://vercel.com/dashboard)
2. Créer une base PostgreSQL (Storage > Create Database > Postgres)
3. Copier la `DATABASE_URL`

### 2. Configurer les variables d'environnement

Dans Vercel Settings > Environment Variables, ajouter :
```
DATABASE_URL=postgresql://...
NEXT_PUBLIC_GA_ID=G-LXKM95N6VX
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL=YYYYYYYYYY
NEXT_PUBLIC_SITE_URL=https://ink-creative.fr
```

### 3. Déployer

```powershell
git add .
git commit -m "Refonte influence marketing B2B"
git push origin main
```

Vercel va automatiquement :
- Installer les dépendances
- Générer Prisma
- Créer les tables
- Déployer

📖 **Guide complet** : Voir `DATABASE_SETUP.md`

---

## 📁 Structure du Projet

```
src/
├── app/
│   ├── api/contact/route.ts      # API formulaire contact
│   ├── page.tsx                   # Page d'accueil (refonte complète)
│   ├── layout.tsx                 # Layout + SEO mis à jour
│   └── [autres pages...]          # Services secondaires (footer)
├── components/
│   ├── ContactForm.tsx            # Formulaire avec tracking
│   ├── TrustSection.tsx           # Section clients
│   ├── ProcessSection.tsx         # Comment je travaille
│   ├── FAQSection.tsx             # Questions fréquentes
│   ├── Dock.tsx                   # Navigation (4 liens)
│   └── [composants existants...]
├── lib/
│   └── prisma.ts                  # Client Prisma
prisma/
└── schema.prisma                  # Schéma BDD (table contacts)
```

---

## 🧪 Tester le Site

### Checklist Fonctionnelle

- [ ] Homepage affiche le nouveau contenu influence marketing
- [ ] CTA "Je suis intéressé" scroll vers le formulaire
- [ ] Navigation fonctionne (4 liens)
- [ ] Formulaire s'envoie et enregistre en BDD
- [ ] Message de succès s'affiche après envoi
- [ ] Bouton appel mobile visible uniquement sur mobile
- [ ] Section FAQ s'ouvre/ferme correctement
- [ ] Logos clients s'affichent
- [ ] Responsive mobile OK

### Tester le Tracking Google Ads

1. Ouvrir Console (F12) > Réseau
2. Filtrer `googleadservices.com`
3. Envoyer le formulaire
4. Vérifier qu'une requête est envoyée

---

## 📚 Documentation

- **Base de données** : `DATABASE_SETUP.md`
- **Google Ads** : `GOOGLE_ADS_SETUP.md`
- **Analytics** : `ANALYTICS_SETUP.md` (déjà configuré)

---

## 🆘 Support

### Problèmes courants

**Erreur Prisma lors du build** :
```powershell
npx prisma generate
```

**BDD ne se connecte pas** :
- Vérifier que PostgreSQL est démarré
- Vérifier le mot de passe dans `.env.local`

**Formulaire ne s'envoie pas** :
- Vérifier console navigateur pour erreurs
- Vérifier que la BDD est accessible

**Conversions Google Ads non trackées** :
- Vérifier les IDs dans `.env.local`
- Attendre 24-48h pour les premières données
- Utiliser Google Tag Assistant pour débugger

---

## 🎯 Prochaines Étapes Recommandées

1. **Configurer Google Ads** (URGENT)
   - Créer les conversions
   - Ajouter les IDs dans `.env.local`

2. **Remplacer les logos clients**
   - Demander les fichiers aux clients
   - Format SVG ou PNG haute qualité

3. **Personnaliser le contenu**
   - Numéro de téléphone réel
   - Stats réelles (si disponibles)
   - Ajuster la FAQ selon vos besoins

4. **Tester en local**
   - Formulaire complet
   - Navigation
   - Responsive

5. **Déployer sur Vercel**
   - Créer BDD Postgres
   - Ajouter variables d'environnement
   - Push sur Git

---

## ✨ Fonctionnalités Clés

### CTA Unique
Un seul appel à l'action : **"Je suis intéressé"** visible :
- En haut de page (hero)
- Ancré vers le formulaire en bas
- Bouton appel mobile (tracking conversion)

### Formulaire Intelligent
- Validation côté client et serveur (Zod)
- Stockage PostgreSQL sécurisé
- Tracking conversion automatique
- Message de succès/erreur

### SEO Optimisé
- Titre H1 : "Stratégie d'influence pour PME"
- Meta description focus B2B
- Schema.org (ProfessionalService)
- Keywords ciblés influence marketing

### Tracking Conversions
- Envoi formulaire → Google Ads
- Clic téléphone mobile → Google Ads
- Google Analytics 4 (déjà configuré)

---

**🎉 Votre site est prêt ! Suivez ce guide pour démarrer en local puis déployer en production.**

Des questions ? Relisez les documentations `DATABASE_SETUP.md` et `GOOGLE_ADS_SETUP.md`.
