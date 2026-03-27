'use client';
import React from 'react';
import { PageHero } from '@/components/page-hero';

const Publications: React.FC = () => {
    const publications = [
        { title: "Rapport d'Activité Annuel 2023", author: "Bureau de l'U.A.E.C.G.", date: "Jan 2024", summary: "Un résumé complet de nos actions, événements et finances pour l'année 2023." },
        { title: "Étude sur l'intégration des étudiants congolais en Grèce", author: "Comité Académique", date: "Sep 2023", summary: "Analyse des défis et opportunités pour les étudiants congolais dans le système universitaire grec." },
        { title: "Newsletter Trimestrielle - Été 2023", author: "Comité de Communication", date: "Jul 2023", summary: "Les dernières nouvelles, interviews et événements de l'union pour le troisième trimestre." },
        { title: "Livre Blanc sur la Coopération Culturelle", author: "U.A.E.C.G.", date: "Mar 2023", summary: "Propositions et pistes de réflexion pour renforcer les liens culturels entre la RDC et la Grèce." },
    ];

  return (
    <div>
      <PageHero title="Nos Publications" subtitle="Accédez à nos rapports, études et documents officiels." />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8 max-w-4xl mx-auto">
          {publications.map((pub, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={100 * index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col sm:flex-row items-start gap-6">
              <div className="flex-grow">
                <h3 className="text-2xl font-bold font-serif text-primary-blue mb-2">{pub.title}</h3>
                <div className="text-sm text-gray-500 mb-3">
                  <span>Par {pub.author}</span> | <span>Publié en {pub.date}</span>
                </div>
                <p className="text-gray-700">{pub.summary}</p>
              </div>
              <div className="flex-shrink-0 mt-4 sm:mt-0">
                <a href="#" className="inline-flex items-center bg-secondary-olive text-white px-5 py-2.5 rounded-md font-semibold hover:bg-opacity-90 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  Télécharger (PDF)
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;
