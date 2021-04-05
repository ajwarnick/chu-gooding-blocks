import { __ } from '@wordpress/i18n';
import { useBlockProps, MediaUpload, InspectorControls } from '@wordpress/block-editor';
import { __experimentalRadio as Radio, __experimentalRadioGroup as RadioGroup, PanelBody, PanelRow} from '@wordpress/components';
 
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {

	function selectImageLeft(value) {
		setAttributes({ imageLeft: value.sizes.full.url })
	}

	function selectImageRight(value) {
		setAttributes({ imageRight: value.sizes.full.url })
	}

	function setDistribution(value){
		setAttributes({ distribution: value })
	}

	return (
		<div { ...useBlockProps() } className={"project__imagePair " + ("option"+attributes.distribution)}>
			<InspectorControls>
				<PanelBody title={ 'Column Ratio' } >
					<PanelRow>
						<RadioGroup label="Distribution" checked={attributes.distribution} onChange={setDistribution}>
							<Radio value="3">1/3</Radio>
							<Radio value="4">1/2</Radio>
							<Radio value="6">1/1</Radio>
							<Radio value="8">2/1</Radio>
							<Radio value="9">3/1</Radio>
						</RadioGroup>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div className="project__pairLeft" >
				<MediaUpload 
					onSelect={selectImageLeft}
					render={ ({open}) => {
						return <img 
							src={attributes.imageLeft}
							onClick={open}
							/>;
					}}
				/>
			</div>
            <div className="project__pairRight">
				<MediaUpload 
					onSelect={selectImageRight}
					render={ ({open}) => {
						return <img 
							src={attributes.imageRight}
							onClick={open}
							/>;
					}}
				/>
			</div>
        </div>
	);
}
