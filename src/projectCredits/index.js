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
    category: 'chu-gooding-blocks',
    icon: 'smiley',
    example: {
        attributes: {
            credits: [{title:'Job', names:'Name' }],
            collaborators: [{title:'Job', names:'Name' }],
        },
    },
    attributes: {
        credits: {
			type: 'array',
            source: 'query',
            selector: '.project__credits-row',
            query: {
                title: {
                  type: 'string',
                  selector: '.project__credits-title',
                  source: 'html',
                },
                names: {
                    type: 'string',
                    selector: '.project__credits-names',
                    source: 'html',
                }
            },
			default: [{title:'', names:'' }],
		},
        collaborators: {
			type: 'array',
            ssource: 'query',
            selector: '.project__collaborators-row',
            query: {
                title: {
                  type: 'string',
                  selector: '.project__collaborators-title',
                  source: 'html',
                },
                names: {
                    type: 'string',
                    selector: '.project__collaborators-names',
                    source: 'html',
                }
            },
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
