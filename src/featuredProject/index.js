import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';


export const name = 'chu-gooding/featured-project';

export const settings = {
    title: 'C , G: Featured Project',
	description: 'Example block written with ESNext standard and JSX support – build step required.',
    category: 'widgets',
    icon: 'smiley',
	supports: {
		// Removes support for an HTML mode.
		// html: false,
	},
    attributes: {
        title: {
            type: 'string',
            selector: '.chu_gooding__featured-project',
            attribute: 'data-title',
            source: 'attribute',
            default: ''
        },
        link: {
            type: 'string',
            source: 'attribute',
            selector: '.chu_gooding__featured-link',
            attribute: 'href',
            default: '#'
        },
        featured_media: {
            type: 'string',
            selector: 'img',
            source: 'attribute',
            attribute: 'data-featured-media',
            default: 0
        },
        source_url: {
            type: 'string',
            selector: 'img',
            source: 'attribute',
            attribute: 'src'
        },
        height:{
            type: 'string',
            selector: 'img',
            source: 'attribute',
            attribute: 'height',
        },
        width:{
            type: 'string',
            selector: 'img',
            source: 'attribute',
            attribute: 'width',
        },
        id: {
            type: 'string',
            selector: '.chu_gooding__featured-project',
            attribute: 'data-project-id',
            source: 'attribute',
            default: 0
        },
        color: {
            type: 'string',
            selector: '.chu_gooding__featured-project',
            attribute: 'data-color',
            source: 'attribute',
            default: '#cd4b34'
        },
        colorName: {
            type: 'string',
            selector: '.chu_gooding__featured-project',
            attribute: 'data-color',
            source: 'attribute',
            default: 'red'
        }
    },
    getEditWrapperProps() {
        return {
            'data-align': 'full',
        };
    },
    edit: Edit,
    save,
};
