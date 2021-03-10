import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { ColorPalette, PanelBody, PanelRow, Placeholder, SelectControl } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';

import './editor.scss';

let etArray = Array.from(Array(0));
let ets;
apiFetch( { path: '/wp/v2/ets' } ).then( posts => {
	etArray = posts;
	ets = etArray.map( obj => (
		{
			value: obj.id, 
			label: obj.title.rendered
		} 
	));
	ets.unshift({value: 0, label: ''})
} );



export default function Edit({ attributes, isSelected, setAttributes, }) {
	const classes = 'chu_gooding__featured-project ';

	const colors = [
		{ name: 'red', color: '#cd4b34' },
		{ name: 'white', color: '#fff' },
		{ name: 'green', color: '#8fb8b7' },
		{ name: 'gray', color: '#ada9a7' },
		{ name: 'tan', color: '#af9070' },
	];

	const changeBackgroundColor = (c) => {
		const result = colors.find( ({ color }) => color === c );
		setAttributes( { color: result.color } );
		setAttributes( { colorName: result.name } );
	}

	const changeFeaturedEt = (postID) => {

		var result = etArray.find(obj => {
			return obj.id == postID
		})
		
		if( result.featured_media !== 0){
			apiFetch( { path: '/wp/v2/media/'+ result.featured_media } ).then( image => {
				setAttributes( { height: image.media_details.sizes.full.height, width: image.media_details.sizes.full.width, source_url: image.media_details.sizes.full.source_url } )
			})
		}

		setAttributes( { title: result.title.rendered, featured_media: result.featured_media, id: parseInt(postID), link: result.link} ) 
	}


	return (
		<div { ...useBlockProps({className: 'chu_gooding__featured-et ' + attributes.colorName}) }>
			<InspectorControls>
				<PanelBody title={ 'Featured Project' } >
					<PanelRow>
						<SelectControl
							label="Projects"
							value={ attributes.id }
							options={ ets }
							onChange={ ( id ) => { changeFeaturedEt( id ) } }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			{ attributes.id === 0 ?
				<Placeholder instructions="Use block settings to select post to feature and background color"  label="Featured Project" />
			:
				<div>
					<div className={"chu_gooding__featured-et-meta"}>
						<div className={"chu_gooding__featured-et-meta-label"}>Et</div>
						<div className={"chu_gooding__featured-et-meta-number"}>{ attributes.et_number }</div>
						<div className={"hidden"}>
							<div className={"chu_gooding__featured-et-meta-id"}>{ attributes.id }</div>
							<div className={"chu_gooding__featured-et-meta-title"}>{ attributes.title }</div>
							<div className={"chu_gooding__featured-et-meta-featured_media"}>{ attributes.featured_media }</div>
						</div>
					</div>
					<a className={"chu_gooding__featured-link"} href={ attributes.link }>
						{ attributes.featured_media === 0 ? <h1 className={"chu_gooding__featured-et-title"}>{ attributes.title }</h1> : <img src={ attributes.source_url } width={attributes.width} height={attributes.height} alt={ attributes.title } /> }
					</a>
				</div>
				
			}
		</div>
	);
}
