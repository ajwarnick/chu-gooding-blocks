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
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
	return (
		<div 
			{ ...useBlockProps.save({className: 'chu_gooding__featured-project ' + attributes.colorName}) } 
			data-colorName={attributes.colorName}
			data-color={attributes.color}
			data-title={attributes.title}
			data-project-id={attributes.id}
		>
			<a className="chu_gooding__featured-link" href={ attributes.link } rel="noopener noreferrer">
				{ attributes.featured_media === 0 ? <h1 className={"chu_gooding__featured-title"}>{ attributes.title }</h1> : <img data-featured-media={attributes.featured_media} src={ attributes.source_url } alt={ attributes.title } /> }
			</a>
					
		</div>
	);
}
