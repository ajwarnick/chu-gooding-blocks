import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Dashicon,Button } from '@wordpress/components';
import { Fragment } from '@wordpress/element';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {

	const blockProps = useBlockProps();

	const updateText = (value, index, field, group) => {
		let n = attributes[group][index];
		n[field] = value;

		const newVals = [
			...attributes[group].slice(0, index),
			{...attributes[group][index], n},
			...attributes[group].slice ( index + 1 )
		];
		if(group === 'credits'){
			setAttributes({ credits: newVals });
		}

		if(group === 'collaborators'){
			setAttributes({ collaborators: newVals });
		}
	}
	
	const creditPair = (value) => {

		return (
			<Fragment>	
				<RichText
					tagName="span" 
					className="project__credits-title"
					value={ value.title }
					allowedFormats={ [ 'core/italic' ] } 
					onChange={ ( content ) => updateText(content, index, 'title', 'credits') }
					placeholder={ 'Title(s)...' }
				/>	
				<RichText
					tagName="span"
					className="project__credits-names"
					value={ value.names }
					allowedFormats={ [ 'core/italic' ] } 
					onChange={ ( content ) => updateText(content, index, 'names', 'credits') } 
					placeholder={ 'Name(s)...' } 
				/>
			</Fragment>
				
		)
	}

	return (
		<div {...blockProps} className="project__credits-collaborators">
			<div class="project__credits">
				<div class="content__left">
					Credits
				</div>
				<div class="content__middle content__credits">
					{attributes.credits.map((value,index) => {
						return (
							<div className="project__credits-row">
								<RichText
									tagName="span" 
									multiline={false}
									className="project__credits-title"
									value={ value.title }
									allowedFormats={ [ 'core/italic' ] } 
									onChange={ ( content ) => updateText(content, index, 'title', 'credits') }
									placeholder={ 'Title(s)...' }
								/>	
								<RichText
									tagName="span"
									multiline={false}
									className="project__credits-names"
									value={ value.names }
									allowedFormats={ [ 'core/italic' ] } 
									onChange={ ( content ) => updateText(content, index, 'names', 'credits') } 
									placeholder={ 'Name(s)...' } 
								/>	
							</div>
						)
					})}	
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
						onClick={() => setAttributes( { credits: attributes.credits.slice(0, (attributes.credits.length - 1)) } )}						
					/>
				</div>
			</div>
			<div className="project__collaborators">
				<div class="content__left">
					Collaborators
				</div>
				<div className="content__middle">
					<dl>
					{attributes.collaborators.map((value,index) => {
						return (
							<div className="project__collaborators-row">
								<RichText
									tagName="span"
									multiline={false}
									className="project__collaborators-title"
									value={ value.title } 
									allowedFormats={ [ 'core/italic' ] } 
									onChange={ ( content ) => updateText(content, index, 'title', 'collaborators') } 
									placeholder={ 'Title(s)...' }
								/>	
								<RichText
									tagName="span"
									multiline={false}
									className="project__collaborators-names"
									value={ value.names }
									allowedFormats={ [ 'core/italic' ] }
									onChange={ ( content ) => updateText(content, index, 'names', 'collaborators') }
									placeholder={ 'Name(s)...' }
								/>	
							</div>
						)
					})}
					</dl>
					<Button
						label="Add Collaborator"
						icon="plus-alt2"
						className="project__collaborators-button"
						isSecondary
						onClick={() => setAttributes( { collaborators: [...attributes.collaborators, {title:'', names:'' }] } )}
					/>
					<Button
						label="Remove Collaborator"
						icon="minus"
						className="project__collaborators-button"
						isDestructive
						onClick={() => setAttributes( { collaborators: attributes.collaborators.slice(0, (attributes.collaborators.length - 1)) } )}					
					/>
				</div> 
			</div>
		</div>		
	);
}

