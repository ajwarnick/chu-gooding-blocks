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
    // const metaFieldValue = meta['chugooding_meta_block_field_location'];

    function updateLocation( l ) {
        setAttributes( {location: l} );
        setMeta( { ...meta, 'chugooding_meta_block_field_location': l } );
    }
    function updateYear( y ) {
        setAttributes( {year: y} );
        setMeta( { ...meta, 'chugooding_meta_block_field_year': y } );
    }
    function updateType( t ) {
        setAttributes( {type: t} );
        setMeta( { ...meta, 'chugooding_meta_block_field_type': t } );
    }
    function updateArea( a ) {
        setAttributes( {location: a} );
        setMeta( { ...meta, 'chugooding_meta_block_field_area': a } );
    }
    function updateStatus( s ) {
        setAttributes( {status: s} );
        setMeta( { ...meta, 'chugooding_meta_block_field_status': s } );
    }



	return (
		<div {...blockProps} className={ "project__header-meta-editor"}>
            <dl>
                <dt>Location</dt>
                <dd>
                    <RichText
                        tagName="span"
                        value={attributes.location}
                        className={"project__header-meta-location"}
                        // allowedFormats={["core/italic"]}
                        onChange={(location) => updateLocation(location)}
                        placeholder={"project location... "}
                    />
                </dd>
                <dt>Year</dt>
                <dd>
                    <RichText
                        tagName="span"
                        value={attributes.year}
                        className={"project__header-meta-year"}
                        // allowedFormats={["core/italic"]}
                        onChange={(year) => updateYear(year)}
                        placeholder={"project year..."}
                    />
                </dd>
                <dt>Type</dt>
                <dd>
                    <RichText
                        tagName="span"
                        value={attributes.type}
                        className={"project__header-meta-type"}
                        // allowedFormats={["core/italic"]}
                        onChange={(type) => updateType(type)}
                        placeholder={"project type..."}
                    />
                </dd>
                <dt>Area</dt>
                <dd>
                    <RichText
                        tagName="span"
                        value={attributes.area}
                        className={"project__header-meta-area"}
                        // allowedFormats={["core/italic"]}
                        onChange={(area) => updateArea(area)}
                        placeholder={"project area..."}
                    />
                </dd>
                <dt>Status</dt>
                <dd>
                <RichText
                        tagName="span"
                        value={attributes.status}
                        className={"project__header-meta-status"}
                        // allowedFormats={["core/italic"]}
                        onChange={(status) => updateStatus(status)}
                        placeholder={"project status..."}
                    /> 
                </dd>
            </dl>
        </div>		
	);
}
