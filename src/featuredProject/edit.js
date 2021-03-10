import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { ColorPalette, PanelBody, PanelRow, Placeholder, SelectControl } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';

import './editor.scss';

let projectArray = Array.from(Array(0));
let projects;
apiFetch( { path: '/wp/v2/projects' } ).then( posts => {
	projectArray = posts;
	projects = projectArray.map( obj => (
		{
			value: obj.id, 
			label: obj.title.rendered
		} 
	));
	projects.unshift({value: 0, label: ''})
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

	const changeFeaturedProject = (postID) => {

		var result = projectArray.find(obj => {
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
		<div 
			className={'chu_gooding__featured-project ' + attributes.colorName} 
			{ ...useBlockProps({className: 'chu_gooding__featured-project ' + attributes.colorName}) }
			data-colorName={attributes.colorName}
			data-color={attributes.color}
			data-title={attributes.title}
			data-project-id={attributes.id}
		>
			<InspectorControls>
				<PanelBody title={ 'Background Color' } >
					<PanelRow>
						<ColorPalette
							colors={ colors }
							value={ attributes.color }
							onChange={ changeBackgroundColor }
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody title={ 'Featured Project' } >
					<PanelRow>
						<SelectControl
							label="Projects"
							value={ attributes.id }
							options={ projects }
							onChange={ ( id ) => { changeFeaturedProject( id ) } }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			{ attributes.id === 0 ?
				<Placeholder instructions="Use block settings to select post to feature and background color"  label="Featured Project" />
			:
				<a className="chu_gooding__featured-link" >
					{ attributes.featured_media === 0 ? <h1 className={"chu_gooding__featured-title"}>{ attributes.title }</h1> : <img data-featured-media={attributes.featured_media} src={ attributes.source_url } alt={ attributes.title } /> }
				</a>
			}
		</div>
	);
}
