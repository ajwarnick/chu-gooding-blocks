import { useBlockProps, RichText  } from '@wordpress/block-editor';

export default function save({ attributes } ) {
	const blockProps = useBlockProps.save();
	return (
		<div {...blockProps}>
			<dl className={ "project__header-meta"}>
				<dt>Client</dt>
                <dd>
				<RichText.Content
					tagName="span"
					className={"project__header-meta-client"}
					value={attributes.client}
				/>
                </dd>
				<dt>Location</dt>
				<dd>
				<RichText.Content
					tagName="span"
					className={"project__header-meta-location"}
					value={attributes.location}
				/>
				</dd>
				<dt>Year</dt>
				<dd>
				<RichText.Content
					tagName="span"
					className={"project__header-meta-year"}
					value={attributes.year}
				/>
				</dd>
				<dt>Type</dt>
				<dd>
				<RichText.Content
					tagName="span"
					className={"project__header-meta-type"}
					value={attributes.type}
				/>
				</dd>
				<dt>Area</dt>
				<dd>
				<RichText.Content
					tagName="span"
					className={"project__header-meta-area"}
					value={attributes.area}
				/>
				</dd>
				{/* <dt>Status</dt>
				<dd>
				<RichText.Content
					tagName="span"
					className={"project__header-meta-status"}
					value={attributes.status}
				/>
				</dd> */}
			</dl>
      </div>
	);
}
