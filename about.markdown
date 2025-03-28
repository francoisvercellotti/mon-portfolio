---
layout: page
title: ""
permalink: /about/
---

<html>
<head>
<style>
body {
  background: linear-gradient(135deg, #cccccc,rgb(155, 231, 243));
  color: #333;
  margin: 0;
  font-family: 'Segoe UI', Arial, sans-serif;
}

/* Conteneur principal */
.about-container {
  display: flex;
  align-items: flex-start;
  gap: 40px;
  margin: 20px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Colonne de gauche */
.sidebar {
  flex: 1;
  max-width: 30%;
  padding-right: 30px;
  margin-right: 20px;
  border-right: 2px solid rgba(18, 17, 17, 0.1);
  margin-top: 45px;
}

/* Sections de la colonne de gauche */
.sidebar-section {
  margin-bottom: 30px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  transition: transform 0.2s ease;
}

.sidebar-section:hover {
  transform: translateX(5px);
}

.sidebar-section h3 {
  font-size: 1.3em;
  margin-bottom: 15px;
  color: #1a1a1a;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 5px;
}

.sidebar-section ul {
  list-style-type: none;
  padding-left: 0;
}

.sidebar-section ul li {
  margin: 10px 0;
  font-size: 1.1em;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.2s ease;
}

.sidebar-section ul li:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

/* Style spécifique pour les dates dans Formation */
.sidebar-section ul li strong {
  color: #2c5282;
}

/* Contenu principal */
.about-content {
  flex: 2;
  max-width: 65%;
  line-height: 1.6;
  text-align: justify;
}

.about-content h1 {
  font-size: 2em;
  margin: 0 0 20px 0;
  color: #2c5282;
}

.about-content p {
  margin-bottom: 15px;
  padding: 5px 0;
}

/* Ajout d'une légère animation au survol des paragraphes */
.about-content p:hover {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 5px 10px;
  margin: 5px -10px;
  transition: all 0.3s ease;
}
</style>
</head>
<body>
<!-- Le reste du HTML reste identique -->
<div class="about-container">
  <!-- Colonne de gauche -->
  <div class="sidebar">
    <div class="sidebar-section">
      <h3><strong>Formation</strong></h3>
      <ul>
        <li><strong>2024</strong> - Formation certifiante Data Analyst (1 an)</li>
        <li><strong>2000-2001</strong> - Licence Science de la matière (Physique Chimie)</li>
        <li><strong>1998-2000</strong> - DEUG Science de la matière (Physique Chimie)</li>
      </ul>
    </div>

    <div class="sidebar-section">
      <h3><strong>Expertise technique</strong></h3>
      <ul>
        <li>Python, Numpy, Pandas, SQL</li>
        <li>ScikitLearn, Git/GitHub, MLflow</li>
        <li>Docker, PowerBI, Streamlit</li>
      </ul>
    </div>

    <div class="sidebar-section">
      <h3><strong>Soft Skills</strong></h3>
      <ul>
        <li>Adaptabilité, Autonomie</li>
        <li>Curiosité Intellectuelle, Résolution de Problèmes</li>
        <li>Communication, Capacité d'Apprentissage</li>
        <li>Collaboration en Équipe</li>
      </ul>
    </div>
  </div>

  <!-- Contenu principal -->
  <div class="about-content">
    <h1>Bonjour,</h1>

    <p>Data Analyst aguerri, je mets à profit un parcours atypique et riche pour transformer les données en leviers de performance stratégique.</p>

    <p> Fort d'une solide formation scientifique et d'expériences en management dans l’armée et les travaux publics, j'ai su réorienter ma carrière vers la data en menant avec succès des projets ambitieux.</p>

    <p>J’ai développé et déployé des solutions de Business Intelligence et de Data Engineering qui transforment des données brutes en insights pertinents, allant de l’optimisation de bases de données à la création de dashboards innovants pour l’analyse e-commerce et l’accès à l’eau potable. J’ai également conçu une application de prédiction immobilière intégrant une infrastructure MLOps, garantissant ainsi la reproductibilité et le déploiement industriel de modèles de machine learning.</p>

    <p>Ma maîtrise des outils (Python, SQL, Power BI, Git/GitHub, Docker) et ma capacité à gérer des projets complexes viennent compléter une expertise technique solide, enrichie par mon esprit d’initiative et mes compétences en communication. </p>

    <p> Aujourd'hui, je suis prêt à relever de nouveaux défis et à contribuer à des projets data ambitieux en apportant rigueur, vision stratégique et leadership.</p>

    <p>N’hésitez pas à me contacter pour échanger sur vos projets ou envisager une collaboration. Je vous invite également à explorer mon portfolio pour découvrir en détail mes réalisations et la diversité de mes compétences.</p>
  </div>
</div>
</body>
</html>
