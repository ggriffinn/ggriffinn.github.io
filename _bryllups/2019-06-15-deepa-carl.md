---
title: 'Oslo Norway'
subtitle: 'Deepa & Carl'
date: 2019-06-15 00:00:00
description: Norwegian bryllup photography focused on bryllup and portrait photography. 
featured_image: '/images/bryllup/2019-06-15-deepa-carl/323_Deepa&Carl_W_griffinphotography_oslo_norway_bryllup_bryllup_20190615.jpg'
image_path: '/images/bryllup/2019-06-15-deepa-carl'
image_alt: 'bryllup oslo fotograph norway'
---

> 2019-06-15
>
> Oslo Sommer Bryllup

<!-- DO NOT EDIT BELOW -->
<div class="image-wrap" >
{% for image in site.static_files %}
    {% if image.path contains page.image_path %}
        <div class="image-wrap" >
        <img src="{{ site.baseurl }}{{ image.path }}" alt="{{ page.image_alt }}" />
        </div>
    {% endif %}
{% endfor %}
