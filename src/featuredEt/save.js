import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<div { ...useBlockProps({className: 'chu_gooding__featured-et ' + attributes.colorName}).save() }>
			<div className="chu_gooding__featured-et-meta">
				<div className="chu_gooding__featured-et-meta-label">Et</div>
				<div className="chu_gooding__featured-et-meta-number">{ attributes.et_number }</div>
			</div>
			<a className={"chu_gooding__featured-link"} href={ attributes.link }>
				{ attributes.featured_media === 0 ? <h1 className={"chu_gooding__featured-title"}>{ attributes.title }</h1> : <img src={ attributes.source_url } alt={ attributes.title } /> }
			</a>		
		</div>
	);
}
