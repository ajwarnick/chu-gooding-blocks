<?php
/**
 * Plugin Name: 	Chu , Gooding Blocks
 * Plugin URI:		https://github.com/ajwarnick/chu-gooding-blocks
 * Description: 	add custom Gutenberg blocks for Chu , Gooding Theme
 * Version: 		0.7.0
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

	function render_related($attributes){
		// 	<div className="chugooding__related">
		// 		<div className="related__projects">
		// 			<div className="related__projects-label">
		// 			Related Work
		// 			</div>
		// 			<div className="related__projects-projects" >
		// 				<ul className="projectData">
		// 					{projectArray.filter(value => attributes.relatedProjects.includes(value.id)).map((value,index)=>{
		// 						return <li data-id={value.id}><a href={value.link}>{value.title.rendered}</a></li>
		// 					})}
		// 				</ul>
		// 			</div>
		// 		</div>
		// 		<div className="related__ets">
		// 			<div className="related__ets-label">
		// 				Related <span className="test"></span>
		// 			</div>
		// 			<div className="related__ets-ets" >
		// 				<ul className="etData">
		// 					{etArray.filter(value => attributes.relatedEt.includes(value.id)).map((value,index)=>{
		// 						return <li data-id={value.id}><a href={value.link}><span className="et-number">014</span><span className="et-title">{ decodeEntities(value.title.rendered) }</span></a></li>
		// 					})}
		// 				</ul>
		// 			</div>
		// 		</div>
		// 	</div>

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
		$title = get_the_title($attributes['id']);
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
					if (has_post_thumbnail( $attributes['id'] ) ){
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