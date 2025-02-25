<?php get_header(); ?>

<section class="relative h-[600px] mt-16">
    <div class="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80" alt="Luxury car" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-green-900/70"></div>
    </div>
    <div class="relative container mx-auto px-4 h-full flex items-center">
        <div class="max-w-2xl text-white">
            <h1 class="text-4xl md:text-5xl font-bold mb-6">Get the Best Car Insurance Rates in the USA</h1>
            <p class="text-xl mb-8">Don't overpay for car insurance. Compare and save with CompareOnCall.</p>
            <a href="tel:+1-8334615733" class="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-400 transition inline-flex items-center space-x-2">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>Get Quote</span>
            </a>
        </div>
    </div>
</section>

<?php get_template_part('template-parts/timer'); ?>
<?php get_template_part('template-parts/insurance-info'); ?>
<?php get_template_part('template-parts/pain-points'); ?>
<?php get_template_part('template-parts/why-choose-us'); ?>
<?php get_template_part('template-parts/testimonials'); ?>
<?php get_template_part('template-parts/faq'); ?>
<?php get_template_part('template-parts/about'); ?>

<?php get_footer(); ?>