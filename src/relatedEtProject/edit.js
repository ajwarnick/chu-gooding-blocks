/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { CheckboxControl, PanelBody, PanelRow } from '@wordpress/components';
// import { useState, Fragment } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
// const { withSelect, select } = wp.data;
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */



let projectArray = Array.from(Array(0));
apiFetch( { path: '/wp/v2/project' } ).then( posts => {
	projectArray = posts;
} );

let etArray = Array.from(Array(0));
apiFetch( { path: '/wp/v2/et' } ).then( posts => {
	etArray = posts;
} );
export default function Edit({ attributes, isSelected, setAttributes, }) {

	// if( this.state.posts.length > 0 ) {
	// 	const loading = __( 'We have %d posts. Choose one.' );
	// 	let output = loading.replace( '%d', this.state.posts.length );
	// 	console.log(output);
	// 	this.state.posts.forEach((post) => {
	// 	  options.push({value:post.id, label:post.title.rendered});
	// 	});
	// } else {
	// 	 output = __( 'No posts found. Please create some first.' );
	// }

	// let posts = withSelect(select => select('core').getEntityRecords('postType', 'post') );
	
	// console.log(wp.data.select("core").getEntityRecords('postType', 'et', { per_page: -1 }) );


	return (
		<div { ...useBlockProps() }>
			<InspectorControls>
				<PanelBody title={ __( 'Select Related Projects', 'jsforwpblocks' ) } initialOpen={ false } >
					<PanelRow>This is the instructions</PanelRow>
					<div className="related__PanelBox">
						{projectArray.map((value,index) => {
							// checked={ attributes.relatedProjects.includes(value) }
							return <CheckboxControl label={ value.title.rendered } onChange={ (c) => {console.log(c)} } checked={ true } />
						})}
					</div>
				</PanelBody>
				<PanelBody title={ __( 'Select Related Ets', 'jsforwpblocks' ) } initialOpen={ false } >	
					<PanelRow>This is the instructions</PanelRow>
					<div className="related__PanelBox">
						{etArray.map((value,index) => {
							return <CheckboxControl label={ value.title.rendered } onChange={ (c) => {console.log(c)} } checked={ true } />
						})}
					</div>
				</PanelBody>
			</InspectorControls>
			<div class="chugooding__related">
				<div class="related__projects">
					<div class="related__projects-label">
					Related Work
					</div>
					<div class="related__projects-projects">
					<ul>
						<li><a href="#">Project Title</a></li>
						<li><a href="#">Project Title</a></li>
						<li><a href="#">Project Title</a></li>
						<li><a href="#">Project Title</a></li>
					</ul>
					</div>
				</div>
				<div class="related__ets">
					<div class="related__ets-label">
						Related <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 5.07097H8.86622L9.23411 12H11V0H0V5.07097Z" fill="#1F1F1F"/></svg>
					</div>
					<div class="related__ets-ets">
					<ul>
						<li>
						<a href="#">
							<span class="et-number">014</span>
							<span class="et-title">Fun is all around</span>
						</a>
						</li>
					</ul>
					</div>
				</div>
			</div>
		</div>
	);
}


