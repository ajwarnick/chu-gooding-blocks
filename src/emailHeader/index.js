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
    icon: 'email-alt',
    example: {
        attributes: {
            paragraph: 'AIALA Presentation of Rustic Canyon House & Conversation with Annie Chu',
        },
    },
    attributes: {
        header: {
            type: 'string',
            source: "html",
            selector: ".newsletter-header",
            default: ''
        },
    },
    supports: {
        html: true,
    },
    edit: Edit,
    save,
};