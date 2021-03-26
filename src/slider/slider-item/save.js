import { RichText, InnerBlocks, getColorClassName } from '@wordpress/block-editor';
const save = ( { attributes } ) => {
	return (
		<div className="chu-gooding-slider-item__content" >
			<InnerBlocks.Content />
		</div>
	);
};

export default save;