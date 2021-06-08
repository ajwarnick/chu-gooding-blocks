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

    function updateLocation( l ) {
        setMeta( { ...meta, 'chugooding_meta_block_field_location': l } );
        setAttributes( {location: l} );
    }
    function updateYear( y ) {
        setMeta( { ...meta, 'chugooding_meta_block_field_year': y } );
        setAttributes( {year: y} );
    }
    function updateType( t ) {
        setMeta( { ...meta, 'chugooding_meta_block_field_type': t } );
        setAttributes( {type: t} );
        
    }
    function updateArea( a ) {
        setMeta( { ...meta, 'chugooding_meta_block_field_area': a } );
        setAttributes( {area: a} );  
    }
    function updateStatus( s ) {
        setMeta( { ...meta, 'chugooding_meta_block_field_status': s } );
        setAttributes( {status: s} );
    }
    function updateClient( c ){
        setMeta( { ...meta, 'chugooding_meta_block_field_client': c  } );
        setAttributes( {client: c} );
        
    }



	return (
		<div {...blockProps} className={ "project__header-meta-editor"}>
            <dl>
                <dt>Client</dt>
                <dd>
                    <RichText
                        tagName="span"
                        value={attributes.client}
                        className={"project__header-meta-client"}
                        // allowedFormats={["core/italic"]}
                        onChange={(client) => updateClient(client)}
                        placeholder={"project location... "}
                    />
                </dd>
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
                        onChange={(area) => updateArea(area)}
                        placeholder={"project area..."}
                    />
                </dd>
                {/* <dt>Status</dt>
                <dd>
                <RichText
                        tagName="span"
                        value={attributes.status}
                        className={"project__header-meta-status"}
                        // allowedFormats={["core/italic"]}
                        onChange={(status) => updateStatus(status)}
                        placeholder={"project status..."}
                    /> 
                </dd> */}
            </dl>
        </div>		
	);
}
