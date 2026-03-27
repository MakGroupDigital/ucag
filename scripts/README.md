# Scripts UCAG

Collection de scripts utilitaires pour le projet UCAG.

## 📜 Scripts Disponibles

### generate-favicon.js

Génère automatiquement tous les favicons nécessaires à partir du logo UCAG.

#### Usage

```bash
npm run generate:favicon
```

#### Prérequis

- Node.js 18+
- Package `sharp` installé
- Logo source : `public/UCAG.png`

#### Fichiers Générés

| Fichier | Taille | Usage |
|---------|--------|-------|
| `favicon.ico` | 32x32 | Favicon standard pour navigateurs |
| `favicon-16x16.png` | 16x16 | Petite taille (onglets) |
| `favicon-32x32.png` | 32x32 | Taille moyenne (favoris) |
| `apple-touch-icon.png` | 180x180 | iOS Safari, écran d'accueil |
| `icon-192x192.png` | 192x192 | Android, PWA |
| `icon-512x512.png` | 512x512 | Android HD, PWA splash |

#### Fonctionnement

1. Lit le logo source (`public/UCAG.png`)
2. Redimensionne à chaque taille requise
3. Applique un fond transparent
4. Optimise la compression
5. Sauvegarde dans `public/`

#### Options de Sharp

```javascript
{
  fit: 'contain',           // Préserve les proportions
  background: {             // Fond transparent
    r: 255, g: 255, b: 255, alpha: 0
  }
}
```

#### Exemple de Sortie

```
🎨 Génération des favicons à partir du logo UCAG...

📦 Génération de favicon.ico...
✅ favicon.ico créé (32x32)

🍎 Génération de apple-touch-icon.png...
✅ apple-touch-icon.png créé (180x180)

📱 Génération des icônes pour Android/PWA...
✅ icon-192x192.png créé
✅ icon-512x512.png créé

🖼️  Génération des favicons PNG...
✅ favicon-16x16.png créé
✅ favicon-32x32.png créé

✨ Tous les favicons ont été générés avec succès!
```

#### Erreurs Courantes

**Erreur: Le fichier UCAG.png n'existe pas**
```bash
# Solution: Vérifier que le logo existe
ls -la public/UCAG.png

# Si absent, ajouter le logo
cp /chemin/vers/logo.png public/UCAG.png
```

**Erreur: Sharp n'est pas installé**
```bash
# Solution: Installer Sharp
npm install --save-dev sharp
```

**Erreur: Permission denied**
```bash
# Solution: Vérifier les permissions
chmod +x scripts/generate-favicon.js
```

#### Personnalisation

Pour modifier les tailles générées, éditer le script :

```javascript
// Dans generate-favicon.js

// Ajouter une nouvelle taille
const sizes = [16, 32, 48, 64, 128, 256, 512]; // Ajouter 512

// Générer une taille personnalisée
await sharp(inputFile)
  .resize(256, 256, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
  .toFile(path.join(outputDir, 'icon-256x256.png'));
```

#### Intégration CI/CD

Pour automatiser la génération lors du build :

```json
// package.json
{
  "scripts": {
    "prebuild": "npm run generate:favicon",
    "build": "next build"
  }
}
```

#### Performance

- Temps d'exécution : ~2-5 secondes
- Dépend de la taille du logo source
- Utilise Sharp (très rapide, basé sur libvips)

#### Dépendances

```json
{
  "devDependencies": {
    "sharp": "^0.34.5"
  }
}
```

## 🔧 Développement

### Ajouter un Nouveau Script

1. Créer le fichier dans `scripts/`
2. Ajouter le shebang : `#!/usr/bin/env node`
3. Rendre exécutable : `chmod +x scripts/mon-script.js`
4. Ajouter dans `package.json` :

```json
{
  "scripts": {
    "mon-script": "node scripts/mon-script.js"
  }
}
```

### Bonnes Pratiques

- ✅ Utiliser des emojis pour les logs
- ✅ Gérer les erreurs proprement
- ✅ Afficher des messages clairs
- ✅ Vérifier les prérequis
- ✅ Documenter dans ce README

## 📚 Ressources

- [Sharp Documentation](https://sharp.pixelplumbing.com/)
- [Node.js Scripts](https://docs.npmjs.com/cli/v9/using-npm/scripts)
- [Favicon Guidelines](https://evilmartians.com/chronicles/how-to-favicon-in-2021)
