import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.scss';
import ThemesList from '@site/src/components/ThemesList';
import { translate } from '@docusaurus/Translate'
import useBaseUrl from '@docusaurus/useBaseUrl'
import themes_default from '@site/src/data/themes_default';
import themes_other from '@site/src/data/themes_other';

export default function Themes() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`SciPages Themes`}
      description={`List of themes available in SciPages`}>
      <main>
        {/*<HomepageFeatures />*/}
        <section className={styles.themes}>
          <div className="container">
            <div className={styles.header}>
              <h1>
                SciPages Themes
              </h1>
              <p>
                List of themes available in SciPages.
              </p>
              <a
                className={clsx('button button--primary button--md margin-bottom--md')}
                //href="https://github.com/scipages/scipages"
                target="_blank">
                ➕ Add your theme to this list
              </a>
            </div>

            <div>
              <h2>Default Themes</h2>
              <p>Themes developed by us and included in SciPages.</p>
            </div>

            <ThemesList
              themes={themes_default}
            />

            <div className={clsx('margin-top--lg')}>
              <h2>Other Themes</h2>
              <p>Themes developed by the SciPages users.</p>
            </div>

            {/*
            <ThemesList
              themes={themes_other}
            />
            */}
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
