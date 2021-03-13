import './style.scss';
/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

export const name = 'chu-gooding/project-meta';

export const settings = {
    title: 'C , G: Project Meta',
    description: 'Basic Metadata on a Chu , Gooding Project',
    category: 'text',
    icon: 'smiley',
    attributes: {
        location: {
            type: 'string',
            source: "html",
            selector: ".project__header-meta-location",
            default: ''
        },
        year: {
            type: 'string',
            source: "html",
            selector: ".project__header-meta-year",
            default: ''
        },
        type: {
            type: 'string',
            source: "html",
            selector: ".project__header-meta-type",
            default: ''
        },
        area: {
            type: 'string',
            source: "html",
            selector: ".project__header-meta-area",
            default: ''
        },
        status: {
            type: 'string',
            source: "html",
            selector: ".project__header-meta-status",
            default: ''
        },
    },
    supports: {
        html: true,
    },
    getEditWrapperProps() {
        return {
            'data-align': 'full',
        };
    },
    edit: Edit,
    save,
};
