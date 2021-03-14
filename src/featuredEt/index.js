import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';


export const name = 'chu-gooding/featured-et';

export const settings = {
    title: 'C , G: Featured Et',
	// description: 'Example block written with ESNext standard and JSX support – build step required.',
    category: 'widgets',
    icon: 'smiley',
	supports: {
		// Removes support for an HTML mode.
		// html: false,
	},
    attributes: {
        title:{
            type:'string',
        },
        ets:{
            type: 'object'
        },
        url:{    
            type:'string',
        },
        type: {
            type: 'string',
        },
        num: {
            type: 'string',
        },
        id: {
            type: 'string',
        },
    },
    getEditWrapperProps() {
        return {
            'data-align': 'full',
        };
    },
    edit: Edit,
    save,
};
