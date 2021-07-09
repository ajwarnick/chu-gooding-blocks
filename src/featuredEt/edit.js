import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, Placeholder, SelectControl } from '@wordpress/components';
import { Fragment, useState }  from '@wordpress/element';
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
	// const event = wp.data.select('core').getEntityRecords('taxonomy', 'collection').filter(x => x.slug === 'event')[0];
	let result;
	let eventDate;
	let eventTime;

	const [ isTitle, setTitle ] = useState( false );
	const [ ets, setEts ] = useState();

	if( !ets ){
		apiFetch( { path: '/wp/v2/ets?per_page=100' } ).then( posts => {
			// setAttributes({ets: posts});
			setEts(posts);

			if( attributes.id ){
				result = posts.find(obj => obj.id == attributes.id);
				setTitle(result.meta.chugooding_meta_block_field_etTitleVisibility);
				setAttributes({title: result.title.rendered})
				if(isTitle){
					getFeaturerMedia(result.featured_media);
				}
				
			}
		} );
	}

	const getFeaturerMedia = (id) => {
		if (id != 0){
			apiFetch( { path: '/wp/v2/media/'+ id } ).then( image => {
				setAttributes({url: image.media_details.sizes.full.source_url})
			})
		}

		if( id == 0 || isTitle){
			setAttributes({url: ''})
		}
	}

	const changeFeaturedEt = (id) => {
		
		result = ets.find(obj => {
			return obj.id == id
		});

		if(result){
			
			if(result.meta.chugooding_meta_block_field_etEventData){
				console.log(result.meta.chugooding_meta_block_field_etEventData);
				setAttributes( {
					event: true, 
					eventDate: result.meta.chugooding_meta_block_field_etEventData,
					eventTime: result.meta.chugooding_meta_block_field_etEventTime 
				} );
			}else{
				setAttributes( {event: false} );
			}

			// set if title is active
			console.log(result.meta.chugooding_meta_block_field_etTitleVisibility);
			setTitle(result.meta.chugooding_meta_block_field_etTitleVisibility);
	
			getFeaturerMedia( result.featured_media );
			setAttributes( { id: id, title: htmlEncode(result.title.rendered), num: result.meta.chugooding_meta_block_field_etNumber } );
		}	
	}


	return (
		<div { ...useBlockProps({className: 'chu_gooding__featured-et '}) }>
			<InspectorControls>
				<PanelBody title={ 'Featured Ets' } >
					<PanelRow>
					{ ets ?
						<SelectControl
							label="Ets"
							value={ attributes.id }
							options={ ets.map( obj => (
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

			{ !attributes.title && ets ?
				<Placeholder instructions="Use block settings to select post to feature and background color"  label="Featured Et" />
			:
				<div>
					<div className={"chu_gooding__featured-et-meta"}>
						<div className={"chu_gooding__featured-et-meta-label"}>Et</div>
						<div className={"chu_gooding__featured-et-meta-number"}>{ attributes.num }</div>
					</div>
					
				
					<a className={"chu_gooding__featured-link"} >
						{ !attributes.event ?
								<Fragment></Fragment>
							:	
								<div>
									<p className={"et__header-event"}>{ attributes.eventDate }</p> 
									<p className={"et__header-event"}>{ attributes.eventTime }</p>
								</div>
						}
						{ !attributes.url || isTitle ?
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
