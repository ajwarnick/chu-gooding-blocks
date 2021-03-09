import { useBlockProps, RichText  } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { useEntityProp } from '@wordpress/core-data';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps();
    const postType = useSelect(
        ( select ) => select( 'core/editor' ).getCurrentPostType(),
        []
    );
    const [ meta, setMeta ] = useEntityProp(
        'postType',
        postType,
        'meta'
    );
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yy = today.getFullYear();

    var dayPlaceholder = mm + '.' + dd + '.' + yy.toString().substring(2);
    // const metaFieldValue = meta['chugooding_meta_block_field_etEventData'];

    function updateDate( d ) {
        setAttributes( {date: d} );
        setMeta( { ...meta, 'chugooding_meta_block_field_etEventData': d } );
    }
    function updateTime( t ) {
        setAttributes( {time: t} );
        setMeta( { ...meta, 'chugooding_meta_block_field_etEventTime': t } );
    }


	return (
		<div {...blockProps}>
            <p className={"et__header-event"}>
                <RichText
                    tagName="span"
                    value={attributes.date}
                    className={"et__header-event-date"}
                    onChange={(date) => updateDate(date)}
                    placeholder={"DATE (Formated like this: " + dayPlaceholder}
                />
            </p>
            <p className={"et__header-event"}>
                <RichText
                    tagName="span"
                    value={attributes.time}
                    className={"et__header-event-time"}
                    allowedFormats={["core/italic"],["core/bold"]}
                    onChange={(time) => updateTime(time)}
                    placeholder={"TIME (Formated like this: 1 pm PST"}
                />
            </p>
        </div>		
	);
}
