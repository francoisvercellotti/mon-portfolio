---
layout: page
title: "A propos de moi"
permalink: /
---

<style>
/* Conteneur principal */
.about-container {
  display: flex;
  align-items: flex-start;
  gap: 40px;
  margin: 20px;
  max-width: 1200px; /* Limite la largeur pour éviter un texte trop étalé */
  margin-left: auto;
  margin-right: auto;
}

/* Colonne de gauche */
.sidebar {
  flex: 1;
  max-width: 30%;
}

/* Photo de profil */
.photo-container {
  text-align: center;
  margin-bottom: 20px;
}

.profile-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ccc;
}

/* Sections de la colonne de gauche */
.sidebar-section {
  margin-bottom: 20px;
}

.sidebar-section h3 {
  font-size: 1.3em;
  margin-bottom: 10px;
}

.sidebar-section ul {
  list-style-type: none;
  padding-left: 0;
}

.sidebar-section ul li {
  margin: 5px 0;
  font-size: 1.1em;
}

/* Contenu principal */
.about-content {
  flex: 2; /* Prend 2/3 de la largeur */
  max-width: 55%;
  line-height: 1.6;
  text-align: justify;
}

</style>

<div class="about-container">
  <!-- Colonne de gauche -->
  <div class="sidebar">
    <div class="photo-container">
      <img src="https://github.com/user-attachments/assets/b42a9ba1-0b07-4b02-90bd-283fc1a8c002" alt="Photo de profil" class="profile-photo">
    </div>

    <!-- Sections de la colonne de gauche -->
    <div class="sidebar-section">
      <h3><strong>Formation</strong></h3>
      <ul>
        <li><strong>2024</strong> - Data Analyst (OpenClassrooms)</li>
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
        <li>Communication, Capacité d’Apprentissage</li>
        <li>Collaboration en Équipe</li>
      </ul>
    </div>
  </div>

  <!-- Contenu principal -->
  <div class="about-content">
    <p>Data Analyst passionné, j’ai fait de la richesse de mon parcours ma plus grande force.</p>
    <p>Après des études scientifiques et des postes de cadre dans l’armée et les travaux publics, j’ai découvert par hasard le monde de la data. Un univers complexe, en constante évolution, qui m’a captivé au point de me pousser hors de ma zone de confort pour relever un des défis les plus stimulants : repartir de zéro et tout apprendre.</p>
    <p>Au début de ma formation, l’informatique m’était totalement inconnue. Mais avec une curiosité sans limite et ma soif d’apprendre, j’ai rapidement pris de l’avance sur mon planning. Ce temps gagné, je l’ai mis à profit pour approfondir mes connaissances de manière autonome, explorant des projets de machine learning qui m’ont permis de maîtriser les outils, d’adopter les bonnes pratiques, en allant de l’exploration des données jusqu’à la mise en production de modèles.</p>
    <p>Aujourd’hui, ce désir d’apprendre et de relever de nouveaux défis continue de me motiver. Je suis désormais prêt à me lancer dans des projets concrets au sein d’une entreprise, pour mettre en pratique non seulement mes compétences techniques, mais aussi les qualités humaines que j’ai développées tout au long de mon parcours : travail en équipe, communication, pédagogie, et gestion du stress. Des atouts essentiels pour évoluer avec rigueur et efficacité dans un environnement dynamique.</p>
    <p>Mon objectif est clair : mettre ma curiosité insatiable et mes compétences au service de projets ambitieux en data science et data analysis, et continuer à progresser pour repousser encore mes propres limites.</p>
  </div>
</div>

    


