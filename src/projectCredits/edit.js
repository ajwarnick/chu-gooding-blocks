import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Dashicon,Button } from '@wordpress/components';
import { Fragment } from '@wordpress/element';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps();

	return (
		<div {...blockProps} className="project__credits-collaborators">
			{/* <RichText
				{ ...blockProps }
				className={attributes.direction}
				tagName="p" // The tag here is the element output and editable in the admin
				value={ attributes.content } // Any existing content, either from the database or an attribute default
				allowedFormats={ [ 'core/bold', 'core/italic' ] } // Allow the content to be made bold or italic, but do not allow other formatting options
				onChange={ ( content ) => setAttributes( { content } ) } // Store updated content as a block attribute
				placeholder={ 'Heading...' } // Display this text before any content has been added by the user
			/>		 */}
			<div class="project__credits">
				<div class="content__left">
					Credits
				</div>
				<div class="content__middle">
					<dl>
						<RichText
							tagName="dt" // The tag here is the element output and editable in the admin
							value={ '' } // Any existing content, either from the database or an attribute default
							allowedFormats={ [ 'core/bold', 'core/italic' ] } // Allow the content to be made bold or italic, but do not allow other formatting options
							onChange={ ( content ) => console.log(content) } // Store updated content as a block attribute
							placeholder={ 'Title' } // Display this text before any content has been added by the user
						/>	
						<RichText
							tagName="dd" // The tag here is the element output and editable in the admin
							value={ '' } // Any existing content, either from the database or an attribute default
							allowedFormats={ [ 'core/italic' ] } // Allow the content to be made bold or italic, but do not allow other formatting options
							onChange={ ( content ) => console.log(content) } // Store updated content as a block attribute
							placeholder={ 'Name(s)' } // Display this text before any content has been added by the user
						/>	
					</dl>
					<Button
						label="Add Credit"
						icon="plus-alt2"
						className="project__credits-button"
						isSecondary
						onClick={() => setAttributes( { credits: [...attributes.credits, {title:'', names:'' }] } )}						
					/>
					<Button
						label="Remove Credit"
						icon="minus"
						className="project__credits-button"
						isDestructive
						// onClick={() => setAttributes( { credits: [...attributes.credits, {title:'', names:'' }] } )}						
					/>
				</div>
			</div>
			<div class="project__collaborators">
				<div class="content__left">
					Collaborators
				</div>
				<div class="content__middle">
					<dl>
					{attributes.collaborators.map((value,index) => {
						return (
							<Fragment>
								<RichText
									tagName="dt" // The tag here is the element output and editable in the admin
									value={ value.title } // Any existing content, either from the database or an attribute default
									// allowedFormats={ [ 'core/bold', 'core/italic' ] } // Allow the content to be made bold or italic, but do not allow other formatting options
									onChange={ ( content ) => console.log(content) } // Store updated content as a block attribute
									placeholder={ 'Title' } // Display this text before any content has been added by the user
								/>	
								<RichText
									tagName="dd" // The tag here is the element output and editable in the admin
									value={ value.names } // Any existing content, either from the database or an attribute default
									// allowedFormats={ [ 'core/italic' ] } // Allow the content to be made bold or italic, but do not allow other formatting options
									onChange={ ( content ) => console.log(content) } // Store updated content as a block attribute
									placeholder={ 'Name(s)' } // Display this text before any content has been added by the user
								/>	
							</Fragment>
						)
					})}
					</dl>
					<Button
						label="Add Collaborator"
						icon="plus-alt2"
						className="project__collaborators-button"
						isSecondary
						onClick={() => attributes.collaborators.push({title:'', names:'' })}
					/>
				</div>
			</div>
		</div>		
	);
}

