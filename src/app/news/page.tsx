'use client';
import React from 'react';
import { PageHero } from '@/components/page-hero';

const News: React.FC = () => {
  const articles = [
    { title: "Conférence Annuelle 2024", date: "15 Oct 2024", excerpt: "Notre conférence annuelle a réuni des experts de divers domaines pour discuter de l'avenir de la coopération gréco-congolaise.", image: "https://picsum.photos/seed/news1/600/400" },
    { title: "Partenariat avec l'Université d'Athènes", date: "02 Sep 2024", excerpt: "Un nouveau partenariat visant à promouvoir les échanges académiques et culturels entre nos deux pays a été signé.", image: "https://picsum.photos/seed/news2/600/400" },
    { title: "Projet de Solidarité à Kinshasa", date: "21 Juil 2024", excerpt: "Lancement de notre initiative pour soutenir l'éducation dans les écoles locales, avec une collecte de fonds réussie.", image: "https://picsum.photos/seed/news3/600/400" },
    { title: "Gala de l'Union", date: "15 Jui 2024", excerpt: "Une soirée mémorable célébrant les réussites de nos membres et amis de l'union.", image: "https://picsum.photos/seed/news4/600/400" },
    { title: "Nouveau site web !", date: "01 Mai 2024", excerpt: "Nous sommes fiers de lancer notre nouvelle plateforme digitale pour mieux communiquer avec vous.", image: "https://picsum.photos/seed/news5/600/400" },
    { title: "Accueil de la nouvelle promotion", date: "20 Avr 2024", excerpt: "L'U.A.E.C.G. souhaite la bienvenue aux nouveaux étudiants congolais arrivés en Grèce.", image: "https://picsum.photos/seed/news6/600/400" },
  ];

  return (
    <div>
      <PageHero title="Toutes nos Actualités" subtitle="Restez informés des dernières nouvelles de l'Union." />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="grid md:grid-cols-2 gap-8">
              {articles.map((article, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl overflow-hidden group transition-shadow duration-300" data-aos="fade-up" data-aos-delay={100 * (index % 2)}>
                  <img src={article.image} alt={article.title} className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity" />
                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                    <h3 className="text-xl font-bold font-serif text-primary-blue mb-3">{article.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{article.excerpt}</p>
                    <a href="#" className="font-semibold text-secondary-olive hover:text-accent-gold transition-colors">Lire la suite &rarr;</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
            <div className="sticky top-24 space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg" data-aos="fade-left" data-aos-delay="200">
                <h3 className="font-bold font-serif text-xl text-primary-blue mb-4">Articles Récents</h3>
                <ul className="space-y-3">
                  {articles.slice(0, 3).map(article => (
                    <li key={article.title}><a href="#" className="text-gray-700 hover:text-primary-blue hover:underline">{article.title}</a></li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg" data-aos="fade-left" data-aos-delay="300">
                <h3 className="font-bold font-serif text-xl text-primary-blue mb-4">Catégories</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-700 hover:text-primary-blue">Communiqués</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-primary-blue">Événements</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-primary-blue">Partenariats</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-primary-blue">Vie de l'Union</a></li>
                </ul>
              </div>
            </div>
          </aside>
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

export default News;
