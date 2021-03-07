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
    category: 'widgets',
    icon: 'smiley',
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},
    attributes: {
        title: {
            type: 'string',
            default: ''
        },
        link: {
            type: 'string',
            default: '#'
        },
        featured_media: {
            type: 'integer'
        },
        source_url: {
            type: 'string',
            default: ''
        },
        height:{
            type: 'integer'
        },
        width:{
            type: 'integer'
        },
        id: {
            type: 'integer',
            default: 0
        },
        color: {
            type: 'string',
            default: '#cd4b34'
        },
        colorName: {
            type: 'string',
            default: 'red'
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
