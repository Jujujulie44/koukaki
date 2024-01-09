<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    wp_enqueue_style('child-style', get_stylesheet_directory_uri() . '/assets/css/style.css', array(), time()); 

}

// Get customizer options form parent theme
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // prevent update to child theme mods
    }, 10, 2 );
    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );

 // Enqueue le script Swiper

 wp_enqueue_script('swiper', 'https://cdn.jsdelivr.net/npm/swiper@6.8.4/swiper-bundle.min.js', array('jquery'), '6.8.4', true);
 // Enqueue le script du thème enfant
 wp_enqueue_script('script', get_theme_file_uri('/js/script.js'), array('jquery', 'swiper'), '1.0.0', true);

}

add_action('wp_enqueue_scripts', 'theme_enqueue_styles');
// Synchronisation des modifications entre le thème enfant et le thème parent
if (get_stylesheet() !== get_template()) {
    add_filter('pre_update_option_theme_mods_' . get_stylesheet(), function ($valeur, $ancienne_valeur) {
        update_option('theme_mods_' . get_template(), $valeur);
        return $ancienne_valeur;
    }, 10, 2);
    add_filter('pre_option_theme_mods_' . get_stylesheet(), function ($par_defaut) {
        return get_option('theme_mods_' . get_template(), $par_defaut);
    });
}
?>
