import { __ } from '@wordpress/i18n';
import { useBlockProps, MediaUpload } from '@wordpress/block-editor';
import { ToggleControl, PanelBody, PanelRow, CheckboxControl, SelectControl, ColorPicker } from '@wordpress/components';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	function selectImageLeft(value) {
		setAttributes({ imageLeft: value.sizes.full.url })
	}

	function selectImageRight(value) {
		setAttributes({ imageRight: value.sizes.full.url })
	}
	
	return (
		<div { ...useBlockProps() } className="project__imagePair">
			<InspectorControls>
				<PanelBody
					title="Most awesome settings ever"
					initialOpen={true}
				>
					{/* <PanelRow>
						<ToggleControl
							label="Toggle me"
							checked={attributes.toggle}
							onChange={(newval) => setAttributes({ toggle: newval })}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label="What's your favorite animal?"
							value={attributes.favoriteAnimal}
							options={[
								{label: "Dogs", value: 'dogs'},
								{label: "Cats", value: 'cats'},
								{label: "Something else", value: 'weird_one'},
							]}
							onChange={(newval) => setAttributes({ favoriteAnimal: newval })}
						/>
					</PanelRow>
					<PanelRow>
						<ColorPicker
							color={attributes.favoriteColor}
							onChangeComplete={(newval) => setAttributes({ favoriteColor: newval.hex })}
							disableAlpha
						/>
					</PanelRow>
					<PanelRow>
						<CheckboxControl
							label="Activate lasers?"
							checked={attributes.activateLasers}
							onChange={(newval) => setAttributes({ activateLasers: newval })}
						/>
					</PanelRow> */}
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
