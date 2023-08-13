'use client';
import React, { useLayoutEffect, useRef } from 'react';
// import styles from './style.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import backgroundPicture from '../public/image1-large.jpg';

export default function ImageClipSection() {
	const backgroundImage = useRef(null);
	const homeHeader = useRef(null);

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const timeline = gsap.timeline({
			scrollTrigger: {
				trigger: document.documentElement,
				scrub: true,
				start: 'top',
				end: 'bottom',
			},
		});

		timeline.from(backgroundImage.current, { clipPath: `inset(15%)` });
	}, []);

	return (
		<div>
			<Image
				// src={'/image1.jpg'}
				src={backgroundPicture}
				className="relative object-cover h-full"
				alt="backgroundImage image"
				priority={true}
				placeholder="blur"
			/>
		</div>
	);
}
