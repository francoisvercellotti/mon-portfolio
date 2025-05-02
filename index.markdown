---
layout: page
title: ""
permalink: /
---

<html lang="fr">
<head>
  <meta charset="UTF-8">
  <style>
    body {
      background: linear-gradient(135deg, #cccccc, rgb(155, 231, 243));
      color: #333;
      margin: 0;
      font-family: 'Segoe UI', Arial, sans-serif;
    }

    /* Conteneur principal */
    .about-container {
      display: flex;
      align-items: flex-start;
      gap: 40px;
      margin: 20px auto;
      max-width: 1200px;
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
      margin-top: 45px;
      border-right: 2px solid rgba(18, 17, 17, 0.1);
    }
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
      list-style: none;
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
      margin-bottom: 20px;
      color: #2c5282;
    }
    .about-content p {
      margin-bottom: 15px;
      padding: 5px 0;
      transition: all 0.3s ease;
    }
    .about-content p:hover {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 5px;
      padding: 5px 10px;
      margin: 5px -10px;
    }

    /* Boutons de navigation */
    .nav-buttons {
      display: flex;
      gap: 20px;
      margin-top: 30px;
    }
    .nav-buttons a {
      text-decoration: none;
      background: #2c5282;
      color: #fff;
      padding: 10px 20px;
      border-radius: 8px;
      transition: background 0.2s ease;
    }
    .nav-buttons a:hover {
      background: #1a3a60;
    }
  </style>
</head>
<body>

<div class="about-container">

  <!-- Colonne de gauche -->
  <div class="sidebar">

    <div class="sidebar-section">
      <h3><strong>Formation</strong></h3>
      <ul>
        <li><strong>2024</strong> – Certificat Data Analyst (1 an)</li>
        <li><strong>2000–2001</strong> – Licence Science de la matière (Physique‑Chimie)</li>
        <li><strong>1998–2000</strong> – DEUG Science de la matière (Physique‑Chimie)</li>
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
    </div>

    <div class="sidebar-section">
      <h3><strong>Soft Skills</strong></h3>
      <ul>
        <li>Adaptabilité & autonomie</li>
        <li>Curiosité intellectuelle & résolution de problèmes</li>
        <li>Communication & apprentissage continu</li>
        <li>Esprit d’équipe & collaboration</li>
      </ul>
    </div>

  </div>

  <!-- Contenu principal -->
  <div class="about-content">
    <h1>Bienvenue sur mon portfolio</h1>

    <p>Je suis <strong>Data Analyst orienté résultats</strong>, spécialisé dans la conception de pipelines ELT, la modélisation de données et la production de dashboards interactifs. Mon objectif ? Transformer vos volumes de données en leviers stratégiques tangibles pour votre entreprise.</p>

    <p>Explorez mes réalisations pour découvrir comment j’ai mis en œuvre :</p>
    <ul>
      <li>Pipelines ELT/ETL robustes (GCP, Python, Docker)</li>
      <li>Modèles de base de données performants (PostgreSQL, SQLAlchemy)</li>
      <li>Dashboards BI actionnables (Power BI, Streamlit, Shiny)</li>
      <li>Solutions ML en production (MLOps, explicabilité)</li>
    </ul>

    <p>Je suis actuellement à la recherche d’un <strong>poste en CDI</strong> au sein d’une équipe dynamique où je pourrai apporter mon expertise et contribuer à des projets data ambitieux.</p>

    <div class="nav-buttons">
      <a href="/projects/">Voir mes projets</a>
      <a href="/about/">En savoir plus sur moi</a>
    </div>
  </div>

</div>

</body>
</html>
