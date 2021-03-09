( function( blocks, editor, element ) {
	var el = element.createElement;

	blocks.registerBlockType( 'chugooding/project-credits', {
		title: 'C , G: Project Credits', // The title of block in editor.
		icon: 'admin-comments', // The icon of block in editor.
		category: 'common', // The category of block in editor.
        supports: {
            // Turn off ability to edit HTML of block content
            html: false,
            // Turn off reusable block feature
            reusable: false
          },
		attributes: {
            credits: {
                type: 'string',
                default: 'dayPlaceholder'
            },
            collaborators: {
                type: 'string',
                default: "1 pm PST"
            }
        },
		edit: function( props ) {
            return (
                el( 'div', { className: props.className },
                    el(
                        editor.RichText,
                        {
                            tagName: 'div',
                            className: 'et-event-date',
                            value: props.attributes.date,
                            onChange: function( content ) {
                                props.setAttributes( { date: content } );
                            }
                        }
                    ),
                    el(
                        editor.RichText,
                        {
                            tagName: 'div',
                            className: 'et-event-time',
                            value: props.attributes.time,
                            onChange: function( content ) {
                                props.setAttributes( { time: content } );
                            }
                        }
                    )
                )
            );
        },
		save: function( props ) {
            return (
                el( 'div', { className: props.className },
                    el( editor.RichText.Content, {
                        tagName: 'p',
                        className: 'et-event-date',
                        value: props.attributes.date,
                    } ),
                    el( editor.RichText.Content, {
                        tagName: 'p',
                        className: 'et-event-time',
                        value: props.attributes.time,
                    } ),
                )
            );
        },
	} );
} )( window.wp.blocks, window.wp.editor, window.wp.element );