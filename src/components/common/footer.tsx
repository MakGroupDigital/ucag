'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  LocationIcon, 
  EmailIcon, 
  PhoneIcon, 
  FacebookIcon, 
  TwitterIcon, 
  InstagramIcon,
  LinkedInIcon
} from '@/components/icons/custom-icons';

const UcagLogo: React.FC<{ className?: string }> = ({ className }) => (
    <div className={`flex items-center space-x-2 ${className}`}>
       <Image src="/UCAG.png" alt="UCAG Logo" width={50} height={50} className="rounded-full" />
      <span className="font-bold text-xl font-serif">U.C.A.G</span>
    </div>
  );

export function Footer() {
  const navLinks = [
      { href: '/', label: 'Accueil' },
      { href: '/about', label: 'À Propos' },
      { href: '/activities', label: 'Activités' },
      { href: '/news', label: 'Actualités' },
      { href: '/publications', label: 'Publications' },
      { href: '/gallery', label: 'Galerie' },
      { href: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-primary-blue via-[#002d6e] to-[#001f4d] text-white overflow-hidden">
      {/* Motifs décoratifs */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 border border-white rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 border border-accent-gold rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <Link href="/" className="inline-block transform hover:scale-105 transition-transform duration-300">
              <UcagLogo />
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed">
              Le pont culturel et académique entre la République Démocratique du Congo et la Grèce.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="group w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-accent-gold transition-all duration-300 transform hover:scale-110">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="group w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-accent-gold transition-all duration-300 transform hover:scale-110">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="group w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-accent-gold transition-all duration-300 transform hover:scale-110">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="group w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-accent-gold transition-all duration-300 transform hover:scale-110">
                <LinkedInIcon size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold font-serif text-white tracking-wider mb-6 relative inline-block">
              Liens Rapides
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-accent-gold"></span>
            </h3>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-accent-gold hover:translate-x-2 inline-block transition-all duration-300 group">
                    <span className="inline-block mr-2 text-accent-gold opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold font-serif text-white tracking-wider mb-6 relative inline-block">
              Contact
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-accent-gold"></span>
            </h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start group hover:text-accent-gold transition-colors duration-300">
                <LocationIcon size={20} className="mr-3 mt-0.5 flex-shrink-0" />
                <span>Avenue Dodoma n.193, Kinshasa</span>
              </li>
              <li className="flex items-center group hover:text-accent-gold transition-colors duration-300">
                <EmailIcon size={20} className="mr-3 flex-shrink-0" />
                <a href="mailto:contact@ucag.org" className="hover:underline">contact@ucag.org</a>
              </li>
              <li className="flex items-center group hover:text-accent-gold transition-colors duration-300">
                <PhoneIcon size={20} className="mr-3 flex-shrink-0" />
                <a href="tel:+301234567890" className="hover:underline">+30 123 456 7890</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold font-serif text-white tracking-wider mb-6 relative inline-block">
              Newsletter
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-accent-gold"></span>
            </h3>
            <p className="text-sm text-gray-300 mb-4">Restez informé de nos actualités</p>
            <div className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-gold transition-colors duration-300"
              />
              <button className="btn-institutional bg-accent-gold text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
                S'abonner
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} U.C.A.G. Tous droits réservés.</p>
            <p>
              Développé avec passion par <a href="https://padec.net" target="_blank" rel="noopener noreferrer" className="text-accent-gold hover:underline">Padec</a> | 
              <a href="https://charmantnyungu.com" target="_blank" rel="noopener noreferrer" className="text-accent-gold hover:underline ml-1">
                M.Charmant Nyungu K.
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
