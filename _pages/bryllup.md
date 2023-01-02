---
layout: default
title: LIVSSTIL & BRYLLUPSFOTOGRAF • OSLO NORGE
description: Jonny Griffin is a photographer based in Oslo Norway who focuses on landscape and nature photography.
featured_image: /images/bryllup/bryllup.gif
image_alt: key words here
---

<section class="intro">
	<div class="wrap">
		<center><h1>{{ page.title }}</h1></center> <br><br><br>
		<center><p>Your wedding anniversary is the most important day of life. It‘s a day filled with unforgettable moments, along with people you love and care about. As wedding photographers based in Oslo, Norway our aim is to transform this day into a special memory that can be cherished for a lifetime.</p></center><br><br><br>
		<center><img data-aos="fade-up" src="{{ page.featured_image }}" alt="{{ page.image_alt }}" /></center>
	</div>
</section>

<section class="portfolio">

	<div class="content-wrap portfolio-wrap">

		{% for bryllup in site.bryllups reversed %}

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
