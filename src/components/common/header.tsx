'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { MenuIcon, CloseIcon } from '@/components/icons/custom-icons';

const UcagLogo: React.FC<{ className?: string; isTransparent: boolean }> = ({ className, isTransparent }) => (
  <div className={`flex items-center space-x-2 ${className}`}>
    <Image src="/UCAG.png" alt="UCAG Logo" width={50} height={50} className="rounded-full" />
    <span className={`font-bold text-xl font-serif transition-colors ${isTransparent ? 'text-white' : 'text-primary-blue'}`}>U.C.A.G</span>
  </div>
);

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
      { href: '/', label: 'Accueil' },
      { href: '/about', label: 'À Propos' },
      { href: '/activities', label: 'Activités' },
      { href: '/news', label: 'Actualités' },
      { href: '/publications', label: 'Publications' },
      { href: '/gallery', label: 'Galerie' },
      { href: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
      setIsMenuOpen(false);
  }, [pathname]);

  const isTransparent = !isScrolled && pathname === '/';

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${isTransparent ? 'bg-transparent' : 'bg-white/95 backdrop-blur-md shadow-lg'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" aria-label="Go to homepage" className="transform hover:scale-105 transition-transform duration-300">
            <UcagLogo isTransparent={isTransparent} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  isTransparent
                    ? `text-white hover:bg-white/10 ${pathname === link.href ? 'bg-white/20 font-semibold' : ''}`
                    : `${pathname === link.href ? 'text-primary-blue bg-blue-50 font-semibold' : 'text-gray-700 hover:text-primary-blue hover:bg-gray-50'}`
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-accent-gold transition-all duration-300 group-hover:w-3/4 ${pathname === link.href ? 'w-3/4' : ''}`}></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className={`focus:outline-none transition-all duration-300 p-2 rounded-lg ${isTransparent ? 'text-white hover:bg-white/10' : 'text-primary-blue hover:bg-gray-100'}`} 
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <CloseIcon size={24} />
              ) : (
                <MenuIcon size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white/98 backdrop-blur-md shadow-2xl border-t border-gray-100">
            <nav className="flex flex-col items-center space-y-1 py-6 px-4">
                {navLinks.map(link => (
                <Link
                    key={link.href}
                    href={link.href}
                    className={`w-full text-center px-6 py-3 text-lg font-medium transition-all duration-300 rounded-xl ${
                    pathname === link.href
                        ? 'text-white bg-primary-blue font-semibold shadow-lg'
                        : 'text-gray-700 hover:text-primary-blue hover:bg-gray-50'
                    }`}
                >
                    {link.label}
                </Link>
                ))}
            </nav>
        </div>
      </div>
    </header>
  );
}
