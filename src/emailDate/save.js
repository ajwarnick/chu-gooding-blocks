/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
    let tableStyles = {
        margin: '0 auto',
        padding: '0',
    }
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
        <div {...useBlockProps.save()} >

            <table
                role="presentation"
                border="0"
                cellpadding="0"
                cellspacing="0"
                style={tableStyles}
            >
                <tr style={tableStyles}>
                    <td className={"container"} >
                        <div className={"date"}>
                            <table
                                role="presentation"
                                class="main"
                                cellpadding="0"
                                cellspacing="0"
                            >
                                <tr>
                                    <td align="center">
                                        <center>
                                            <p>
                                                <RichText.Content style={paragraphStyles} className={"newsletter-date-day"} tagName="span" value={attributes.day} />
                                                <br />
                                                <RichText.Content style={paragraphStyles} className={"newsletter-date-time"} tagName="span" value={attributes.time} />
                                            </p>
                                        </center>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <table className={"spacer"}>
                                            <tbody>
                                                <tr>
                                                    <td
                                                        height="35px"
                                                        style={
                                                            {
                                                                fontSize: '35px',
                                                                lineHeight: '35px',
                                                            }
                                                        }
                                                    >
                                                        &#xA0;
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    );
}
