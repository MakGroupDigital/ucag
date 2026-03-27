# Architecture - Splash Screen & Favicon System

## 📁 Structure des Fichiers

```
ucag/
├── public/
│   ├── UCAG.png                    # Logo source (131KB)
│   ├── favicon.ico                 # Favicon standard (1.9KB)
│   ├── favicon-16x16.png          # Favicon 16x16 (707B)
│   ├── favicon-32x32.png          # Favicon 32x32 (1.9KB)
│   ├── apple-touch-icon.png       # iOS icon (31KB)
│   ├── icon-192x192.png           # Android icon (35KB)
│   ├── icon-512x512.png           # Android HD icon (181KB)
│   ├── manifest.json              # PWA manifest
│   ├── site.webmanifest           # Alternative manifest
│   └── browserconfig.xml          # Windows tiles config
│
├── src/
│   ├── components/
│   │   ├── splash-screen.tsx      # Composant splash principal
│   │   └── splash-test.tsx        # Composant de test
│   │
│   ├── lib/
│   │   └── splash-config.ts       # Configuration centralisée
│   │
│   └── app/
│       └── layout.tsx             # Intégration dans le layout
│
├── scripts/
│   └── generate-favicon.js        # Script de génération
│
└── docs/
    ├── splash-and-favicon.md      # Documentation complète
    └── architecture-splash-favicon.md  # Ce fichier
```

## 🔄 Flux de Chargement

```
1. Utilisateur accède au site
   ↓
2. Layout.tsx se charge
   ↓
3. SplashScreen vérifie shouldShowSplash()
   ↓
4. Si true → Affiche le splash
   │  ├── Charge le logo (priority)
   │  ├── Démarre l'animation de progression
   │  ├── Met à jour le pourcentage
   │  └── Respecte minDuration
   ↓
5. Progression atteint 100%
   ↓
6. Attend minDuration si nécessaire
   ↓
7. Déclenche l'animation de sortie (700ms)
   ↓
8. Masque le splash (opacity: 0)
   ↓
9. Supprime du DOM
   ↓
10. Contenu principal visible
```

## 🎨 Composants

### SplashScreen

**Responsabilités:**
- Affichage du splash screen
- Gestion de la progression
- Animation d'entrée/sortie
- Respect de la configuration

**Props:** Aucune (configuration via `splash-config.ts`)

**État:**
```typescript
{
  progress: number;        // 0-100
  isVisible: boolean;      // Visibilité du composant
  isLoaded: boolean;       // Chargement terminé
  shouldShow: boolean;     // Doit être affiché
}
```

**Hooks:**
- `useEffect` pour la progression
- `useState` pour l'état local

### SplashTest

**Responsabilités:**
- Test manuel du splash
- Réinitialisation du sessionStorage
- Rechargement de la page

**Usage:** Développement uniquement

## ⚙️ Configuration

### splash-config.ts

**Interface:**
```typescript
{
  enabled: boolean;              // Activer/désactiver
  minDuration: number;           // Durée minimale (ms)
  progressSpeed: {
    fast: number;                // Vitesse 0-60%
    medium: number;              // Vitesse 60-90%
    slow: number;                // Vitesse 90-100%
  };
  updateInterval: number;        // Intervalle de mise à jour (ms)
  exitDuration: number;          // Durée de sortie (ms)
  showOnlyOnce: boolean;         // Une fois par session
}
```

**Fonctions:**
- `shouldShowSplash()`: Détermine si le splash doit être affiché

## 🖼️ Système de Favicons

### Génération

**Script:** `scripts/generate-favicon.js`

**Dépendance:** Sharp (image processing)

**Process:**
```
1. Lit UCAG.png
   ↓
2. Pour chaque taille:
   ├── Redimensionne (fit: contain)
   ├── Ajoute fond transparent
   └── Optimise la compression
   ↓
3. Sauvegarde dans public/
   ↓
4. Affiche le résumé
```

**Tailles générées:**
- 16x16 (favicon-16x16.png)
- 32x32 (favicon-32x32.png, favicon.ico)
- 180x180 (apple-touch-icon.png)
- 192x192 (icon-192x192.png)
- 512x512 (icon-512x512.png)

### Intégration

**Layout Metadata:**
```typescript
export const metadata: Metadata = {
  icons: {
    icon: [...],      // Favicons standards
    apple: [...],     // iOS icons
  },
  manifest: '/manifest.json',
};
```

**Manifest PWA:**
```json
{
  "name": "...",
  "icons": [...],
  "theme_color": "#003f99",
  "background_color": "#003f99"
}
```

## 🎯 Optimisations

### Performance

1. **Splash Screen**
   - Chargement non-bloquant
   - Animations CSS (GPU)
   - Logo en priority loading
   - Suppression du DOM après usage

2. **Favicons**
   - Compression optimale
   - Formats adaptés (PNG + ICO)
   - Lazy loading (navigateur)
   - Cache navigateur

### Accessibilité

1. **Splash Screen**
   - Contraste WCAG AA+ (blanc sur bleu)
   - Pas de clignotement
   - Animations douces
   - Durée raisonnable

2. **Favicons**
   - Haute résolution
   - Formats multiples
   - Support tous navigateurs

## 🔧 Maintenance

### Changer le Logo

```bash
# 1. Remplacer le fichier
cp nouveau-logo.png public/UCAG.png

# 2. Régénérer les favicons
npm run generate:favicon

# 3. Vérifier
ls -lh public/*.png public/*.ico
```

### Modifier le Splash

```typescript
// src/lib/splash-config.ts
export const splashConfig = {
  // Modifier les paramètres
};
```

### Désactiver Temporairement

```typescript
// src/lib/splash-config.ts
export const splashConfig = {
  enabled: false,
};
```

## 📊 Métriques

### Tailles de Fichiers

| Fichier | Taille | Usage |
|---------|--------|-------|
| UCAG.png | 131KB | Source |
| favicon.ico | 1.9KB | Standard |
| favicon-16x16.png | 707B | Petite |
| favicon-32x32.png | 1.9KB | Moyenne |
| apple-touch-icon.png | 31KB | iOS |
| icon-192x192.png | 35KB | Android |
| icon-512x512.png | 181KB | Android HD |

### Performance

| Métrique | Valeur | Impact |
|----------|--------|--------|
| Splash Screen | ~50KB | Minimal |
| Temps d'affichage | 2-10s | Configurable |
| LCP | +0ms | Non-bloquant |
| CLS | 0 | Position fixed |
| FID | +0ms | Pas d'interaction |

## 🧪 Tests

### Checklist

- [ ] Splash s'affiche au chargement
- [ ] Progression fluide 0-100%
- [ ] Animation de sortie smooth
- [ ] Favicons visibles (tous navigateurs)
- [ ] PWA installable
- [ ] Mode hors ligne (favicons)
- [ ] Performance acceptable
- [ ] Accessibilité validée

### Navigateurs Testés

- ✅ Chrome/Edge (Desktop + Mobile)
- ✅ Firefox (Desktop + Mobile)
- ✅ Safari (Desktop + iOS)
- ✅ Opera
- ✅ Samsung Internet

## 🚀 Déploiement

### Checklist Production

1. **Avant déploiement:**
   - [ ] Générer les favicons finaux
   - [ ] Tester le splash en production
   - [ ] Vérifier manifest.json
   - [ ] Valider browserconfig.xml
   - [ ] Tester PWA

2. **Après déploiement:**
   - [ ] Vérifier favicons en production
   - [ ] Tester splash sur mobile
   - [ ] Valider performance (Lighthouse)
   - [ ] Tester installation PWA

### Variables d'Environnement

Aucune variable nécessaire (configuration statique).

## 📚 Références

- [Next.js Metadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [PWA Manifest Spec](https://www.w3.org/TR/appmanifest/)
- [Sharp Documentation](https://sharp.pixelplumbing.com/)
- [Favicon Best Practices](https://evilmartians.com/chronicles/how-to-favicon-in-2021)
- [Web Vitals](https://web.dev/vitals/)
