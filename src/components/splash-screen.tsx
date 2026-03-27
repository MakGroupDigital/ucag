'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { splashConfig, shouldShowSplash } from '@/lib/splash-config';

export const SplashScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldShow, setShouldShow] = useState(true);

  useEffect(() => {
    // Vérifier si le splash doit être affiché
    if (!shouldShowSplash()) {
      setIsVisible(false);
      setShouldShow(false);
      return;
    }

    const startTime = Date.now();

    // Simuler le chargement progressif
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          
          // Respecter la durée minimale
          const elapsed = Date.now() - startTime;
          const remaining = Math.max(0, splashConfig.minDuration - elapsed);
          
          setTimeout(() => {
            setIsLoaded(true);
            setTimeout(() => {
              setIsVisible(false);
            }, splashConfig.exitDuration);
          }, remaining);
          
          return 100;
        }
        
        // Progression avec vitesse variable
        const { fast, medium, slow } = splashConfig.progressSpeed;
        const increment = prev < 60 ? fast : prev < 90 ? medium : slow;
        return Math.min(prev + increment, 100);
      });
    }, splashConfig.updateInterval);

    return () => clearInterval(interval);
  }, []);

  if (!shouldShow || !isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-primary-blue via-[#002d6e] to-[#001f4d] transition-opacity duration-700 ${
        isLoaded ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Particules de fond animées */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-accent-gold rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-accent-gold rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-accent-gold rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-accent-gold rounded-full animate-float opacity-30" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-white rounded-full animate-float opacity-20" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white rounded-full animate-float opacity-25" style={{ animationDelay: '2.5s' }}></div>
      </div>

      {/* Cercles décoratifs */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="absolute w-96 h-96 border-2 border-accent-gold rounded-full animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] border border-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute w-[600px] h-[600px] border border-accent-gold rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo avec animation */}
        <div className="relative mb-8 animate-scaleIn">
          <div className="absolute inset-0 bg-accent-gold/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-full border-2 border-white/20 shadow-2xl">
            <Image
              src="/UCAG.png"
              alt="UCAG Logo"
              width={120}
              height={120}
              className="animate-float"
              priority
            />
          </div>
        </div>

        {/* Nom de l'organisation */}
        <div className="text-center mb-8 animate-fadeInUp">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-2 tracking-wide">
            U.C.A.G
          </h1>
          <p className="text-lg text-gray-300 font-light tracking-wider">
            Union des Congolais Anciens de Grèce
          </p>
        </div>

        {/* Barre de progression futuriste */}
        <div className="w-80 md:w-96 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          {/* Container de la barre */}
          <div className="relative h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/20">
            {/* Barre de progression avec gradient animé */}
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent-gold via-yellow-400 to-accent-gold rounded-full transition-all duration-300 ease-out"
              style={{
                width: `${progress}%`,
                backgroundSize: '200% 100%',
                animation: 'shimmer 2s linear infinite',
              }}
            >
              {/* Effet de brillance */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </div>

            {/* Points lumineux qui suivent la progression */}
            <div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg shadow-accent-gold transition-all duration-300"
              style={{ left: `calc(${progress}% - 6px)` }}
            >
              <div className="absolute inset-0 bg-accent-gold rounded-full animate-ping"></div>
            </div>
          </div>

          {/* Pourcentage */}
          <div className="flex justify-between items-center mt-3 text-sm">
            <span className="text-gray-400 font-medium">Chargement...</span>
            <span className="text-accent-gold font-bold text-lg tabular-nums">
              {progress}%
            </span>
          </div>
        </div>

        {/* Texte de chargement animé */}
        <div className="mt-6 flex items-center space-x-2 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-accent-gold rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-accent-gold rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-accent-gold rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
          <span className="text-gray-400 text-sm font-light">
            Préparation de l'expérience
          </span>
        </div>
      </div>

      {/* Effet de grille futuriste en arrière-plan */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(192, 154, 62, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(192, 154, 62, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>
    </div>
  );
};
