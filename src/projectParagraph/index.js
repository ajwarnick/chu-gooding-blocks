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
    category: 'chu-gooding-blocks',
    icon: 'smiley',
    example: {
        attributes: {
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non lorem sit amet nunc posuere placerat id quis neque.',
            direction: 'down',
        },
    },
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
    getEditWrapperProps() {
        return {
            'data-align': 'full',
        };
    },
    edit: Edit,
    save,
};
