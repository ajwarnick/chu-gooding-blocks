import { registerPlugin } from '@wordpress/plugins';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { withSelect, withDispatch, dispatch, subscribe, select } from '@wordpress/data';
import { TextControl } from '@wordpress/components';
import { Fragment } from '@wordpress/element';


import './style.scss';

// const Icon = () => ( <svg height="18" widths="15"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 15"><path class="st0" d="M3.4,6.3h11.5l0.5,8.7h2.3V0H3.4V6.3z" fill="#1F1F1F"/>å</svg>  )

const pad = (n, width, z) => {
    z = z || '0';
    n = n + '';
    return n.
    length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

let ets;
let help = 'Change with caution!';
let classes = '';
let originalEtNum;

select( 'core' ).getEntityRecords( 'postType', 'et' )

const unsubscribe = subscribe( () => {
    const { isResolving } = select( 'core/data' );
    const args = [ 'postType', 'et' ];

    if ( isResolving( 'core', 'getEntityRecords', args ) ) {
        // console.log( 'still resolving' );
    } else {
        const data = select( 'core' ).getEntityRecords( 'postType', 'et' );
        ets = data;
        if (wp.data.select( 'core/editor' ).getCurrentPostType() == 'et') {
            if (!select('core/editor').getEditedPostAttribute('meta')['chugooding_meta_block_field_etNumber']) {
                dispatch('core/editor').editPost({ meta: { chugooding_meta_block_field_etNumber: pad(ets.length, 3) } });
            }
        }

        unsubscribe();
    }
} );

let TextController = props => (
    <TextControl
        value={props.text_metafield}
        label={'Current Et Number'}
        onChange={(value) => props.onMetaFieldChange(value)}
        help={props.text_help}
        className={props.class_name}
    />
);

TextController = withSelect(
    (select) => {
        return {
            text_metafield: select('core/editor').getEditedPostAttribute('meta')['chugooding_meta_block_field_etNumber'],
            text_help: help,
            class_name: classes
        }
    }
)(TextController);

TextController = withDispatch(
    (dispatch) => {
        return {
            onMetaFieldChange: (value) => {
                if(ets){
                    if(value.length > 3){
                        help = 'Et Number is too long!';
                        classes = 'warning';
                        dispatch('core/editor').editPost({ meta: { chugooding_meta_block_field_etNumber: value } });
                    }

                    else if(value === originalEtNum){
                        help = 'Change with caution!';
                        classes = '';
                        dispatch('core/editor').editPost({ meta: { chugooding_meta_block_field_etNumber: value } });
                    }
                    
                    else if(ets.filter(et => et.meta.chugooding_meta_block_field_etNumber == value ).length > 0){
                        help = 'Et Number is taken!';
                        classes = 'warning';
                        dispatch('core/editor').editPost({ meta: { chugooding_meta_block_field_etNumber: value } });
                    }
                    
                    else {
                        help = 'Change with caution!';
                        classes = '';
                        dispatch('core/editor').editPost({ meta: { chugooding_meta_block_field_etNumber: value } });
                    }
                }
            }
        }
    }
)(TextController);

const PluginDocumentSettingPanelDemo = () => {
    let etNumber;


    if (wp.data.select( 'core/editor' ).getCurrentPostType() == 'et') {
        originalEtNum = select('core/editor').getEditedPostAttribute('meta')['chugooding_meta_block_field_etNumber'];
        etNumber = (
            <PluginDocumentSettingPanel name="et-number" title="Et Number" className="chu-gooding-et-number" opened={false}>
                <TextController />
            </PluginDocumentSettingPanel>
        )
    } else {
        etNumber = (
            <span></span>
        )
    }
    return (
        <Fragment>
            {etNumber}
        </Fragment>
    )
};
 
registerPlugin( 'plugin-document-setting-panel-demo', {
    render: PluginDocumentSettingPanelDemo,
    // icon: <Icon />,
    icon: ''
} )
