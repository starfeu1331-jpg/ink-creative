# Configuration Google Analytics 4 - Ink Portfolio

## 📊 Configuration requise

### 1. Créer un compte Google Analytics 4

1. Allez sur [Google Analytics](https://analytics.google.com/)
2. Créez un nouveau compte ou utilisez un compte existant
3. Créez une nouvelle propriété GA4
4. Récupérez votre **Measurement ID** (format : G-XXXXXXXXXX)

### 2. Configuration de l'environnement

Remplacez dans le fichier `.env.local` :

```env
# Remplacez GA_MEASUREMENT_ID par votre vrai ID Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Remplacez par votre vraie URL de production
NEXT_PUBLIC_SITE_URL=https://votre-domaine.com

# Mode production pour activer l'analytics
NEXT_PUBLIC_NODE_ENV=production
```

### 3. Mise à jour du layout.tsx

Remplacez dans `src/app/layout.tsx` ligne 46 et 52 :
- `GA_MEASUREMENT_ID` → votre vrai Measurement ID

## 🎯 Événements trackés automatiquement

### Pages vues
- Accueil, Services, Contact, Projets
- Pages de services spécialisées (montage-vidéo, identité-visuelle, communication-influence)

### Interactions utilisateur
- **Demandes de devis** : Tous les boutons CTA avec type de service
- **Navigation services** : Clics sur les boutons "Voir +" 
- **Timeline interactive** : Drag & drop, clics sur projets
- **Formulaire de contact** : Soumissions avec données détaillées

### Données personnalisées trackées
- **service_type** : Type de service consulté/demandé
- **user_journey_stage** : Étape du parcours (discovery, consideration, decision)
- **contact_source** : Source du contact (formulaire, CTA, etc.)
- **budget_range** : Fourchette de budget sélectionnée
- **project_category** : Catégorie de projet consultée

## 📈 Tableaux de bord recommandés

### Dans Google Analytics 4 :

1. **Vue d'ensemble des conversions**
   - Événements : `quote_request`, `contact_intent`, `form_submission`
   - Segmentation par `service_type`

2. **Analyse du parcours utilisateur**
   - Entonnoir : service_view → contact_intent → form_submission
   - Dimension personnalisée : `user_journey_stage`

3. **Performance des services**
   - Pages les plus vues par service
   - Taux de conversion par service
   - Comparaison montage-video vs identité-visuelle vs communication-influence

4. **Analyse géographique**
   - Focus sur la région Auvergne-Rhône-Alpes (Valence 26)
   - Conversion par zone géographique

## 🔧 Événements personnalisés disponibles

### Fonctions de tracking
```typescript
// Pages de services
trackServiceView('montage-video' | 'identite-visuelle' | 'communication-influence')

// Intentions de contact
trackContactIntent(source: string, serviceType?: string)

// Demandes de devis
trackQuoteRequest(serviceType: string)

// Interactions timeline
trackTimelineInteraction('drag' | 'click' | 'filter')

// Vues de projets
trackProjectView(projectCategory: string)

// Événements génériques
trackEvent(action: string, category: string, label?: string, value?: number, customData?: object)
```

### Utilisation dans vos composants
```typescript
import { trackContactIntent, trackQuoteRequest } from '@/components/Analytics';

// Dans un bouton de contact
onClick={() => trackContactIntent('header_cta', 'montage-video')}

// Dans un formulaire de devis
onSubmit={() => trackQuoteRequest('identite-visuelle')}
```

## 🎨 Personnalisation avancée

### Ajouter de nouveaux événements

1. Ajoutez la fonction dans `src/components/Analytics.tsx`
2. Importez et utilisez dans vos composants
3. Configurez les dimensions personnalisées dans GA4

### Exemple d'événement personnalisé
```typescript
export const trackVideoPlay = (videoTitle: string, duration: number) => {
  trackEvent('video_play', 'engagement', videoTitle, duration, {
    content_type: 'portfolio_video',
    video_duration: duration
  });
};
```

## 📊 Métriques business importantes à surveiller

1. **Taux de conversion global** : Visites → Demandes de contact
2. **Performance par service** : Quel service génère le plus de leads
3. **Géolocalisation** : Provenance des clients (focus Valence/Drôme)
4. **Sources de trafic** : SEO, direct, réseaux sociaux
5. **Comportement timeline** : Engagement avec le portfolio interactif
6. **Tunnel de conversion** : Optimisation du parcours utilisateur

## 🚀 Optimisations recommandées

### Basées sur les données Analytics :
- **A/B testing** des CTA selon les données de conversion
- **Optimisation SEO** des pages les plus performantes
- **Amélioration UX** des points de friction identifiés
- **Contenu ciblé** selon les services les plus demandés

---

**Note** : Les analytics ne fonctionnent qu'en production. En développement local, les événements sont loggés en console sans être envoyés à Google Analytics.