import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, Placeholder, SelectControl } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';

const htmlEncode = (str) => {
	if(str && typeof str === 'string') {
		var element = document.createElement('div');
		// strip script/html tags
		str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
		str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
		element.innerHTML = str;
		str = element.textContent;
		element.textContent = '';
	  }
  
	  return str;
}

import './editor.scss';

export default function Edit({ attributes, isSelected, setAttributes, }) {
	const classes = 'chu_gooding__featured-project ';
	const event = wp.data.select('core').getEntityRecords('taxonomy', 'collection').filter(x => x.slug === 'event')[0];
	let result;
	let eventDate;
	let eventTime;

	if( !attributes.ets ){
		apiFetch( { path: '/wp/v2/ets?per_page=100' } ).then( posts => {
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

		if( result.collection.indexOf(event.id) >= 0) {
			
			setAttributes( {
				event: true, 
				eventDate: result.meta.chugooding_meta_block_field_etEventData,
				eventTime: result.meta.chugooding_meta_block_field_etEventTime 
			} );

		}else{
			setAttributes( {event: false} );
		}

		getFeaturerMedia( result.featured_media );

		setAttributes( { id: id, title: htmlEncode(result.title.rendered), num: result.meta.chugooding_meta_block_field_etNumber } );
	}


	return (
		<div { ...useBlockProps({className: 'chu_gooding__featured-et ' + attributes.colorName}) }>
			<InspectorControls>
				<PanelBody title={ 'Featured Ets' } >
					<PanelRow>
					{ attributes.ets ?
						<SelectControl
							label="Ets"
							value={ attributes.id }
							options={ attributes.ets.map( obj => (
								{
									value: obj.id, 
									label: htmlEncode(obj.title.rendered)
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
				<Placeholder instructions="Use block settings to select post to feature and background color"  label="Featured Et" />
			:
				<div>
					<div className={"chu_gooding__featured-et-meta"}>
						<div className={"chu_gooding__featured-et-meta-label"}>Et</div>
						<div className={"chu_gooding__featured-et-meta-number"}>{ attributes.num }</div>
					</div>
					
						{ !attributes.event ?
							<a className={"chu_gooding__featured-link"} >
								{ !attributes.url ?
									<h1 className={"chu_gooding__featured-title"}>{ attributes.title }</h1>
								:						
									<img  src={ attributes.url } alt={ attributes.title } /> 
								}	
							</a>
						:
							<a className={"chu_gooding__featured-link"} >
								<div>
									<p className={"et__header-event"}>{ attributes.eventDate }</p> 
									<p className={"et__header-event"}>{ attributes.eventTime }</p>
									<h3 className={"et__header-event__title"}>{ attributes.title }</h3>
								</div>
							</a>
						}
				</div>
			}
		</div>
	);
}
