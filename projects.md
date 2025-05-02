---
layout: page
title: ""
permalink: /projects/
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

/* Conteneur de la grille des projets */
.project-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 25px;
  padding: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Carte de projet avec style amélioré */
.project-card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.project-card img {
  width: 100%;
  border-radius: 10px;
  margin: 15px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.project-card h3 {
  color: #2c5282;
  margin: 0 0 15px 0;
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
}

.project-card h3 a {
  color: #2c5282;
  text-decoration: none;
  transition: color 0.2s ease;
}

.project-card h3 a:hover {
  color: #1a365d;
}

.project-card p {
  line-height: 1.6;
  text-align: justify;
  margin: 0;
  padding: 10px 0;
  flex-grow: 1;
}

/* Animation d'apparition au chargement */
.project-card {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Règle responsive */
@media (max-width: 768px) {
  .project-container {
    grid-template-columns: 1fr;
    padding: 15px;
  }

  .project-card {
    margin-bottom: 20px;
  }
}
</style>
</head>
<body>
<div class="project-container">
    
  <div class="project-card">
    <h3><a href="https://github.com/francoisvercellotti/Ecommerce_bresilien_analysis.git">Tableau de Bord d'Analyse du E-commerce Olist</a></h3>
    <img src="{{ '/assets/screencast.gif' | relative_url }}" alt="Démonstration Tableau de Bord olist">
    <p>Ce projet est une solution complète d'ingénierie de données et d'intelligence commerciale pour analyser Olist, une plateforme e-commerce brésilienne. En exploitant une modélisation de données avancée, des scripts Python et une visualisation interactive, le projet transforme des données brutes de commerce électronique en informations exploitables.</p>
    </div>
  
  <div class="project-card">
        <h3><a href="https://github.com/francoisvercellotti/prediction_donnees_immobilieres.git">Application de prediction de valeurs immobilières</a></h3>
        <img src="{{ '/assets/demo.gif' | relative_url }}" alt="application prédiction">
        <p>Dans ce projet personnel j'ai construit une application d'estimation immobilière basée sur le machine learning, développée pour aider les agents immobiliers à obtenir rapidement des estimations précises des biens, avec des explications détaillées des prédictions.
        Ce projet démontre ma capacité à développer une solution ML complète, de l'analyse des données au déploiement, en respectant les meilleures pratiques de l'industrie.</p>
    </div>

    <div class="project-card">
    <h3><a href="https://github.com/francoisvercellotti/instacart-analysis-shiny.git">Tableau de Bord d'Analyse de Panier Instacart</a></h3>
    <img src="{{ '/assets/screencast_appli-gif.gif' | relative_url }}" alt="Démonstration Tableau de Bord Instacart">
    <p>Dans ce projet personnel, j'ai développé un tableau de bord d'analyse des données de panier d'Instacart, un service de livraison de courses en ligne. Cette application permet d'explorer les comportements d'achat des clients, leurs préférences produits et leurs habitudes de commande à travers des visualisations interactives.
    Ce projet met en évidence ma maîtrise de l'optimisation des bases de données, de l'analyse de données et du développement d'applications web, en combinant des technologies comme Python, SQLAlchemy, PostgreSQL et Shiny.</p>
    </div>

    <div class="project-card">
        <h3><a href="https://github.com/francoisvercellotti/base_de_donnees_immobiliere.git">Créer et requêter une base de données immobilières</a></h3>
        <img src="https://github.com/user-attachments/assets/05c9b225-9420-4d58-aff7-964f099039d0" alt="Projet Immobilier">
        <p>Laplace Immo, un réseau national d'agences immobilières, m'a confié la modification de la base de données
        permettant de collecter les transactions immobilières et foncières en France. Mon objectif a été d'optimiser les
        requêtes SQL pour analyser le marché et fournir aux agences des insights pour améliorer leur accompagnement client.</p>
    </div>

    <div class="project-card">
        <h3><a href="https://github.com/francoisvercellotti/tableau_bord_acces_eau_potable.git">Tableau de bord pour l'identification des besoins en accès à l'eau potable</a></h3>
        <img src="https://github.com/user-attachments/assets/f5343c5d-40a3-44be-996f-e5f2a79753ea" alt="Projet Eau Potable">
        <p>Dans le cadre de ma mission en tant que consultant data analyst pour l'ONG DWFA (Drinking Water For All),
        j'ai développé un tableau de bord interactif permettant d'identifier les pays ayant des difficultés d'accès à l'eau potable.
        L'objectif était de prioriser les efforts d'intervention et d'optimiser la répartition des ressources.</p>
    </div>

    <div class="project-card">
        <h3><a href="https://github.com/francoisvercellotti/analyse_marche_developpement_international.git">Analyse de marché pour l'exportation de poulets biologiques</a></h3>
        <img src="{{ '/image_cluster.png' | relative_url }}" alt="Projet Exportation">
        <p>Ce projet visait à segmenter les pays en fonction de données socio-économiques, politiques et environnementales
        afin d'identifier des clusters pertinents. Grâce à l'analyse des données et à des modèles de machine learning,
        j'ai pu recommander les pays les plus stratégiques pour une expansion internationale du marché des poulets biologiques.</p>
    </div>

    <div class="project-card">
        <h3><a href="https://github.com/francoisvercellotti/analyse_ventes_e-commerce.git">Analyse des ventes d'un e-commerce</a></h3>
        <img src="https://github.com/user-attachments/assets/ba340984-40f8-4c79-94de-d1440ec1b200" alt="Projet E-commerce">
        <p>Dans ce projet, j'ai analysé les ventes en ligne d'une librairie en utilisant des outils de data analysis
        afin d'extraire des informations clés sur les tendances d'achat et d'optimiser la stratégie marketing.
        Grâce à des visualisations interactives et des modèles prédictifs, j'ai pu recommander des actions pour maximiser les revenus.</p>
    </div>

    <div class="project-card">
        <h3><a href="https://github.com/francoisvercellotti/reporting_powerbi_multinationale.git">Création d'un tableau de bord pour le suivi de projet et des performances</a></h3>
        <img src="https://github.com/user-attachments/assets/81369059-b40c-42fc-a0dd-23c2372a9989" alt="Projet Reporting">
        <p>Sanitoral, une multinationale spécialisée dans les soins bucco-dentaires, avait besoin d'un outil permettant
        de suivre l'avancement de ses projets et d'évaluer les performances financières.
        J'ai développé un tableau de bord Power BI pour identifier les retards, contrôler les coûts et
        aider l'équipe Project Management Office à prendre des décisions éclairées.</p>
    </div>

    <div class="project-card">
        <h3><a href="https://github.com/francoisvercellotti/bigquery_taxi_trips_analytics.git">Analyse de millions de trajets de taxis via ELT avec GCP et visualisation PowerBI</a></h3>
        <img src="https://github.com/user-attachments/assets/bb8c563d-0deb-41cf-bd29-e41ea57271f0" alt="Projet GCP/PowerBI analytocs">
        <p>Ce projet analyse la corrélation entre les conditions météorologiques et plus de 100 millions de courses de taxi à New York. En exploitant un pipeline ELT sur GCP et une couche de visualisation Power BI, nous transformons des données brutes de trajets et de météo en insights actionnables pour comprendre les patterns de mobilité urbaine en fonction des conditions climatiques.</p>
    </div>
</div>
</body>
</html>
