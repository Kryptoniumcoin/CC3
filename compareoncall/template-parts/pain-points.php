<?php
/**
 * Pain Points section template part
 */
?>
<section class="py-20 bg-white">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-green-800">Common Car Insurance Challenges & Our Solutions</h2>
        <div class="grid md:grid-cols-2 gap-8">
            <?php
            $pain_points = array(
                array(
                    'problem' => 'High Premium Costs',
                    'solution' => 'We compare rates from multiple providers to find you the best deal, potentially saving you hundreds annually.',
                    'icon' => '<svg class="w-12 h-12 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>'
                ),
                array(
                    'problem' => 'Complex Policy Terms',
                    'solution' => 'Our experts break down complex terms into simple language, ensuring you understand your coverage completely.',
                    'icon' => '<svg class="w-12 h-12 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>'
                ),
                array(
                    'problem' => 'Limited Coverage Options',
                    'solution' => 'Access to multiple carriers means more options to customize your coverage based on your needs.',
                    'icon' => '<svg class="w-12 h-12 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>'
                ),
                array(
                    'problem' => 'Poor Customer Service',
                    'solution' => '24/7 dedicated support team to assist you with claims, questions, and policy changes.',
                    'icon' => '<svg class="w-12 h-12 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>'
                )
            );

            foreach ($pain_points as $point) : ?>
                <div class="bg-gray-50 p-6 rounded-lg">
                    <div class="mb-4"><?php echo $point['icon']; ?></div>
                    <h3 class="text-xl font-semibold mb-2"><?php echo esc_html($point['problem']); ?></h3>
                    <p class="text-gray-600 mb-4"><?php echo esc_html($point['solution']); ?></p>
                    <a href="tel:+1-8334615733" class="text-green-600 hover:text-green-700 inline-flex items-center space-x-2">
                        <span>Get Your Solution Now</span>
                        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </a>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>