# 🚀 Guide de Déploiement Vercel - U.C.A.G

## 📋 Prérequis

- Compte GitHub
- Compte Vercel (gratuit)
- Repository GitHub: https://github.com/MakGroupDigital/ucag.git

## 🎯 Méthode 1: Déploiement Automatique (Recommandé)

### Étape 1: Connecter GitHub à Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez sur "Sign Up" ou "Log In"
3. Choisissez "Continue with GitHub"
4. Autorisez Vercel à accéder à votre compte GitHub

### Étape 2: Importer le Projet

1. Sur le dashboard Vercel, cliquez sur "Add New..." → "Project"
2. Sélectionnez "Import Git Repository"
3. Cherchez `MakGroupDigital/ucag` ou collez l'URL
4. Cliquez sur "Import"

### Étape 3: Configuration du Projet

Vercel détectera automatiquement Next.js. Vérifiez les paramètres:

```
Framework Preset: Next.js
Build Command: npm run build
Output Directory: .next
Install Command: npm install
Development Command: npm run dev
```

### Étape 4: Variables d'Environnement (Optionnel)

Ajoutez ces variables si nécessaire:

```
NEXT_PUBLIC_SITE_URL=https://votre-domaine.vercel.app
NEXT_PUBLIC_SITE_NAME=U.C.A.G
NEXT_PUBLIC_CONTACT_EMAIL=contact@ucag.gr
```

### Étape 5: Déployer

1. Cliquez sur "Deploy"
2. Attendez 2-3 minutes
3. Votre site sera disponible sur `https://ucag.vercel.app`

## 🔄 Déploiements Automatiques

Une fois configuré, chaque push sur GitHub déclenchera automatiquement:
- **Branch `main`** → Déploiement en production
- **Autres branches** → Déploiement de preview

## 🎯 Méthode 2: Déploiement via CLI

### Installation de Vercel CLI

```bash
npm i -g vercel
```

### Connexion

```bash
vercel login
```

### Premier Déploiement

```bash
# Dans le dossier du projet
vercel

# Répondez aux questions:
# ? Set up and deploy "~/ucag"? [Y/n] y
# ? Which scope do you want to deploy to? [Votre compte]
# ? Link to existing project? [y/N] n
# ? What's your project's name? ucag
# ? In which directory is your code located? ./
```

### Déploiement en Production

```bash
vercel --prod
```

## 🌐 Configuration du Domaine Personnalisé

### Ajouter un Domaine

1. Dans le dashboard Vercel, allez dans votre projet
2. Cliquez sur "Settings" → "Domains"
3. Ajoutez votre domaine (ex: `ucag.gr`)
4. Suivez les instructions pour configurer les DNS

### Configuration DNS

Ajoutez ces enregistrements chez votre registrar:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## ⚙️ Configuration Avancée

### Headers de Sécurité

Déjà configurés dans `vercel.json`:
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection
- Referrer-Policy
- Permissions-Policy

### Cache des Assets

Les images et fonts sont automatiquement cachés pour 1 an:
- `*.png` → Cache 1 an
- `*.jpg` → Cache 1 an
- `*.ico` → Cache 1 an
- `/fonts/*` → Cache 1 an

### Régions de Déploiement

Par défaut: `cdg1` (Paris, France)

Pour changer, modifiez dans `vercel.json`:
```json
"regions": ["cdg1", "iad1"]
```

Régions disponibles:
- `cdg1` - Paris, France
- `iad1` - Washington, D.C., USA
- `sfo1` - San Francisco, USA
- `hnd1` - Tokyo, Japan
- `sin1` - Singapore

## 📊 Monitoring et Analytics

### Vercel Analytics

1. Dans le dashboard, allez dans "Analytics"
2. Activez "Enable Analytics"
3. Gratuit jusqu'à 100k événements/mois

### Vercel Speed Insights

1. Installez le package:
```bash
npm install @vercel/speed-insights
```

2. Ajoutez dans `src/app/layout.tsx`:
```tsx
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
```

## 🔒 Variables d'Environnement

### Ajouter des Variables

1. Dashboard Vercel → Projet → Settings → Environment Variables
2. Ajoutez vos variables:
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_GA_ID` (Google Analytics)
   - etc.

### Types de Variables

- **Production** - Utilisées en production
- **Preview** - Utilisées pour les previews
- **Development** - Utilisées en local

## 🐛 Dépannage

### Build Failed

```bash
# Vérifier localement
npm run build

# Vérifier les types
npm run typecheck

# Vérifier le linter
npm run lint
```

### Erreur de Mémoire

Ajoutez dans `vercel.json`:
```json
{
  "build": {
    "env": {
      "NODE_OPTIONS": "--max-old-space-size=4096"
    }
  }
}
```

### Images Non Chargées

Vérifiez que les images sont dans `/public` et utilisez:
```tsx
<Image src="/UCAG.png" alt="Logo" width={200} height={200} />
```

## 📈 Optimisations

### Image Optimization

Next.js optimise automatiquement les images via Vercel:
- Conversion en WebP
- Responsive images
- Lazy loading

### Edge Functions

Pour des performances maximales, utilisez Edge Runtime:
```tsx
export const runtime = 'edge';
```

### ISR (Incremental Static Regeneration)

Pour les pages dynamiques:
```tsx
export const revalidate = 3600; // Revalider toutes les heures
```

## 🔄 Rollback

### Via Dashboard

1. Allez dans "Deployments"
2. Trouvez le déploiement précédent
3. Cliquez sur "..." → "Promote to Production"

### Via CLI

```bash
vercel rollback
```

## 📱 Preview Deployments

Chaque PR GitHub crée automatiquement un preview:
- URL unique: `ucag-git-branch-name.vercel.app`
- Commentaire automatique sur la PR
- Parfait pour tester avant merge

## 🎯 Checklist de Déploiement

- [ ] Code poussé sur GitHub
- [ ] `npm run build` fonctionne localement
- [ ] Variables d'environnement configurées
- [ ] Domaine personnalisé configuré (optionnel)
- [ ] Analytics activé (optionnel)
- [ ] SSL/HTTPS activé (automatique)
- [ ] Headers de sécurité vérifiés
- [ ] Images optimisées
- [ ] Tests effectués

## 🆘 Support

- **Documentation Vercel:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Support Vercel:** support@vercel.com

## 🎉 Après le Déploiement

1. Testez toutes les pages
2. Vérifiez les performances (Lighthouse)
3. Testez sur mobile
4. Vérifiez le système de cookies
5. Testez les formulaires de contact
6. Vérifiez les analytics

---

**Votre site U.C.A.G est maintenant en ligne ! 🚀**
