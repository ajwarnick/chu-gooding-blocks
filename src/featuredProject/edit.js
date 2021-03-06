import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { ColorPalette, PanelBody, PanelRow, Placeholder, SelectControl } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';

import './editor.scss';

const htmlEncode = (str) => {
	if (str && typeof str === 'string') {
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

export default function Edit({ attributes, isSelected, setAttributes, }) {

	const classes = 'chu_gooding__featured-project ';
	const colors = [
		{ name: 'red', color: '#cd4b34' },
		{ name: 'white', color: '#fff' },
		{ name: 'green', color: '#8fb8b7' },
		{ name: 'gray', color: '#ada9a7' },
		{ name: 'tan', color: '#af9070' },
	];

	if (!attributes.colorName) {
		setAttributes({ color: colors[0].color, colorName: colors[0].name });
	}

	let result;

	if (!attributes.projects) {
		apiFetch({ path: '/wp/v2/projects?per_page=100' }).then(posts => {
			setAttributes({ projects: posts });

			if (!attributes.id) {
				result = attributes.projects.find(obj => obj.id == attributes.id);

				setAttributes({ title: htmlEncode(result.title.rendered) })
				getFeaturerMedia(result.featured_media);
			}

		});
	}

	const getFeaturerMedia = (id) => {
		if (id != 0) {
			apiFetch({ path: '/wp/v2/media/' + id }).then(image => {
				setAttributes({ url: image.media_details.sizes.full.source_url })
			})
		}

		if (id == 0) {
			setAttributes({ url: '' })
		}
	}

	const changeBackgroundColor = (c) => {
		const r = colors.find(({ color }) => color === c);
		setAttributes({ color: r.color, colorName: r.name });
	}

	const changeFeaturedProject = (id) => {
		console.log(id);
		result = attributes.projects.find(obj => {
			return obj.id == id
		});

		getFeaturerMedia(result.featured_media);

		setAttributes({ id: id, title: htmlEncode(result.title.rendered) });
	}

	return (
		<div
			{...useBlockProps()}
			className={'chu_gooding__featured-project ' + attributes.colorName}
		>
			<InspectorControls>
				<PanelBody title={'Background Color'} >
					<PanelRow>
						<ColorPalette
							colors={colors}
							value={attributes.color}
							onChange={changeBackgroundColor}
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody title={'Featured Project'} >
					<PanelRow>
						{attributes.projects ?
							<SelectControl
								label="Projects"
								value={attributes.id}
								options={attributes.projects.map(obj => (
									{
										value: obj.id,
										label: obj.title.rendered
									}
								))}
								onChange={changeFeaturedProject}
							/>
							:
							<span>Projects Loading...</span>
						}
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			{!attributes.title ?
				<Placeholder instructions="Use block settings to select post to feature and background color" label="Featured Project" />
				:
				<a className="chu_gooding__featured-link" >
					{!attributes.url ?
						<h1 className={"chu_gooding__featured-title"}>{attributes.title}</h1>
						:
						<img src={attributes.url} alt={attributes.title} />
					}
				</a>
			}
		</div>
	);
}

