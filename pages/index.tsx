import Head from 'next/head';
import { GetStaticProps } from 'next';

import dynamic from 'next/dynamic';

import HeroSection from '../components/home/HeroSection';

const AboutSection = dynamic(() => import('../components/home/AboutSection'));
const PortfolioSection = dynamic(() => import('../components/home/PortfolioSection'));
const ContactSection = dynamic(() => import('../components/home/ContactSection'));
// const BlogSection = dynamic(() => import('../components/home/BlogSection'));

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const response = await import(`../locales/${locale}.json`);

  return {
    props: {
      content: response.default,
    },
  };
};

export default function Index({
  content,
}: {
  content: typeof import('../locales/en.json');
}) {
  const {
    defaultSeo,
    heroData,
    aboutData,
    portfolioData,
    // blogData,
    contactData,
  } = content;

  const { title, description, url, previewImage } = defaultSeo;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />
        <meta
          content="portfolio, personal website, web developer"
          name="keywords"
        />
        <meta content="English" name="language" />
        <meta content="Awais Nasir" name="author" />
        <link href="/favicon.ico" rel="icon" />

        {/* Open Graph */}
        <meta key="ogtitle" content={title} property="og:title" />
        <meta key="ogdesc" content={description} property="og:description" />
        <meta content="website" property="og:type" />
        <meta key="ogurl" content={url} property="og:url" />
        <meta key="ogimage" content={previewImage} property="og:image" />
      </Head>

      <HeroSection heroData={heroData} />
      <AboutSection aboutData={aboutData} />
      <PortfolioSection portfolioData={portfolioData} />
      {/* <BlogSection blogData={blogData} /> */}
      {/* No Blogs for now */}
      <ContactSection contactData={contactData} />
    </>
  );
}
