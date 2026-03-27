# Guide Rapide - Splash Screen & Favicon UCAG

## 🚀 Démarrage Rapide

### Voir le Splash Screen

1. Ouvrir le site : http://localhost:9002
2. Le splash screen s'affiche automatiquement pendant ~10 secondes
3. Progression animée avec le logo UCAG

### Générer les Favicons

```bash
npm run generate:favicon
```

Cela crée automatiquement tous les favicons à partir de `public/UCAG.png`.

## ⚙️ Configuration

### Désactiver le Splash Screen

Éditer `src/lib/splash-config.ts` :

```typescript
export const splashConfig = {
  enabled: false, // Désactiver complètement
  // ...
};
```

### Afficher Uniquement au Premier Chargement

```typescript
export const splashConfig = {
  enabled: true,
  showOnlyOnce: true, // Afficher une seule fois par session
  // ...
};
```

### Modifier la Vitesse

```typescript
export const splashConfig = {
  progressSpeed: {
    fast: 12,   // Plus rapide (0-60%)
    medium: 6,  // Plus rapide (60-90%)
    slow: 3,    // Plus rapide (90-100%)
  },
  updateInterval: 80, // Mise à jour plus fréquente
  // ...
};
```

### Durée Minimale

```typescript
export const splashConfig = {
  minDuration: 3000, // 3 secondes minimum
  // ...
};
```

## 🎨 Personnalisation du Design

### Couleurs

Éditer `src/components/splash-screen.tsx` :

```tsx
// Fond
className="bg-gradient-to-br from-primary-blue via-[#002d6e] to-[#001f4d]"

// Barre de progression
className="bg-gradient-to-r from-accent-gold via-yellow-400 to-accent-gold"
```

### Logo

Remplacer dans le composant :

```tsx
<Image
  src="/UCAG.png"
  alt="UCAG Logo"
  width={150}  // Modifier la taille
  height={150}
  priority
/>
```

## 📱 Favicons

### Fichiers Générés

- `favicon.ico` - Standard
- `favicon-16x16.png` - Petite taille
- `favicon-32x32.png` - Moyenne taille
- `apple-touch-icon.png` - iOS
- `icon-192x192.png` - Android
- `icon-512x512.png` - Android HD

### Changer le Logo

1. Remplacer `public/UCAG.png`
2. Exécuter `npm run generate:favicon`
3. Recharger le navigateur (Ctrl+Shift+R)

## 🧪 Test

### Tester le Splash Screen

Ajouter le composant de test dans une page :

```tsx
import { SplashTest } from '@/components/splash-test';

export default function Page() {
  return (
    <div>
      {/* Votre contenu */}
      <SplashTest />
    </div>
  );
}
```

Un bouton apparaît en bas à droite pour relancer le splash.

### Vérifier les Favicons

1. Ouvrir les DevTools (F12)
2. Onglet Network
3. Filtrer par "favicon"
4. Recharger la page
5. Vérifier que les favicons se chargent (200 OK)

## 🐛 Problèmes Courants

### Le splash ne s'affiche pas

```typescript
// Vérifier la config
import { splashConfig } from '@/lib/splash-config';
console.log(splashConfig.enabled); // Doit être true
```

### Le splash s'affiche trop longtemps

```typescript
// Réduire la durée
export const splashConfig = {
  minDuration: 1000, // 1 seconde
  progressSpeed: {
    fast: 15,
    medium: 10,
    slow: 5,
  },
};
```

### Les favicons ne changent pas

```bash
# Vider le cache
Ctrl+Shift+R (Windows/Linux)
Cmd+Shift+R (Mac)

# Ou en mode incognito
Ctrl+Shift+N
```

### Erreur lors de la génération

```bash
# Réinstaller Sharp
npm install --save-dev sharp

# Vérifier le logo
ls -la public/UCAG.png

# Régénérer
npm run generate:favicon
```

## 📊 Performance

### Optimisations Appliquées

- ✅ Chargement asynchrone du splash
- ✅ Pas de blocage du rendu
- ✅ Favicons optimisés (compression)
- ✅ Logo en priority loading
- ✅ Animations CSS (GPU accelerated)

### Métriques

- Splash Screen : ~50KB (avec logo)
- Favicons : ~5-20KB chacun
- Impact LCP : Minimal (non-bloquant)
- Impact CLS : Aucun (position fixed)

## 🎯 Checklist de Déploiement

Avant de déployer en production :

- [ ] Tester le splash sur mobile
- [ ] Vérifier les favicons sur tous les navigateurs
- [ ] Tester en mode PWA (installation)
- [ ] Vérifier la vitesse de chargement
- [ ] Tester avec connexion lente (3G)
- [ ] Valider l'accessibilité (contraste, animations)

## 📚 Ressources

- Documentation complète : `docs/splash-and-favicon.md`
- Configuration : `src/lib/splash-config.ts`
- Composant : `src/components/splash-screen.tsx`
- Script : `scripts/generate-favicon.js`
