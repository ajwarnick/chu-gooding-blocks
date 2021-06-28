import './style.scss';
/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

export const name = 'chu-gooding/email-caption';

const Icon = () => (<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.07 27.13"><path d="M32.63,16.43V26.7L42.7,23.23l1.83,5.09L34.48,31.59l6.23,8.7-4.57,3.27-6-9-6.12,9-4.71-3.28,6.33-8.7L15.47,28.32l1.84-5.12,10,3.6V16.43Z" transform="translate(-15.47 -16.43)" /></svg>)

export const settings = {
    title: 'C , G: Newsletter - Caption',
    description: 'Basic Caption for Chu , Gooding Newsletter',
    category: 'chu-gooding-blocks',
    icon: Icon,
    example: {
        attributes: {
            caption: 'Images (top to bottom): Rustic Canyon House, Photo: Nils Timm | Eyeglass holder, Photo: Annie Chu',
        },
    },
    attributes: {
        caption: {
            type: 'string',
            source: "html",
            selector: ".newsletter-caption",
            default: ''
        },
    },
    supports: {
        html: true,
    },
    edit: Edit,
    save,
};

