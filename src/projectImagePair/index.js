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
    category: 'chu-gooding-blocks',
    icon: 'format-image',
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},
    example: {
        attributes: {
            imageLeft: 'https://picsum.photos/200/300',
            imageRight: 'https://picsum.photos/300/200',
            distribution: '6'
        },
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
