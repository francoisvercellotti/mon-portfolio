---
layout: default
title: A propos de moi
permalink: /about/
---





<style>
/* Style de la section About */
.about-container {
  display: flex;
  align-items: flex-start;
  gap: 30px;
  margin: 20px;
}

/* Section photo */
.photo-container {
  flex-shrink: 0;
}

.profile-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%; /* Pour rendre la photo ronde */
  object-fit: cover;
  border: 2px solid #ccc; /* Bordure autour de l'image */
}

/* Section contenu */
.about-content {
  flex: 1;
}

/* Style pour les points clés et le listing de compétences */
ul {
  list-style-type: none;
  padding-left: 0;
}

ul li {
  margin: 10px 0;
  font-size: 1.1em;
}

/* Section de mise en forme pour les compétences, formations, et soft skills */
.section-left {
  flex: 1;
  margin-right: 30px;
}

h3 {
  font-size: 1.4em;
  margin-bottom: 15px;
}

ul li {
  margin: 5px 0;
}

.skills-list li {
  font-size: 1.1em;
}

</style>

<div class="about-container">
  <!-- Photo ronde sur la gauche -->
  <div class="photo-container">
    <img src="https://github.com/user-attachments/assets/b42a9ba1-0b07-4b02-90bd-283fc1a8c002" alt="Photo de profil" class="profile-photo">
  </div>

  <div class="section-left">
    <!-- Formation -->
    <div class="formation">
      <h3>Formation</h3>
      <ul>
        <li><strong>2024</strong> - Data Analyst (OpenClassrooms)</li>
        <li><strong>2000-2001</strong> - Licence Science de la matière (Physique Chimie)</li>
        <li><strong>1998-2000</strong> - DEUG Science de la matière (Physique Chimie)</li>
      </ul>
    </div>

    <!-- Expertise technique -->
    <div class="expertise">
      <h3>Expertise technique</h3>
      <ul class="skills-list">
        <li>Python, Numpy, Pandas, SQL</li>
        <li>ScikitLearn, Git/GitHub, MLflow</li>
        <li>Docker, PowerBI, Streamlit</li>
      </ul>
    </div>

    <!-- Soft Skills -->
    <div class="soft-skills">
      <h3>Soft Skills</h3>
      <ul>
        <li>Adaptabilité, Autonomie</li>
        <li>Curiosité Intellectuelle, Résolution de Problèmes</li>
        <li>Communication, Capacité d’Apprentissage</li>
        <li>Collaboration en Équipe</li>
      </ul>
    </div>
  </div>

  <div class="about-content">
    <p>Data Analyst passionné, j’ai fait de la richesse de mon parcours ma plus grande force.</p>

    <p>Après des études scientifiques et des postes de cadre dans l’armée et les travaux publics, j’ai découvert par hasard le monde de la data. Un univers complexe, en constante évolution, qui m’a captivé au point de me pousser hors de ma zone de confort pour relever un des défis les plus stimulants : repartir de zéro et tout apprendre.</p>

    <p>Au début de ma formation, l’informatique m’était totalement inconnu. Mais avec une curiosité sans limite et ma soif d’apprendre, j’ai rapidement pris de l’avance sur mon planning. Ce temps gagné, je l’ai mis à profit pour approfondir mes connaissances de manière autonome, explorant des projets de machine learning qui m’ont permis de maîtriser les outils, d’adopter les bonnes pratiques, en allant de l’exploration des données jusqu’à la mise en production de modèles.</p>

    <p>Aujourd’hui, ce désir d’apprendre et de relever de nouveaux défis continue de me motiver. Je suis désormais prêt à me lancer dans des projets concrets au sein d’une entreprise, pour mettre en pratique non seulement mes compétences techniques, mais aussi les qualités humaines que j’ai développées tout au long de mon parcours : travail en équipe, communication, pédagogie, et gestion du stress. Des atouts essentiels pour évoluer avec rigueur et efficacité dans un environnement dynamique.</p>

    <p>Mon objectif est clair : mettre ma curiosité insatiable et mes compétences au service de projets ambitieux en data science et data analysis, et continuer à progresser pour repousser encore mes propres limites.</p>

    <h3>Points clés :</h3>
    <ul>
      <li><strong>Parcours :</strong> Bac scientifique, Licence en Sciences de la Matière, Formation Data Analyst (OpenClassrooms)</li>
      <li><strong>Compétences :</strong> SQL, Python, PowerBi, Machine Learning, Git, GitHub, Docker, Streamlit</li>
      <li><strong>Expériences :</strong> Encadrement militaire et gestion de projets en tant que chef de chantier, développement de soft skills (communication, leadership, gestion du stress, pédagogie)</li>
    </ul>
  </div>
</div>

</div>
