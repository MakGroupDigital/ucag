# Icônes Personnalisées UCAG

Collection d'icônes personnalisées avec la charte graphique de l'Union des Congolais Anciens de Grèce (UCAG).

## Charte Graphique

- **Bleu principal**: `#003f99`
- **Or/Accent**: `#c09a3e`

Toutes les icônes utilisent des dégradés linéaires combinant ces deux couleurs pour un rendu moderne et institutionnel.

## Utilisation

```tsx
import { GlobeIcon, EmailIcon, ArrowRightIcon } from '@/components/icons';

// Utilisation basique
<GlobeIcon />

// Avec taille personnalisée
<EmailIcon size={32} />

// Avec classe CSS personnalisée
<ArrowRightIcon className="text-blue-500" size={24} />
```

## Icônes Disponibles

### Navigation & Interface
- `MenuIcon` - Menu hamburger
- `CloseIcon` - Fermer (X)
- `ArrowDownIcon` - Flèche vers le bas
- `ArrowRightIcon` - Flèche vers la droite
- `SearchIcon` - Recherche

### Valeurs & Mission
- `GlobeIcon` - Culture & Partage (globe terrestre)
- `HandsIcon` - Solidarité & Entraide (mains)
- `BuildingIcon` - Représentation (bâtiment)
- `BookIcon` - Excellence Académique (livre)

### Contact & Communication
- `LocationIcon` - Localisation/Adresse
- `EmailIcon` - Email
- `PhoneIcon` - Téléphone
- `CalendarIcon` - Date/Calendrier

### Réseaux Sociaux
- `FacebookIcon` - Facebook
- `TwitterIcon` - Twitter/X
- `InstagramIcon` - Instagram
- `LinkedInIcon` - LinkedIn

### Autres
- `UserIcon` - Utilisateur/Profil
- `StarIcon` - Étoile/Favoris
- `HeartIcon` - Cœur/J'aime
- `CameraIcon` - Photo/Caméra
- `DocumentIcon` - Document/Fichier
- `TrophyIcon` - Trophée/Succès
- `TeamIcon` - Groupe/Équipe
- `LightbulbIcon` - Idée/Innovation
- `TargetIcon` - Cible/Objectif

## Props

Toutes les icônes acceptent les props suivantes :

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `size` | `number` | `24` | Taille de l'icône en pixels |
| `className` | `string` | `''` | Classes CSS additionnelles |

## Personnalisation

Les icônes utilisent des dégradés SVG avec des IDs uniques. Vous pouvez personnaliser l'apparence via les classes Tailwind :

```tsx
// Changer l'opacité
<GlobeIcon className="opacity-50" />

// Ajouter une ombre
<EmailIcon className="drop-shadow-lg" />

// Animation
<ArrowRightIcon className="animate-pulse" />
```

## Exemples d'Utilisation

### Dans un bouton
```tsx
<button className="flex items-center gap-2">
  <EmailIcon size={20} />
  Nous contacter
</button>
```

### Dans une liste
```tsx
<ul>
  <li className="flex items-center gap-3">
    <LocationIcon size={18} />
    <span>Avenue Dodoma n.193, Kinshasa</span>
  </li>
</ul>
```

### Avec animation au survol
```tsx
<div className="group">
  <ArrowRightIcon 
    size={24} 
    className="transform group-hover:translate-x-2 transition-transform" 
  />
</div>
```
