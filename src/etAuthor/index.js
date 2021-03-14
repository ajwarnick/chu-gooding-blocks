import { registerPlugin } from '@wordpress/plugins';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { withSelect, withDispatch, dispatch, subscribe, select } from '@wordpress/data';
import { ToggleControl } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import { Fragment } from '@wordpress/element';


import './style.scss';

select( 'core' ).getEntityRecords( 'postType', 'et' )

const unsubscribe = subscribe( () => {
    const { isResolving } = select( 'core/data' );
    const args = [ 'postType', 'et' ];

    if ( isResolving( 'core', 'getEntityRecords', args ) ) {
        // console.log( 'still resolving' );
    } else {

        if (wp.data.select( 'core/editor' ).getCurrentPostType() == 'et') {
            if (!select('core/editor').getEditedPostAttribute('meta')['chugooding_meta_block_field_etAuthorVisibility']) {
                dispatch('core/editor').editPost({ meta: { chugooding_meta_block_field_etAuthorVisibility: false } });
            }
        }
        unsubscribe();
    }
} );

 
const AuthorToggleControl = withState( {
    authorVisibility: false,
} )( ( { authorVisibility, setState } ) => (
    <ToggleControl
        label="Show / Hide"
        help={ authorVisibility ? 'Author will be showen in featured and grouping pages' : 'Author will be hidden' }
        checked={ authorVisibility }
        onChange={ () => {
            setState( ( state ) => ( { authorVisibility: ! state.authorVisibility } ) );
            // dispatch('core/editor').editPost({ meta: { chugooding_meta_block_field_etAuthorVisibility: authorVisibility } });
        } }
    />
) );

const PluginAuthorSettingPanelDemo = () => {
    let authorToggle = (
        <PluginDocumentSettingPanel name="author-test" title="Author Visibility" className="chu-gooding-author-test" opened={false}>
            <AuthorToggleControl />
        </PluginDocumentSettingPanel>
    )

    return (
        <Fragment>
            {authorToggle}
        </Fragment>
    )
}

registerPlugin( 'plugin-author-setting-panel-demo', {
    render: PluginAuthorSettingPanelDemo,
    icon: ''
} )