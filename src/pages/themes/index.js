import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.scss';
//import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { translate } from '@docusaurus/Translate'
import useBaseUrl from '@docusaurus/useBaseUrl'

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

            <div className="row">
              <div className="col col--4 margin-bottom--md">
                <div className="card">
                  <div className="card__image">
                    <img
                      src="https://images.unsplash.com/photo-1506624183912-c602f4a21ca7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                      alt="Al-Folio Theme"
                      title="Al-Folio Theme"/>
                  </div>
                  <div className="card__body">
                    <h4>Al-Folio</h4>
                    <small>
                      Based on the{' '}
                      <a href="https://github.com/alshedivat/al-folio" target="_blank">Al-Folio</a>
                      {' '}Jekyll theme.
                    </small>
                  </div>
                  <div className="card__footer">
                    <div className="button-group button-group--block">
                      <button className="button button--primary">Demo</button>
                      <button className="button button--secondary">GitHub</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col col--4 margin-bottom--md">
                <div className="card">
                  <div className="card__image">
                    <img
                      src="https://images.unsplash.com/photo-1506624183912-c602f4a21ca7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                      alt="Mono-Researcher Theme"
                      title="Mono-Researcher Theme"/>
                  </div>
                  <div className="card__body">
                    <h4>Mono-Researcher</h4>
                    <small>
                      Based on{' '}
                      <a href="https://github.com/ojroques/hugo-researcher" target="_blank">Hugo-Researcher</a>
                      {' '}and{' '}
                      <a href="https://github.com/ankitsultana/researcher" target="_blank">Jekyll-Researcher</a>.
                    </small>
                  </div>
                  <div className="card__footer">
                    <div className="button-group button-group--block">
                      <button className="button button--primary">Demo</button>
                      <button className="button button--secondary">GitHub</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={clsx('margin-top--lg')}>
              <h2>Other Themes</h2>
              <p>Themes developed by the SciPages users.</p>
            </div>

            <div className="row">
              <div className="col col--4">
                ...
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
