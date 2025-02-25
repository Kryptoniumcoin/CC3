<?php
/**
 * The header for our theme
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="fixed w-full top-0 z-50 bg-green-800 text-white py-4 transition-all duration-300 sticky-header">
    <div class="container mx-auto px-4 flex justify-between items-center">
        <div class="flex items-center space-x-2">
            <?php
            if (has_custom_logo()) {
                the_custom_logo();
            } else {
                echo '<svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 7h-3V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h3v3c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-9 0H4V4h7v3zm9 12H9v-7h11v7z"/></svg>';
                echo '<span class="text-2xl font-bold">CompareOnCall</span>';
            }
            ?>
        </div>
        <div class="flex items-center space-x-6">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'container' => false,
                'menu_class' => 'hidden md:flex space-x-6',
                'fallback_cb' => false,
            ));
            ?>
            <a href="tel:+1-8334615733" class="bg-green-600 px-6 py-2 rounded-full hover:bg-green-500 transition flex items-center space-x-2">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span class="hidden md:inline">+1-833-461-5733</span>
            </a>
        </div>
    </div>
</header>