import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	FormFileUpload,
} from "@wordpress/block-editor";
import { useDispatch } from "@wordpress/data";
import { store as noticesStore } from "@wordpress/notices";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();

	const { createErrorNotice, removeNotice } = useDispatch(noticesStore);

	const onChangeEyebrow = (newEyebrow) => {
		setAttributes({ eyebrow: newEyebrow });

		if (newEyebrow.length === 0) {
			createErrorNotice("Eyebrow is required", {
				id: "eyebrow-required",
				isDismissible: false,
			});

			/* Prevent post content from saving and autosaving */
			wp.data.dispatch("core/editor").lockPostSaving("eyebrow-required");
			wp.data.dispatch("core/editor").lockPostAutosaving("eyebrow-required");
		} else {
			removeNotice("eyebrow-required");

			/* Unlock post */
			wp.data.dispatch("core/editor").unlockPostSaving("eyebrow-required");
			wp.data.dispatch("core/editor").unlockPostAutosaving("eyebrow-required");
		}
	};

	const onChangeTitle = (newTitle) => {
		setAttributes({ title: newTitle });

		if (newTitle.length === 0) {
			createErrorNotice("Title is required", {
				id: "title-required",
				isDismissible: false,
			});

			/* Prevent post content from saving and autosaving */
			wp.data.dispatch("core/editor").lockPostSaving("title-required");
			wp.data.dispatch("core/editor").lockPostAutosaving("title-required");
		} else {
			removeNotice("title-required");

			/* Unlock post */
			wp.data.dispatch("core/editor").unlockPostSaving("title-required");
			wp.data.dispatch("core/editor").unlockPostAutosaving("title-required");
		}
	};

	const onChangeContent = (newContent) => {
		setAttributes({ content: newContent });

		if (newContent.length === 0) {
			createErrorNotice("Content is required", {
				id: "content-required",
				isDismissible: false,
			});

			/* Prevent post content from saving and autosaving */
			wp.data.dispatch("core/editor").lockPostSaving("content-required");
			wp.data.dispatch("core/editor").lockPostAutosaving("content-required");
		} else {
			removeNotice("content-required");

			/* Unlock post */
			wp.data.dispatch("core/editor").unlockPostSaving("content-required");
			wp.data.dispatch("core/editor").unlockPostAutosaving("content-required");
		}
	};

	const MyFormFileUpload = () => (
		<FormFileUpload
			accept="image/*"
			onChange={(event) => console.log(event.currentTarget.files)}
		>
			Upload
		</FormFileUpload>
	);

	return (
		<div>
			<RichText
				{...blockProps}
				tagName="h6"
				onChange={onChangeEyebrow}
				allowedFormats={["core/bold", "core/italic"]}
				value={attributes.eyebrow}
				placeholder={__("Write your text...")}
			/>

			<RichText
				{...blockProps}
				tagName="h2"
				onChange={onChangeTitle}
				allowedFormats={["core/bold", "core/italic"]}
				value={attributes.title}
				placeholder={__("Write your text...")}
			/>

			<RichText
				{...blockProps}
				tagName="p"
				onChange={onChangeContent}
				allowedFormats={["core/bold", "core/italic"]}
				value={attributes.content}
				placeholder={__("Write your text...")}
			/>
		</div>
	);
}
