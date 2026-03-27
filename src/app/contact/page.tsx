'use client';
import React, { useState } from 'react';
import { PageHero } from '@/components/page-hero';

const Contact: React.FC = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
        }, 2000);
    }

  return (
    <div>
      <PageHero title="Nous Contacter" subtitle="Nous sommes à votre écoute." />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div data-aos="fade-right">
            <h2 className="text-2xl font-bold font-serif text-primary-blue mb-6">Envoyez-nous un message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">Prénom</label>
                  <input type="text" id="firstname" name="firstname" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue"/>
                </div>
                <div>
                  <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">Nom</label>
                  <input type="text" id="lastname" name="lastname" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue"/>
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue"/>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Objet</label>
                <input type="text" id="subject" name="subject" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue"/>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows={5} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue"></textarea>
              </div>
              <div>
                <button type="submit" disabled={status === 'sending'} className="w-full bg-primary-blue text-white py-3 px-6 rounded-md font-semibold hover:bg-opacity-90 transition-colors disabled:bg-gray-400">
                  {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le Message'}
                </button>
              </div>
              {status === 'success' && <p className="text-green-600">Votre message a été envoyé avec succès !</p>}
            </form>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg" data-aos="fade-left" data-aos-delay="200">
            <h2 className="text-2xl font-bold font-serif text-primary-blue mb-6">Informations Directes</h2>
            <div className="space-y-6">
                <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-blue text-white rounded-full flex items-center justify-center"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></div>
                    <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-800">Adresse</h3>
                        <p className="text-gray-600">avenue Dodoma n.193, kinshasa</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-blue text-white rounded-full flex items-center justify-center"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div>
                    <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                        <a href="mailto:contact@uaecg.org" className="text-gray-600 hover:text-primary-blue">contact@uaecg.org</a>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-blue text-white rounded-full flex items-center justify-center"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></div>
                    <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-800">Téléphone</h3>
                        <a href="tel:+301234567890" className="text-gray-600 hover:text-primary-blue">+30 123 456 7890</a>
                    </div>
                </div>
                 <div className="mt-8 rounded-lg overflow-hidden h-64 bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">Google Map Placeholder</p>
                 </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
