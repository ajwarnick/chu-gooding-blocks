import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';


export const name = 'chu-gooding/featured-project';

export const settings = {
    title: 'C , G: Featured Et',
	// description: 'Example block written with ESNext standard and JSX support – build step required.',
    category: 'widgets',
    icon: 'smiley',
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},
    attributes: {
        title: {
            type: 'string',
            selector: '.chu_gooding__featured-et-title',
            default: ''
        },
        link: {
            type: 'string',
            selector: '.chu_gooding__featured-link',
            attribute: 'href',
            default: '#'
        },
        et_number: {
            type: 'integer',
            source: 'html',
            selector: '.chu_gooding__featured-et-meta-number',
            default: '014'
        },
        type: {
            type: 'string',
            default: ''
        },
        featured_media: {
            type: 'integer'
        },
        source_url: {
            type: 'string',
            default: ''
        },
        height:{
            type: 'integer',
            source: 'attribute',
            selector: 'img',
            attribute: 'height',
            default: 0
        },
        width:{
            type: 'integer',
            source: 'attribute',
            selector: 'img',
            attribute: 'width',
            default: 0
        },
        id: {
            type: 'integer',
            source: 'html',
            selector: '.chu_gooding__featured-et-meta-id',
            default: 0
        },
    },
    getEditWrapperProps() {
        return {
            'data-align': 'full',
        };
    },
    edit: Edit,
    save,
};
