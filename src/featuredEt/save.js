import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save({attributes}) {
	return (
		<div { ...useBlockProps.save({className:'chu_gooding__featured-et'}) } >
			<div className="chu_gooding__featured-et-meta">
				<div className="chu_gooding__featured-et-meta-label">Et</div>
				<div className="chu_gooding__featured-et-meta-number">{ attributes.et_number }</div>
				<div className="hidden">
					<div className="chu_gooding__featured-et-meta-id">{ attributes.id }</div>
					<div className="chu_gooding__featured-et-meta-title">{ attributes.title }</div>
					<div className="chu_gooding__featured-et-meta-featured_media">{ attributes.featured_media }</div>
				</div>
			</div>
			<a className="chu_gooding__featured-link" href={ attributes.link }>
				{ attributes.featured_media === 0 ? 
					<h1 className="chu_gooding__featured-title">{ attributes.title }</h1> 
				: 
					<img src={attributes.source_url} width={attributes.width} height={attributes.height} alt={ attributes.title } /> 
				}
			</a>		
		</div>
	);
}
