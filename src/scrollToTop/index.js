import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';


export const name = 'chu-gooding/to-top';

export const settings = {
    title: 'C , G: Scroll to Top',
    category: 'widgets',
    icon: 'arrow-up-alt',
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},
    
    edit: Edit,
    save,
};
