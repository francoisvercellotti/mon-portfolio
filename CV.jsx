import React from 'react';
// Si tu utilises des icônes, par exemple Heroicons ou FontAwesome, importe-les ici
// import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const CV = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8">
      {/* En-tête */}
      <header className="border-b pb-4 mb-6">
        {/* Nom et Titre */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-800">François VERCELLOTTI</h1>
          <h2 className="text-2xl text-red-700 mt-1">DATA ANALYST</h2>
        </div>

        {/* Bloc contacts */}
        <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            {/* <FaPhone className="text-red-600" /> */}
            <span className="font-semibold">Téléphone :</span>
            <span>06 84 97 24 73</span>
          </div>
          <div className="flex items-center gap-1">
            {/* <FaEnvelope className="text-red-600" /> */}
            <span className="font-semibold">Email :</span>
            <a
              href="mailto:francoisvercellotti@gmail.com"
              className="text-blue-600 hover:underline"
            >
              francoisvercellotti@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-1">
            {/* <FaGithub className="text-red-600" /> */}
            <span className="font-semibold">Portfolio :</span>
            <a
              href="https://francoisvercellotti.github.io/mon-portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub Pages
            </a>
          </div>
          <div className="flex items-center gap-1">
            {/* <FaLinkedin className="text-red-600" /> */}
            <span className="font-semibold">LinkedIn :</span>
            <a
              href="https://www.linkedin.com/in/François-Vercellotti"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              @François Vercellotti
            </a>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-semibold">Adresse :</span>
            <span>83470 ST MAXIMIN LA STE BAUME</span>
          </div>
        </div>
      </header>

      {/* Résumé / Présentation */}
      <section className="bg-gray-50 p-4 rounded-lg mb-6 text-gray-700 leading-relaxed">
        <p>
          Analyste de données certifié alliant formation scientifique et expérience en gestion de
          projets. Mon profil combine rigueur analytique, autonomie et capacité d'apprentissage.
        </p>
        <p className="mt-2">
          Je me distingue par mon aptitude à comprendre les enjeux métiers et à communiquer
          efficacement, pour transformer les besoins business en solutions data pertinentes.
        </p>
      </section>

      {/* Contenu principal : 2 colonnes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Colonne gauche */}
        <div className="space-y-8">
          {/* Formation */}
          <section>
            <h3 className="text-xl font-bold text-red-700 mb-3 border-b border-red-200 pb-2">
              Formation
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800">
                  Data Analyst - Formation Certifiante
                </h4>
                <p className="text-gray-600">OpenClassrooms (2024-2025)</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Licence Science de la Matière</h4>
                <p className="text-gray-600">Physique-Chimie (2000-2001)</p>
              </div>
            </div>
          </section>

          {/* Compétences techniques */}
          <section>
            <h3 className="text-xl font-bold text-red-700 mb-3 border-b border-red-200 pb-2">
              Compétences Techniques
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <h4 className="font-semibold text-gray-800">Data Analysis & Manipulation</h4>
                <p>Python (Pandas, NumPy), SQL, ETL, Data Cleaning</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Data Visualization & BI</h4>
                <p>Power BI, Streamlit</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Machine Learning</h4>
                <p>Scikit-learn, MLflow, Régression, Classification, Clustering</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Outils & Environnement</h4>
                <p>Git/GitHub, Docker, VS Code</p>
              </div>
            </div>
          </section>

          {/* Langues & Soft Skills */}
          <section>
            <h3 className="text-xl font-bold text-red-700 mb-3 border-b border-red-200 pb-2">
              Langues & Soft Skills
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold text-gray-800">Langues</h4>
                <p>Français : Natif</p>
                <p>Anglais : Opérationnel</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Soft Skills</h4>
                <ul className="list-disc pl-4">
                  <li>Gestion de projet agile</li>
                  <li>Communication</li>
                  <li>Travail en équipe</li>
                  <li>Résolution de problèmes</li>
                  <li>Apprentissage autonome</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Colonne droite */}
        <div className="space-y-8">
          {/* Projets Data */}
          <section>
            <h3 className="text-xl font-bold text-red-700 mb-3 border-b border-red-200 pb-2">
              Projets Data Significatifs
            </h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold text-gray-800">Application de Prédiction Immobilière</p>
                <p className="text-gray-600">Python, Scikit-learn, Streamlit</p>
                <p>
                  Développement d'une application ML end-to-end d'estimation immobilière avec
                  interface interactive et explicabilité des prédictions
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Dashboard Accès à l'Eau Potable</p>
                <p className="text-gray-600">Power BI, Python</p>
                <p>
                  Conception d'un tableau de bord interactif analysant l'accès mondial à l'eau
                  potable pour prioriser les interventions d'une ONG
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Analyse E-commerce</p>
                <p className="text-gray-600">Python, Pandas</p>
                <p>
                  Analyse des ventes d'une librairie en ligne avec recommandations stratégiques
                  basées sur les tendances d'achat
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Analyse de Marché International</p>
                <p className="text-gray-600">Python, Scikit-learn</p>
                <p>
                  Segmentation de marchés internationaux par clustering pour identifier les
                  opportunités d'expansion d'une entreprise agroalimentaire
                </p>
              </div>
            </div>
          </section>

          {/* Expérience Professionnelle */}
          <section>
            <h3 className="text-xl font-bold text-red-700 mb-3 border-b border-red-200 pb-2">
              Expérience Professionnelle
            </h3>
            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-semibold text-gray-800">
                  Responsable de Chantiers - Travaux Publics
                </h4>
                <p className="text-gray-600">2008-2023</p>
                <ul className="list-disc pl-4 mt-2">
                  <li>Gestion de projets d'infrastructure (budgets, plannings, équipes)</li>
                  <li>Analyse et reporting des indicateurs de performance chantier</li>
                  <li>Management d'équipes jusqu'à 10 collaborateurs</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Cadre - Armée de Terre</h4>
                <p className="text-gray-600">2002-2007</p>
                <ul className="list-disc pl-4 mt-2">
                  <li>Gestion d'équipes en environnement exigeant</li>
                  <li>Résolution de problèmes sous contrainte</li>
                  <li>Coordination d'opérations complexes</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CV;
