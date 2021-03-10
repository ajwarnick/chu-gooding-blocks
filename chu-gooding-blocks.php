<?php
/**
 * Plugin Name: 	Chu , Gooding Blocks
 * Plugin URI:		https://example.com/plugins/the-basics/
 * Description: 	add custom Gutenberg blocks for Chu , Gooding
 * Version: 		1.2.0
 * 
 * Author:			Anthony Warnick
 * Author URI:		https://anthonywarnick.com/
 * 
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     blocks
 *
 * @package         chu-gooding
 */

function chu_gooding_blocks_init() {
	$dir = __DIR__;

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "chu-gooding/blocks" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'chugooding-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);

	$editor_css = 'build/index.css';
	wp_register_style(
		'chugooding-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'chugooding-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	// chu-gooding/other-list
	register_block_type(
		'chu-gooding/other-list',
		array(
			'editor_script' => 'chugooding-block-editor',
			'editor_style'  => 'chugooding-block-editor',
			'style'         => 'chugooding-block',
		)
	);

	// chu-gooding/project-image-pair
	register_block_type(
		'chu-gooding/project-image-pair',
		array(
			'editor_script' => 'chugooding-block-editor',
			'editor_style'  => 'chugooding-block-editor',
			'style'         => 'chugooding-block',
		)
	);

	// chu-gooding/project-paragraph
	register_block_type(
		'chu-gooding/project-paragraph',
		array(
			'editor_script' => 'chugooding-block-editor',
			'editor_style'  => 'chugooding-block-editor',
			'style'         => 'chugooding-block',
		)
	);

	// chu-gooding/to-top
	register_block_type(
		'chu-gooding/to-top',
		array(
			'editor_script' => 'chugooding-block-editor',
			'editor_style'  => 'chugooding-block-editor',
			'style'         => 'chugooding-block',
		)
	);

	// chu-gooding/related
	register_block_type(
		'chu-gooding/related',
		array(
			'editor_script' => 'chugooding-block-editor',
			'editor_style'  => 'chugooding-block-editor',
			'style'         => 'chugooding-block',
		)
	);

	// chu-gooding/project-test
	register_block_type(
		'chu-gooding/project-test',
		array(
			'editor_script' => 'chugooding-block-editor',
			'editor_style'  => 'chugooding-block-editor',
			'style'         => 'chugooding-block',
		)
	);

	// chu-gooding/project-credits
	register_block_type(
		'chu-gooding/project-credits',
		array(
			'editor_script' => 'chugooding-block-editor',
			'editor_style'  => 'chugooding-block-editor',
			'style'         => 'chugooding-block',
		)
	);

	// chu-gooding/featured-project
	register_block_type(
		'chu-gooding/featured-project',
		array(
			'editor_script' => 'chugooding-block-editor',
			'editor_style'  => 'chugooding-block-editor',
			'style'         => 'chugooding-block',
		)
	);

	// chu-gooding/featured-et
	register_block_type(
		'chu-gooding/featured-et',
		array(
			'editor_script' => 'chugooding-block-editor',
			'editor_style'  => 'chugooding-block-editor',
			'style'         => 'chugooding-block',
		)
	);

	// chu-gooding/et-event-date-and-time
	register_block_type(
		'chu-gooding/et-event-date-and-time',
		array(
			'editor_script' => 'chugooding-block-editor',
			'editor_style'  => 'chugooding-block-editor',
			'style'         => 'chugooding-block',
		)
	);
	
}
add_action( 'init', 'chu_gooding_blocks_init' );
