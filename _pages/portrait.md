---
layout: default
title: Jonnathan Griffin
description: Jonnathan Griffin is a photographer based in Oslo Norway who focuses on landscape and nature photography.
featured_image: /images/jonny.jpg
---

<section class="intro">

	<div class="wrap">

		<center><h2>portraiting the world 🌎 to find the unknown</h2></center>

	</div>

</section>

<section class="portfolio">

	<div class="content-wrap portfolio-wrap">

		{% for portrait in site.portraits reversed %}

		<div class="portfolio-item">

			<a class="portfolio-item__link" href="{{ portrait.url }}">

				<div class="portfolio-item__image">
					<img src="{{ portrait.featured_image  }}" alt="{{ portrait.title }}">
				</div>

				<div class="portfolio-item__content">
					<div class="portfolio-item__info">
						<h2 class="portfolio-item__title">{{ portrait.title }}</h2>
						<p class="portfolio-item__subtitle">{{ portrait.subtitle }}</p>
					</div>
				</div>

			</a>

		</div>

		{% endfor %}

	</div>

</section>
