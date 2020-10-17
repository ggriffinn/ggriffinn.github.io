---
title: 'Oslo Norway'
subtitle: 'cherry blossoms'
date: 2020-04-26 00:00:00
description: Exploring the beautiful city of Oslo in spring. What better way than taking photos of cherry blossoms. 
featured_image: '/images/2020-springioslo/01.jpg'
image_path: '/images/2020-springioslo'
image_alt: 'your keywords here'
---

<!-- > “Cherry blossoms, the symbolic flower of the spring.” -->

<!-- DO NOT EDIT BELOW -->
<div class="image-wrap" >
{% for image in site.static_files %}
    {% if image.path contains page.image_path %}
        <div class="image-wrap" >
        <img src="{{ site.baseurl }}{{ image.path }}" alt="{{ page.image_alt }}" />
        </div>
    {% endif %}
{% endfor %}
