'use client';
import React from 'react';

export const PageHero: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <section className="bg-gray-50 pt-32 pb-16 md:pt-40 md:pb-24 text-center" data-aos="fade-in">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl md:text-5xl font-extrabold font-serif text-primary-blue">{title}</h1>
      <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
    </div>
  </section>
);
