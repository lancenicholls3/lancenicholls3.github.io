---
layout: single
title: "Engineering Projects"
permalink: /projects/
sidebar:
  nav: "main"
---

Here are some of my selected engineering projects.

{% assign posts = site.projects | sort: 'date' | reverse %}
<div class="project-gallery">
  {% for p in posts %}
    <div class="project-card">
      <a href="{{ p.url | relative_url }}">
        <h3>{{ p.title }}</h3>
        {% if p.thumbnail %}
          <img src="{{ p.thumbnail | relative_url }}" alt="{{ p.title }} cover image">
        {% endif %}
      </a>
    </div>
  {% endfor %}
</div>
