# Splash Screen & Favicon - UCAG

Documentation pour le splash screen et la gestion des favicons du site UCAG.

## 🎨 Splash Screen

### Caractéristiques

Le splash screen moderne et futuriste inclut :

- **Logo UCAG animé** avec effet de flottement
- **Barre de progression** avec gradient animé bleu → or
- **Particules flottantes** en arrière-plan
- **Cercles décoratifs** avec effet pulse
- **Grille futuriste** en arrière-plan
- **Pourcentage de chargement** en temps réel
- **Animation de sortie** en fondu

### Design

- Fond : Dégradé bleu (#003f99 → #002d6e → #001f4d)
- Accent : Or (#c09a3e)
- Durée : ~10 secondes (progression simulée)
- Transition de sortie : 700ms

### Fichier

`src/components/splash-screen.tsx`

### Intégration

Le splash screen est automatiquement affiché au chargement de toutes les pages via le layout principal :

```tsx
// src/app/layout.tsx
import { SplashScreen } from '@/components/splash-screen';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <SplashScreen />
        {/* Reste du contenu */}
      </body>
    </html>
  );
}
```

### Personnalisation

Pour modifier la durée ou le comportement :

```tsx
// Dans splash-screen.tsx

// Modifier la vitesse de progression
const increment = prev < 60 ? 8 : prev < 90 ? 4 : 2; // Ajuster ces valeurs

// Modifier l'intervalle de mise à jour
const interval = setInterval(() => {
  // ...
}, 100); // Changer 100ms pour accélérer/ralentir
```

## 🖼️ Favicons

### Fichiers Générés

Le script génère automatiquement tous les favicons nécessaires à partir du logo UCAG :

- `favicon.ico` (32x32) - Favicon standard
- `favicon-16x16.png` - Petite taille
- `favicon-32x32.png` - Taille moyenne
- `apple-touch-icon.png` (180x180) - iOS/Safari
- `icon-192x192.png` - Android/PWA
- `icon-512x512.png` - Android/PWA haute résolution

### Génération

#### Commande

```bash
npm run generate:favicon
```

#### Script

Le script `scripts/generate-favicon.js` utilise Sharp pour :
1. Lire le logo source (`public/UCAG.png`)
2. Redimensionner aux différentes tailles
3. Optimiser pour chaque plateforme
4. Sauvegarder dans `public/`

#### Prérequis

- Logo source : `public/UCAG.png`
- Package : `sharp` (installé en dev dependency)

### Configuration

#### Metadata (layout.tsx)

```tsx
export const metadata: Metadata = {
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
};
```

#### Manifest PWA (public/manifest.json)

```json
{
  "name": "Union des Congolais Anciens de Grèce",
  "short_name": "U.C.A.G",
  "theme_color": "#003f99",
  "background_color": "#003f99",
  "icons": [
    {
      "src": "/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

## 🔄 Mise à Jour du Logo

Si vous devez changer le logo :

1. Remplacer `public/UCAG.png` par le nouveau logo
2. Exécuter `npm run generate:favicon`
3. Les favicons seront automatiquement régénérés

## 📱 Support des Plateformes

### Desktop
- ✅ Chrome/Edge
- ✅ Firefox
- ✅ Safari
- ✅ Opera

### Mobile
- ✅ iOS Safari (apple-touch-icon)
- ✅ Android Chrome (PWA icons)
- ✅ Android Firefox

### PWA
- ✅ Installation sur écran d'accueil
- ✅ Mode standalone
- ✅ Icônes adaptatives (maskable)

## 🎯 Optimisations

### Performance

- Splash screen : Chargement asynchrone, pas de blocage
- Favicons : Formats optimisés (PNG + ICO)
- Images : Compression automatique via Sharp

### Accessibilité

- Splash screen : Animations respectueuses (pas de clignotement)
- Contraste : Texte blanc sur fond bleu (WCAG AA+)
- Alternative : Favicon ICO pour anciens navigateurs

## 🐛 Dépannage

### Le splash screen ne s'affiche pas

1. Vérifier que `<SplashScreen />` est dans le layout
2. Vérifier que le logo existe : `public/UCAG.png`
3. Vérifier la console pour les erreurs

### Les favicons ne s'affichent pas

1. Vider le cache du navigateur (Ctrl+Shift+R)
2. Vérifier que les fichiers existent dans `public/`
3. Régénérer : `npm run generate:favicon`

### Erreur lors de la génération

```bash
# Réinstaller Sharp
npm install --save-dev sharp

# Vérifier que le logo source existe
ls -la public/UCAG.png

# Relancer la génération
npm run generate:favicon
```

## 📚 Ressources

- [Next.js Metadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [PWA Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest)
- [Sharp Documentation](https://sharp.pixelplumbing.com/)
- [Favicon Best Practices](https://evilmartians.com/chronicles/how-to-favicon-in-2021)
