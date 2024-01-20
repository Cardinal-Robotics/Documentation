
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';

//@ts-expect-error
import homePageCard from "@site/static/img/white-home-page-card.png";

import styles from './index.module.css';

import Heading from '@theme/Heading';
import Layout from '@theme/Layout';

import clsx from 'clsx';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title montserrat-font">
          {siteConfig.title}
        </Heading>
        <img src={homePageCard} width={248} height={248}/>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/programming">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Documentation"
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
    </Layout>
  );
}
