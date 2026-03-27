'use client';
import React from 'react';
import * as Icons from './custom-icons';

export const IconShowcase: React.FC = () => {
  const iconList = [
    { name: 'GlobeIcon', component: Icons.GlobeIcon, description: 'Culture & Partage' },
    { name: 'HandsIcon', component: Icons.HandsIcon, description: 'Solidarité & Entraide' },
    { name: 'BuildingIcon', component: Icons.BuildingIcon, description: 'Représentation' },
    { name: 'BookIcon', component: Icons.BookIcon, description: 'Excellence Académique' },
    { name: 'LocationIcon', component: Icons.LocationIcon, description: 'Localisation' },
    { name: 'EmailIcon', component: Icons.EmailIcon, description: 'Email' },
    { name: 'PhoneIcon', component: Icons.PhoneIcon, description: 'Téléphone' },
    { name: 'CalendarIcon', component: Icons.CalendarIcon, description: 'Calendrier' },
    { name: 'ArrowDownIcon', component: Icons.ArrowDownIcon, description: 'Flèche bas' },
    { name: 'ArrowRightIcon', component: Icons.ArrowRightIcon, description: 'Flèche droite' },
    { name: 'MenuIcon', component: Icons.MenuIcon, description: 'Menu' },
    { name: 'CloseIcon', component: Icons.CloseIcon, description: 'Fermer' },
    { name: 'FacebookIcon', component: Icons.FacebookIcon, description: 'Facebook' },
    { name: 'TwitterIcon', component: Icons.TwitterIcon, description: 'Twitter' },
    { name: 'InstagramIcon', component: Icons.InstagramIcon, description: 'Instagram' },
    { name: 'LinkedInIcon', component: Icons.LinkedInIcon, description: 'LinkedIn' },
    { name: 'UserIcon', component: Icons.UserIcon, description: 'Utilisateur' },
    { name: 'StarIcon', component: Icons.StarIcon, description: 'Étoile' },
    { name: 'HeartIcon', component: Icons.HeartIcon, description: 'Cœur' },
    { name: 'SearchIcon', component: Icons.SearchIcon, description: 'Recherche' },
    { name: 'CameraIcon', component: Icons.CameraIcon, description: 'Caméra' },
    { name: 'DocumentIcon', component: Icons.DocumentIcon, description: 'Document' },
    { name: 'TrophyIcon', component: Icons.TrophyIcon, description: 'Trophée' },
    { name: 'TeamIcon', component: Icons.TeamIcon, description: 'Équipe' },
    { name: 'LightbulbIcon', component: Icons.LightbulbIcon, description: 'Idée' },
    { name: 'TargetIcon', component: Icons.TargetIcon, description: 'Cible' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold font-serif text-primary-blue mb-4">
          Icônes Personnalisées UCAG
        </h2>
        <p className="text-gray-600">
          Collection d'icônes avec la charte graphique institutionnelle
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {iconList.map(({ name, component: IconComponent, description }) => (
          <div
            key={name}
            className="group flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
          >
            <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300">
              <IconComponent size={48} />
            </div>
            <p className="text-xs font-semibold text-gray-700 text-center mb-1">
              {name}
            </p>
            <p className="text-xs text-gray-500 text-center">
              {description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gradient-to-br from-primary-blue to-[#002d6e] text-white rounded-2xl p-8">
        <h3 className="text-2xl font-bold font-serif mb-4">Utilisation</h3>
        <div className="bg-black/20 rounded-lg p-4 font-mono text-sm">
          <code className="text-accent-gold">import</code>{' '}
          <code className="text-white">{'{ GlobeIcon, EmailIcon }'}</code>{' '}
          <code className="text-accent-gold">from</code>{' '}
          <code className="text-green-300">'@/components/icons'</code>
          <br />
          <br />
          <code className="text-gray-300">{'<GlobeIcon size={32} />'}</code>
        </div>
      </div>
    </div>
  );
};
