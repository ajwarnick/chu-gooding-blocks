import './style.scss';
/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

export const name = 'chu-gooding/project-meta';

export const settings = {
    title: 'C , G: Project Meta',
    description: 'Example block written with ESNext standard and JSX support – build step required.',
    category: 'text',
    icon: 'smiley',
    attributes: {
        location: {
            type: 'string',
            default: ''
        },
        year: {
            type: 'string',
            default: ''
        },
        type: {
            type: 'string',
            default: ''
        },
        Status: {
            type: 'string',
            default: ''
        },
    }, 
    getEditWrapperProps() {
        return {
            'data-align': 'left',
        };
    },
    edit: Edit,
    save,
};
