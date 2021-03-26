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
    category: 'chu-gooding-blocks',
    icon: 'smiley',
    example: {
        attributes: {
            location: 'Lorem Ipsum',
            year: '2021',
            type: 'Residential',
            area: '2000 ft2',
            status: 'Completed',
        },
    },
    attributes: {
        client:{
            type: 'string',
            source: "html",
            selector: ".project__header-meta-client",
            default: ''
        },
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
