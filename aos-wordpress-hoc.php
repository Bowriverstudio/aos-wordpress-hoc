<?php
/**
 * Plugin Name:     Aos Wordpress Hoc
 * Description:     Example block written with ESNext standard and JSX support – build step required.
 * Version:         0.1.0
 * Author:          The WordPress Contributors
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 *
 * @package         AOS
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function create_block_aos_wordpress_hoc_block_init()
{
    $dir = dirname(__FILE__);

    $script_asset_path = "$dir/build/index.asset.php";
    if (!file_exists($script_asset_path)) {
        throw new Error(
            'You need to run `npm start` or `npm run build` for the "create-block/aos-wordpress-hoc" block first.'
        );
    }
    $index_js = 'build/index.js';
    $script_asset = require $script_asset_path;
    wp_register_script(
        'create-block-aos-wordpress-hoc-block-editor',
        plugins_url($index_js, __FILE__),
        $script_asset['dependencies'],
        $script_asset['version']
    );

    $editor_css = 'editor.css';
    wp_register_style(
        'create-block-aos-wordpress-hoc-block-editor',
        plugins_url($editor_css, __FILE__),
        array(),
        filemtime("$dir/$editor_css")
    );

    $style_css = 'style.css';
    wp_register_style(
        'create-block-aos-wordpress-hoc-block',
        plugins_url($style_css, __FILE__),
        array(),
        filemtime("$dir/$style_css")
    );

    register_block_type('create-block/aos-wordpress-hoc', array(
        'editor_script' => 'create-block-aos-wordpress-hoc-block-editor',
        'editor_style' => 'create-block-aos-wordpress-hoc-block-editor',
        'style' => 'create-block-aos-wordpress-hoc-block',
    ));

    // Conditionally enqueue the AOS - styles
    if (apply_filters('aos-enqueue-style', true)) {
        wp_enqueue_style(
            'aos-style',
            'https://unpkg.com/aos@next/dist/aos.css',
            '',
            'next'
        );
    }

    // AOS Script
    if (apply_filters('aos-enqueue-script', true)) {

        wp_enqueue_script('aos-js',
            'https://unpkg.com/aos@next/dist/aos.js',
            array(),
            'next',
            true
        );
    }

    // AOS init
    if (apply_filters('aos-enqueue-init-script', true)) {

        wp_enqueue_script('aos-init', plugins_url('build/aos.js', __FILE__), array('aos-js'), filemtime($dir . '/build/aos.js'), true);
    }

    // Backward compatiblity
    if (function_exists('register_pattern')) {
        if (is_admin()) {

            $pattern = include $dir . "/patterns/bootstrap-demo.php";
            $key = $pattern['key'];
            unset($pattern['key']);
            register_pattern($key, $pattern);
        }
    }

}
add_action('init', 'create_block_aos_wordpress_hoc_block_init');
