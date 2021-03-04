import './style.scss';
/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

export const name = 'chu-gooding/project-paragraph';

export const settings = {
    title: 'C , G: Project Paragraph',
    description: 'Example block written with ESNext standard and JSX support – build step required.',
    category: 'text',
    icon: 'smiley',
    attributes: {
        content: {
            type: 'string',
            source: 'html',
            selector: 'p',
        },
        direction: {
            type: 'string',
            default: null
        }
    },
    edit: Edit,
    save,
};
