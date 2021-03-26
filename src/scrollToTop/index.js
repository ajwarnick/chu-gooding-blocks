import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';


export const name = 'chu-gooding/to-top';

export const settings = {
    title: 'C , G: Scroll to Top',
    category: 'chu-gooding-blocks',
    icon: 'arrow-up-alt',
    example: {
    },
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},
    
    edit: Edit,
    save,
};
