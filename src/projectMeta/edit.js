import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Dashicon,Button } from '@wordpress/components';
import { Fragment } from '@wordpress/element';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps();

	return (
		<div {...blockProps} className={"project__header-meta"}>
			<dl>
				<dt>Location</dt>
				<RichText
					tagName="dd" // The tag here is the element output and editable in the admin
					value={ attributes.location } // Any existing content, either from the database or an attribute default
					className={"project__header-meta-location"}
					onChange={ ( location ) => setAttributes(location) } // Store updated content as a block attribute
					placeholder={ 'Rustic Canyon, California' } // Display this text before any content has been added by the user
				/>

				<dt>Year</dt>
				<RichText
					tagName="dd" // The tag here is the element output and editable in the admin
					value={ attributes.year } // Any existing content, either from the database or an attribute default
					className={"project__header-meta-year"}
					onChange={ ( year ) => setAttributes(year) } // Store updated content as a block attribute
					placeholder={ '2009' } // Display this text before any content has been added by the user
				/>

				<dt>Type</dt>
				<RichText
					tagName="dd" // The tag here is the element output and editable in the admin
					value={ attributes.type } // Any existing content, either from the database or an attribute default
					className={"project__header-meta-type"}
					onChange={ ( type ) => setAttributes(type) } // Store updated content as a block attribute
					placeholder={ 'Residential' } // Display this text before any content has been added by the user
				/>

				<dt>Area</dt>
				<RichText
					tagName="dd" // The tag here is the element output and editable in the admin
					value={ attributes.area } // Any existing content, either from the database or an attribute default
					className={"project__header-meta-area"}
					onChange={ ( area ) => setAttributes(area) } // Store updated content as a block attribute
					placeholder={ '5000 sf' } // Display this text before any content has been added by the user
				/>

				<dt>Status</dt>
				<RichText
					tagName="dd" // The tag here is the element output and editable in the admin
					value={ attributes.status } // Any existing content, either from the database or an attribute default
					className={"project__header-meta-status"}
					onChange={ ( status ) => setAttributes(status) } // Store updated content as a block attribute
					placeholder={ 'Complete' } // Display this text before any content has been added by the user
				/>
				
			</dl>           
		</div>		
	);
}

