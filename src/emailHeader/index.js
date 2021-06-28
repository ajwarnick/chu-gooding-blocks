import './style.scss';
/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

export const name = 'chu-gooding/email-header';

export const settings = {
    title: 'C , G: Newsletter - Header',
    description: 'Basic Header for Chu , Gooding Newsletter',
    category: 'chu-gooding-blocks',
    icon: 'heading',
    example: {
        attributes: {
            heading: 'AIALA Presentation of Rustic Canyon House & Conversation with Annie Chu',
        },
    },
    attributes: {
        heading: {
            type: 'string',
            source: "html",
            selector: ".newsletter-heading",
            default: ''
        },
    },
    supports: {
        html: true,
    },
    edit: Edit,
    save,
};