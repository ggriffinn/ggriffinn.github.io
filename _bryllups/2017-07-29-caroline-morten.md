---
title: 'Oslo Norway'
subtitle: 'Caroline & Morten'
date: 2017-07-29 00:00:00
description: Norwegian bryllup photography focused on bryllup and portrait photography. 
featured_image: '/images/bryllup/2017-07-29-caroline-morten/86_170729_Caroline&Morten_W_Oslo_Norway.jpg'
image_path: '/images/bryllup/2017-07-29-caroline-morten'
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
