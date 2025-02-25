<?php
/**
 * Insurance Info section template part
 */
?>
<section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-green-800">Understanding Car Insurance Coverage</h2>
        <div class="grid md:grid-cols-2 gap-8">
            <div>
                <h3 class="text-xl font-semibold mb-4">Types of Coverage We Offer:</h3>
                <ul class="space-y-4">
                    <?php
                    $coverage_types = array(
                        "Liability Coverage",
                        "Collision Coverage",
                        "Comprehensive Coverage",
                        "Personal Injury Protection",
                        "Uninsured Motorist Coverage",
                        "Gap Insurance"
                    );

                    foreach ($coverage_types as $type) : ?>
                        <li class="flex items-start space-x-3">
                            <svg class="w-6 h-6 text-green-600 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span><?php echo esc_html($type); ?></span>
                        </li>
                    <?php endforeach; ?>
                </ul>
                <a href="tel:+1-8334615733" class="mt-8 inline-flex items-center space-x-2 text-green-600 hover:text-green-700">
                    <span>Get detailed coverage information</span>
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </a>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold mb-4">Why You Need Proper Coverage</h3>
                <ul class="space-y-4">
                    <li class="flex items-start space-x-3">
                        <svg class="w-6 h-6 text-green-600 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                        <span>Protects against financial losses from accidents</span>
                    </li>
                    <li class="flex items-start space-x-3">
                        <svg class="w-6 h-6 text-green-600 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <span>Meets state legal requirements</span>
                    </li>
                    <li class="flex items-start space-x-3">
                        <svg class="w-6 h-6 text-green-600 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                        <span>Covers passengers and other drivers</span>
                    </li>
                </ul>
                <a href="tel:+1-8334615733" class="mt-6 inline-block bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-500 transition">
                    Speak with an Expert Now
                </a>
            </div>
        </div>
    </div>
</section>