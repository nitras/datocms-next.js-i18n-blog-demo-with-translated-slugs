import '../styles/index.css';
import { useEffect } from 'react';
function MyApp({ Component, pageProps }) {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import('locomotive-scroll')).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);

	return <Component {...pageProps} />;
}

export default MyApp;
