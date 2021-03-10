import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import apiFetch from '@wordpress/api-fetch';

let projectArray = Array.from(Array(0));
apiFetch( { path: '/wp/v2/projects' } ).then( posts => {
	projectArray = posts;
} );

let etArray = Array.from(Array(0));
apiFetch( { path: '/wp/v2/ets' } ).then( posts => {
	etArray = posts;
} );

 const decodeEntities = (function() {
	// this prevents any overhead from creating the object each time
	var element = document.createElement('div');
  
	function decodeHTMLEntities (str) {
	  if(str && typeof str === 'string') {
		// strip script/html tags
		str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
		str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
		element.innerHTML = str;
		str = element.textContent;
		element.textContent = '';
	  }
  
	  return str;
	}
  
	return decodeHTMLEntities;
})();


export default function save({attributes}) {
	console.log(attributes.relatedProjects);
	console.log(attributes.relatedEt);
	return (
		<div { ...useBlockProps.save() }>
			<div className="chugooding__related">
				<div className="related__projects">
					<div className="related__projects-label">
					Related Work
					</div>
					<div className="related__projects-projects">
						<ul className="projectData">
							{projectArray.filter(value => attributes.relatedProjects.includes(value.id)).map((value,index)=>{
								return <li data-id={value.id}><a href={value.link}>{value.title.rendered}</a></li>
							})}
						</ul>
					</div>
				</div>
				<div className="related__ets">
					<div className="related__ets-label">
						Related  <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 5.07097H8.86622L9.23411 12H11V0H0V5.07097Z" fill="#1F1F1F"/></svg>
					</div>
					<div className="related__ets-ets">
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
