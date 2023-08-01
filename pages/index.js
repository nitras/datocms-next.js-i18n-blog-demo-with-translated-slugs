import Head from 'next/head';
import { renderMetaTags, useQuerySubscription } from 'react-datocms';
import Container from '../components/container';
import HeroPost from '../components/hero-post';
import Intro from '../components/intro';
import Layout from '../components/layout';
import MoreStories from '../components/more-stories';
import { request } from '../lib/datocms';
import { metaTagsFragment, responsiveImageFragment } from '../lib/fragments';
import { useRouter } from 'next/router';
import LanguageBar from '../components/language-bar';
import ScrollText from '../components/ScrollText';
import Nav from '../components/nav';

import i18n from '../lib/i18n';

import { useIsomorphicLayoutEffect } from '../helpers/isomorphicEffect';
// import VersionDisplay from '../components/versionDisplay';
// import BuildId from '../components/buildid';

export async function getStaticProps({ preview, locale }) {
	const formattedLocale = locale.split('-')[0];
	// console.log(locale);
	// const formattedLocale = locale;
	const graphqlRequest = {
		query: `
      {
        site: _site {
          favicon: faviconMetaTags {
            ...metaTagsFragment
          }
        }
        blog {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
        }
        allPosts(locale: ${formattedLocale}, orderBy: date_DESC, first: 20) {
          title
          slug
          excerpt
          date
          coverImage {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
              ...responsiveImageFragment
            }
          }
          author {
            name
            picture {
              url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
            }
          }
        }
      }

      ${metaTagsFragment}
      ${responsiveImageFragment}
    `,
		preview,
	};

	return {
		props: {
			subscription: preview
				? {
						...graphqlRequest,
						initialData: await request(graphqlRequest),
						token: process.env.NEXT_DATOCMS_API_TOKEN,
						environment: process.env.NEXT_DATOCMS_ENVIRONMENT || null,
				  }
				: {
						enabled: false,
						initialData: await request(graphqlRequest),
				  },
		},
	};
}

export default function Index({ subscription }) {
	const {
		data: { allPosts, site, blog },
	} = useQuerySubscription(subscription);

	// const { locale, locales, asPath } = useRouter().locale;

	const { locale, locales, asPath } = useRouter();

	const heroPost = allPosts[0];
	const morePosts = allPosts.slice(1);
	const metaTags = blog.seo.concat(site.favicon);
	// console.log('log' + locale + '');

	return (
		<>
			<Layout>
				<Head>{renderMetaTags(metaTags)}</Head>
				<Container>
					{/* <Nav /> */}
					<LanguageBar />
					<Intro />

					<h1>Hey: {i18n.peter[locale]}</h1>
					{heroPost && (
						<HeroPost
							title={heroPost.title}
							coverImage={heroPost.coverImage}
							date={heroPost.date}
							author={heroPost.author}
							slug={heroPost.slug}
							excerpt={heroPost.excerpt}
						/>
					)}
					<ScrollText />
					{morePosts.length > 0 && <MoreStories posts={morePosts} />}
				</Container>
			</Layout>
		</>
	);
}
