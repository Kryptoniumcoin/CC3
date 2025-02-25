<?php
/**
 * Timer section template part
 */
?>
<section class="bg-green-800 py-8">
    <div class="container mx-auto px-4 flex justify-center">
        <div class="bg-green-900/80 p-4 rounded-lg inline-block" id="timer">
            <p class="text-white text-sm mb-2">Limited Time Offer Ends In:</p>
            <div class="flex space-x-4">
                <div class="text-center">
                    <span class="text-3xl font-bold text-white" id="hours">02</span>
                    <p class="text-xs text-green-200">Hours</p>
                </div>
                <span class="text-3xl font-bold text-white">:</span>
                <div class="text-center">
                    <span class="text-3xl font-bold text-white" id="minutes">00</span>
                    <p class="text-xs text-green-200">Minutes</p>
                </div>
                <span class="text-3xl font-bold text-white">:</span>
                <div class="text-center">
                    <span class="text-3xl font-bold text-white" id="seconds">00</span>
                    <p class="text-xs text-green-200">Seconds</p>
                </div>
            </div>
        </div>
    </div>
</section>