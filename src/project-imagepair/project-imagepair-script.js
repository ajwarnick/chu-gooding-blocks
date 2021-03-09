( function( blocks, element, blockEditor ) {
  var el = element.createElement;
  var InnerBlocks = blockEditor.InnerBlocks;
  var useBlockProps = blockEditor.useBlockProps;

  blocks.registerBlockType( 'chugooding/project-imagepair', {
    title: 'C , G: Project Image Pair', // The title of block in editor.
		icon: 'admin-comments', // The icon of block in editor.
		category: 'common', // The category of block in editor.

      edit: function() {
          var blockProps = useBlockProps();
          const ALLOWED_BLOCKS = [ 'core/image', 'core/paragraph' ];
          return el(
              'div',
              blockProps,
              el( InnerBlocks, 
                allowedBlocks: ALLOWED_BLOCKS 
              )
          );
      },

      save: function() {
          var blockProps = useBlockProps.save();

          return el(
              'div',
              blockProps,
              el( InnerBlocks.Content )
          );
      },
  } );
} (
  window.wp.blocks,
  window.wp.element,
  window.wp.blockEditor,
) );