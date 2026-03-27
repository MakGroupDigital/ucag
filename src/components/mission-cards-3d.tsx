'use client';
import React, { useState } from 'react';
import { GlobeIcon, HandsIcon, BuildingIcon, BookIcon } from '@/components/icons/custom-icons';

interface MissionCard {
  icon: React.FC<{ size?: number; className?: string }>;
  title: string;
  text: string;
  color: string;
  gradient: string;
}

export const MissionCards3D: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const missions: MissionCard[] = [
    {
      icon: GlobeIcon,
      title: 'Culture & Partage',
      text: 'Promouvoir les échanges culturels et renforcer les liens entre la Grèce et la RDC à travers des initiatives innovantes.',
      color: 'from-blue-500 to-blue-700',
      gradient: 'from-blue-500/20 via-blue-600/10 to-transparent',
    },
    {
      icon: HandsIcon,
      title: 'Solidarité & Entraide',
      text: 'Soutenir nos membres et développer des projets sociaux impactants pour nos communautés avec engagement.',
      color: 'from-green-500 to-green-700',
      gradient: 'from-green-500/20 via-green-600/10 to-transparent',
    },
    {
      icon: BuildingIcon,
      title: 'Représentation',
      text: 'Agir comme un interlocuteur privilégié et influent auprès des institutions des deux pays.',
      color: 'from-purple-500 to-purple-700',
      gradient: 'from-purple-500/20 via-purple-600/10 to-transparent',
    },
    {
      icon: BookIcon,
      title: 'Excellence Académique',
      text: 'Encourager la réussite académique et professionnelle de nos membres vers des sommets d\'excellence.',
      color: 'from-amber-500 to-amber-700',
      gradient: 'from-amber-500/20 via-amber-600/10 to-transparent',
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Fond avec particules */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>
      
      {/* Éléments décoratifs liquides */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent-gold/10 rounded-full liquid-shape blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary-blue/10 rounded-full liquid-shape blur-3xl" style={{ animationDelay: '7s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* En-tête avec effet de révélation */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4" data-aos="fade-down">
            <span className="px-6 py-2 bg-accent-gold/10 border border-accent-gold/30 rounded-full text-accent-gold font-bold tracking-widest text-sm">
              NOS VALEURS
            </span>
          </div>
          
          <h2 
            className="text-5xl md:text-6xl font-bold font-serif text-primary-blue mb-6"
            data-aos="fade-up"
          >
            <span className="relative inline-block">
              Nos Piliers Fondamentaux
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-accent-gold to-transparent"></div>
            </span>
          </h2>
          
          <p 
            className="mt-10 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Fondée sur des valeurs fortes, notre union agit sur plusieurs fronts pour un impact durable et significatif dans nos communautés
          </p>
        </div>

        {/* Grille de cartes 3D */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {missions.map((mission, index) => {
            const IconComponent = mission.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                className="group relative"
                data-aos="zoom-in"
                data-aos-delay={100 * index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Carte avec effet 3D et glassmorphism */}
                <div 
                  className={`
                    relative h-full p-8 rounded-3xl
                    glass-morphism border-2 border-gray-100
                    transform transition-all duration-700 ease-out
                    ${isHovered ? 'scale-105 -translate-y-4' : 'scale-100'}
                    card-3d depth-shadow
                  `}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Fond dégradé animé */}
                  <div 
                    className={`
                      absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
                      bg-gradient-to-br ${mission.gradient}
                      transition-opacity duration-700
                    `}
                  ></div>

                  {/* Effet de scan */}
                  <div className="absolute inset-0 rounded-3xl scan-line opacity-0 group-hover:opacity-100"></div>

                  {/* Contenu */}
                  <div className="relative z-10 flex flex-col h-full">
                    
                    {/* Icône avec effet holographique */}
                    <div className="mb-6">
                      <div 
                        className={`
                          inline-flex p-6 rounded-2xl
                          bg-gradient-to-br ${mission.color}
                          transform transition-all duration-700
                          ${isHovered ? 'scale-110 rotate-6' : 'scale-100 rotate-0'}
                          shadow-2xl group-hover:shadow-accent-gold/50
                        `}
                        style={{
                          transform: isHovered ? 'translateZ(50px)' : 'translateZ(0)',
                        }}
                      >
                        <IconComponent size={48} className="text-white" />
                      </div>
                    </div>

                    {/* Titre avec effet néon */}
                    <h3 
                      className={`
                        text-2xl font-bold font-serif mb-4
                        transition-all duration-500
                        ${isHovered ? 'text-accent-gold neon-glow' : 'text-primary-blue'}
                      `}
                    >
                      {mission.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed flex-1">
                      {mission.text}
                    </p>

                    {/* Ligne décorative animée */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div 
                        className={`
                          h-1 bg-gradient-to-r ${mission.color} rounded-full
                          transform origin-left transition-all duration-700
                          ${isHovered ? 'scale-x-100' : 'scale-x-0'}
                        `}
                      ></div>
                    </div>
                  </div>

                  {/* Particules flottantes */}
                  {isHovered && (
                    <>
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-accent-gold rounded-full animate-parallax-float"
                          style={{
                            left: `${20 + i * 15}%`,
                            top: `${20 + i * 10}%`,
                            animationDelay: `${i * 0.2}s`,
                            animationDuration: '3s',
                          }}
                        ></div>
                      ))}
                    </>
                  )}

                  {/* Effet de bordure lumineuse */}
                  <div 
                    className={`
                      absolute inset-0 rounded-3xl
                      transition-opacity duration-700
                      ${isHovered ? 'opacity-100' : 'opacity-0'}
                    `}
                    style={{
                      background: `linear-gradient(135deg, ${mission.color.replace('from-', 'rgba(').replace(' to-', ', 0.3), rgba(').replace('-500', '').replace('-700', '')})`,
                      filter: 'blur(20px)',
                      transform: 'translateZ(-10px)',
                    }}
                  ></div>
                </div>

                {/* Ombre portée dynamique */}
                <div 
                  className={`
                    absolute inset-0 rounded-3xl bg-gradient-to-br ${mission.color}
                    opacity-0 group-hover:opacity-20 blur-2xl
                    transition-opacity duration-700
                    -z-10
                  `}
                  style={{
                    transform: 'translateY(20px)',
                  }}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Élément décoratif central */}
        <div className="flex justify-center mt-20" data-aos="fade-up" data-aos-delay="600">
          <div className="glass-morphism px-8 py-4 rounded-full border-2 border-accent-gold/30">
            <p className="text-primary-blue font-semibold">
              <span className="text-accent-gold">4 Piliers</span> • <span className="text-accent-gold">1 Vision</span> • Excellence Garantie
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
