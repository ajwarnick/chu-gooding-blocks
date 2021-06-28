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
    icon: 'editor-paragraph',
    example: {
        attributes: {
            paragraph: 'Enjoy a presentation with Annie Chu of this 5,600-square-foot house for a three-generation family. This home designed as a dual courtyard plan to retain the old growth scenario of California Sycamores and Live Oaks within a tranquil canyon.',
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