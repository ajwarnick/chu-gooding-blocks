import './style.scss';
/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

export const name = 'chu-gooding/project-credits';

export const settings = {
    title: 'C , G: Project Credits',
    description: 'Example block written with ESNext standard and JSX support – build step required.',
    category: 'text',
    icon: 'smiley',
    attributes: {
        credits: {
			type: 'array',
            query: {
                url: {
                    type: 'string',
                    source: 'attribute',
                    attribute: 'src',
                },
                alt: {
                    type: 'string',
                    source: 'attribute',
                    attribute: 'alt',
                },
            },
			default: [{title:'', names:'' }],
		},
        collaborators: {
			type: 'array',
			// default: [{title:'t1', names:'n1' },{title:'t2', names:'n2' },{title:'t3', names:'n3' }],
            default: [{title:'', names:'' }],
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
