import { useRouter } from 'next/router';
import { PageProvider } from '../context/pageProvider';
import '../styles/index.css';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	return (
		<AnimatePresence mode="wait">
			<motion.div key={router.pathname}>
				<PageProvider>
					<Component {...pageProps} />

					<motion.div
						className="slide-in"
						initial={{ scaleY: 0 }}
						animate={{ scaleY: 0 }}
						exit={{ scaleY: 1 }}
						transition={{ duraction: 1, ease: [0.22, 1, 0.36, 1] }}
					></motion.div>
					<motion.div
						className="slide-out"
						initial={{ scaleY: 1 }}
						animate={{ scaleY: 0 }}
						exit={{ scaleY: 0 }}
						transition={{ duraction: 1, ease: [0.22, 1, 0.36, 1] }}
					></motion.div>
				</PageProvider>
			</motion.div>
		</AnimatePresence>
	);
}

export default MyApp;
