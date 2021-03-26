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
    category: 'chu-gooding-blocks',
    icon: 'smiley',
	supports: {
		html: false,
	},
    attributes: {
        relatedProjects: {
			type: 'array',
		},
        relatedEt: {
			type: 'array',
		},
        projects:{
            type: 'object',
        },
        ets: {
            type: 'object',
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
