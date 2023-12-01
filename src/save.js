import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const blockProps = useBlockProps.save();
	return (
		<div>
			<RichText.Content
				{...blockProps}
				tagName="h6"
				value={attributes.eyebrow}
			/>
			<RichText.Content {...blockProps} tagName="h2" value={attributes.title} />
			<RichText.Content
				{...blockProps}
				tagName="p"
				value={attributes.content}
			/>
		</div>
	);
}
