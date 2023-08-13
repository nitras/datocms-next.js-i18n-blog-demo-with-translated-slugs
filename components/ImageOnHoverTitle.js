import React from 'react';

export default function ImageOnHoverTitle({ title, setActiveIndex, index }) {
	return (
		<div
			onMouseEnter={() => setActiveIndex(index)}
			onMouseLeave={() => setActiveIndex(-1)}
		>
			{title}
		</div>
	);
}
