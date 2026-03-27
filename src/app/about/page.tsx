'use client';
import React from 'react';
import { PageHero } from '@/components/page-hero';

const About: React.FC = () => {
    const timelineEvents = [
        { year: "2015", title: "Fondation", description: "Un groupe d'étudiants passionnés jette les bases de l'union." },
        { year: "2017", title: "Premier Événement Culturel", description: "Organisation de la première semaine culturelle congolaise à Athènes." },
        { year: "2020", title: "Lancement du Programme de Mentorat", description: "Création d'un programme pour aider les nouveaux étudiants." },
        { year: "2023", title: "Reconnaissance Officielle", description: "L'U.A.E.C.G. est officiellement reconnue par les autorités consulaires." },
    ];
    const teamMembers = [
        { name: "Jean-Pierre Lumbala", role: "Président", image: "https://picsum.photos/seed/team1/400/400" },
        { name: "Marie-Claire Ntumba", role: "Vice-Présidente", image: "https://picsum.photos/seed/team2/400/400" },
        { name: "Alain Tshisekedi", role: "Secrétaire Général", image: "https://picsum.photos/seed/team3/400/400" },
        { name: "Fatou Diop", role: "Trésorière", image: "https://picsum.photos/seed/team4/400/400" },
    ];

  return (
    <div className="space-y-16 md:space-y-24 pb-24">
      <PageHero title="Qui Sommes-Nous ?" subtitle="Notre Histoire, Nos Valeurs, Nos Objectifs." />

      {/* History Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary-blue">Notre Histoire</h2>
        </div>
        <div className="relative wrap overflow-hidden p-10 h-full">
            <div className="absolute border-2-2 border-secondary-olive h-full border" style={{left: "50%"}} data-aos="fade-up" data-aos-delay="200"></div>
            {timelineEvents.map((event, index) => (
                <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse left-timeline' : 'right-timeline'}`}>
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-primary-blue shadow-xl w-12 h-12 rounded-full" data-aos="zoom-in" data-aos-delay="400">
                        <h1 className="mx-auto font-semibold text-lg text-white">{event.year}</h1>
                    </div>
                    <div className="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4" data-aos={index % 2 === 0 ? "fade-left" : "fade-right"} data-aos-delay="400">
                        <h3 className="mb-3 font-bold text-primary-blue text-xl">{event.title}</h3>
                        <p className="text-sm leading-snug tracking-wide text-gray-600">{event.description}</p>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-20" data-aos="fade-up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary-blue">Nos Valeurs Fondamentales</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[{ title: "Entraide", text: "La solidarité est au cœur de toutes nos actions." }, { title: "Excellence", text: "Nous visons l'excellence dans tous nos projets." }, { title: "Partage", text: "Le partage des connaissances et des cultures nous enrichit." }, { title: "Rayonnement", text: "Nous sommes les ambassadeurs de nos deux nations." }].map((value, index) => (
                    <div key={value.title} className="text-center p-6" data-aos="fade-up" data-aos-delay={100 * index}>
                        <div className="inline-block p-4 border-2 border-accent-gold text-accent-gold rounded-full mb-4">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-12v4m-2-2h4m5 4v4m-2-2h4M17 3l4 4M3 17l4 4m10.5-3.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold font-serif text-primary-blue mb-2">{value.title}</h3>
                        <p className="text-gray-600">{value.text}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary-blue">Notre Bureau</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">L'équipe dévouée qui pilote les initiatives de l'union.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
                <div key={member.name} className="text-center" data-aos="zoom-in" data-aos-delay={100 * index}>
                    <div className="relative w-48 h-48 mx-auto mb-4">
                        <img src={member.image} alt={member.name} className="rounded-full w-full h-full object-cover shadow-lg"/>
                    </div>
                    <h3 className="text-xl font-bold font-serif text-primary-blue">{member.name}</h3>
                    <p className="text-secondary-olive font-medium">{member.role}</p>
                </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default About;
