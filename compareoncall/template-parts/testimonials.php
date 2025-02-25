<?php
/**
 * Testimonials section template part
 */
?>
<section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-green-800">What Our Customers Say</h2>
        <div class="relative max-w-4xl mx-auto testimonial-slider-container">
            <button class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition testimonial-prev">
                <svg class="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </button>
            <button class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition testimonial-next">
                <svg class="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>
            <div class="overflow-hidden">
                <div class="flex testimonial-slider">
                    <?php
                    $testimonials = array(
                        array(
                            'name' => 'Sarah Johnson',
                            'location' => 'California',
                            'text' => 'I saved over $800 on my annual premium thanks to CompareOnCall. The process was incredibly simple and their customer service was exceptional.',
                            'rating' => 5,
                            'image' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150'
                        ),
                        array(
                            'name' => 'Michael Rodriguez',
                            'location' => 'Texas',
                            'text' => 'After one call with CompareOnCall, I found better coverage for less money. Their experts really know their stuff!',
                            'rating' => 5,
                            'image' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150'
                        ),
                        array(
                            'name' => 'Emily Chen',
                            'location' => 'New York',
                            'text' => 'The best insurance comparison service I\'ve ever used. They found me a great rate and explained everything clearly.',
                            'rating' => 5,
                            'image' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150'
                        )
                    );

                    foreach ($testimonials as $testimonial) : ?>
                        <div class="w-full flex-shrink-0 px-4">
                            <div class="bg-white p-8 rounded-lg shadow-lg">
                                <div class="flex items-center mb-6">
                                    <img src="<?php echo esc_url($testimonial['image']); ?>" alt="<?php echo esc_attr($testimonial['name']); ?>" class="w-16 h-16 rounded-full object-cover mr-4">
                                    <div>
                                        <h3 class="font-semibold text-lg"><?php echo esc_html($testimonial['name']); ?></h3>
                                        <p class="text-gray-600"><?php echo esc_html($testimonial['location']); ?></p>
                                        <div class="flex mt-1">
                                            <?php for ($i = 0; $i < $testimonial['rating']; $i++) : ?>
                                                <svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                </svg>
                                            <?php endfor; ?>
                                        </div>
                                    </div>
                                </div>
                                <p class="text-gray-600 italic"><?php echo esc_html($testimonial['text']); ?></p>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
            <div class="flex justify-center mt-6 space-x-2 testimonial-dots">
                <?php foreach ($testimonials as $index => $testimonial) : ?>
                    <button class="w-3 h-3 rounded-full transition-colors duration-200 <?php echo $index === 0 ? 'bg-green-600' : 'bg-gray-300'; ?>" data-index="<?php echo $index; ?>"></button>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>