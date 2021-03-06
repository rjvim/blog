import Container from '../components/container';
import MoreStories from '../components/more-stories';
import HeroPost from '../components/hero-post';
import Intro from '../components/intro';
import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import Head from 'next/head';
import { CMS_NAME } from '../lib/constants';

export default function Index({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts;
  return (
    <>
      <Layout>
        <Head>
          <title>Rajiv Seelam, I am</title>
        </Head>
        <Container>
          <div className="flex flex-col items-start my-8">
            <div className="hidden">
              <h1 className="flex font-bold text-3xl md:text-5xl tracking-tight mb-3 text-black dark:text-white">
                <span className="flex justify-center -space-x-4">
                  <span className="font-bold text-3xl md:text-5xl rounded-full mix-blend-multiply  flex items-center justify-center">
                    Rajiv
                  </span>
                  <span className="font-bold text-3xl md:text-5xl text-gray-200 rounded-full mix-blend-multiply  flex items-center justify-center">
                    rjv
                  </span>
                </span>
                <span>,</span>
                <span className="flex justify-center -space-x-4">
                  <span className="font-bold text-3xl md:text-5xl rounded-full mix-blend-multiply  flex items-center justify-center">
                    I am
                  </span>
                  <span className="font-bold text-3xl md:text-5xl text-gray-200 rounded-full mix-blend-multiply  flex items-center justify-center">
                    im
                  </span>
                </span>
              </h1>
            </div>

            <div className="flex flex-col">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-3 text-black dark:text-white">
                <span className="z-20">Rajiv</span>, I am{' '}
                <span className="text-gray-200">(rjv.im)</span>
              </h1>
              <h2 className="text-gray-700 dark:text-gray-200 mb-4">
                Developer at {'  '}
                <a
                  href="https://betalectic.com/"
                  target={'_default'}
                  className="font-semibold"
                >
                  Betalectic
                </a>
                {'  '}&{'  '}
                <a
                  href="https://teurons.com/"
                  target={'_default'}
                  className="font-semibold"
                >
                  Teurons
                </a>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-16 hidden">
                Helping developers build a faster web. Teaching about web
                development, serverless, and React / Next.js.
              </p>
            </div>
          </div>

          {/* <Intro /> */}
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
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt'
  ]);

  return {
    props: { allPosts }
  };
}
