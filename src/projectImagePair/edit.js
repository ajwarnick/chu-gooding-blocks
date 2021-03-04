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
import { useBlockProps, MediaUpload } from '@wordpress/block-editor';

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
export default function Edit( { attributes, setAttributes } ) {
	function selectImageLeft(value) {
		setAttributes({ imageLeft: value.sizes.full.url })
	}

	function selectImageRight(value) {
		setAttributes({ imageRight: value.sizes.full.url })
	}
	
	return (
		<div { ...useBlockProps() } className="project__imagePair">
			<div className="project__pairLeft">
				<MediaUpload 
					onSelect={selectImageLeft}
					render={ ({open}) => {
						return <img 
							src={attributes.imageLeft}
							onClick={open}
							/>;
					}}
				/>
			</div>
            <div className="project__pairRight">
				<MediaUpload 
					onSelect={selectImageRight}
					render={ ({open}) => {
						return <img 
							src={attributes.imageRight}
							onClick={open}
							/>;
					}}
				/>
			</div>
        </div>
	);
}
