
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	return (
		<div { ...useBlockProps.save() } className="project__credits-collaborators">
			<div class="project__credits">
				<div class="content__left">
					Credits
				</div>
				<div class="content__middle">
					{attributes.credits.map((value,index) => {
						return (
							<div className="project__credits-row">
								{ value.title != '' ?
									<RichText.Content className="project__credits-title" tagName="span" value={ value.title } />
								:
									<span className="project__credits-title empty"></span>
								}
								{ value.names != '' ?
									<RichText.Content className="project__credits-names" tagName="span" value={ value.names } />
								:
									<span className="project__credits-names empty"></span>
								}
							</div>
						)
					})}	
				</div>
			</div>
			<div className={attributes.collaborators.length === 0 ? "project__collaborators" : "project__collaborators  hidden"}>
				<div class="content__left">
					Collaborators
				</div>
				<div className="content__middle">
					{attributes.collaborators.map((value,index) => {
						return (
							<div className="project__collaborators-row">
								{ value.title != '' ?
									<RichText.Content className="project__collaborators-title" tagName="span" value={ value.title } />
								:
									<span className="project__collaborators-title empty"></span>
								}
								{ value.names != '' ?
									<RichText.Content className="project__collaborators-names" tagName="span" value={ value.names } />								
								:
									<span className="project__collaborators-names empty"></span>
								}
							</div>
						)
					})}	
				</div>
			</div>
		</div>
		
	);
}
