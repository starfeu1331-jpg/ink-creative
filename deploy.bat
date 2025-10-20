@echo off
REM Script de déploiement Windows - ink-creative.fr

echo 🚀 Déploiement Ink Creative...

REM Vérification Node.js
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js non installé
    exit /b 1
)

REM Installation Vercel CLI si nécessaire
where vercel >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo 📦 Installation Vercel CLI...
    npm i -g vercel
)

REM Build du projet
echo 📦 Build du projet...
npm run build

if %ERRORLEVEL% NEQ 0 (
    echo ❌ Erreur de build
    pause
    exit /b 1
)

echo ✅ Build réussi

REM Déploiement
echo 🌐 Déploiement en cours...
vercel --prod

echo ✅ Déploiement terminé !
echo 🌍 Votre site sera disponible à : https://ink-creative.fr
echo ⏱️  Propagation DNS : 1-6h si première configuration
pause