import Link from 'next/link';
import { useRouter } from 'next/router';

export default function LanguageBar({ localizedSlug }) {
	const router = useRouter();
	const currentPath = router.asPath;
	return (
		<section className="flex-col md:flex-row flex items-center md:justify-end mr-0 mt-0 mb-0 md:mb-0">
			<Link
				href={router.locale == 'nl-BE' ? currentPath : localizedSlug || '/'}
				locale="nl-BE"
			>
				<a className="underline hover:text-success duration-200 transition-colors p-1">
					Dutch NL-BE
				</a>
			</Link>

			<Link
				href={router.locale == 'en' ? currentPath : localizedSlug || '/'}
				locale="en"
			>
				<a className="underline hover:text-success duration-200 transition-colors p-1">
					English
				</a>
			</Link>
		</section>
	);
}
