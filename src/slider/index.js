import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';


export const name = 'chu-gooding/slider';

export const settings = {
    title: 'Chu , Gooding: Slider',
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
            selector: 'js-book-details-title',
            default: 'Hello World'
        },
        toggle: {
            type: 'boolean',
            selector: 'js-book-details-boolean',
            default: true
        }
    },
    edit: Edit,
    save,
};
