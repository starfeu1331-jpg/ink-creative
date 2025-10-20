# 🚀 GUIDE CONFIGURATION OVH + VERCEL - ink-creative.fr

## 📋 Étapes de Déploiement

### **ÉTAPE 1 : Déploiement sur Vercel (GRATUIT)**

#### 1.1 Créer un compte Vercel
- Allez sur [vercel.com](https://vercel.com)
- Connectez-vous avec GitHub
- Importez votre projet ink-portfolio

#### 1.2 Configuration Vercel
```bash
# Dans votre terminal local
npm i -g vercel
vercel login
vercel --prod
```

#### 1.3 Variables d'environnement Vercel
Dans le dashboard Vercel > Settings > Environment Variables :
```
NEXT_PUBLIC_GA_ID = G-XXXXXXXXXX (votre ID Google Analytics)
NEXT_PUBLIC_SITE_URL = https://ink-creative.fr
NEXT_PUBLIC_NODE_ENV = production
```

### **ÉTAPE 2 : Configuration DNS chez OVH**

#### 2.1 Connexion à l'espace client OVH
- [ovh.com/auth](https://www.ovh.com/auth/) 
- Aller dans **Web Cloud** > **Noms de domaine** > **ink-creative.fr**

#### 2.2 Configuration Zone DNS
Dans **Zone DNS**, ajouter/modifier ces enregistrements :

```dns
# Supprimez les anciens enregistrements A et CNAME pour @ et www

# Nouveaux enregistrements :
Type: CNAME
Sous-domaine: www
Cible: cname.vercel-dns.com.

Type: A  
Sous-domaine: @
Cible: 76.76.19.19

Type: A
Sous-domaine: @  
Cible: 76.76.21.21
```

#### 2.3 Validation des enregistrements
⚠️ **Propagation DNS : 24-48h maximum**

### **ÉTAPE 3 : Ajout du domaine dans Vercel**

#### 3.1 Dans le dashboard Vercel
- Projet > Settings > **Domains**
- Ajouter : `ink-creative.fr`  
- Ajouter : `www.ink-creative.fr`

#### 3.2 Vérification SSL
- Vercel génère automatiquement le certificat SSL
- ✅ Vérifiez que https://ink-creative.fr fonctionne

### **ÉTAPE 4 : Configuration Email OVH (Optionnel)**

#### 4.1 Création des adresses email
Dans OVH > **Emails** > **MX Plan** :
- `contact@ink-creative.fr`
- `marceau@ink-creative.fr` 
- `devis@ink-creative.fr`

#### 4.2 Configuration MX (si pas déjà fait)
```dns
Type: MX
Sous-domaine: @
Cible: mx1.mail.ovh.net.
Priorité: 1

Type: MX  
Sous-domaine: @
Cible: mx2.mail.ovh.net.
Priorité: 5
```

### **ÉTAPE 5 : Tests & Vérifications**

#### 5.1 Tests techniques
```bash
# Test DNS
nslookup ink-creative.fr

# Test SSL  
curl -I https://ink-creative.fr

# Test performance
https://pagespeed.web.dev/
```

#### 5.2 Checklist finale
- [ ] **https://ink-creative.fr** → Fonctionne
- [ ] **https://www.ink-creative.fr** → Redirige vers ink-creative.fr
- [ ] **SSL** → Cadenas vert affiché
- [ ] **Analytics** → Tracking opérationnel
- [ ] **Performance** → PageSpeed > 90
- [ ] **Mobile** → Responsive parfait

---

## 🔧 **Configuration DNS complète**

```dns
# Domaine principal
@ 3600 IN A 76.76.19.19
@ 3600 IN A 76.76.21.21

# Sous-domaine www
www 3600 IN CNAME cname.vercel-dns.com.

# Emails (si vous utilisez OVH Mail)
@ 3600 IN MX 1 mx1.mail.ovh.net.
@ 3600 IN MX 5 mx2.mail.ovh.net.
@ 3600 IN TXT "v=spf1 include:mx.ovh.com ~all"

# Optionnel : Sécurité
@ 3600 IN TXT "v=DMARC1; p=quarantine; rua=mailto:contact@ink-creative.fr"
```

## 📞 **Support & Aide**

### Si problème DNS :
1. **Vérifiez la propagation** : [dnschecker.org](https://dnschecker.org)
2. **Support OVH** : Espace client > Assistance
3. **Documentation Vercel** : [vercel.com/docs/custom-domains](https://vercel.com/docs/custom-domains)

### Temps de propagation :
- **DNS** : 1-48h (généralement 2-6h)
- **SSL** : 5-10 minutes après DNS
- **Indexation Google** : 1-7 jours

---

## 🎯 **Résultat Attendu**

✅ **https://ink-creative.fr** → Votre portfolio
✅ **contact@ink-creative.fr** → Email professionnel  
✅ **Performance optimale** → Vercel CDN mondial
✅ **SEO optimisé** → Domaine .fr + contenu local
✅ **Analytics opérationnel** → Tracking business

**Coût total : ~15€/an (domaine) + 0€ (hébergement Vercel gratuit)**