---
title: 'Eidsverket Oslo Norway'
subtitle: 'Ida & Thomas'
date: 2018-09-22 00:00:00
description: Norwegian wedding photography focused on bryllup and portrait photography. 
featured_image: '/images/wedding/2018-09-22-ida-thomas/059_GriffinPhotography_Oslo_Bryllup_Eidsverket_20180922.jpg'
image_path: '/images/wedding/2018-09-22-ida-thomas'
image_alt: 'bryllup oslo fotograph norway'
---

> 2018-09-22
> 
> Eidsverket Bryllup

<!-- DO NOT EDIT BELOW -->
<div class="image-wrap" >
{% for image in site.static_files %}
    {% if image.path contains page.image_path %}
        <div class="image-wrap" >
        <img src="{{ site.baseurl }}{{ image.path }}" alt="{{ page.image_alt }}" />
        </div>
    {% endif %}
{% endfor %}
