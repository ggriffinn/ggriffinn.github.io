---
title: 'Bygdøy Bryllup'
subtitle: 'Pia & Thomas'
date: 2018-08-11 00:00:00
description: A summer bryllup wedding at Bygdøy Kirke. This Norwegian wedding just outside of Oslo with many bilder. The bryllupsfotograf was taken by Jonny and Sophia from Griffin Photography bryllup fotograf based in Oslo Norway.
featured_image: '/images/wedding/2018-08-11-pia-thomas/027_Pia&Thomas_griffinphotography_20180811.jpg'
image_path: '/images/wedding/2018-08-11-pia-thomas'
image_alt: 'bryllup oslo fotograph norway'
---

> 2018-08-11
> 
> Bygdøy Bryllup i Oslo

<!-- DO NOT EDIT BELOW -->
<div class="image-wrap" >
{% for image in site.static_files %}
    {% if image.path contains page.image_path %}
        <div class="image-wrap" >
        <img src="{{ site.baseurl }}{{ image.path }}" alt="{{ page.image_alt }}" />
        </div>
    {% endif %}
{% endfor %}
