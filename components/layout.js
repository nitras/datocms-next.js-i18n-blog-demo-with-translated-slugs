import Navigation from '../components/nav';
import Footer from '../components/footer';

export default function Layout({ children }) {
	return (
		<>
			<Navigation />
			<div className="min-h-screen">
				<main>{children}</main>
			</div>
			<Footer />
		</>
	);
}
