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

    let paragraphStyles = {
        textAlign: 'left',
        color: '#1f1f1f',
        fontFamily: 'Arial, Helvetica Neue,Helvetica, sans-serif',
        fontWeight: 'bold',
        fontSize: '16px',
        lineHeight: '18px',
        margin: '0',
        maxWidth: '500px',
    }
    return (

        <div {...useBlockProps({ className: "chu-gooding-email-paragraph" })} >
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
                                            tagName="p"
                                            style={paragraphStyles}
                                            value={attributes.paragraph}
                                            className={"newsletter-paragraph"}
                                            onChange={(p) => setAttributes({ paragraph: p })}
                                            placeholder={"Copy Paragraph"}
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
