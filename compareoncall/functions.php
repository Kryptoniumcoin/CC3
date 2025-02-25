<?php
if (!defined('ABSPATH')) exit;

function compareoncall_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));

    register_nav_menus(array(
        'primary' => __('Primary Menu', 'compareoncall'),
        'footer' => __('Footer Menu', 'compareoncall'),
    ));
}
add_action('after_setup_theme', 'compareoncall_setup');

function compareoncall_scripts() {
    // Enqueue Tailwind CSS with version based on file modification time
    $css_version = filemtime(get_template_directory() . '/assets/css/tailwind.css');
    wp_enqueue_style('compareoncall-tailwind', get_template_directory_uri() . '/assets/css/tailwind.css', array(), $css_version);
    
    // Enqueue theme styles
    wp_enqueue_style('compareoncall-style', get_stylesheet_uri(), array('compareoncall-tailwind'), '1.0.0');
    
    // Enqueue jQuery
    wp_enqueue_script('jquery');
    
    // Enqueue custom JavaScript with version based on file modification time
    $js_version = filemtime(get_template_directory() . '/assets/js/scripts.js');
    wp_enqueue_script('compareoncall-scripts', get_template_directory_uri() . '/assets/js/scripts.js', array('jquery'), $js_version, true);
}
add_action('wp_enqueue_scripts', 'compareoncall_scripts');

// Add custom image sizes if needed
add_image_size('testimonial-thumb', 150, 150, true);

// Add custom post types if needed
function compareoncall_register_post_types() {
    // Example: Testimonials post type
    register_post_type('testimonials', array(
        'labels' => array(
            'name' => __('Testimonials', 'compareoncall'),
            'singular_name' => __('Testimonial', 'compareoncall'),
        ),
        'public' => true,
        'has_archive' => false,
        'menu_icon' => 'dashicons-format-quote',
        'supports' => array('title', 'editor', 'thumbnail'),
    ));
}
add_action('init', 'compareoncall_register_post_types');

// Add custom fields if needed
function compareoncall_register_meta_boxes() {
    add_meta_box(
        'testimonial_details',
        __('Testimonial Details', 'compareoncall'),
        'compareoncall_testimonial_meta_box_callback',
        'testimonials'
    );
}
add_action('add_meta_boxes', 'compareoncall_register_meta_boxes');

function compareoncall_testimonial_meta_box_callback($post) {
    $location = get_post_meta($post->ID, '_testimonial_location', true);
    $rating = get_post_meta($post->ID, '_testimonial_rating', true);
    ?>
    <p>
        <label for="testimonial_location"><?php _e('Location:', 'compareoncall'); ?></label>
        <input type="text" id="testimonial_location" name="testimonial_location" value="<?php echo esc_attr($location); ?>">
    </p>
    <p>
        <label for="testimonial_rating"><?php _e('Rating (1-5):', 'compareoncall'); ?></label>
        <input type="number" id="testimonial_rating" name="testimonial_rating" min="1" max="5" value="<?php echo esc_attr($rating); ?>">
    </p>
    <?php
}

function compareoncall_save_meta_boxes($post_id) {
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;
    if ($parent_id = wp_is_post_revision($post_id)) {
        $post_id = $parent_id;
    }
    
    $fields = array(
        'testimonial_location',
        'testimonial_rating',
    );
    
    foreach ($fields as $field) {
        if (array_key_exists($field, $_POST)) {
            update_post_meta($post_id, '_' . $field, sanitize_text_field($_POST[$field]));
        }
    }
}
add_action('save_post', 'compareoncall_save_meta_boxes');