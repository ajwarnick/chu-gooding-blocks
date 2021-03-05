import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';


export const name = 'chu-gooding/project-image-pair';

export const settings = {
    title: 'C , G: Project Image Pair',
    description: 'Example block written with ESNext standard and JSX support – build step required.',
    category: 'media',
    icon: 'smiley',
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},
    attributes: {
        imageLeft: {
            type: 'string',
            default: 'http://placehold.it/500'
        },
        imageRight: {
            type: 'string',
            default: 'http://placehold.it/500'
        },
        distribution: {
            type: 'string',
            default: '6'
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
