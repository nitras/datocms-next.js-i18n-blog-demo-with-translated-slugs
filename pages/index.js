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
// import ScrollText from '../components/ScrollText';

import i18n from '../lib/i18n';
import TextRevealLR from '../components/TextRevealLR';

// import Image from 'next/image';
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
					{/* <LanguageBar /> */}

					{/* <ImageOnHover /> */}
					{/* <Intro /> */}

					{/* <h1>Hey: {i18n.peter[locale]}</h1> */}
					{/* {heroPost && (
						<HeroPost
							title={heroPost.title}
							coverImage={heroPost.coverImage}
							date={heroPost.date}
							author={heroPost.author}
							slug={heroPost.slug}
							excerpt={heroPost.excerpt}
						/>
					)} */}

					<TextRevealLR phrase="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi totam nulla eligendi? Enim expedita velit nesciunt debitis quaerat, vitae nostrum nemo asperiores laborum veritatis placeat quisquam repellat non unde, modi accusantium omnis. Officiis?" />

					<p className="text-4xl py-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vero
						placeat reiciendis ipsam explicabo asperiores a voluptate
						perferendis? Iste ipsa tempore aliquid aspernatur cumque, distinctio
						exercitationem esse consectetur, harum a nostrum debitis enim
						accusamus. Sunt sequi, numquam eligendi voluptate aut tenetur
						veritatis ipsam labore!
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ea
						beatae itaque magnam repellat dolore inventore earum id tenetur
						quae, blanditiis numquam possimus dolorem voluptates, illum
						dignissimos corrupti mollitia eos nesciunt qui necessitatibus? Qui
						similique tempora culpa cumque et, quidem nisi eum sunt! Corrupti
						iure id rem repellendus blanditiis quaerat similique, atque libero,
						expedita dolorum magni! Voluptatum omnis tempora labore veritatis,
						voluptatibus ea ab, incidunt deserunt dolorum, quia officiis
						similique cupiditate numquam sequi. Voluptate, cupiditate nam,
						perspiciatis officiis odit quas veniam soluta veritatis, placeat
						deserunt alias tenetur maxime vitae dolor hic? Ullam voluptas
						consectetur illo hic dolor amet nesciunt corporis doloremque ipsam,
						repellat esse fuga, fugiat maiores voluptatum tempore. Provident
						commodi quos aliquid illum alias voluptas minima excepturi sed
						reprehenderit! Exercitationem, suscipit. Dolor facere harum, aliquid
						hic eius voluptate! Libero voluptatum adipisci, autem minima magni
						rem alias molestiae! Consequatur recusandae, corrupti earum error
						accusamus quaerat iure doloremque neque totam exercitationem vitae
						aliquam delectus natus deserunt minima est laudantium! Architecto
						corrupti, iusto quis deleniti accusantium ut eius amet commodi
						voluptatem similique hic accusamus voluptatum eveniet! Natus, porro.
						In deleniti mollitia voluptatem expedita quam culpa reprehenderit
						sint tenetur aspernatur commodi esse doloremque, ratione maiores,
						suscipit ad, amet repellat ipsam repudiandae! Veniam, at? Nulla
						assumenda ducimus ratione alias. Incidunt, ab nam adipisci
						laudantium nihil voluptatum. Doloribus qui id, ut animi nemo,
						debitis dolor non aliquam quidem similique beatae facilis
						perferendis sunt ducimus odio ex saepe? Harum corrupti, minima,
						fugit eos excepturi iste iure quisquam reiciendis perferendis eum
						dolore temporibus eius vero illo id nam quaerat libero maxime eaque
						laborum. Doloremque molestiae porro amet, obcaecati saepe, explicabo
						distinctio ducimus molestias enim libero in? Accusantium aliquid
						maiores quibusdam perferendis accusamus, voluptas est voluptatum
						laborum reprehenderit odio quam ipsum placeat fugiat illo corrupti
						neque totam veritatis mollitia! Consequatur atque saepe minima
						laboriosam. Ipsum odit quibusdam vero in, deleniti dolores tempora
						sequi aliquid voluptatum a repellendus voluptates vitae laborum
						consequuntur accusamus laudantium repudiandae nisi similique
						exercitationem aut harum aliquam facilis officia? Non vitae
						consectetur assumenda nobis laborum iste vel maiores et hic at
						aliquam animi, culpa fugit quia. Non, laborum reiciendis dolores
						eligendi animi possimus incidunt vel mollitia nemo porro, quibusdam
						voluptates beatae quis? Ab officiis facilis in tenetur delectus
						dicta ipsam est vel eum optio sint culpa perspiciatis sit
						repudiandae sunt doloribus alias nisi eligendi provident odio,
						voluptatibus odit saepe. Iste et quaerat cupiditate? Nisi unde
						mollitia voluptatum saepe molestias ipsa laboriosam facere
						laudantium distinctio aut nobis in, fuga ex libero exercitationem
						harum nulla explicabo dicta debitis nostrum reprehenderit dolore
						rerum consequatur? Pariatur possimus cum quis dolorem consequatur
						sed ipsum nam recusandae asperiores magnam provident eaque facere
						soluta, officiis doloremque aspernatur. Accusantium, sed odit
						praesentium labore minus qui, excepturi enim reprehenderit
						consectetur asperiores perspiciatis earum pariatur laborum ipsa.
						Corrupti quibusdam, praesentium molestiae consequatur ad vitae unde
						enim rerum, cum dolore fugit veritatis perferendis ratione. Harum
						voluptates quo necessitatibus, veritatis, eos eveniet dolorem magnam
						unde iusto nobis ratione ullam illo voluptatem praesentium,
						molestias consequuntur quod repellat corrupti autem quae minima id?
						Nihil sint cumque, voluptates esse mollitia explicabo facilis!
						Consequatur aspernatur vero consectetur nesciunt provident, totam
						voluptate in exercitationem repudiandae? Totam numquam
						exercitationem commodi mollitia adipisci eius dolores, nostrum
						corrupti laudantium eveniet inventore molestias quod! Sunt culpa
						impedit excepturi quibusdam! Repudiandae perferendis cum ab quas
						iusto necessitatibus, eligendi nihil aut tempore earum repellendus
						minus ut totam voluptate reiciendis? Suscipit cum labore tenetur
						voluptas? Eaque consequuntur nulla repellat quam quasi ea nam
						temporibus ad rem, dicta non iste beatae, quae atque quia sunt
						officiis! Rem quasi est placeat numquam adipisci optio corrupti
						aliquam eos? Sapiente itaque architecto quia qui facere! Laboriosam
						architecto ullam corrupti maiores ut consequatur, molestiae unde
						sint obcaecati et nesciunt animi ratione, aperiam commodi fuga eum!
						Eius pariatur corporis illo perspiciatis quia numquam, ipsa magni,
						non eaque ipsam perferendis labore necessitatibus vero? Incidunt
						corporis praesentium sapiente minima ut ipsum excepturi, explicabo
						obcaecati harum necessitatibus ipsa quod repellendus tenetur
						reprehenderit. Quo omnis inventore voluptatibus, pariatur similique
						necessitatibus nostrum, accusantium numquam quae debitis, corporis
						officia minima! Architecto minus ut expedita quibusdam harum eum
						tempora? Molestiae quo cumque laudantium, vitae itaque earum iusto
						cupiditate necessitatibus, officiis reprehenderit soluta doloribus.
						Iste cum eum, delectus error laboriosam, voluptatum atque aperiam in
						nulla tempore tenetur inventore quos veritatis ipsa non maiores enim
						consequatur veniam possimus. Eligendi, est placeat ea saepe quas
						quidem deleniti ipsum voluptatibus hic sit numquam beatae laborum
						autem debitis. Ratione sapiente harum fuga quas quisquam facilis,
						rem non dolore illo doloribus nemo tempore, ea laudantium! Quaerat
						odio, ex corrupti facilis architecto impedit cum, blanditiis
						quibusdam quae hic soluta delectus velit at ad laboriosam expedita
						officia animi repudiandae aperiam dolorem nobis quia nulla qui
						similique. Porro dolores harum facere odit mollitia? Nemo
						exercitationem neque illum quod eum consectetur laborum esse numquam
						laudantium delectus, similique sit rerum ab fuga molestias tempore
						fugit non officia sunt repellendus. Cupiditate ipsam est, beatae
						magni explicabo eveniet accusantium placeat quas impedit pariatur!
						Quo aliquam ad fuga quia ipsa rerum soluta blanditiis velit
						consequatur suscipit! Voluptatibus provident recusandae sequi
						molestias nesciunt, expedita illo! Laborum expedita excepturi quia
						obcaecati fugit accusamus ab iusto voluptatibus quos odit officiis,
						totam commodi suscipit, repellendus explicabo assumenda consectetur.
						Consequatur veniam sit ullam incidunt, alias libero aperiam eveniet
						in illo quis vel ab sequi, ad, distinctio doloribus aliquam
						assumenda explicabo blanditiis omnis totam ipsum praesentium.
						Dolores quas, unde quidem fugiat consectetur tenetur. Consequatur
						beatae, ea deserunt aspernatur reiciendis dicta nam? Asperiores
						ipsum quae officiis earum optio soluta temporibus quibusdam nostrum
						et eveniet consequatur impedit, facilis vel facere amet
						reprehenderit pariatur sint ea molestias cum? Reprehenderit optio
						quod, eos repudiandae, ducimus quidem veniam debitis, accusamus
						fugiat modi saepe sed odit commodi alias praesentium distinctio
						corrupti explicabo? Illum magnam sunt rem totam, voluptates cum
						alias nam dolor libero ipsam at delectus adipisci, neque
						consequuntur dolorum fugiat? Eum, hic sed voluptate, facere unde
						temporibus ex dolor veniam ipsum placeat maiores quia dolore fugit!
						Quidem numquam obcaecati optio doloremque perferendis modi nobis
						delectus! Accusantium minus ipsum, voluptatem eaque veritatis
						deserunt asperiores odit est, numquam maxime sequi! Sit, cum
						voluptates quae voluptas nihil voluptate necessitatibus quod.
					</p>
					{/* <ScrollText /> */}
					{morePosts.length > 0 && <MoreStories posts={morePosts} />}
				</Container>
			</Layout>
		</>
	);
}
