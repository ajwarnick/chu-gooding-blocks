import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { ColorPalette, TextControl, PanelBody, PanelRow, Placeholder, SelectControl } from '@wordpress/components';

import Plyr from 'plyr';
import '../../node_modules/plyr/src/sass/plyr.scss';
import './editor.scss';


export default function Edit({ attributes, isSelected, setAttributes, }) {
    let message = 'Please input the URL of a YouTube';

    let updateURL = (url) =>{
        let extracted = url.match(/^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/);

        if(extracted){
            console.log(extracted[0]);
            setAttributes({url: extracted[0]});
        }else{
            setAttributes({url: ''});
        }
        
        setAttributes({s: url});
    }

    const player = new Plyr('#player', {
        /* options */
        ratio: '16:9'
    });
	return (
		<div { ...useBlockProps() } >
			<InspectorControls>
				<PanelBody title={ 'Background Color' } >
					<PanelRow>
						{/* <ColorPalette
							colors={ colors }
							value={ attributes.color }
							onChange={ changeBackgroundColor }
						/> */}
					</PanelRow>
				</PanelBody>
			</InspectorControls>
            { isSelected ?
                <TextControl
                    label="YouTube URL Input:"
                    value={ attributes.s }
                    onChange={ updateURL }
                />
            :
                <TextControl
                    label="YouTube URL Input:"
                    value={ attributes.s }
                    // onChange={ updateURL }
                />
            }          
                

			{  !attributes.url  ?
                <div>
                    <Placeholder instructions={message}  label="Embeded YouTube Video" />
                    <br/>
                    <br/>
                </div>
				
			:
				<div className="chugooding-youtube">
					<div className="plyr__video-embed" id="player">
                        <iframe
                            src="https://www.youtube.com/embed/bTqVqk7FSmY"
                            allowfullscreen
                            allowtransparency
                            allow="autoplay"
                        ></iframe>
                    </div>
				</div>
			}
		</div>
	);
}

