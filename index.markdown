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
  </style>
</head>
<body>

<div class="about-container">

  <!-- Colonne de gauche -->
  <div class="sidebar">
    <div class="sidebar-section">
      <h3><strong>Navigation</strong></h3>
      <ul>
        <li><a href="/apropos.html"><strong>À propos</strong></a></li>
        <li><a href="/projets.html"><strong>Mes projets</strong></a></li>
        <li><a href="mailto:francoisvercellotti@gmail.com"><strong>Me contacter</strong></a></li>
      </ul>
    </div>
    <div class="sidebar-section">
      <h3><strong>Portfolio</strong></h3>
      <ul>
        <li><a href="https://francoisvercellotti.github.io/mon-portfolio" target="_blank">Lien direct</a></li>
      </ul>
    </div>
  </div>

  <!-- Contenu principal -->
  <div class="about-content">
    <h1>Bienvenue 👋</h1>
    <p>Je suis <strong>François Vercellotti</strong>, Data Analyst Freelance spécialisé dans la structuration des données, l’automatisation du reporting et la création de dashboards clairs et actionnables.</p>

    <p>J’aide les PME et startups à retrouver le contrôle de leurs données, à prendre des décisions fondées et à ne plus perdre de temps avec des fichiers Excel impossibles à maintenir.</p>

    <p>Sur ce portfolio, vous pouvez :</p>
    <ul>
      <li>📌 En savoir plus <a href="/apropos.html">sur mon parcours et mes méthodes</a></li>
      <li>📊 Découvrir <a href="/projets.html">des projets concrets que j’ai réalisés</a></li>
      <li>📩 <a href="mailto:francoisvercellotti@gmail.com">Me contacter pour échanger sur vos besoins</a></li>
    </ul>

    <p>🔍 Vous êtes au bon endroit si vous cherchez à :</p>
    <ul>
      <li>✅ Structurer vos données et fiabiliser vos bases</li>
      <li>✅ Automatiser vos reporting</li>
      <li>✅ Mettre en place des tableaux de bord clairs, utiles, et sur-mesure</li>
    </ul>

    <p>Bonne visite !</p>
  </div>
</div>
</body>
</html>
