---
layout: default
title: Jonny Griffin
description: Jonny Griffin is a photographer based in Oslo Norway who focuses on landscape and nature photography.
featured_image: /images/jonny.jpg
---

<section class="intro">

	<div class="wrap">

		<center><h2>brylluping the world 🌎 to find the unknown</h2></center>

	</div>

</section>

<section class="portfolio">

	<div class="content-wrap portfolio-wrap">

		{% for bryllup in site.bryllups reversed %}

		<div class="portfolio-item">

			<a class="portfolio-item__link" href="{{ bryllup.url }}">

				<div class="portfolio-item__image">
					<img src="{{ bryllup.featured_image  }}" alt="{{ bryllup.title }}">
				</div>

				<div class="portfolio-item__content">
					<div class="portfolio-item__info">
						<h2 class="portfolio-item__title">{{ bryllup.title }}</h2>
						<p class="portfolio-item__subtitle">{{ bryllup.subtitle }}</p>
					</div>
				</div>

			</a>

		</div>

		{% endfor %}

	</div>

</section>
