import Avatar from '../components/avatar';
import Date from '../components/date';
import CoverImage from '../components/cover-image';
import Link from 'next/link';

export default function HeroPost({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug,
}) {
	return (
		<section>
			<div className="mb-8 md:mb-16">
				<CoverImage
					title={title}
					responsiveImage={coverImage.responsiveImage}
					slug={slug}
				/>
			</div>
			<div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
				<div>
					<h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
						<Link
							as={`/posts/${slug}`}
							href="/posts/[slug]"
							className="hover:underline"
						>
							{title}
						</Link>
					</h3>
					<div className="mb-4 md:mb-0 text-lg">
						<Date dateString={date} />
					</div>
				</div>
				<div>
					<p className="text-lg leading-relaxed mb-4">{excerpt}</p>
					<Avatar
						name={author.name}
						picture={author.picture}
					/>
				</div>
			</div>
		</section>
	);
}
