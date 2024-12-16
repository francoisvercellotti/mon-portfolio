---
layout: page
title: "Mes Projets"
permalink: /projects/
---

# Mes Projets

Voici une liste de mes projets :

<ul>
  {% for project in site.projects %}
    <li>
      <a href="{{ project.url }}">{{ project.title }}</a>
      <p>{{ project.description }}</p>  <!-- Optionnel : Ajoutez une description du projet si vous en avez une dans le front matter -->
    </li>
  {% endfor %}
</ul>
