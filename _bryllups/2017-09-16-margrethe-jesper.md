---
title: 'Oslo Norway'
subtitle: 'Margretehe & Jesper'
date: 2017-09-16 00:00:00
description: Norwegian bryllup photography focused on bryllup and portrait photography. 
featured_image: '/images/bryllup/2017-09-16-margrethe-jesper/00032_Margrethe&Jesper_W_Oslo_Griffin_Photography.jpg'
image_path: '/images/bryllup/2017-09-16-margrethe-jesper'
image_alt: 'bryllup oslo fotograph norway'
---

> 2017-09-16
> 
> Lysebu Bryllup i Oslo

<!-- DO NOT EDIT BELOW -->
<div class="image-wrap" >
{% for image in site.static_files %}
    {% if image.path contains page.image_path %}
        <div class="image-wrap" >
        <img src="{{ site.baseurl }}{{ image.path }}" alt="{{ page.image_alt }}" />
        </div>
    {% endif %}
{% endfor %}
