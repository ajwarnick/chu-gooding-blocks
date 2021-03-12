import { registerPlugin } from '@wordpress/plugins';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { withState, useSelect } from '@wordpress/compose';
import { TextControl, ToggleControl, Panel, PanelBody, PanelRow } from '@wordpress/components';
import { useEntityProp } from '@wordpress/core-data';
import { Fragment } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

import './style.scss';

let etArray = Array.from(Array(0));




const Icon = () => ( <svg height="18" widths="15"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 15"><path class="st0" d="M3.4,6.3h11.5l0.5,8.7h2.3V0H3.4V6.3z" fill="#1F1F1F"/>å</svg>  )
const pad = (n, width, z) => {
    z = z || '0';
    n = n + '';
    return n.
    length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

let testSet = true;
let num = '004'
// const [meta, setMeta] = useEntityProp('postType', 'et', 'meta');

const setNumber = (c) => {
    console.log(c);
    num = c;
    // setMeta( { ...meta, 'chugooding_meta_block_field_etNumber': c } );
}

const EtControl = withState( {
    etNumber: '',
    className: '',
    help: 'Change with caution!'
} )( ( { etNumber, setState, className, help } ) => {
    if(testSet){
        apiFetch( { path: '/wp/v2/ets' } ).then( posts => {
            etArray = posts;
            setNumber(pad(etArray.length + 1,3));
            setState( { etNumber: pad(etArray.length + 1,3) } );
            testSet = false;
        } );
    }

    // setState( { etNumber: num } );
    
    return ( 
    <TextControl
        label="Current Et Number"
        value={ etNumber }
        className={ className }
        onChange={ ( etNumber ) => {
            // console.log( etNumber );
            // console.log( Number(etNumber));
            let dups = etArray.filter(et => et.meta.chugooding_meta_block_field_etNumber == etNumber);
            if( dups.length !== 0){
                setNumber(pad(etArray.length + 1,3));
            }
            let c = ( dups.length === 0 ? '' : 'warning' );
            let h = ( dups.length === 0 ? 'Duplicate Et Number' : 'Change with caution!' );

            setState( { etNumber: etNumber, className: c, help: h } );
        } }
        help={help}
    />
)} );

const PluginDocumentSettingPanelDemo = () => {
    const type = wp.data.select('core/editor').getCurrentPostType();
    const isEt = ((type == 'et') ? true : false);
   
    return ( 
        <Fragment>
            {isEt ? (
                <PluginDocumentSettingPanel
                    name="et-number"
                    title="Et Number"
                    className="et-number"
                >
                    <br/><br/>
                    <EtControl />
                </PluginDocumentSettingPanel>
            ) : (
                <br/>
            )}
        </Fragment>
)};
 
registerPlugin( 'plugin-document-setting-panel-demo', {
    render: PluginDocumentSettingPanelDemo,
    // icon: <Icon />,
    icon: ''
} )