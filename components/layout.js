import Alert from '../components/alert';
import Footer from '../components/footer';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';

export default function Layout({ preview, children }) {
	const lenis = useLenis(({ scroll }) => {
		// called every scroll
	});
	return (
		<ReactLenis root>
			<div className="min-h-screen">
				{/* <Alert preview={preview} /> */}
				<main>{children}</main>
			</div>
			<Footer />
		</ReactLenis>
	);
}
