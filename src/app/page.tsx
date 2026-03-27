'use client';
import React from 'react';
import Link from 'next/link';
import { Hero3D } from '@/components/hero-3d';
import { MissionCards3D } from '@/components/mission-cards-3d';
import { 
  ArrowRightIcon,
  CalendarIcon
} from '@/components/icons/custom-icons';

const Home: React.FC = () => {
  const newsItems = [
    { title: "Conférence Annuelle 2024", date: "15 Oct 2024", excerpt: "Notre conférence annuelle a réuni des experts de divers domaines pour discuter de l'avenir...", image: "https://picsum.photos/seed/news1/600/400" },
    { title: "Partenariat avec l'Université d'Athènes", date: "02 Sep 2024", excerpt: "Un nouveau partenariat visant à promouvoir les échanges académiques et culturels...", image: "https://picsum.photos/seed/news2/600/400" },
    { title: "Projet de Solidarité à Kinshasa", date: "21 Juil 2024", excerpt: "Lancement de notre initiative pour soutenir l'éducation dans les écoles locales...", image: "https://picsum.photos/seed/news3/600/400" },
  ];

  const galleryImages = [
    "https://picsum.photos/seed/gal1/600/400",
    "https://picsum.photos/seed/gal2/600/800",
    "https://picsum.photos/seed/gal3/800/600",
    "https://picsum.photos/seed/gal4/600/400",
    "https://picsum.photos/seed/gal5/600/600",
    "https://picsum.photos/seed/gal6/800/600",
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section 3D Révolutionnaire */}
      <Hero3D />

      {/* Mission Section avec Cartes 3D */}
      <MissionCards3D />

      {/* News Section avec Parallaxe et Glassmorphism */}
      <section className="relative py-32 overflow-hidden">
        {/* Fond avec effet de profondeur */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-primary-blue to-gray-900"></div>
        
        {/* Grille 3D en arrière-plan */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(192, 154, 62, 0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(192, 154, 62, 0.5) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              transform: 'perspective(500px) rotateX(60deg) scale(2)',
              transformOrigin: 'center top',
            }}
          ></div>
        </div>

        {/* Formes liquides */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent-gold/20 rounded-full liquid-shape blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full liquid-shape blur-3xl" style={{ animationDelay: '5s' }}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* En-tête */}
          <div className="text-center mb-20">
            <div className="inline-block mb-4" data-aos="fade-down">
              <span className="px-6 py-2 glass-morphism border border-accent-gold/30 rounded-full text-accent-gold font-bold tracking-widest text-sm neon-glow">
                ACTUALITÉS
              </span>
            </div>
            
            <h2 
              className="text-5xl md:text-6xl font-bold font-serif text-white mb-6"
              data-aos="fade-up"
            >
              <span className="relative inline-block holographic">
                Événements & Nouvelles
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-accent-gold to-transparent"></div>
              </span>
            </h2>
            
            <p 
              className="mt-10 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Restez informés de nos dernières initiatives et des moments forts de l'union
            </p>
          </div>
          
          {/* Grille de cartes avec effet 3D */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <div
                key={item.title}
                className="group relative"
                data-aos="fade-up"
                data-aos-delay={100 * index}
              >
                {/* Carte avec glassmorphism */}
                <div className="relative h-full glass-morphism-dark rounded-3xl overflow-hidden border-2 border-white/10 card-3d depth-shadow transform transition-all duration-700 hover:scale-105">
                  
                  {/* Image avec overlay */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                    />
                    
                    {/* Overlay avec gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                    
                    {/* Badge date avec effet néon */}
                    <div className="absolute top-4 right-4 glass-morphism px-4 py-2 rounded-full border border-accent-gold/30 neon-border">
                      <div className="flex items-center gap-2 text-white">
                        <CalendarIcon size={14} />
                        <span className="text-xs font-bold">{item.date}</span>
                      </div>
                    </div>

                    {/* Effet de scan */}
                    <div className="absolute inset-0 scan-line opacity-0 group-hover:opacity-100"></div>
                  </div>
                  
                  {/* Contenu */}
                  <div className="p-6 relative">
                    {/* Ligne décorative */}
                    <div className="absolute top-0 left-6 w-16 h-1 bg-gradient-to-r from-accent-gold to-transparent transform -translate-y-3"></div>
                    
                    <h3 className="text-2xl font-bold font-serif text-white mb-3 group-hover:text-accent-gold transition-colors duration-300 line-clamp-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-5 leading-relaxed line-clamp-3">
                      {item.excerpt}
                    </p>
                    
                    {/* Bouton avec effet magnétique */}
                    <Link 
                      href="/news" 
                      className="inline-flex items-center gap-2 text-accent-gold font-semibold group/link hover:gap-4 transition-all duration-300"
                    >
                      <span>Lire la suite</span>
                      <ArrowRightIcon size={20} className="transform group-hover/link:translate-x-2 transition-transform" />
                    </Link>
                  </div>

                  {/* Particules au survol */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-accent-gold rounded-full animate-parallax-float"
                        style={{
                          left: `${30 + i * 20}%`,
                          top: `${30 + i * 15}%`,
                          animationDelay: `${i * 0.3}s`,
                        }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Ombre portée avec glow */}
                <div className="absolute inset-0 bg-accent-gold/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-700 -z-10 transform translate-y-8"></div>
              </div>
            ))}
          </div>
          
          {/* Bouton CTA avec effet holographique */}
          <div className="text-center mt-16" data-aos="fade-up">
            <Link 
              href="/news" 
              className="inline-block holographic text-white px-12 py-5 rounded-full font-bold text-lg transform hover:scale-105 transition-all duration-300 depth-shadow relative overflow-hidden group"
            >
              <span className="relative z-10">Voir toutes les actualités</span>
              <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section avec Effet Mosaïque 3D */}
      <section className="relative py-32 overflow-hidden bg-white">
        {/* Fond avec particules */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary-blue/5 rounded-full liquid-shape blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent-gold/5 rounded-full liquid-shape blur-3xl" style={{ animationDelay: '7s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* En-tête */}
          <div className="text-center mb-20">
            <div className="inline-block mb-4" data-aos="fade-down">
              <span className="px-6 py-2 bg-accent-gold/10 border border-accent-gold/30 rounded-full text-accent-gold font-bold tracking-widest text-sm">
                GALERIE
              </span>
            </div>
            
            <h2 
              className="text-5xl md:text-6xl font-bold font-serif text-primary-blue mb-6"
              data-aos="fade-up"
            >
              <span className="relative inline-block">
                Moments Capturés
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-accent-gold to-transparent"></div>
              </span>
            </h2>
            
            <p 
              className="mt-10 text-xl text-gray-600 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Un aperçu de nos événements et activités en images
            </p>
          </div>
          
          {/* Grille mosaïque avec effet 3D */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((src, index) => {
              const isLarge = index === 1 || index === 5;
              
              return (
                <div 
                  key={index} 
                  className={`
                    group relative overflow-hidden rounded-3xl
                    ${isLarge ? 'row-span-2 md:col-span-2' : ''}
                    card-3d cursor-pointer
                  `}
                  data-aos="zoom-in-up" 
                  data-aos-delay={50 * index}
                  style={{
                    minHeight: isLarge ? '400px' : '200px',
                  }}
                >
                  {/* Image avec effet de zoom */}
                  <img 
                    src={src} 
                    alt={`Galerie ${index + 1}`} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                  />
                  
                  {/* Overlay avec glassmorphism */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/90 via-primary-blue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                    <div className="glass-morphism px-6 py-3 rounded-full border border-white/30 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-white font-semibold flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                        Voir plus
                      </span>
                    </div>
                  </div>

                  {/* Effet de scan */}
                  <div className="absolute inset-0 scan-line opacity-0 group-hover:opacity-100"></div>

                  {/* Bordure lumineuse au survol */}
                  <div className="absolute inset-0 border-4 border-accent-gold/0 group-hover:border-accent-gold/50 rounded-3xl transition-all duration-500"></div>

                  {/* Particules */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-accent-gold rounded-full animate-parallax-float"
                        style={{
                          left: `${20 + i * 30}%`,
                          top: `${20 + i * 20}%`,
                          animationDelay: `${i * 0.2}s`,
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Bouton CTA avec effet 3D */}
          <div className="text-center mt-16" data-aos="fade-up">
            <Link 
              href="/gallery" 
              className="inline-block bg-primary-blue text-white px-12 py-5 rounded-full font-bold text-lg transform hover:scale-105 transition-all duration-300 depth-shadow relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-3">
                Voir toute la Galerie
                <svg className="w-6 h-6 transform group-hover:rotate-90 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </span>
              <div className="absolute inset-0 bg-accent-gold/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Spectaculaire */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Fond avec effet holographique */}
        <div className="absolute inset-0 holographic"></div>
        
        {/* Formes liquides géantes */}
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-white/10 rounded-full liquid-shape blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent-gold/20 rounded-full liquid-shape blur-3xl" style={{ animationDelay: '5s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/5 rounded-full liquid-shape blur-3xl" style={{ animationDelay: '10s' }}></div>

        {/* Grille 3D futuriste */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.3) 2px, transparent 2px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.3) 2px, transparent 2px)
              `,
              backgroundSize: '80px 80px',
              transform: 'perspective(800px) rotateX(60deg) scale(2)',
              transformOrigin: 'center center',
            }}
          ></div>
        </div>

        {/* Particules orbitales */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full animate-parallax-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`,
                opacity: 0.2 + Math.random() * 0.3,
              }}
            ></div>
          ))}
        </div>

        {/* Contenu principal */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          
          {/* Badge animé */}
          <div className="inline-block mb-8" data-aos="zoom-in">
            <div className="glass-morphism px-8 py-3 rounded-full border-2 border-white/30 animate-glow-pulse">
              <span className="font-bold tracking-widest text-sm neon-glow">
                REJOIGNEZ-NOUS
              </span>
            </div>
          </div>

          {/* Titre spectaculaire */}
          <h2 
            className="text-6xl md:text-8xl font-bold font-serif mb-8 leading-tight"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span className="block animate-text-reveal">Prêt à Contribuer</span>
            <span className="block text-accent-gold neon-glow animate-text-reveal" style={{ animationDelay: '0.3s' }}>
              à Notre Mission ?
            </span>
          </h2>

          {/* Ligne décorative animée */}
          <div className="flex justify-center items-center gap-4 mb-10" data-aos="fade" data-aos-delay="600">
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-accent-gold to-white animate-pulse"></div>
            <div className="w-3 h-3 bg-accent-gold rounded-full animate-ping"></div>
            <div className="h-1 w-32 bg-gradient-to-l from-transparent via-accent-gold to-white animate-pulse"></div>
          </div>

          {/* Description avec glassmorphism */}
          <div 
            className="max-w-4xl mx-auto mb-12"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <div className="glass-morphism-dark p-8 rounded-3xl border-2 border-white/20 scan-line">
              <p className="text-2xl md:text-3xl font-light leading-relaxed">
                Rejoignez notre réseau d'ambassadeurs et participez à la construction de{' '}
                <span className="text-accent-gold font-semibold">ponts culturels</span>
                {' '}entre nos deux nations
              </p>
            </div>
          </div>

          {/* Boutons avec effets 3D */}
          <div 
            className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <Link 
              href="/contact"
              className="group relative bg-white text-primary-blue px-12 py-6 rounded-full font-bold text-xl overflow-hidden transform hover:scale-110 transition-all duration-500 depth-shadow"
            >
              <span className="relative z-10 flex items-center gap-3">
                Nous Contacter
                <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </span>
              <div className="absolute inset-0 bg-accent-gold/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </Link>

            <Link 
              href="/about"
              className="group glass-morphism border-2 border-white/30 text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-white/10 transition-all duration-500 transform hover:scale-110 neon-border"
            >
              <span className="flex items-center gap-3">
                En Savoir Plus
                <svg className="w-6 h-6 transform group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </span>
            </Link>
          </div>

          {/* Stats avec effet holographique */}
          <div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="1200"
          >
            {[
              { icon: '🌍', number: '2', label: 'Pays Unis' },
              { icon: '🤝', number: '500+', label: 'Membres Actifs' },
              { icon: '🎓', number: '1000+', label: 'Diplômés' },
              { icon: '✨', number: '50+', label: 'Événements/An' },
            ].map((stat, i) => (
              <div 
                key={i}
                className="glass-morphism-dark p-6 rounded-2xl border border-white/20 card-3d group cursor-pointer hover:border-accent-gold/50 transition-all duration-500"
              >
                <div className="text-5xl mb-3 transform group-hover:scale-125 transition-transform duration-500">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-accent-gold holographic mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Effet de vague en bas */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>
    </div>
  );
};

export default Home;
