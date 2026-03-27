# 🇨🇩 U.C.A.G - Union des Congolais Anciens de Grèce

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/MakGroupDigital/ucag)

Site web institutionnel moderne de l'Union des Congolais Anciens de Grèce (U.C.A.G), le pont culturel et académique entre la République Démocratique du Congo et la Grèce.

## ✨ Fonctionnalités

- 🎨 **Design Moderne et Innovant** - Interface 3D avec effets holographiques et animations avancées
- 🍪 **Système de Cookies RGPD** - Gestion complète des cookies avec consentement tous les 3 jours
- 📱 **Responsive** - Optimisé pour tous les appareils (mobile, tablette, desktop)
- ⚡ **Performance** - Next.js 15 avec optimisations Vercel
- 🎭 **Animations** - Effets 3D, parallaxe, glassmorphism, morphing
- 🔒 **Sécurité** - Headers de sécurité configurés
- 🌐 **SEO Optimisé** - Métadonnées complètes et Open Graph
- 🎯 **Accessibilité** - Design accessible et inclusif

## 🚀 Technologies

- **Framework:** Next.js 15.3.8
- **React:** 18.3.1
- **TypeScript:** 5.x
- **Styling:** Tailwind CSS 3.4.1
- **UI Components:** Radix UI
- **Animations:** AOS (Animate On Scroll)
- **Deployment:** Vercel
- **Icons:** Lucide React + Custom SVG

## 📦 Installation

```bash
# Cloner le repository
git clone https://github.com/MakGroupDigital/ucag.git

# Installer les dépendances
cd ucag
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur [http://localhost:9002](http://localhost:9002)

## 🛠️ Scripts Disponibles

```bash
# Développement
npm run dev              # Lancer le serveur de développement (port 9002)

# Production
npm run build            # Build de production
npm run start            # Démarrer le serveur de production

# Qualité du code
npm run lint             # Linter le code
npm run typecheck        # Vérifier les types TypeScript

# Utilitaires
npm run generate:favicon # Générer les favicons depuis le logo
```

## 🌍 Déploiement sur Vercel

### Déploiement Automatique

1. Connectez votre repository GitHub à Vercel
2. Vercel détectera automatiquement Next.js
3. Le déploiement se fera automatiquement à chaque push

### Déploiement Manuel

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel --prod
```

### Variables d'Environnement

Créez un fichier `.env.local` basé sur `.env.example`:

```env
NEXT_PUBLIC_SITE_URL=https://votre-domaine.com
NEXT_PUBLIC_SITE_NAME=U.C.A.G
NEXT_PUBLIC_CONTACT_EMAIL=contact@ucag.gr
```

## 📁 Structure du Projet

```
ucag/
├── public/                 # Fichiers statiques
│   ├── UCAG.png           # Logo principal
│   ├── favicon.ico        # Favicon
│   └── manifest.json      # PWA manifest
├── src/
│   ├── app/               # Pages Next.js (App Router)
│   │   ├── about/         # Page À propos
│   │   ├── activities/    # Page Activités
│   │   ├── contact/       # Page Contact
│   │   ├── gallery/       # Page Galerie
│   │   ├── news/          # Page Actualités
│   │   ├── privacy/       # Politique de confidentialité
│   │   ├── publications/  # Page Publications
│   │   ├── layout.tsx     # Layout principal
│   │   ├── page.tsx       # Page d'accueil
│   │   └── globals.css    # Styles globaux
│   ├── components/        # Composants React
│   │   ├── common/        # Header, Footer
│   │   ├── icons/         # Icônes personnalisées
│   │   ├── ui/            # Composants UI (Radix)
│   │   ├── cookie-consent.tsx
│   │   ├── hero-3d.tsx
│   │   ├── mission-cards-3d.tsx
│   │   └── splash-screen.tsx
│   ├── hooks/             # Custom React hooks
│   └── lib/               # Utilitaires
├── scripts/               # Scripts utilitaires
│   └── generate-favicon.js
├── docs/                  # Documentation
├── vercel.json            # Configuration Vercel
├── next.config.ts         # Configuration Next.js
├── tailwind.config.ts     # Configuration Tailwind
└── tsconfig.json          # Configuration TypeScript
```

## 🎨 Charte Graphique

- **Couleur Primaire:** Bleu (#003f99)
- **Couleur Accent:** Or (#c09a3e)
- **Typographie Titres:** Playfair Display (serif)
- **Typographie Corps:** Montserrat (sans-serif)

## 🍪 Système de Cookies

Le site inclut un système complet de gestion des cookies conforme au RGPD:

- **Apparition automatique** tous les 3 jours
- **3 choix:** Accepter tout / Personnaliser / Refuser
- **3 types de cookies:**
  - Nécessaires (toujours activés)
  - Analytiques (optionnel)
  - Marketing (optionnel)
- **Page de confidentialité** complète

## 🔒 Sécurité

Headers de sécurité configurés dans `vercel.json`:
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection
- Referrer-Policy
- Permissions-Policy

## 📱 Pages Disponibles

- `/` - Accueil
- `/about` - À propos de l'UCAG
- `/activities` - Nos activités
- `/news` - Actualités
- `/gallery` - Galerie photos
- `/publications` - Publications
- `/contact` - Contact
- `/privacy` - Politique de confidentialité

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 📄 Licence

© 2026 U.C.A.G - Union des Congolais Anciens de Grèce. Tous droits réservés.

## 📞 Contact

- **Email:** contact@ucag.gr
- **Site Web:** [ucag.vercel.app](https://ucag.vercel.app)
- **GitHub:** [MakGroupDigital/ucag](https://github.com/MakGroupDigital/ucag)

## 🙏 Remerciements

Développé avec ❤️ pour la communauté congolaise en Grèce.

---

**Fait avec Next.js, React, TypeScript et Tailwind CSS**
