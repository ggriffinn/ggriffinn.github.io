---
layout: default
title: Jonnathan Griffin
description: Jonnathan Griffin is a photographer based in Oslo Norway who focuses on landscape and nature photography.
featured_image: /images/jonny.jpg
---

<section class="intro">

	<div class="wrap">

		<center><h2>weddinging the world 🌎 to find the unknown</h2></center>

	</div>

</section>

<section class="portfolio">

	<div class="content-wrap portfolio-wrap">

		{% for wedding in site.weddings reversed %}

		<div class="portfolio-item">

			<a class="portfolio-item__link" href="{{ wedding.url }}">

				<div class="portfolio-item__image">
					<img src="{{ wedding.featured_image  }}" alt="{{ wedding.title }}">
				</div>

				<div class="portfolio-item__content">
					<div class="portfolio-item__info">
						<h2 class="portfolio-item__title">{{ wedding.title }}</h2>
						<p class="portfolio-item__subtitle">{{ wedding.subtitle }}</p>
					</div>
				</div>

			</a>

		</div>

		{% endfor %}

	</div>

</section>
