'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Toujours activé
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    checkCookieConsent();
  }, []);

  const checkCookieConsent = () => {
    const consent = localStorage.getItem('cookie-consent');
    const consentDate = localStorage.getItem('cookie-consent-date');

    if (!consent || !consentDate) {
      // Pas de consentement, afficher immédiatement
      setIsVisible(true);
      return;
    }

    // Vérifier si 3 jours se sont écoulés
    const lastConsentDate = new Date(consentDate);
    const now = new Date();
    const daysDiff = Math.floor((now.getTime() - lastConsentDate.getTime()) / (1000 * 60 * 60 * 24));

    if (daysDiff >= 3) {
      // 3 jours ou plus, redemander le consentement
      setIsVisible(true);
    }
  };

  const saveConsent = (accepted: boolean, customPreferences?: CookiePreferences) => {
    const now = new Date().toISOString();
    
    if (accepted) {
      const prefs = customPreferences || { necessary: true, analytics: true, marketing: true };
      localStorage.setItem('cookie-consent', JSON.stringify(prefs));
      localStorage.setItem('cookie-consent-date', now);
      
      // Appliquer les préférences
      applyCookiePreferences(prefs);
    } else {
      // Refusé - seulement les cookies nécessaires
      const prefs = { necessary: true, analytics: false, marketing: false };
      localStorage.setItem('cookie-consent', JSON.stringify(prefs));
      localStorage.setItem('cookie-consent-date', now);
      
      applyCookiePreferences(prefs);
    }

    setIsVisible(false);
    setShowCustomize(false);
  };

  const applyCookiePreferences = (prefs: CookiePreferences) => {
    // Ici vous pouvez ajouter la logique pour activer/désactiver les cookies
    console.log('Préférences de cookies appliquées:', prefs);
    
    // Exemple: Activer/désactiver Google Analytics
    if (prefs.analytics) {
      // Activer GA
      console.log('Analytics activé');
    } else {
      // Désactiver GA
      console.log('Analytics désactivé');
    }

    // Exemple: Activer/désactiver les cookies marketing
    if (prefs.marketing) {
      console.log('Marketing activé');
    } else {
      console.log('Marketing désactivé');
    }
  };

  const handleAccept = () => {
    saveConsent(true);
  };

  const handleRefuse = () => {
    saveConsent(false);
  };

  const handleCustomize = () => {
    setShowCustomize(true);
  };

  const handleSaveCustom = () => {
    saveConsent(true, preferences);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-end sm:items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-4xl">
        {/* Modal principal */}
        {!showCustomize ? (
          <div className="glass-morphism-dark rounded-3xl p-8 border-2 border-white/20 shadow-2xl animate-scaleIn">
            {/* En-tête */}
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-accent-gold to-primary-blue rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                </svg>
              </div>
              
              <div className="flex-1">
                <h2 className="text-3xl font-bold font-serif text-white mb-2">
                  Cookies et Confidentialité
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Nous utilisons des cookies pour améliorer votre expérience sur notre site. 
                  Ces cookies nous aident à comprendre comment vous utilisez notre site et à le rendre plus utile.
                </p>
              </div>
            </div>

            {/* Informations détaillées */}
            <div className="bg-white/5 rounded-2xl p-6 mb-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Types de cookies utilisés
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-accent-gold mt-1">•</span>
                  <span><strong className="text-white">Cookies nécessaires :</strong> Essentiels au fonctionnement du site (toujours activés)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-gold mt-1">•</span>
                  <span><strong className="text-white">Cookies analytiques :</strong> Nous aident à comprendre comment vous utilisez le site</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-gold mt-1">•</span>
                  <span><strong className="text-white">Cookies marketing :</strong> Utilisés pour personnaliser le contenu</span>
                </li>
              </ul>
            </div>

            {/* Note de rappel */}
            <div className="bg-accent-gold/10 border border-accent-gold/30 rounded-xl p-4 mb-6">
              <p className="text-sm text-gray-300 flex items-start gap-2">
                <svg className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>
                  Cette notification apparaît tous les 3 jours pour vous permettre de revoir vos préférences.
                </span>
              </p>
            </div>

            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAccept}
                className="flex-1 btn-institutional bg-accent-gold text-primary-blue px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Accepter tout
              </button>
              
              <button
                onClick={handleCustomize}
                className="flex-1 glass-morphism border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Personnaliser
              </button>
              
              <button
                onClick={handleRefuse}
                className="flex-1 bg-white/5 border-2 border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Refuser
              </button>
            </div>

            {/* Lien politique de confidentialité */}
            <div className="mt-6 text-center">
              <Link 
                href="/privacy" 
                className="text-sm text-gray-400 hover:text-accent-gold transition-colors underline"
              >
                Consulter notre politique de confidentialité
              </Link>
            </div>
          </div>
        ) : (
          /* Modal de personnalisation */
          <div className="glass-morphism-dark rounded-3xl p-8 border-2 border-white/20 shadow-2xl animate-scaleIn">
            {/* En-tête */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold font-serif text-white">
                Personnaliser les cookies
              </h2>
              <button
                onClick={() => setShowCustomize(false)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            {/* Options de cookies */}
            <div className="space-y-4 mb-8">
              {/* Cookies nécessaires */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                      Cookies nécessaires
                      <span className="px-2 py-1 bg-accent-gold/20 text-accent-gold text-xs rounded-full">Obligatoire</span>
                    </h3>
                    <p className="text-sm text-gray-300">
                      Ces cookies sont essentiels au fonctionnement du site. Ils ne peuvent pas être désactivés.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-12 h-6 bg-accent-gold rounded-full flex items-center px-1">
                      <div className="w-4 h-4 bg-white rounded-full transform translate-x-6"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cookies analytiques */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Cookies analytiques
                    </h3>
                    <p className="text-sm text-gray-300">
                      Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre site.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <button
                      onClick={() => setPreferences({ ...preferences, analytics: !preferences.analytics })}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                        preferences.analytics ? 'bg-accent-gold' : 'bg-gray-600'
                      }`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full transform transition-transform ${
                        preferences.analytics ? 'translate-x-6' : 'translate-x-0'
                      }`}></div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Cookies marketing */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Cookies marketing
                    </h3>
                    <p className="text-sm text-gray-300">
                      Ces cookies sont utilisés pour personnaliser le contenu et les publicités.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <button
                      onClick={() => setPreferences({ ...preferences, marketing: !preferences.marketing })}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                        preferences.marketing ? 'bg-accent-gold' : 'bg-gray-600'
                      }`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full transform transition-transform ${
                        preferences.marketing ? 'translate-x-6' : 'translate-x-0'
                      }`}></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleSaveCustom}
                className="flex-1 btn-institutional bg-accent-gold text-primary-blue px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Enregistrer mes préférences
              </button>
              
              <button
                onClick={() => setShowCustomize(false)}
                className="flex-1 bg-white/5 border-2 border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Annuler
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
