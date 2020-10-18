---
title: 'Oslo Norway'
subtitle: 'Ingrid & Kris'
date: 2019-08-24 00:00:00
description: Norwegian bryllup photography focused on bryllup and portrait photography. 
featured_image: '/images/bryllup/2019-08-24-ingrid-kris/090_Ingrid&Kris_W_griffinphotography_oslo_norway_bryllup_bryllup_20190824.jpg'
image_path: '/images/bryllup/2019-08-24-ingrid-kris'
image_alt: 'bryllup oslo fotograph norway'
---

> 2019-08-24
> 
> Bryllup i Moss


<!-- DO NOT EDIT BELOW -->
<div class="image-wrap" >
{% for image in site.static_files %}
    {% if image.path contains page.image_path %}
        <div class="image-wrap" >
        <img src="{{ site.baseurl }}{{ image.path }}" alt="{{ page.image_alt }}" />
        </div>
    {% endif %}
{% endfor %}
