---
title: 'Rådhuset, Oslo'
subtitle: 'Gamze & Zeki'
date: 2020-08-28 00:00:00
description: Norwegian wedding photography focused on bryllup and portrait photography. 
featured_image: '/images/wedding/2020-08-28-gamze-zeki/057_W_griffinphotography_oslo_norway_bryllup_wedding_rådhuset_20200828.jpg'
image_path: '/images/wedding/2020-08-28-gamze-zeki'
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
