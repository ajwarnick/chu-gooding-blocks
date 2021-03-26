import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';


export const name = 'chu-gooding/featured-project';

export const settings = {
    title: 'C , G: Featured Project',
	description: 'Example block written with ESNext standard and JSX support – build step required.',
    category: 'chu-gooding-blocks',
    icon: 'smiley',
	supports: {
		// Removes support for an HTML mode.
		// html: false,
	},
    attributes: {
        id: {
            type: 'string',
        },
        projects: {
            type: 'object',
        },
        title:{
            type:'string',
        },
        url:{    
            type:'string',
        },
        color: {
            type: 'string',
        },
        colorName: {
            type: 'string',
        }
    },
    getEditWrapperProps() {
        return {
            'data-align': 'full',
        };
    },
    edit: Edit,
    save,
};
