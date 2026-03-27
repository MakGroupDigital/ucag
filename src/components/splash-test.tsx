'use client';
import React, { useState } from 'react';
import { SplashScreen } from './splash-screen';

/**
 * Composant de test pour le Splash Screen
 * Permet de tester le splash screen sans recharger la page
 */
export const SplashTest: React.FC = () => {
  const [showSplash, setShowSplash] = useState(false);

  const handleTest = () => {
    // Réinitialiser le sessionStorage pour permettre l'affichage
    sessionStorage.removeItem('splash-shown');
    setShowSplash(true);
    
    // Recharger après un court délai
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={handleTest}
        className="bg-primary-blue text-white px-6 py-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        Tester Splash Screen
      </button>
      {showSplash && <SplashScreen />}
    </div>
  );
};
