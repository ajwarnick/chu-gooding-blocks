<?php
/**
 * Plugin Name: 	Chu , Gooding Blocks
 * Plugin URI:		https://github.com/ajwarnick/chu-gooding-blocks
 * Description: 	add custom Gutenberg blocks for Chu , Gooding Theme
 * Version: 		0.9.10
 *
 * Author:			Anthony Warnick
 * Author URI:		https://anthonywarnick.com/
 *
 * GitHub Plugin URI: https://github.com/ajwarnick/chu-gooding-blocks
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
			'render_callback' => 'render_related',
		)
	);

	function render_related($attributes){

		ob_start();
		echo 	'<div class="chugooding__related">';
		echo 		'<div class="related__projects">';
		echo 			'<div class="related__projects-label"> Related Work </div>';
		echo 			'<div class="related__projects-projects" >';
		echo 				'<ul class="projectData">';
								foreach ($attributes['relatedProjects'] as &$projectID) {
									echo '<li data-id="'.$projectID.'"><a href="'.get_permalink($projectID).'">'.get_the_title($projectID).'</a></li>';
								}
		echo 				'</ul>';
		echo 			'</div>';
		echo 		'</div>';
		echo 		'<div class="related__ets">';
		echo 			'<div class="related__ets-label"> Related <span class="etSVG"></span> </div>';
		echo 			'<div class="related__ets-ets" >';
		echo 				'<ul class="etData">';
								foreach ($attributes['relatedEt'] as &$etID) {
									echo '<li data-id="'.$etID.'"><a href="'.get_permalink($etID).'"><span class="et-number">'.get_post_meta( $etID, 'chugooding_meta_block_field_etNumber', true ).'</span><span class="et-title">'.get_the_title($etID).'</span></a></li>';
								}
		echo 				'</ul>';
		echo 			'</div>';
		echo 		'</div>';
		echo 	'</div>';
		return ob_get_clean();
	}

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
			'render_callback' => 'render_featured_project',
		)
	);

	function render_featured_project ($attributes){

		$featured_img_url = get_the_post_thumbnail_url($attributes['id'],'full');
		$title = get_the_title($attributes['id']);
		$color_name = $attributes['colorName'];
		$permalink = get_permalink( $attributes['id'] );

		ob_start();
		echo	'<div class="chu_gooding__featured-project '.$color_name.'" >';
		echo		'<a class="chu_gooding__featured-link" href="'.$permalink.'">';
						if (has_post_thumbnail( $attributes['id'] ) ){
							echo '<img  src='.$featured_img_url.' alt='.$title.' /> ';
						}else{
							echo '<h1 class="chu_gooding__featured-title">'.$title.'</h1>';
						}
		echo 		'</a>';
		echo 	'</div>';
		return ob_get_clean();
	}


	// chu-gooding/featured-et
	register_block_type(
		'chu-gooding/featured-et',
		array(
			'editor_script' => 'chugooding-block-editor',
			'editor_style'  => 'chugooding-block-editor',
			'style'         => 'chugooding-block',
			'render_callback' => 'render_featured_et',
		)
	);


	function render_featured_et($attributes){
		$featured_img_url = get_the_post_thumbnail_url($attributes['id'],'full');
		$et_number =  get_post_meta( $attributes['id'], 'chugooding_meta_block_field_etNumber', true );
		

		$et_eventDate =  get_post_meta( $attributes['id'], 'chugooding_meta_block_field_etEventData', true );
		$et_eventTime =  get_post_meta( $attributes['id'], 'chugooding_meta_block_field_etEventTime', true );

		$isEvent = $et_eventDate !== '' ? true : false;
		$title = get_the_title($attributes['id']);
		$title_visiblity =  get_post_meta( $attributes['id'], 'chugooding_meta_block_field_etTitleVisibility', true );
		$permalink = get_permalink( $attributes['id'] );


		ob_start();
		echo '<div class="chu_gooding__featured-et">';
			echo '<div class="chu_gooding__featured-et-meta">';
				echo '<div class="chu_gooding__featured-et-meta-label">Et</div>';
				if(!empty($et_number)){
					echo '<div class="chu_gooding__featured-et-meta-number">'.$et_number.'</div>';
				}
			echo '</div>';
			echo '<a class="chu_gooding__featured-link" href="'.$permalink.'">';
				if($isEvent){
					echo '<p class="et__header-event">'.$et_eventDate.'</p>';
					echo '<p class="et__header-event">'.$et_eventTime.'</p>';
				}

				if ( has_post_thumbnail( $attributes['id'] ) && !$title_visiblity ){
					echo '<img  src='.$featured_img_url.' alt='.$title.' /> ';
				}else{
					echo '<h1 class="chu_gooding__featured-et-title">'.$title.'</h1>';
				}
			echo '</a>';
		echo '</div>';
		return ob_get_clean();
	}

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



function chu_gooding_block_category( $categories, $post ) {
	return array_merge(
		array(
			array(
				'slug' => 'chu-gooding-blocks',
				'title' => __( 'Chu , Gooding: Blocks', 'chu-gooding-blocks' ),
			),
		),
		$categories
	);
}
add_filter( 'block_categories', 'chu_gooding_block_category', 10, 2);
