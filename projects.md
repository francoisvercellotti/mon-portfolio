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
      <h3><a href="https://github.com/francoisvercellotti/powerbi_dashboard_chantier.git">Tableau de Bord Power BI pour un suivi complet de l'activité commerciale et opérationnelle </a></h3>
      <img src="{{ '/assets/video_dashboard.gif' | relative_url }}" alt="Démonstration Tableau de Bord Power BI Chantier">
      <p>Création d’un tableau de bord interactif sous Power BI pour le pilotage opérationnel d’une entreprise du secteur des chantiers. À partir de fichiers Excel, ce dashboard transforme des données brutes en indicateurs précieux:</p>
      <ul>
        <li>Analyse globale : suivi du CA, rentabilité et portefeuille client </li>
        <li>Analyse rentabilité chantier : performance des projets par marge, CA et productivité</li>
        <li>Analyse clients : suivi des meilleurs clients,  retards de paiement, taux de fidélisation</li>
        <li>Situation mensuelle : état d’avancement des chantiers et objectifs du mois</li>
        <li>Page Q&A : questions en langage naturel et génération de visuels instantanés</li>
      </ul>
      <p><strong>Bénéfice client :</strong> pilotage simplifié et décisionnel éclairé grâce à des indicateurs clairs, actualisés et adaptés à la réalité terrain des entreprises de chantier.</p>
    </div>
    
    <div class="project-card">
      <h3><a href="https://github.com/francoisvercellotti/Ecommerce_bresilien_analysis.git">Analyse avancée des données transactionnelles d'une marketplace via un tableau de bord interactif.</a></h3>
      <img src="{{ '/assets/screencast.gif' | relative_url }}" alt="Démonstration Tableau de Bord olist">
      <p>Développement d’un écosystème data combinant base de données optimisée et tableau de bord interactif pour offrir aux équipes pilotage et marketing une vision claire de la performance commerciale et des comportements clients :</p>
      <ul>
        <li>Identification des segments clients à fort potentiel et des clients à risque .</li>
        <li>Analyse détaillée du comportement des acheteurs : fréquence d’achat, panier moyen, taux de réachat et évolution des habitudes.</li>
        <li>Prévisions de ventes et anticipation des pics d’activité grâce à l’analyse des tendances et comportements saisonniers.</li>
        <li>Suivi des performances vendeurs et des délais logistiques pour piloter l’activité et ajuster les priorités.</li>
        <li>Visualisation des indicateurs clés via des dashboards interactifs pour une prise de décision rapide et éclairée.</li>
      </ul>
      <p><strong>Bénéfice client :</strong> un outil stratégique pour booster la rentabilité, réduire le churn et fluidifier la gestion opérationnelle de la marketplace.</p>
    </div>
  
     <div class="project-card">
            <h3><a href="https://github.com/francoisvercellotti/bigquery_taxi_trips_analytics.git">Analyse des trajets de taxis & de l'impact météo à NYC : pipeline GCP & dashboard Power BI</a></h3>
          <img src="https://raw.githubusercontent.com/francoisvercellotti/mon-portfolio/bbb609dd4acd9660da71728c214866784fc6c315/assets/screencast_dashboard.gif" alt="Projet GCP/PowerBI analytics">

        <p>Automatisation d'un pipeline ELT complet sur Google Cloud Platform pour collecter, structurer et traiter plus de 100 millions de courses de taxi couplées aux données météo. Grâce à une base fiable et scalable dans BigQuery, un tableau de bord Power BI interactif permet un suivi en temps réel.</p>
      <ul>
        <li>Collecte automatisée des données via Airflow et stockage partitionné sur GCS</li>
        <li>Ingestion, transformation et modélisation des données massives sous BigQuery avec dbt</li>
        <li>Mise en place de tests qualité automatisés</li>
        <li>Jointure spatio-temporelle entre données de courses et observations météo horaires pour analyses croisées</li>
        <li>Restitution  via un tableau de bord Power BI interactif : analyses par période, localisation et conditions météo</li>
      </ul>
      <p><strong>Bénéfice client :</strong> </p>
      Suivi régulier et fiable grâce à une automatisation du processus, des données structurées pour des analyses précises, et des insights clairs permettant d’anticiper les pics d’activité liés à la météo.
    </div>

    <div class="project-card">
              <h3><a href="https://github.com/francoisvercellotti/prediction_donnees_immobilieres.git">Application de prédiction de Prix Immobiliers : Gagnez en Précision et en Argumentaire Commercial</a></h3>
              <img src="{{ '/assets/demo.gif' | relative_url }}" alt="application prédiction">
                <p>J’ai développé une application d’aide à l’estimation immobilière à destination des agences et investisseurs. Basée sur un modèle de machine learning entraîné sur des données transactionnelles, l’application prédit le prix des biens selon leurs caractéristiques et localisations.  
          L’outil intègre également des visualisations explicatives pour justifier chaque estimation, améliorant la transparence et la confiance des utilisateurs.</p>
          <p><strong>Bénéfice client :</strong> gain de temps pour les estimations, meilleur argumentaire commercial et anticipation des évolutions de prix.</p>
    </div>


    <div class="project-card">
    <h3><a href="https://github.com/francoisvercellotti/instacart-analysis-shiny.git">Application Interactive d’Analyse des Comportements d’Achat d'une Marketplace</a></h3>
    <img src="{{ '/assets/screencast_appli-gif.gif' | relative_url }}" alt="Démonstration Tableau de Bord Instacart">
    <p>Conception d’une application Shiny interactive dédiée à l’analyse des comportements d’achat sur la marketplace Instacart. L’outil explore les habitudes de commande et préférences clients via des dashboards dynamiques intégrant :</p>
    <ul>
      <li>Statistiques globales sur les commandes, utilisateurs et produits</li>
      <li>Analyses temporelles (jour, heure, heatmap des commandes)</li>
      <li>Étude des produits les plus commandés et des taux de réachat</li>
      <li>Analyse des tailles de panier selon le moment d’achat</li>
      <li>Système de recommandations personnalisées basé sur l’historique et les catégories de produits</li>
    </ul>
    <p><strong>Bénéfice client :</strong> optimisation des recommandations produits et ajustement des actions marketing selon les profils et habitudes d’achat des clients.</p>
    </div>

    <div class="project-card">
      <h3><a href="https://github.com/francoisvercellotti/tableau_bord_acces_eau_potable.git">Tableau de bord stratégique pour améliorer l’accès à l’eau potable dans les zones vulnérables</a></h3>
      <img src="https://github.com/user-attachments/assets/f5343c5d-40a3-44be-996f-e5f2a79753ea" alt="Projet Eau Potable">
      <p>Face aux défis croissants de l’accès à l’eau potable, j’ai accompagné l’ONG DWFA (fictif) dans la création d’un outil visuel puissant qui transforme des données complexes en décisions concrètes.</p>
      <p>Ce tableau de bord interactif offre une vue claire et précise des besoins à différentes échelles géographiques, permettant aux équipes de terrain de cibler rapidement les zones les plus vulnérables et d’adapter leurs actions en temps réel.</p>
      <p><strong>Bénéfice client :</strong> un pilotage éclairé et agile des ressources, maximisant l’impact des interventions humanitaires pour sauver des vies et améliorer les conditions d’accès à l’eau.</p>
    </div>



    <div class="project-card">
        <h3><a href="https://github.com/francoisvercellotti/analyse_marche_developpement_international.git">Étude de marché pour le développement international d'une filière bio</a></h3>
        <img src="{{ '/image_cluster.png' | relative_url }}" alt="Projet Exportation">
        <p>Identification des zones de développement stratégique à l’international pour une filière de volaille bio. Le projet a consisté à segmenter les pays selon des indicateurs économiques, environnementaux et de consommation, afin de détecter les marchés à fort potentiel et d’écarter ceux présentant des risques ou des freins réglementaires.
    L’analyse a permis de prioriser les destinations export et de formuler des recommandations concrètes pour adapter la stratégie de déploiement à l’international.</p>
        <p><strong>Bénéfice client :</strong>  ciblage de marchés pertinents, réduction des risques liés aux implantations et meilleure allocation des ressources commerciales.</p>
    </div>

    <div class="project-card">
        <h3><a href="https://github.com/francoisvercellotti/analyse_ventes_e-commerce.git">Analyse des ventes d'un e-commerce</a></h3>
        <img src="https://github.com/user-attachments/assets/ba340984-40f8-4c79-94de-d1440ec1b200" alt="Projet E-commerce">
        <p>Analyse des performances commerciales d’une librairie en ligne à travers des indicateurs de ventes, clients et marges. Détection des produits à forte valeur et recommandations pour optimiser la stratégie marketing.</p>
      <p><strong>Bénéfice client :</strong> amélioration de la rentabilité et optimisation des campagnes promotionnelles.</p>
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
