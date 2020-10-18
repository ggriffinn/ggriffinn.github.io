---
title: 'Kleivstua, Norway'
subtitle: 'Stine & Peter'
date: 2017-06-10 00:00:00
description: Norwegian wedding photography focused on bryllup and portrait photography. 
featured_image: '/images/wedding/2017-06-10-stine-peter/72_170610_Stine&Peter.jpg'
image_path: '/images/wedding/2017-06-10-stine-peter'
image_alt: 'bryllup oslo fotograph norway'
---

> 2017-06-10
> 
> Kleivstua Bryllup

<!-- DO NOT EDIT BELOW -->
<div class="image-wrap" >
{% for image in site.static_files %}
    {% if image.path contains page.image_path %}
        <div class="image-wrap" >
        <img src="{{ site.baseurl }}{{ image.path }}" alt="{{ page.image_alt }}" />
        </div>
    {% endif %}
{% endfor %}
