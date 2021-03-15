// import { registerPlugin } from '@wordpress/plugins';
// import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
// import { withSelect, withDispatch, dispatch, subscribe, select } from '@wordpress/data';
// import { ToggleControl } from '@wordpress/components';
// import { withState } from '@wordpress/compose';
// import { Fragment, useState } from '@wordpress/element';


// import './style.scss';

// let etAuthorVisibility;
 
// const AuthorToggleControl = withState( {
//     authorVisibility: this.props.myVal,
// } )( ( { authorVisibility, setState } ) => (
//     <ToggleControl
//         label="Show / Hide"
//         help={ authorVisibility ? 'Author will be showen in featured and grouping pages' : 'Author will be hidden' }
//         checked={ authorVisibility }
//         onChange={ () => {
//             setState( ( state ) => ( { authorVisibility: ! state.authorVisibility } ) );
//             dispatch('core/editor').editPost({ meta: { chugooding_meta_block_field_etAuthorVisibility: ! authorVisibility } });
//         } }
//     />
// ) );

// const PluginAuthorSettingPanelDemo = () => {
    

//     select( 'core' ).getEntityRecords( 'postType', 'et' );

//     const [ isVis, setVis ] = useState( false );

//     const unsubscribe = subscribe( () => {

//         const { isResolving, hasFinishedResolution } = select( 'core/data' );
//         const args = [ 'postType', 'et' ];

//         if ( isResolving( 'core', 'getEntityRecords', args ) ) {
//             console.log( 'still resolving' );
//         } 
        
//         if( hasFinishedResolution( 'core', 'getEntityRecords', args ) ) {
//             console.log( 'finished resolving' );

//             if (wp.data.select( 'core/editor' ).getCurrentPostType() == 'et') {
//                 console.log('Is Et');
//                 setVis(true);
//                 etAuthorVisibility = select('core/editor').getEditedPostAttribute('meta')['chugooding_meta_block_field_etAuthorVisibility'];
//             }

//             unsubscribe();
//         }
//     } );


//     let authorToggle = (
//         <PluginDocumentSettingPanel name="author-test" title="Author Visibility" className="chu-gooding-author-test" opened={false} >
//             { isVis ?
//                 <AuthorToggleControl myVal={true} />
//             :
//                 <span></span>
//             }
            
//         </PluginDocumentSettingPanel>
//     )

//     return (
//         <Fragment>
//             {authorToggle}
//         </Fragment>
//     )
// }

// registerPlugin( 'plugin-author-setting-panel-demo', {
//     render: PluginAuthorSettingPanelDemo,
//     icon: ''
// } )



import { registerPlugin } from '@wordpress/plugins';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { useSelect, dispatch } from '@wordpress/data';
import { ToggleControl } from '@wordpress/components';
import { useState } from '@wordpress/element';


const MyComponent = (props) => {
    // Retrict this component to pages only
    const postType = useSelect( select => select( 'core/editor' ).getCurrentPostType() );
    const etAuthorVisibility = useSelect( select => select('core/editor').getEditedPostAttribute('meta')['chugooding_meta_block_field_etAuthorVisibility'] );
    if ( 'et' !== postType ) { return null; }

    const [ isChecked, setChecked ] = useState( etAuthorVisibility );

    return (
        <PluginDocumentSettingPanel
            name="author-visibility-panel" 
            title="Author Visibility" 
            className="chu-gooding-author-visibility"
        >
            <ToggleControl
                label="Show / Hide"
                help={ isChecked ? 'Author will be showen in featured and grouping pages' : 'Author will be hidden' }
                checked={ isChecked }
                onChange={ () => {
                    setChecked( ! isChecked );
                    dispatch('core/editor').editPost({ meta: { chugooding_meta_block_field_etAuthorVisibility: ! isChecked } });
                } }
            />
        </PluginDocumentSettingPanel>
    );
}

registerPlugin( 'plugin-author-setting-panel-demo', { 
    render: MyComponent,
    icon: ''
} );