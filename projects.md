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
    <h3><a href="https://github.com/francoisvercellotti/Ecommerce_bresilien_analysis.git">Analyse avancée des données transactionnelles d'une marketplace via un tableau de bord interactif.</a></h3>
    <img src="{{ '/assets/screencast.gif' | relative_url }}" alt="Démonstration Tableau de Bord olist">
    <p>J’ai conçu un outil complet intégrant :</p>
    <ul>
      <li>Segmentation client par RFM (Récence, Fréquence, Montant) pour cibler les segments à fort potentiel et identifier les clients à risque.</li>
      <li>Analyse de cohortes pour suivre l’évolution du comportement des utilisateurs dans le temps.</li>
      <li>Prévisions de ventes basées sur les tendances passées et saisonnalités.</li>
      <li>Évaluation du risque d’attrition client afin d’anticiper et réduire le churn.</li>
      <li>Suivi des performances vendeurs et délais logistiques, avec visualisation des KPIs clés.</li>
    </ul>
    <p><strong>Bénéfice client :</strong>un outil d’aide à la décision stratégique pour optimiser la satisfaction client, la rentabilité et la gestion logistique de la plateforme.</p>
  </div>
  
    <div class="project-card">
          <h3><a href="https://github.com/francoisvercellotti/prediction_donnees_immobilieres.git">Application de prédiction de Prix Immobiliers : Gagnez en Précision et en Argumentaire Commercial</a></h3>
          <img src="{{ '/assets/demo.gif' | relative_url }}" alt="application prédiction">
            <p>J’ai développé une application d’aide à l’estimation immobilière à destination des agences et investisseurs. Basée sur un modèle de machine learning entraîné sur des données transactionnelles, l’application prédit le prix des biens selon leurs caractéristiques et localisations.  
      L’outil intègre également des visualisations explicatives pour justifier chaque estimation, améliorant la transparence et la confiance des utilisateurs.</p>
      <p><strong>Bénéfice client :</strong> gain de temps pour les estimations, meilleur argumentaire commercial et anticipation des évolutions de prix.</p>
    </div>

     <div class="project-card">
            <h3><a href="https://github.com/francoisvercellotti/bigquery_taxi_trips_analytics.git">Pipeline analytique automatisé GCP et tableau de bord décisionnel Power BI : analyse des trajets de taxis et de l'impact météo à New York</a></h3>
          <img src="https://raw.githubusercontent.com/francoisvercellotti/mon-portfolio/bbb609dd4acd9660da71728c214866784fc6c315/assets/screencast_dashboard.gif" alt="Projet GCP/PowerBI analytics">

        <p>J’ai automatisé un pipeline ELT complet sur Google Cloud Platform pour collecter, structurer et traiter plus de 100 millions de courses de taxi couplées aux données météo. Grâce à une base fiable et scalable dans BigQuery, un tableau de bord Power BI interactif permet aux décideurs de suivre en temps réel l’impact météo sur la demande et d’ajuster l’offre de transport efficacement.</p>
      <p><strong>Bénéfice client :</strong> </p>
      <ul>
      <li>Automatisation complète pour un suivi régulier et sans erreur</li>
      <li>Données propres et bien organisées pour des analyses précises</li>
      <li>Insights exploitables pour anticiper les pics d’activité liés à la météo</li>
      </ul>
    </div>

    <div class="project-card">
    <h3><a href="https://github.com/francoisvercellotti/instacart-analysis-shiny.git">Tableau de Bord d'Analyse de Panier Instacart</a></h3>
    <img src="{{ '/assets/screencast_appli-gif.gif' | relative_url }}" alt="Démonstration Tableau de Bord Instacart">
    <p>Développement d’une application Shiny d’analyse des comportements d’achat sur Instacart. Exploration des préférences clients et habitudes de commande à travers des dashboards interactifs et filtres dynamiques.</p>
      <p><strong>Bénéfice client :</strong> amélioration des recommandations produits et adaptation de la stratégie marketing selon les typologies d’acheteurs.</p>
    </div>

    <div class="project-card">
        <h3><a href="https://github.com/francoisvercellotti/tableau_bord_acces_eau_potable.git">Tableau de bord pour l'identification des besoins en accès à l'eau potable</a></h3>
        <img src="https://github.com/user-attachments/assets/f5343c5d-40a3-44be-996f-e5f2a79753ea" alt="Projet Eau Potable">
        <p> Développement pour l'ONG DWFA d’un dashboard interactif permettant d’identifier les zones géographiques prioritaires en matière d’accès à l’eau potable. Visualisation des indicateurs clés et priorisation des interventions humanitaires.</p>
      <p><strong>Bénéfice client :</strong> allocation optimisée des ressources et rationalisation des plans d’action sur le terrain.</p>
    </div>

    <div class="project-card">
        <h3><a href="https://github.com/francoisvercellotti/analyse_marche_developpement_international.git">Analyse de marché pour l'exportation de poulets biologiques</a></h3>
        <img src="{{ '/image_cluster.png' | relative_url }}" alt="Projet Exportation">
        <p>Segmentation des pays selon des indicateurs économiques et environnementaux pour identifier les zones stratégiques de développement à l’international pour une filière de volaille bio.</p>
      <p><strong>Bénéfice client :</strong> ciblage de marchés export pertinents et réduction des risques liés aux implantations internationales.</p>
    </div>

    <div class="project-card">
        <h3><a href="https://github.com/francoisvercellotti/analyse_ventes_e-commerce.git">Analyse des ventes d'un e-commerce</a></h3>
        <img src="https://github.com/user-attachments/assets/ba340984-40f8-4c79-94de-d1440ec1b200" alt="Projet E-commerce">
        <p>Analyse des performances commerciales d’une librairie en ligne à travers des indicateurs de ventes, clients et marges. Détection des produits à forte valeur et recommandations pour optimiser la stratégie marketing.</p>
      <p><strong>Bénéfice client :</strong> amélioration de la rentabilité et optimisation des campagnes promotionnelles.</p>
    </div>

    <div class="project-card">
        <h3><a href="https://github.com/francoisvercellotti/reporting_powerbi_multinationale.git">Dashboard de suivi projet et performance</a></h3>
        <img src="https://github.com/user-attachments/assets/81369059-b40c-42fc-a0dd-23c2372a9989" alt="Projet Reporting">
          <p>Développement pour Sanitoral d’un tableau de bord de suivi projet et financier. Centralisation des données, suivi des coûts et délais, identification des écarts et génération d’indicateurs de pilotage pour le comité de direction.</p>
      <p><strong>Bénéfice client :</strong> meilleure maîtrise budgétaire et réduction des risques projets.</p>
    </div>

     <div class="project-card">
            <h3><a href="https://github.com/francoisvercellotti/base_de_donnees_immobiliere.git">Créer et requêter une base de données immobilières</a></h3>
            <img src="https://github.com/user-attachments/assets/05c9b225-9420-4d58-aff7-964f099039d0" alt="Projet Immobilier">
              <p>Mission pour Laplace Immo : restructuration et optimisation des bases de données de transactions immobilières. Automatisation des reporting et analyses marché pour accompagner les agences dans leur stratégie locale.</p>
        <p><strong>Bénéfice client :</strong> gains de temps dans la production de reporting, meilleure visibilité sur les dynamiques locales et amélioration des préconisations commerciales.</p>
      </div>
   
</div>
</body>
</html>
