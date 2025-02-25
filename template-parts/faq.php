<?php
/**
 * FAQ section template part
 */
?>
<section id="faq" class="py-20 bg-white">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-green-800">Frequently Asked Questions</h2>
        <div class="max-w-3xl mx-auto">
            <?php
            $faqs = array(
                array(
                    'question' => 'What information do I need to get a car insurance quote?',
                    'answer' => 'To get a quote, you\'ll need your vehicle information (make, model, year), driving history, personal information (name, address, date of birth), and current insurance details if any.'
                ),
                array(
                    'question' => 'What types of car insurance coverage are required in the USA?',
                    'answer' => 'Most states require liability insurance at minimum, which includes bodily injury and property damage coverage. Some states also require personal injury protection (PIP) or uninsured/underinsured motorist coverage.'
                ),
                array(
                    'question' => 'How can I lower my car insurance premium?',
                    'answer' => 'You can lower your premium by maintaining a good driving record, bundling policies, choosing a higher deductible, installing safety features, and taking advantage of available discounts like good student or safe driver discounts.'
                ),
                array(
                    'question' => 'How quickly can I get car insurance coverage?',
                    'answer' => 'With CompareOnCall, you can get coverage immediately after selecting and purchasing your policy. Our experts will guide you through the process and ensure you have all necessary documentation.'
                ),
                array(
                    'question' => 'What factors affect my car insurance rates?',
                    'answer' => 'Insurance rates are affected by factors including your driving history, age, location, vehicle type, credit score (in most states), annual mileage, and the coverage types and limits you choose.'
                )
            );

            foreach ($faqs as $index => $faq) : ?>
                <div class="mb-4">
                    <button class="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition faq-button">
                        <span class="font-semibold text-left"><?php echo esc_html($faq['question']); ?></span>
                        <svg class="w-5 h-5 text-green-600 transform transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </button>
                    <div class="faq-answer">
                        <div class="p-4 bg-white border border-gray-100 rounded-b-lg">
                            <p class="text-gray-600"><?php echo esc_html($faq['answer']); ?></p>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>