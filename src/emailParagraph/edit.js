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

    let headerStyles = {
        textAlign: 'center',
        color: '#1f1f1f',
        fontFamily: 'Arial, Helvetica Neue,Helvetica, sans-serif',
        fontWeight: 'bold',
        fontSize: '36px',
        lineHeight: '41px',
        margin: '0',
        maxWidth: '600px',
    }
    return (

        <div {...useBlockProps({ className: "chu-gooding-email-header" })} >
            <table
                role="presentation"
                border="0"
                cellpadding="0"
                cellspacing="0"
            >
                <tr>
                    <td>
                        <table cellpadding="0" cellspacing="0">
                            <tr>
                                <th align="center">
                                    <center >
                                        <RichText
                                            tagName="h1"
                                            style={headerStyles}
                                            value={attributes.paragraph}
                                            className={"et__header-event-date"}
                                            onChange={(p) => setAttributes({ paragraph: p })}
                                            placeholder={"Header Text"}
                                        />
                                    </center>
                                </th>
                                <th className="expander"></th>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>

    );
}
