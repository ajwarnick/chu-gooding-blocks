import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save( {attributes} ) {
	let classes = "project__imagePair " + ("option"+attributes.distribution);
	return (
		<div { ...useBlockProps.save() }  className={classes}>
			<div className="project__pairLeft" >
				<img src={attributes.imageLeft} />
			</div>
			<div className="project__pairRight">
				<img src={attributes.imageRight} />
			</div>
		</div>
	);
}
