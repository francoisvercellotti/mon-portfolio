---
layout: page
title: ""
permalink: /
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

    <p>Data Analyst passionné, j'ai fait de la richesse de mon parcours ma plus grande force.</p>

    <p>Après des études scientifiques et des postes de cadre dans l'armée et les travaux publics, j'ai découvert par hasard le monde de la data. Un univers complexe, en constante évolution, qui m'a captivé au point de me pousser hors de ma zone de confort pour relever un des défis les plus stimulants : repartir de zéro et tout apprendre.</p>

    <p>Au début de ma formation, l'informatique m'était totalement inconnue. Mais avec une curiosité sans limite et ma soif d'apprendre, j'ai rapidement pris de l'avance sur mon planning. Ce temps gagné, je l'ai mis à profit pour approfondir mes connaissances de manière autonome, explorant des projets de machine learning qui m'ont permis de maîtriser les outils, d'adopter les bonnes pratiques, en allant de l'exploration des données jusqu'à la mise en production de modèles.</p>

    <p>Aujourd'hui, ce désir d'apprendre et de relever de nouveaux défis continue de me motiver. Je suis désormais prêt à me lancer dans des projets concrets au sein d'une entreprise, pour mettre en pratique non seulement mes compétences techniques, mais aussi les qualités humaines que j'ai développées tout au long de mon parcours : travail en équipe, communication, pédagogie, et gestion du stress. Des atouts essentiels pour évoluer avec rigueur et efficacité dans un environnement dynamique.</p>

    <p>Mon objectif est clair : mettre ma curiosité insatiable et mes compétences au service de projets ambitieux en data science et data analysis, et continuer à progresser pour repousser encore mes propres limites.</p>
  </div>
</div>
</body>
</html>