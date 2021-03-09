( function( blocks, editor, element ) {
	var el = element.createElement;
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yy = today.getFullYear();

    var dayPlaceholder = mm + '.' + dd + '.' + yy.toString().substring(2);

    let pad = (n, width, z) => {
        z = z || '0';
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
      }

	blocks.registerBlockType( 'chugooding/et-event', {
		title: 'C , G: Et Event', // The title of block in editor.
		icon: 'admin-comments', // The icon of block in editor.
		category: 'common', // The category of block in editor.
		attributes: {
            date: {
                type: 'string',
                default: dayPlaceholder
            },
            time: {
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