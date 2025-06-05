---
layout: page
title: "Accueil"
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

    .home-container {
      max-width: 900px;
      margin: 50px auto;
      background: rgba(255, 255, 255, 0.15);
      padding: 40px;
      border-radius: 15px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      text-align: center;
    }

    .home-container h1 {
      font-size: 2.2em;
      color: #2c5282;
      margin-bottom: 25px;
    }

    .home-container p {
      font-size: 1.2em;
      line-height: 1.6;
      margin-bottom: 20px;
    }

    .home-container a {
      color: #2c5282;
      text-decoration: none;
      font-weight: bold;
    }

    .home-container a:hover {
      text-decoration: underline;
    }

    .home-container ul {
      list-style: none;
      padding: 0;
      margin: 30px 0;
      text-align: left;
    }

    .home-container ul li {
      margin-bottom: 10px;
      font-size: 1.1em;
    }
  </style>
</head>

<body>

<div class="home-container">
  <h1>Bienvenue 👋</h1>

  <p>Je suis <strong>François Vercellotti</strong>, Data Analyst Freelance spécialisé dans la <strong>structuration de données</strong>, l’<strong>automatisation de reporting</strong> et la création de <strong>dashboards décisionnels</strong> pour PME et startups.</p>

  <p>Ce site vous permet de :</p>

  <ul>
    <li>📌 En savoir plus <a href="{{ '/about/' | relative_url }}">sur mon parcours et ma méthode</a></li>
    <li>📊 Découvrir <a href="{{ '/projects/' | relative_url }}">des projets concrets que j'ai réalisés</a></li>
    <li>📩 <a href="mailto:francoisvercellotti@gmail.com">Me contacter pour échanger sur vos besoins</a></li>
  </ul>

  <p>🔍 Vous êtes au bon endroit si vous cherchez à :</p>

  <ul>
    <li>✅ Structurer vos données et fiabiliser vos bases</li>
    <li>✅ Automatiser vos reporting</li>
    <li>✅ Concevoir des tableaux de bord clairs et utiles</li>
  </ul>

  <p>Bonne visite et à bientôt !</p>

</div>

</body>
</html>
