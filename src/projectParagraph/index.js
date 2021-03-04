/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';


export const name = 'chu-gooding/project-paragraph';

export const settings = {
    title: __( 'C , G: Project Paragraph', 'project-paragraph' ),
    description: __(
		'Example block written with ESNext standard and JSX support – build step required.',
		'project-paragraph'
	),
    category: 'widgets',
    icon: 'smiley',
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},
    edit: Edit,
    save,
};
