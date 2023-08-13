import Link from 'next/link';
import React from 'react';

export default function Navigation() {
	return (
		<div className="header min-w-screen fixed left-0 top-0 z-10 w-screen px-7 my-5 transition-all duration-500 ease-out">
			<div className="overflow-hidden bg-none">
				<div className="header_container flex items-center justify-between transition-all duration-500 ease-out will-change-transform lg:py-8">
					<Link href="/">MENU</Link>
					<div
						className="header_logo  pointer-event-auto cursor-pointer leading-none transition-height [&>svg]:h-10 [&>svg]:duration-500 [&>svg]:ease-out lg:[&>svg]:h-16 "
						data-color="#a6e2e3"
					>
						<Link href="/">LOGO</Link>
					</div>
					<Link href="about">About</Link>
				</div>
			</div>
		</div>
	);
}
