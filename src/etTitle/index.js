import { registerPlugin } from '@wordpress/plugins';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { useSelect, dispatch } from '@wordpress/data';
import { ToggleControl } from '@wordpress/components';
import { useState } from '@wordpress/element';


const MyComponent = (props) => {
    // Retrict this component to pages only
    const postType = useSelect( select => select( 'core/editor' ).getCurrentPostType() );
    const etAuthorVisibility = useSelect( select => select('core/editor').getEditedPostAttribute('meta')['chugooding_meta_block_field_etTitleVisibility'] );
    if ( 'et' !== postType ) { return null; }

    const [ isChecked, setChecked ] = useState( etAuthorVisibility );

    return (
        <PluginDocumentSettingPanel
            name="title-visibility-panel" 
            title="Title Visibility" 
            className="chu-gooding-title-visibility"
        >
            <ToggleControl
                label="Show / Hide"
                help={ isChecked ? 'Title will be showen in featured and grouping pages' : 'Title will be hidden' }
                checked={ isChecked }
                onChange={ () => {
                    setChecked( ! isChecked );
                    dispatch('core/editor').editPost({ meta: { chugooding_meta_block_field_etTitleVisibility: ! isChecked } });
                } }
            />
        </PluginDocumentSettingPanel>
    );
}

registerPlugin( 'plugin-title-setting-panel-demo', { 
    render: MyComponent,
    icon: ''
} );