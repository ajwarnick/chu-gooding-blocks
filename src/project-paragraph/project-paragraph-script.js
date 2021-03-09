( function( blocks, editor, element ) {
	var el = element.createElement;
    var direction = 'up';
	blocks.registerBlockType( 'chugooding/project-paragraph', {
		title: 'C , G: Project Paragraph', // The title of block in editor.
		icon: 'admin-comments', // The icon of block in editor.
		category: 'common', // The category of block in editor.
		attributes: {
            paragraph: {
                type: 'string',
                default: ''
            }
        },
		edit: function( props ) {
            return (
                el( 'div', { className: 'project__paragraph' },
                    el(
                        editor.RichText,
                        {
                            tagName: 'p',
                            className: direction,
                            value: props.attributes.paragraph,
                            onChange: function( content ) {
                                props.setAttributes( { paragraph: content } );
                            }
                        }
                    )
                )
            );
        },
		save: function( props ) {
            return (
                el( 'div', { className: 'project__paragraph' },
                    el( editor.RichText.Content, {
                        tagName: 'p',
                        className: direction,
                        value: props.attributes.paragraph,
                    } )
                )
            );
        },
	} );
} )( window.wp.blocks, window.wp.editor, window.wp.element );