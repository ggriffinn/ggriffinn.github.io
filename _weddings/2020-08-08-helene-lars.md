---
title: 'Oslo Norway'
subtitle: 'Helene & Lars'
date: 2020-08-08 00:00:00
description: Et sommerbryllup i østmarka i Oslo. Mottaket ble holdt på Østmarkseteren og kirkeseremonien i Østre Aker kirke. Jonny og Sophia er bryllupsfotografer med base i Oslo Norge.
featured_image: '/images/wedding/2020-08-08-helene-lars/140__W_griffinphotography_oslo_norway_bryllup_wedding_20200808.jpg'
image_path: '/images/wedding/2020-08-08-helene-lars'
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
