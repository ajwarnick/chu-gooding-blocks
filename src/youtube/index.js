import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';


export const name = 'chu-gooding/youtube';

export const settings = {
    title: 'C , G: YouTube',
	description: 'A block for embeding and styling videos from youtube.',
    category: 'media',
    icon: 'youtube',
	supports: {
		html: false,
	},
    attributes: {
        url: {
			type: 'string',
            default: ''
		},
        s: {
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
