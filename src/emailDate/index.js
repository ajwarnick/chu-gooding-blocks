import './style.scss';
/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

export const name = 'chu-gooding/email-date';

export const settings = {
    title: 'C , G: Newsletter - Date',
    description: 'Basic Date for Chu , Gooding Newsletter',
    category: 'chu-gooding-blocks',
    icon: 'calendar',
    example: {
        attributes: {
            day: '11.05.20',
            time: '4–5 pm PST',
        },
    },
    attributes: {
        day: {
            type: 'string',
            source: "html",
            selector: ".newsletter-date-day",
            default: ''
        },
        time: {
            type: 'string',
            source: "html",
            selector: ".newsletter-date-time",
            default: ''
        },
    },
    supports: {
        html: true,
    },
    edit: Edit,
    save,
};