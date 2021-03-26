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
    category: 'chu-gooding-blocks',
    icon: 'youtube',
	supports: {
		html: false,
	},
    example: {
        attributes: {
            url: 'https://www.youtube.com/watch?v=_w7MrOVu5DQ',
            s: '',
        },
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
