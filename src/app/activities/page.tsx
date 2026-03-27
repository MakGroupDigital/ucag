'use client';
import React, { useState } from 'react';
import { PageHero } from '@/components/page-hero';

const Activities: React.FC = () => {
  const categories = ["Tout", "Événements Culturels", "Conférences", "Projets Sociaux", "Partenariats"];
  const [activeCategory, setActiveCategory] = useState("Tout");

  const allActivities = [
    { category: "Événements Culturels", title: "Festival du Cinéma Congolais", date: "12-15 Nov 2024", location: "Athènes", image: "https://picsum.photos/seed/act1/600/400" },
    { category: "Conférences", title: "L'Avenir de la Tech en RDC", date: "20 Oct 2024", location: "En ligne", image: "https://picsum.photos/seed/act2/600/400" },
    { category: "Projets Sociaux", title: "Collecte de fonds pour les écoles", date: "05 Sep 2024", location: "Thessalonique", image: "https://picsum.photos/seed/act3/600/400" },
    { category: "Partenariats", title: "Signature accord avec l'Université de Crète", date: "18 Aou 2024", location: "Crète", image: "https://picsum.photos/seed/act4/600/400" },
    { category: "Événements Culturels", title: "Soirée de Gastronomie Congolaise", date: "10 Juil 2024", location: "Athènes", image: "https://picsum.photos/seed/act5/600/400" },
    { category: "Conférences", title: "Webinaire sur l'entrepreneuriat", date: "25 Jui 2024", location: "En ligne", image: "https://picsum.photos/seed/act6/600/400" },
  ];

  const filteredActivities = activeCategory === "Tout" ? allActivities : allActivities.filter(act => act.category === activeCategory);

  return (
    <div>
      <PageHero title="Nos Actions et Initiatives" subtitle="Découvrez l'étendue de notre engagement." />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-center flex-wrap gap-2 mb-12" data-aos="fade-up">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${activeCategory === cat ? 'bg-primary-blue text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredActivities.map((activity, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={100 * (index % 3)} className="bg-white rounded-lg shadow-lg hover:shadow-xl overflow-hidden group transform hover:-translate-y-2 transition-all duration-300">
              <img src={activity.image} alt={activity.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <span className="text-sm font-semibold text-secondary-olive">{activity.category}</span>
                <h3 className="text-xl font-bold font-serif text-primary-blue my-2">{activity.title}</h3>
                <div className="text-gray-500 text-sm space-y-1">
                  <p><span className="font-semibold">Date:</span> {activity.date}</p>
                  <p><span className="font-semibold">Lieu:</span> {activity.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16" data-aos="fade-up">
          <nav className="flex rounded-md shadow-sm">
            <a href="#" className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50">Précédent</a>
            <a href="#" className="px-4 py-2 text-sm font-medium text-white bg-primary-blue border-t border-b border-primary-blue z-10">1</a>
            <a href="#" className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border-t border-b border-gray-300 hover:bg-gray-50">2</a>
            <a href="#" className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50">Suivant</a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Activities;
