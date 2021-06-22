import './style.scss';
/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

export const name = 'chu-gooding/email-paragraph';

export const settings = {
    title: 'C , G: Newsletter - Paragraph',
    description: 'Basic Paragraph for Chu , Gooding Newsletter',
    category: 'chu-gooding-blocks',
    icon: 'email-alt',
    example: {
        attributes: {
            paragraph: '01.27.1983',
        },
    },
    attributes: {
        paragraph: {
            type: 'string',
            source: "html",
            selector: ".newsletter-paragraph",
            default: ''
        },
    },
    supports: {
        html: true,
    },
    edit: Edit,
    save,
};