# Configuration Base de Données PostgreSQL

## 🔧 Setup Local (Développement)

### 1. Installer PostgreSQL localement
- **Windows**: [Télécharger PostgreSQL](https://www.postgresql.org/download/windows/)
- **macOS**: `brew install postgresql`
- **Linux**: `sudo apt-get install postgresql`

### 2. Créer la base de données
```bash
# Se connecter à PostgreSQL
psql -U postgres

# Créer la base de données
CREATE DATABASE ink_creative;

# Quitter
\q
```

### 3. Configuration du projet
```bash
# Copier le fichier d'environnement
cp .env.example .env.local

# Éditer .env.local avec vos credentials locaux
DATABASE_URL="postgresql://postgres:VOTRE_MOT_DE_PASSE@localhost:5432/ink_creative?schema=public"
```

### 4. Initialiser Prisma
```bash
# Générer le client Prisma
npx prisma generate

# Créer les tables
npx prisma db push

# (Optionnel) Ouvrir Prisma Studio pour visualiser les données
npx prisma studio
```

## ☁️ Déploiement sur Vercel

### 1. Créer une base PostgreSQL Vercel
1. Aller sur [Vercel Dashboard](https://vercel.com/dashboard)
2. Onglet "Storage" → "Create Database"
3. Choisir "Postgres"
4. Copier la `DATABASE_URL`

### 2. Configurer les variables d'environnement Vercel
Dans les settings du projet Vercel, ajouter :
```
DATABASE_URL=postgresql://...
NEXT_PUBLIC_GA_ID=G-LXKM95N6VX
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL=YYYYYYYYYY
NEXT_PUBLIC_SITE_URL=https://ink-creative.fr
```

### 3. Déployer
```bash
git add .
git commit -m "Add database integration"
git push origin main
```

Vercel va automatiquement :
- Installer les dépendances
- Générer le client Prisma
- Créer les tables via `prisma db push` (à ajouter dans build)

### 4. Ajouter script de build
Dans `package.json`, ajouter :
```json
"scripts": {
  "postinstall": "prisma generate",
  "build": "prisma db push --accept-data-loss && next build"
}
```

## 📊 Visualiser les données

### En local
```bash
npx prisma studio
```
Ouvre une interface web sur http://localhost:5555

### En production
Utiliser le Vercel Postgres Dashboard ou Prisma Studio en se connectant à la BDD distante.

## 🔒 Sécurité

- ✅ `.env.local` est dans `.gitignore`
- ✅ Ne jamais commit les credentials
- ✅ Utiliser des variables d'environnement Vercel
- ✅ API Route avec validation Zod
