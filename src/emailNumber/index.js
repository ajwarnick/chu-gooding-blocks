import './style.scss';
/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
const Icon = () => (<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.32 23.67"><path d="M21.71,33h3.74l1.49-5.54H23.23l.51-1.87h3.71l1.94-7.22h2.4l-1.94,7.22h3.59l2-7.22h2.36l-2,7.22h3.74L39,27.43H35.29L33.79,33h3.75L37,34.84H33.28L31.34,42H29l1.94-7.17H27.35L25.41,42H23L25,34.84H21.22Zm9.73,0,1.5-5.54h-3.6L27.85,33Z" transform="translate(-21.22 -18.34)" /></svg>)

export const name = 'chu-gooding/email-subhead';

export const settings = {
    title: 'C , G: Newsletter - Subhead',
    description: 'Basic Subhead for Chu , Gooding Newsletter - To be used for section titles or Et numbers',
    category: 'chu-gooding-blocks',
    icon: Icon,
    example: {
        attributes: {
            paragraph: '003',
        },
    },
    attributes: {
        paragraph: {
            type: 'string',
            source: "html",
            selector: ".newsletter-subhead",
            default: ''
        },
    },
    supports: {
        html: true,
    },
    edit: Edit,
    save,
};