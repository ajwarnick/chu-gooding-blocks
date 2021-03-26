import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
import { InnerBlocks, RichText } from '@wordpress/block-editor';


export default compose( [

	withSelect( ( select, props ) => {
		const {
			getSelectedBlockClientId,
			getBlockRootClientId,
			getBlocks,
		} = select( 'core/block-editor' );

		const hasSelectedChildren = getBlocks( props.clientId ).filter( ( elem ) => elem.clientId === getSelectedBlockClientId() || elem.clientId === getBlockRootClientId( getSelectedBlockClientId() ) );

		return {
			isEditing: getSelectedBlockClientId() === props.clientId || hasSelectedChildren.length > 0,
		};
	} ),

	applyWithColors,

] )( AccordionItemEdit );