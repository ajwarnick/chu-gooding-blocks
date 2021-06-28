import { __ } from '@wordpress/i18n';

import { useBlockProps, MediaUpload, Placeholder } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';

import './editor.scss';

export default function Edit({ attributes, isSelected, setAttributes, }) {
    let tableStyles = {
        margin: '0 auto',
        padding: '0',
    }

    function selectImage(value) {
        setAttributes({ image: value.sizes.full.url })
    }

    return (

        <div {...useBlockProps()} >
            <table
                role="presentation"
                border="0"
                cellpadding="0"
                cellspacing="0"
                style={tableStyles}
            >
                <tr style={tableStyles}>
                    <td className={"container"} >
                        <div className={"divider"}>
                            <table
                                role="presentation"
                                class="main"
                                cellpadding="0"
                                cellspacing="0"
                            >
                                <tr>
                                    <td align="center">
                                        <center>
                                            <MediaUpload
                                                onSelect={selectImage}
                                                render={({ open }) => {
                                                    return <img src={attributes.image} onClick={open} />
                                                }}
                                            >
                                                Hello
                                            </MediaUpload>
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
        </div >
    );
}
