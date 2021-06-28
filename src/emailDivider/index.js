import './style.scss';
/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

export const name = 'chu-gooding/email-divider';

export const settings = {
    title: 'C , G: Newsletter - Divider',
    description: 'Basic Divider for Chu , Gooding Newsletter',
    category: 'chu-gooding-blocks',
    icon: 'minus',

    supports: {
        html: true,
    },
    edit: Edit,
    save,
};