import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.scss';
//import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { translate } from '@docusaurus/Translate'
import useBaseUrl from '@docusaurus/useBaseUrl'

export default function Showcase() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`SciPages Sites Showcase`}
      description={`List of websites people have built with SciPages`}>
      <main>
        {/*<HomepageFeatures />*/}
        <section className={styles.showcase}>
          <div className="container">
            <div className={styles.header}>
              <h1>
                SciPages Sites Showcase
              </h1>
              <p>
                List of websites people have built with SciPages.
              </p>
              <a
                className={clsx('button button--primary button--md')}
                //href="https://github.com/scipages/scipages"
                target="_blank">
                ➕ Add your website to this list
              </a>
            </div>

            <div className={clsx('margin-top--lg')}>
              <h2>Our Favorites 💚</h2>
            </div>

            <div className="row">
              <div className="col">
                ...
              </div>
            </div>

            <div className={clsx('margin-top--lg')}>
              <h2>Personal Websites</h2>
            </div>

            <div className="row">
              <div className="col">
                ...
              </div>
            </div>

            <div className={clsx('margin-top--lg')}>
              <h2>Research Lab Websites</h2>
            </div>

            <div className="row">
              <div className="col">
                ...
              </div>
            </div>

            <div className={clsx('margin-top--lg')}>
              <h2>Course Websites</h2>
            </div>

            <div className="row">
              <div className="col">
                ...
              </div>
            </div>

            <div className={clsx('margin-top--lg')}>
              <h2>Conference/Workshop Websites</h2>
            </div>

            <div className="row">
              <div className="col">
                ...
              </div>
            </div>

            <div className={clsx('margin-top--lg')}>
              <h2>Other Websites</h2>
            </div>

            <div className="row">
              <div className="col">
                ...
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
