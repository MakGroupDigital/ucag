'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Hero3D: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const parallaxStyle = {
    transform: `translate(${(mousePosition.x - 0.5) * 30}px, ${(mousePosition.y - 0.5) * 30}px)`,
  };

  const parallaxStyleSlow = {
    transform: `translate(${(mousePosition.x - 0.5) * 15}px, ${(mousePosition.y - 0.5) * 15}px)`,
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden particle-bg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Fond avec effet liquide */}
      <div className="absolute inset-0 z-0">
        {/* Image de fond */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://res.cloudinary.com/dy73hzkpm/image/upload/v1762864616/ggjhj_rzx9xq.jpg')",
            filter: 'brightness(0.4)',
          }}
        ></div>
        
        {/* Overlay avec gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/80 via-[#002d6e]/70 to-[#001f4d]/80"></div>
        
        {/* Formes liquides animées */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent-gold/10 rounded-full liquid-shape blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary-blue/20 rounded-full liquid-shape blur-3xl" style={{ animationDelay: '5s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-white/5 rounded-full liquid-shape blur-3xl" style={{ animationDelay: '10s' }}></div>
      </div>

      {/* Grille 3D futuriste */}
      <div className="absolute inset-0 z-10 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(192, 154, 62, 0.4) 2px, transparent 2px),
              linear-gradient(90deg, rgba(192, 154, 62, 0.4) 2px, transparent 2px),
              linear-gradient(rgba(192, 154, 62, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(192, 154, 62, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
            transform: `perspective(1000px) rotateX(60deg) scale(2)`,
            transformOrigin: 'center center',
          }}
        ></div>
      </div>

      {/* Particules flottantes 3D */}
      <div className="absolute inset-0 z-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-accent-gold rounded-full animate-parallax-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
              opacity: 0.3 + Math.random() * 0.4,
            }}
          ></div>
        ))}
      </div>

      {/* Contenu principal avec effet 3D */}
      <div className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Texte avec animations révolutionnaires */}
          <div className="flex-1 text-white space-y-8" style={parallaxStyleSlow}>
            
            {/* Badge animé */}
            <div className="inline-block" data-aos="zoom-in">
              <div className="glass-morphism px-6 py-3 rounded-full border-2 border-accent-gold/30 animate-glow-pulse">
                <span className="text-accent-gold font-bold tracking-widest text-sm neon-glow">
                  UNION DES CONGOLAIS ANCIENS DE GRÈCE
                </span>
              </div>
            </div>

            {/* Titre avec effet de révélation */}
            <div className="space-y-4">
              <h1 
                className="text-6xl md:text-8xl font-extrabold font-serif leading-tight"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <span className="block animate-text-reveal">Rayonner la</span>
                <span className="block text-accent-gold holographic animate-text-reveal" style={{ animationDelay: '0.3s' }}>
                  Coopération
                </span>
                <span className="block animate-text-reveal" style={{ animationDelay: '0.6s' }}>
                  Unir l'Excellence
                </span>
              </h1>
            </div>

            {/* Ligne décorative animée */}
            <div className="flex items-center gap-4" data-aos="fade-right" data-aos-delay="800">
              <div className="h-1 w-20 bg-gradient-to-r from-accent-gold to-transparent animate-pulse"></div>
              <div className="h-1 w-32 bg-gradient-to-r from-accent-gold via-white to-transparent"></div>
            </div>

            {/* Description avec glassmorphism */}
            <div 
              className="glass-morphism-dark p-6 rounded-2xl max-w-2xl scan-line"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              <p className="text-xl md:text-2xl font-light leading-relaxed">
                Le pont culturel et académique entre la{' '}
                <span className="text-accent-gold font-semibold">République Démocratique du Congo</span>
                {' '}et la{' '}
                <span className="text-accent-gold font-semibold">Grèce</span>
              </p>
            </div>

            {/* Boutons avec effets magnétiques */}
            <div 
              className="flex flex-col sm:flex-row gap-5"
              data-aos="fade-up"
              data-aos-delay="1200"
            >
              <Link 
                href="/about"
                className="group relative btn-institutional bg-accent-gold text-primary-blue px-10 py-5 rounded-full font-bold text-lg overflow-hidden transform hover:scale-105 transition-all duration-300 depth-shadow"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Découvrir l'Union
                  <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </Link>

              <Link 
                href="/activities"
                className="group glass-morphism border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 neon-border"
              >
                <span className="flex items-center gap-3">
                  Nos Activités
                  <svg className="w-5 h-5 transform group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
              </Link>
            </div>

            {/* Stats avec effet holographique */}
            <div 
              className="grid grid-cols-3 gap-6 pt-8"
              data-aos="fade-up"
              data-aos-delay="1400"
            >
              {[
                { number: '500+', label: 'Membres' },
                { number: '50+', label: 'Événements' },
                { number: '20+', label: 'Ans d\'Excellence' },
              ].map((stat, i) => (
                <div 
                  key={i}
                  className="glass-morphism p-4 rounded-xl text-center card-3d group cursor-pointer"
                >
                  <div className="text-3xl md:text-4xl font-bold text-accent-gold holographic">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-300 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Logo 3D avec effets avancés */}
          <div className="flex-1 flex justify-center lg:justify-end" style={parallaxStyle}>
            <div 
              className="relative"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              {/* Cercles décoratifs avec morphing */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-[500px] h-[500px] border-2 border-accent-gold/20 animate-morphing"></div>
                <div className="absolute w-[400px] h-[400px] border border-white/10 animate-morphing" style={{ animationDelay: '2s' }}></div>
                <div className="absolute w-[300px] h-[300px] border border-accent-gold/30 animate-morphing" style={{ animationDelay: '4s' }}></div>
              </div>

              {/* Logo avec effet 3D et glow */}
              <div className="relative z-10 card-3d group cursor-pointer">
                <div className="glass-morphism-dark p-12 rounded-full animate-glow-pulse">
                  <div className="relative w-64 h-64 animate-rotate3d">
                    <Image
                      src="/UCAG.png"
                      alt="UCAG Logo"
                      fill
                      className="object-contain drop-shadow-2xl"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Particules orbitales */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 bg-accent-gold rounded-full animate-magnetic"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${i * 45}deg) translateX(200px)`,
                    animationDelay: `${i * 0.5}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Indicateur de scroll avec animation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/60 text-sm tracking-widest">SCROLL</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-accent-gold rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
