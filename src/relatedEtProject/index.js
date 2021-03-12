import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';


export const name = 'chu-gooding/related';

export const settings = {
    title: 'C , G: Related Items',
	description: 'Example block written with ESNext standard and JSX support – build step required.',
    category: 'widgets',
    icon: 'smiley',
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},
    attributes: {
        relatedProjects: {
			type: 'array',
            selector: '.projectData li',
            query: {
                type: 'number',
                source: 'attribute',
                attribute: 'data-id',
            },
            default: []
		},
        relatedEt: {
			type: 'array',
            selector: '.etData li',
            query: {
                type: 'number',
                source: 'attribute',
                attribute: 'data-id',
            },
            default: []
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
