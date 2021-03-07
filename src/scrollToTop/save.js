import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<div { ...useBlockProps.save() } className="toTop">
			<svg
				width="30"
				height="23"
				viewBox="0 0 30 23"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M1 22L12.6132 1L17.3868 1L29 22"
					stroke="#1F1F1F"
					stroke-width="1.5"
					stroke-miterlimit="10"
				/>
			</svg>
		</div>
	);
}
