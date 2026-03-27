import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

// Icône Globe - Culture & Partage
export const GlobeIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <defs>
      <linearGradient id="globeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#003f99" />
        <stop offset="100%" stopColor="#c09a3e" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="10" stroke="url(#globeGradient)" strokeWidth="2" fill="none"/>
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" 
          stroke="url(#globeGradient)" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="2" fill="#c09a3e"/>
  </svg>
);

// Icône Mains - Solidarité & Entraide
export const HandsIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <defs>
      <linearGradient id="handsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#003f99" />
        <stop offset="100%" stopColor="#c09a3e" />
      </linearGradient>
    </defs>
    <path d="M11 5v10M8 8v7M14 8v7M5 11v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4" 
          stroke="url(#handsGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 17v4M9 21h6" stroke="url(#handsGradient)" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="5" r="2" fill="#c09a3e"/>
    <path d="M7 11c-1.5 0-2.5-1-2.5-2.5S6.5 6 8 6M17 11c1.5 0 2.5-1 2.5-2.5S17.5 6 16 6" 
          stroke="url(#handsGradient)" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Icône Bâtiment - Représentation
export const BuildingIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <defs>
      <linearGradient id="buildingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#003f99" />
        <stop offset="100%" stopColor="#c09a3e" />
      </linearGradient>
    </defs>
    <rect x="4" y="4" width="16" height="17" rx="2" stroke="url(#buildingGradient)" strokeWidth="2"/>
    <path d="M8 8h2M14 8h2M8 12h2M14 12h2M8 16h2M14 16h2" stroke="url(#buildingGradient)" strokeWidth="2" strokeLinecap="round"/>
    <rect x="10" y="16" width="4" height="5" fill="#c09a3e"/>
    <path d="M4 21h16" stroke="url(#buildingGradient)" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Icône Livre - Excellence Académique
export const BookIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <defs>
      <linearGradient id="bookGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#003f99" />
        <stop offset="100%" stopColor="#c09a3e" />
      </linearGradient>
    </defs>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="url(#bookGradient)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" 
          stroke="url(#bookGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 7h8M8 11h6" stroke="#c09a3e" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="16" cy="15" r="1.5" fill="#c09a3e"/>
  </svg>
);

// Icône Localisation
export const LocationIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <defs>
      <linearGradient id="locationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#003f99" />
        <stop offset="100%" stopColor="#c09a3e" />
      </linearGradient>
    </defs>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" 
          stroke="url(#locationGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="10" r="3" fill="#c09a3e"/>
  </svg>
);

// Icône Email
export const EmailIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <defs>
      <linearGradient id="emailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#003f99" />
        <stop offset="100%" stopColor="#c09a3e" />
      </linearGradient>
    </defs>
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="url(#emailGradient)" strokeWidth="2"/>
    <path d="M3 7l9 6 9-6" stroke="url(#emailGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="2" fill="#c09a3e"/>
  </svg>
);

// Icône Téléphone
export const PhoneIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <defs>
      <linearGradient id="phoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#003f99" />
        <stop offset="100%" stopColor="#c09a3e" />
      </linearGradient>
    </defs>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" 
          stroke="url(#phoneGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="15" cy="9" r="2" fill="#c09a3e"/>
  </svg>
);

// Icône Flèche vers le bas
export const ArrowDownIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <defs>
      <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#c09a3e" />
        <stop offset="100%" stopColor="#003f99" />
      </linearGradient>
    </defs>
    <path d="M12 5v14M19 12l-7 7-7-7" stroke="url(#arrowGradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Icône Flèche vers la droite
export const ArrowRightIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <defs>
      <linearGradient id="arrowRightGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#003f99" />
        <stop offset="100%" stopColor="#c09a3e" />
      </linearGradient>
    </defs>
    <path d="M5 12h14M12 5l7 7-7 7" stroke="url(#arrowRightGradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Icône Menu Hamburger
export const MenuIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <defs>
      <linearGradient id="menuGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#003f99" />
        <stop offset="100%" stopColor="#c09a3e" />
      </linearGradient>
    </defs>
    <path d="M3 12h18M3 6h18M3 18h18" stroke="url(#menuGradient)" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

// Icône Fermer (X)
export const CloseIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <defs>
      <linearGradient id="closeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#003f99" />
        <stop offset="100%" stopColor="#c09a3e" />
      </linearGradient>
    </defs>
    <path d="M18 6L6 18M6 6l12 12" stroke="url(#closeGradient)" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

// Icône Facebook
export const FacebookIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <defs>
      <linearGradient id="facebookGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#003f99" />
        <stop offset="100%" stopColor="#c09a3e" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="10" stroke="url(#facebookGradient)" strokeWidth="2"/>
    <path d="M15.5 8.5h-2a2 2 0 0 0-2 2v8M9.5 13.5h5" stroke="url(#facebookGradient)" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Icône Twitter/X
export const TwitterIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <defs>
      <linearGradient id="twitterGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#003f99" />
        <stop offset="100%" stopColor="#c09a3e" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="10" stroke="url(#twitterGradient)" strokeWidth="2"/>
    <path d="M8 16c4 0 6-3 6-6 0 0 1-1 1-2-1 0-1.5.5-1.5.5S13 7 11.5 7c-1 0-2 1-2 2.5 0 .5 0 .5-1 .5-2 0-3.5-1.5-3.5-1.5s1 4.5 5 5.5c0 0-1 2-3 2" 
          stroke="url(#twitterGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Icône Instagram
export const InstagramIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <defs>
      <linearGradient id="instagramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#003f99" />
        <stop offset="100%" stopColor="#c09a3e" />
      </linearGradient>
    </defs>
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="url(#instagramGradient)" strokeWidth="2"/>
    <circle cx="12" cy="12" r="4" stroke="url(#instagramGradient)" strokeWidth="2"/>
    <circle cx="17.5" cy="6.5" r="1.5" fill="#c09a3e"/>
  </svg>
);

// Icône LinkedIn
export const LinkedInIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <defs>
      <linearGradient id="linkedinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#003f99" />
        <stop offset="100%" stopColor="#c09a3e" />
      </linearGradient>
    </defs>
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="url(#linkedinGradient)" strokeWidth="2"/>
    <path d="M8 11v6M8 8v.01M12 16v-5M12 11a3 3 0 0 1 6 0v5" stroke="url(#linkedinGradient)" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Icône Calendrier/Date
export const CalendarIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <defs>
      <linearGradient id="calendarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#003f99" />
        <stop offset="100%" stopColor="#c09a3e" />
      </linearGradient>
    </defs>
    <rect x="3" y="4" width="18" height="18" rx="2" stroke="url(#calendarGradient)" strokeWidth="2"/>
    <path d="M3 10h18M8 2v4M16 2v4" stroke="url(#calendarGradient)" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="8" cy="14" r="1" fill="#c09a3e"/>
    <circle cx="12" cy="14" r="1" fill="#c09a3e"/>
    <circle cx="16" cy="14" r="1" fill="#c09a3e"/>
  </svg>
);


// Icône Utilisateur/Profil
export const UserIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <defs>
      <linearGradient id="userGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#003f99" />
        <stop offset="100%" stopColor="#c09a3e" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="8" r="4" stroke="url(#userGradient)" strokeWidth="2"/>
    <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="url(#userGradient)" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Icône Étoile
export const StarIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <defs>
      <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#003f99" />
        <stop offset="100%" stopColor="#c09a3e" />
      </linearGradient>
    </defs>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" 
          stroke="url(#starGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#c09a3e" fillOpacity="0.2"/>
  </svg>
);

// Icône Cœur
export const HeartIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <defs>
      <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#003f99" />
        <stop offset="100%" stopColor="#c09a3e" />
      </linearGradient>
    </defs>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" 
          stroke="url(#heartGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Icône Recherche
export const SearchIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <defs>
      <linearGradient id="searchGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#003f99" />
        <stop offset="100%" stopColor="#c09a3e" />
      </linearGradient>
    </defs>
    <circle cx="11" cy="11" r="8" stroke="url(#searchGradient)" strokeWidth="2"/>
    <path d="M21 21l-4.35-4.35" stroke="url(#searchGradient)" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Icône Caméra/Photo
export const CameraIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <defs>
      <linearGradient id="cameraGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#003f99" />
        <stop offset="100%" stopColor="#c09a3e" />
      </linearGradient>
    </defs>
    <rect x="2" y="6" width="20" height="14" rx="2" stroke="url(#cameraGradient)" strokeWidth="2"/>
    <circle cx="12" cy="13" r="3" stroke="url(#cameraGradient)" strokeWidth="2"/>
    <path d="M7 6L8.5 3h7L17 6" stroke="url(#cameraGradient)" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Icône Document/Fichier
export const DocumentIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <defs>
      <linearGradient id="documentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#003f99" />
        <stop offset="100%" stopColor="#c09a3e" />
      </linearGradient>
    </defs>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="url(#documentGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="url(#documentGradient)" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Icône Trophée/Succès
export const TrophyIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <defs>
      <linearGradient id="trophyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#003f99" />
        <stop offset="100%" stopColor="#c09a3e" />
      </linearGradient>
    </defs>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18" stroke="url(#trophyGradient)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M6 4h12v7a6 6 0 0 1-12 0V4z" stroke="url(#trophyGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 17v4M8 21h8" stroke="url(#trophyGradient)" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="8" r="1.5" fill="#c09a3e"/>
  </svg>
);

// Icône Groupe/Équipe
export const TeamIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <defs>
      <linearGradient id="teamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#003f99" />
        <stop offset="100%" stopColor="#c09a3e" />
      </linearGradient>
    </defs>
    <circle cx="9" cy="7" r="3" stroke="url(#teamGradient)" strokeWidth="2"/>
    <circle cx="17" cy="7" r="3" stroke="url(#teamGradient)" strokeWidth="2"/>
    <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2M13 21v-2a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2" 
          stroke="url(#teamGradient)" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Icône Ampoule/Idée
export const LightbulbIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <defs>
      <linearGradient id="lightbulbGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#003f99" />
        <stop offset="100%" stopColor="#c09a3e" />
      </linearGradient>
    </defs>
    <path d="M9 18h6M10 22h4M15 8a3 3 0 1 0-6 0c0 2 3 3 3 5" stroke="url(#lightbulbGradient)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 2v1M18.36 5.64l-.7.7M21 12h-1M5.64 5.64l.7.7M3 12h1" stroke="url(#lightbulbGradient)" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="8" r="1" fill="#c09a3e"/>
  </svg>
);

// Icône Cible/Objectif
export const TargetIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <defs>
      <linearGradient id="targetGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#003f99" />
        <stop offset="100%" stopColor="#c09a3e" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="10" stroke="url(#targetGradient)" strokeWidth="2"/>
    <circle cx="12" cy="12" r="6" stroke="url(#targetGradient)" strokeWidth="2"/>
    <circle cx="12" cy="12" r="2" fill="#c09a3e"/>
  </svg>
);
