import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { CheckboxControl, PanelBody, PanelRow, Placeholder } from '@wordpress/components';
import { Fragment }  from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import {decodeEntities} from './decodeEntities.js';
import './editor.scss';


export default function Edit({ attributes, isSelected, setAttributes, }) {
	let projectArray = Array.from(Array(0));
	apiFetch( { path: '/wp/v2/projects' } ).then( posts => {
		projectArray = posts;
	} );

	let etArray = Array.from(Array(0));
	apiFetch( { path: '/wp/v2/ets' } ).then( posts => {
		etArray = posts;
	} );

	const EtList = () => {
		if( attributes.relatedEt.length > 0 ){
			return (
				<Fragment>
					{etArray.filter(value => attributes.relatedEt.includes(value.id)).map((value,index)=>{
						console.log(value);
						return <li data-id={value.id}><a href={value.link}><span className="et-number">014</span><span className="et-title">{ decodeEntities(value.title.rendered) }</span></a></li>
					})}
				</Fragment>
			 )
		}else{
			return <li>Select Related Ets</li>
		}
	}

	const ProjectList = () => {
		if( attributes.relatedProjects.length > 0 ){
			return (
				<Fragment>
					{projectArray.filter(value => attributes.relatedProjects.includes(value.id)).map((value,index)=>{
						return <li data-id={value.id}><a href={value.link}>{value.title.rendered}</a></li>
					})}
				</Fragment>
			 )
		}else{
			return <li>Select Related Projects</li>
		}
	}

	
	const projectChange = (id) => {
		let relatedProjects = attributes.relatedProjects.includes(id) ? attributes.relatedProjects.filter(value => value != id) : [...attributes.relatedProjects, id];
		setAttributes({relatedProjects});
	}

	const etChange = (id) => {
		let relatedEt = attributes.relatedEt.includes(id) ? attributes.relatedEt.filter(value => value != id) : [...attributes.relatedEt, id];
		setAttributes({relatedEt});
	}


	return (
		<div { ...useBlockProps() }>
			<InspectorControls>
				<PanelBody title={ __( 'Select Related Projects', 'jsforwpblocks' ) } initialOpen={ false } >
					<PanelRow>This is the instructions</PanelRow>
						<div className="related__PanelBox">
							{projectArray.map((value,index) => {
								// checked={ attributes.relatedProjects.includes(value) }
								return <CheckboxControl label={ value.title.rendered } onChange={ () => projectChange(value.id) } checked={ attributes.relatedProjects.includes(value.id) } />
							})}
						</div>
				</PanelBody>
				<PanelBody title={ __( 'Select Related Ets', 'jsforwpblocks' ) } initialOpen={ false } >	
					<PanelRow>This is the instructions</PanelRow>
					<div className="related__PanelBox">
						{etArray.map((value,index) => {
							return <CheckboxControl label={ value.title.rendered } onChange={ () => etChange(value.id) } checked={ attributes.relatedEt.includes(value.id) } />
						})}
					</div>
				</PanelBody>
			</InspectorControls>
			<div className="chugooding__related">
				<div className="related__projects">
					<div className="related__projects-label">
						Related Work
					</div>
					<div className="related__projects-projects">
						<ul>
							<ProjectList />
						</ul>
					</div>
				</div>
				<div className="related__ets">
					<div className="related__ets-label">
						Related <span className="test"></span>
					</div>
					<div className="related__ets-ets">
					<ul>
						<EtList />
					</ul>
					</div>
				</div>
			</div>
		</div>
	);
}


