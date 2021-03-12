import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import apiFetch from '@wordpress/api-fetch';
import {decodeEntities} from './decodeEntities.js';



export default function save({attributes}) {
	let projectArray = Array.from(Array(0));
	apiFetch( { path: '/wp/v2/projects' } ).then( posts => {
		projectArray = posts;
	} );

	let etArray = Array.from(Array(0));
	apiFetch( { path: '/wp/v2/ets' } ).then( posts => {
		etArray = posts;
	} );

	return (
		<div { ...useBlockProps.save() }>
			<div className="chugooding__related">
				<div className="related__projects">
					<div className="related__projects-label">
					Related Work
					</div>
					<div className="related__projects-projects" >
						<ul className="projectData">
							{projectArray.filter(value => attributes.relatedProjects.includes(value.id)).map((value,index)=>{
								return <li data-id={value.id}><a href={value.link}>{value.title.rendered}</a></li>
							})}
						</ul>
					</div>
				</div>
				<div className="related__ets">
					<div className="related__ets-label">
						Related <span className="test"></span>
					</div>
					<div className="related__ets-ets" >
						<ul className="etData">
							{etArray.filter(value => attributes.relatedEt.includes(value.id)).map((value,index)=>{
								return <li data-id={value.id}><a href={value.link}><span className="et-number">014</span><span className="et-title">{ decodeEntities(value.title.rendered) }</span></a></li>
							})}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
