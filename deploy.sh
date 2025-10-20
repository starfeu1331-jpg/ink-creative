#!/bin/bash
# Script de déploiement ink-creative.fr

echo "🚀 Déploiement Ink Creative..."

# Vérification des prérequis
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI non installé. Installation..."
    npm i -g vercel
fi

# Build du projet
echo "📦 Build du projet..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build réussi"
else
    echo "❌ Erreur de build"
    exit 1
fi

# Déploiement
echo "🌐 Déploiement en cours..."
vercel --prod

echo "✅ Déploiement terminé !"
echo "🌍 Votre site sera disponible à : https://ink-creative.fr"
echo "⏱️  Propagation DNS : 1-6h si première configuration"