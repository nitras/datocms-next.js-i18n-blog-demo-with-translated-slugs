'use client';
import React from 'react';
import { useRef, useEffect } from 'react';
// import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// const phrase =
// 	'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.';

export default function TextRevealLR({ phrase }) {
	let refs = useRef([]);
	const body = useRef(null);
	const container = useRef(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		createAnimation();
	}, []);

	const createAnimation = () => {
		gsap.to(refs.current, {
			scrollTrigger: {
				trigger: container.current,
				markers: true,
				scrub: true,
				start: `top center`,
				// end: `+=${window.innerHeight / 1.5}`,
				end: `bottom center`,
			},
			opacity: 1,
			ease: 'none',
			stagger: 1,
		});
	};

	const splitWords = (phrase) => {
		let body = [];
		phrase.split(' ').forEach((word, i) => {
			const letters = splitLetters(word);
			body.push(
				<p
					className="m-0  text-5xl px-1 text-white"
					key={word + '_' + i}
				>
					{letters}
				</p>,
			);
		});
		return body;
	};

	const splitLetters = (word) => {
		let letters = [];
		word.split('').forEach((letter, i) => {
			letters.push(
				<span
					key={letter + '_' + i}
					ref={(el) => {
						refs.current.push(el);
					}}
					className="opacity-20"
				>
					{letter}
				</span>,
			);
		});
		return letters;
	};

	return (
		<section
			ref={container}
			className="flex items-end justify-center text-gray-400 my-36 py-4 bg-black"
		>
			<div
				ref={body}
				className="flex flex-wrap w-11/12"
			>
				{splitWords(phrase)}
			</div>
		</section>
	);
}
