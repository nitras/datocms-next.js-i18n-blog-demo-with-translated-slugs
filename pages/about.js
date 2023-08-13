import Head from 'next/head';
import { renderMetaTags, useQuerySubscription } from 'react-datocms';
import Container from '../components/container';
import Layout from '../components/layout';
import { request } from '../lib/datocms';
import { metaTagsFragment, responsiveImageFragment } from '../lib/fragments';

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
export default function About({ subscription }) {
	const {
		data: { allPosts, site, blog },
	} = useQuerySubscription(subscription);
	const metaTags = blog.seo.concat(site.favicon);
	return (
		<>
			<Layout>
				<Head>{renderMetaTags(metaTags)}</Head>
				<Container>
					<p className="text-4xl py-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vero
						placeat reiciendis ipsam explicabo asperiores a voluptate
						perferendis? Iste ipsa tempore aliquid aspernatur cumque, distinctio
						exercitationem esse consectetur, harum a nostrum debitis enim
						accusamus. Sunt sequi, numquam eligendi voluptate aut tenetur
						veritatis ipsam labore!
					</p>
				</Container>
			</Layout>
		</>
	);
}
