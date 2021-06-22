/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, isSelected, setAttributes, }) {
    return (
        <p {...useBlockProps()}>
            <RichText
                tagName="span"
                value={attributes.paragraph}
                className={"et__header-event-date"}
                onChange={(p) => setAttributes({ paragraph: p })}
                placeholder={"DATE Formated like this"}
            />
        </p>
    );
}
