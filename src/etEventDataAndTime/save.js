import { useBlockProps, RichText  } from '@wordpress/block-editor';

export default function save({ attributes } ) {
	const blockProps = useBlockProps.save();
	return (
		<div {...blockProps}>
            <p className={"et__header-event"}>
                <RichText.Content
                    tagName="span"
                    value={attributes.date}
                    className={"et__header-event-date"}
                />
            </p>
            <p className={"et__header-event"}>
                <RichText.Content
                    tagName="span"
                    value={attributes.time}
                    className={"et__header-event-time"}
                />
            </p>
      </div>
	);
}
