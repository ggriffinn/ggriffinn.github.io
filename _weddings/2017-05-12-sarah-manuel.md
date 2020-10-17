---
title: 'Oslo Norway'
subtitle: 'Sarah & Manuel'
date: 2017-07-29 00:00:00
description: Norwegian wedding photography focused on bryllup and portrait photography. 
featured_image: '/images/wedding/2017-05-12-sarah-manuel/01.jpg'
image_path: '/images/wedding/2017-05-12-sarah-manuel'
image_alt: 'bryllup oslo fotograph norway'
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
