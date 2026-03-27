/**
 * Configuration du Splash Screen
 * 
 * Permet de personnaliser le comportement du splash screen
 */

export const splashConfig = {
  // Activer/désactiver le splash screen
  enabled: true,

  // Durée minimale d'affichage (en ms)
  minDuration: 2000,

  // Vitesse de progression (plus élevé = plus rapide)
  progressSpeed: {
    fast: 8,    // 0-60%
    medium: 4,  // 60-90%
    slow: 2,    // 90-100%
  },

  // Intervalle de mise à jour de la progression (en ms)
  updateInterval: 100,

  // Durée de la transition de sortie (en ms)
  exitDuration: 700,

  // Afficher uniquement au premier chargement
  showOnlyOnce: false,
};

/**
 * Vérifie si le splash screen doit être affiché
 */
export function shouldShowSplash(): boolean {
  if (!splashConfig.enabled) return false;
  
  if (splashConfig.showOnlyOnce) {
    const hasShown = sessionStorage.getItem('splash-shown');
    if (hasShown) return false;
    sessionStorage.setItem('splash-shown', 'true');
  }
  
  return true;
}
