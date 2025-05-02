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
        <li><strong>Programmation & traitement des données :</strong> Python, NumPy, Pandas, SQL</li>
        <li><strong>Machine Learning & MLOps :</strong> Scikit‑Learn, MLflow</li>
        <li><strong>Data Engineering :</strong> GCP (BigQuery, Dataflow), Docker</li>
        <li><strong>Visualisation & BI :</strong> Power BI, Streamlit, Shiny</li>
        <li><strong>Versioning & DevOps :</strong> Git/GitHub, CI/CD</li>
      </ul>
    <div class="sidebar-section">
    
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

    <p><strong>Data Analyst orienté résultats</strong>, j’allie une solide formation scientifique à une forte expertise technique pour accompagner la transformation data‑driven de votre entreprise. Toujours curieux et pragmatique, je mets mon savoir‑faire au service de vos enjeux métiers.</p>

  <p><strong>Ce que j’apporte :</strong></p>
  <p>Conception & automatisation de pipelines ELT/ETL (GCP, Python, Docker) pour intégrer, nettoyer et historiser vos données à grande échelle.</p>
  <p>Modélisation & optimisation de bases de données (PostgreSQL, SQLAlchemy) garantissant fiabilité, scalabilité et performance.</p>
  <p>Visualisation & reporting interactif (Power BI, Streamlit, Shiny) pour créer des tableaux de bord clairs et actionnables.</p>
  <p>Déploiement de solutions ML en production (MLOps) : de la préparation des données à l’explicabilité des modèles, en passant par l’intégration continue.</p>
  <p>Collaboration agile avec les équipes métier pour définir les KPIs, cadrer les besoins et assurer une montée en compétence collective.</p>

  <p><strong>Pourquoi travailler ensemble ?</strong></p>
  <p>Je transforme vos problématiques business en cas d’usage concrets, valorise chaque donnée pour révéler de nouvelles opportunités, optimiser vos process et soutenir vos décisions stratégiques. Rigoureux, force de proposition et à l’écoute, je suis prêt à relever vos défis data, de la preuve de concept au déploiement opérationnel.</p>

  <p>▶︎ Parlons de vos besoins : contactez‑moi pour co‑construire la solution data qui fera la différence.</p>
</div>
  </div>
</div>
</body>
</html>
