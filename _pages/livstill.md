---
layout: default
title: LIVSSTILSFOTOGRAF • OSLO NORGE
description: Jonny Griffin is a photographer based in Oslo Norway who focuses on landscape and nature photography.
featured_image: /images/livstill/livstill.gif
---

<section class="intro">
	<div class="wrap">
		<center><h1>{{ page.title }}</h1></center> <br><br><br>
		<center><img src="{{ page.featured_image }}" alt="{{ page.image_alt }}" data-aos="fade-up"/></center><br><br>
		<center><p>Many of our customers ask us about our lifestyle sessions. Think of as if we are going to a photoshoot tomorrow, what would we do? Or even better, what do you love to do and what represents you? Are you a coffee lover or more adventurous and love to wander? These personal moments are perfect situations for Sophia and me to capture authentic moments. Feel free to take a look at our portfolios of personal lifestyles.</p></center>
	</div>
</section>

<section class="portfolio">

	<div class="content-wrap portfolio-wrap">

		{% for bryllup in site.livstills reversed %}

		<div class="portfolio-item">

			<a class="portfolio-item__link" href="{{ bryllup.url }}" data-aos="fade-up">

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
