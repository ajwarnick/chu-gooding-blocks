import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, Placeholder, SelectControl } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';

import './editor.scss';

let result;

export default function Edit({ attributes, isSelected, setAttributes, }) {
	const classes = 'chu_gooding__featured-project ';
	let result;


	if( !attributes.ets ){
		apiFetch( { path: '/wp/v2/ets' } ).then( posts => {
			setAttributes({ets: posts});
			
			if( !attributes.id ){
				result = attributes.ets.find(obj => obj.id == attributes.id);

				setAttributes({title: result.title.rendered})
				getFeaturerMedia(result.featured_media);
			}
		} );
	}

	const getFeaturerMedia = (id) => {
		if (id != 0){
			apiFetch( { path: '/wp/v2/media/'+ id } ).then( image => {
				setAttributes({url: image.media_details.sizes.full.source_url})
			})
		}

		if( id == 0 ){
			setAttributes({url: ''})
		}
	}

	const changeFeaturedEt = (id) => {
		result = attributes.ets.find(obj => {
			return obj.id == id
		});

		getFeaturerMedia( result.featured_media );

		setAttributes( { id: id, title: result.title.rendered, num: result.meta.chugooding_meta_block_field_etNumber } );
	}


	return (
		<div { ...useBlockProps({className: 'chu_gooding__featured-et ' + attributes.colorName}) }>
			<InspectorControls>
				<PanelBody title={ 'Featured Project' } >
					<PanelRow>
					{ attributes.ets ?
						<SelectControl
							label="Ets"
							value={ attributes.id }
							options={ attributes.ets.map( obj => (
								{
									value: obj.id, 
									label: obj.title.rendered
								} 
							))  }
							onChange={ ( id ) => { changeFeaturedEt( id ) } }
						/>
					:
						<span>Ets Loading...</span>
					}
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			{ !attributes.title ?
				<Placeholder instructions="Use block settings to select post to feature and background color"  label="Featured Project" />
			:
				<div>
					<div className={"chu_gooding__featured-et-meta"}>
						<div className={"chu_gooding__featured-et-meta-label"}>Et</div>
						<div className={"chu_gooding__featured-et-meta-number"}>{ attributes.num }</div>
					</div>
					<a className={"chu_gooding__featured-link"} >
						{ !attributes.url ?
							<h1 className={"chu_gooding__featured-title"}>{ attributes.title }</h1>
						:						
							<img  src={ attributes.url } alt={ attributes.title } /> 
						}	
					</a>
				</div>
			}
		</div>
	);
}
