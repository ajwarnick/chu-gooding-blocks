import './style.scss';
/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

export const name = 'chu-gooding/et-event-date-and-time';

export const settings = {
    title: 'C , G: Et - Date & Time',
    description: 'Basic Metadata on a Chu , Gooding Et Event',
    category: 'chu-gooding-blocks',
    icon: 'smiley',
    example: {
        attributes: {
            date: '01.27.1983',
            time: '1 pm PST',
        },
    },
    attributes: {
        date: {
            type: 'string',
            source: "html",
            selector: ".et__header-event-date",
            default: ''
        },
        time: {
            type: 'string',
            source: "html",
            selector: ".et__header-event-time",
            default: ''
        },
    },
    supports: {
        html: true,
    },
    edit: Edit,
    save,
};
