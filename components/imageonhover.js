import React from 'react';
import { useState } from 'react';
import sampleData from '../helpers/sampleData';
import ImageOnHoverTitle from '../components/imageonhovertitle';
import ImageOnHoverMedia from '../components/imageOnHoverMedia';
export default function imageonhover() {
	// const [modal, setModal] = useState({ active: false, index: 0 });
	const [activeIndex, setActiveIndex] = useState(-1);
	return (
		<div>
			<ul className="py-64">
				{sampleData.map((item, index) => (
					<li
						key={index}
						className="text-2xl py-5"
					>
						{/* <p>{item.title}</p> */}
						<ImageOnHoverTitle
							title={item.title}
							setActiveIndex={setActiveIndex}
							index
						/>
					</li>
				))}
			</ul>

			<div>
				{sampleData.map((item, index) => (
					// const active = index === activeIndex

					<ImageOnHoverMedia theImage={item.image} />
					// <img
					// 	src={item.image}
					// 	alt=""
					// 	active={false}
					// />
				))}
			</div>
		</div>
	);
}
