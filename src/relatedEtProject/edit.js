import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { CheckboxControl, PanelBody, PanelRow, Placeholder } from '@wordpress/components';
import { Fragment }  from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import {decodeEntities} from './decodeEntities.js';
import './editor.scss';


export default function Edit({ attributes, isSelected, setAttributes, }) {


	if(!attributes.projects){
		apiFetch( { path: '/wp/v2/projects' } ).then( posts => {
			console.log(posts);
			setAttributes({projects: posts})
		} );
	}

	if(!attributes.ets){
		apiFetch( { path: '/wp/v2/ets' } ).then( posts => {
			setAttributes({ets: posts})
		} );
	}

	if(!attributes.relatedEt){
		setAttributes({relatedEt: []})
	}

	if(!attributes.relatedProjects){
		setAttributes({relatedProjects: []})
	}
	

	const EtList = () => {
		if( attributes.relatedEt && attributes.relatedEt.length > 0 && attributes.ets ){
			return (
				<Fragment>
					{attributes.ets.filter(value => attributes.relatedEt.includes(value.id)).map((value,index)=>{
						console.log(value.meta);
						return <li data-id={value.id}><a href="#"><span className="et-number">{value.meta.chugooding_meta_block_field_etNumber}</span><span className="et-title">{value.title.rendered /*decodeEntities(value.title.rendered)*/}</span></a></li>
					})}
				</Fragment>
			 )
		}else{
			return <li>Select Related Ets</li>
		}
	}

	const ProjectList = () => {
		if( attributes.relatedProjects && attributes.relatedProjects.length > 0 && attributes.projects){
			return (
				<Fragment>
					{attributes.projects.filter(value => attributes.relatedProjects.includes(value.id)).map((value,index)=>{
						return <li data-id={value.id}><a href="#">{value.title.rendered}</a></li>
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
						{ attributes.projects ?
							<div className="related__PanelBox">
								{attributes.projects.map((value,index) => {
									return <CheckboxControl label={ value.title.rendered } onChange={ () => projectChange(value.id) } checked={ attributes.relatedProjects.includes(value.id) } />
								})}
							</div>
						:
							<span>Projects Loading...</span>	
						}
				</PanelBody>
				<PanelBody title={ __( 'Select Related Ets', 'jsforwpblocks' ) } initialOpen={ false } >	
					<PanelRow>This is the instructions</PanelRow>
					{ attributes.ets ?
						<div className="related__PanelBox">
							{attributes.ets.map((value,index) => {
								return <CheckboxControl label={ value.title.rendered } onChange={ () => etChange(value.id) } checked={ attributes.relatedEt.includes(value.id) } />
							})}
						</div>
					:
						<span>Ets Loading...</span>
					}
					
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


