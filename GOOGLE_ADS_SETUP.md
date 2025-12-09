# Setup Google Ads Conversion Tracking

## 📊 Configuration Google Ads

### 1. Créer les conversions dans Google Ads

1. Connectez-vous à [Google Ads](https://ads.google.com/)
2. Allez dans **Outils et paramètres** > **Mesure** > **Conversions**
3. Cliquez sur **+ Nouvelle conversion**

#### Conversion 1 : Envoi formulaire
- **Catégorie** : Envoi de formulaire de génération de prospects
- **Nom** : Contact Influence Marketing
- **Valeur** : Utiliser la même valeur pour chaque conversion (ex: 50€)
- **Comptage** : Une seule conversion
- **Fenêtre de conversion** : 30 jours

#### Conversion 2 : Clic téléphone (mobile)
- **Catégorie** : Appels téléphoniques
- **Nom** : Appel Mobile Influence Marketing
- **Valeur** : Utiliser la même valeur (ex: 30€)
- **Comptage** : Une seule conversion
- **Fenêtre de conversion** : 30 jours

### 2. Récupérer les identifiants

Après création, récupérez :
- **ID Google Ads** : Format `AW-XXXXXXXXX`
- **Libellé de conversion formulaire** : Format `YYYYYYYYYY`
- **Libellé de conversion appel** : Format `ZZZZZZZZZZ`

### 3. Configuration environnement

Mettez à jour `.env.local` :

```env
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL=YYYYYYYYYY
```

### 4. Intégration dans le code

Le tracking est déjà implémenté :

#### Envoi formulaire
Dans `ContactForm.tsx` :
```typescript
window.gtag('event', 'conversion', {
  'send_to': `${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}/${process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL}`,
  'value': 1.0,
  'currency': 'EUR'
});
```

#### Clic téléphone
Dans `page.tsx` :
```typescript
const handlePhoneClick = () => {
  window.gtag('event', 'conversion', {
    'send_to': `${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}/${process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL}_call`,
    'event_category': 'contact',
    'event_label': 'phone_click_mobile'
  });
};
```

## ✅ Test du tracking

### 1. Mode test Google Ads
Dans Google Ads, activez le **mode test** pour vos conversions.

### 2. Vérifier les événements
1. Ouvrez votre site en dev
2. Ouvrez la console développeur (F12)
3. Onglet **Réseau** > Filtrer `google-analytics.com` ou `googleadservices.com`
4. Testez les actions (formulaire, clic tel)
5. Vérifiez que les requêtes sont envoyées

### 3. Extension Chrome
Installez [Google Tag Assistant](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk) pour débugger.

## 📈 Suivi des conversions

Les conversions apparaîtront dans :
- Google Ads > **Rapports** > **Conversions**
- Google Analytics 4 (si lié) > **Rapports** > **Engagement** > **Conversions**

Délai : 24-48h pour les premières données.

## 🔧 Troubleshooting

### Les conversions ne sont pas trackées
1. Vérifiez que les IDs dans `.env.local` sont corrects
2. Vérifiez la console navigateur pour erreurs JavaScript
3. Testez avec l'extension Google Tag Assistant
4. Vérifiez que gtag est bien chargé : `window.gtag` dans console

### Les conversions sont dupliquées
- Vérifiez le paramètre `comptage` dans Google Ads (doit être "Une seule")
- Évitez de déclencher l'événement plusieurs fois

## 📝 Variables d'environnement Production

Sur Vercel, ajoutez dans **Settings** > **Environment Variables** :
```
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL=YYYYYYYYYY
```

Redéployez après modification.
