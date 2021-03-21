import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { ColorPalette, TextControl, PanelBody, PanelRow, Placeholder, SelectControl } from '@wordpress/components';

import Plyr from 'plyr';
import '../../node_modules/plyr/src/sass/plyr.scss';
import './editor.scss';


export default function Edit({ attributes, isSelected, setAttributes, }) {
    let message = 'Please input the URL of a YouTube';

    let idExtractor = (url) => {
        let regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
        let match = url.match(regExp);
        return (match&&match[1].length==11)? match[1] : false;
    }
    
    let updateURL = (url) =>{
        let extracted = url.match(/^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/);

        if(extracted){
            setAttributes({url: idExtractor(extracted[0])});
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
            <TextControl
                label="YouTube URL Input:"
                value={ attributes.s }
                onChange={ updateURL }
            />

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
                            src={ "https://www.youtube.com/embed/" + attributes.url + "&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"}
                            allowfullscreen
                            allowtransparency
                        ></iframe>
                    </div>
				</div>
                
			}
		</div>
	);
}

