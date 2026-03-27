import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        {/* En-tête */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold font-serif text-primary-blue mb-6">
            Politique de Confidentialité
          </h1>
          <p className="text-xl text-gray-600">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Contenu */}
        <div className="prose prose-lg max-w-none">
          
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold font-serif text-primary-blue mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              L'Union des Congolais Anciens de Grèce (U.C.A.G) s'engage à protéger la confidentialité 
              de vos données personnelles. Cette politique de confidentialité explique comment nous 
              collectons, utilisons et protégeons vos informations lorsque vous visitez notre site web.
            </p>
          </section>

          {/* Collecte des données */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold font-serif text-primary-blue mb-4">Données Collectées</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nous collectons les types de données suivants :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Données de navigation :</strong> Adresse IP, type de navigateur, pages visitées</li>
              <li><strong>Cookies :</strong> Informations stockées sur votre appareil pour améliorer votre expérience</li>
              <li><strong>Données de contact :</strong> Nom, email, téléphone (si vous nous contactez)</li>
              <li><strong>Données d'adhésion :</strong> Informations fournies lors de l'inscription</li>
            </ul>
          </section>

          {/* Utilisation des données */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold font-serif text-primary-blue mb-4">Utilisation des Données</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nous utilisons vos données pour :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Améliorer votre expérience sur notre site</li>
              <li>Vous envoyer des informations sur nos activités et événements</li>
              <li>Répondre à vos demandes et questions</li>
              <li>Analyser l'utilisation de notre site pour l'améliorer</li>
              <li>Respecter nos obligations légales</li>
            </ul>
          </section>

          {/* Cookies */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold font-serif text-primary-blue mb-4">Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Notre site utilise des cookies pour :
            </p>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-primary-blue mb-2">Cookies Nécessaires</h3>
                <p className="text-gray-700">
                  Essentiels au fonctionnement du site. Ils ne peuvent pas être désactivés.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-primary-blue mb-2">Cookies Analytiques</h3>
                <p className="text-gray-700">
                  Nous aident à comprendre comment vous utilisez notre site pour l'améliorer.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-primary-blue mb-2">Cookies Marketing</h3>
                <p className="text-gray-700">
                  Utilisés pour personnaliser le contenu et les communications.
                </p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mt-4">
              Vous pouvez gérer vos préférences de cookies à tout moment. La bannière de consentement 
              apparaît tous les 3 jours pour vous permettre de revoir vos choix.
            </p>
          </section>

          {/* Partage des données */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold font-serif text-primary-blue mb-4">Partage des Données</h2>
            <p className="text-gray-700 leading-relaxed">
              Nous ne vendons jamais vos données personnelles. Nous pouvons partager vos informations 
              uniquement avec :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
              <li>Nos prestataires de services (hébergement, analytics)</li>
              <li>Les autorités légales si requis par la loi</li>
              <li>Nos partenaires institutionnels avec votre consentement</li>
            </ul>
          </section>

          {/* Sécurité */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold font-serif text-primary-blue mb-4">Sécurité</h2>
            <p className="text-gray-700 leading-relaxed">
              Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées 
              pour protéger vos données contre tout accès non autorisé, modification, divulgation ou 
              destruction.
            </p>
          </section>

          {/* Vos droits */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold font-serif text-primary-blue mb-4">Vos Droits</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Droit d'accès :</strong> Obtenir une copie de vos données</li>
              <li><strong>Droit de rectification :</strong> Corriger vos données inexactes</li>
              <li><strong>Droit à l'effacement :</strong> Demander la suppression de vos données</li>
              <li><strong>Droit d'opposition :</strong> Vous opposer au traitement de vos données</li>
              <li><strong>Droit à la portabilité :</strong> Recevoir vos données dans un format structuré</li>
            </ul>
          </section>

          {/* Conservation */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold font-serif text-primary-blue mb-4">Conservation des Données</h2>
            <p className="text-gray-700 leading-relaxed">
              Nous conservons vos données personnelles uniquement pendant la durée nécessaire aux 
              finalités pour lesquelles elles ont été collectées, ou conformément aux obligations légales.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold font-serif text-primary-blue mb-4">Nous Contacter</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, 
              vous pouvez nous contacter :
            </p>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="text-gray-700"><strong>Email :</strong> contact@ucag.org</p>
              <p className="text-gray-700"><strong>Adresse :</strong> Avenue Dodoma n.193, Kinshasa</p>
              <p className="text-gray-700"><strong>Téléphone :</strong> +30 123 456 7890</p>
            </div>
          </section>

          {/* Modifications */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold font-serif text-primary-blue mb-4">Modifications</h2>
            <p className="text-gray-700 leading-relaxed">
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
              Les modifications seront publiées sur cette page avec une nouvelle date de mise à jour.
            </p>
          </section>

        </div>

        {/* Bouton retour */}
        <div className="text-center mt-16">
          <a 
            href="/"
            className="inline-block bg-primary-blue text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  );
}
