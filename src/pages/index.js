import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { translate } from '@docusaurus/Translate'
import useBaseUrl from '@docusaurus/useBaseUrl'

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header>
      <div className={clsx('hero', styles.hero)}>
        <div className={clsx('container', styles.heroInner)}>
          <div>
            <h1 className="hero__title">
              {siteConfig.title}
            </h1>
            <p className="hero__subtitle">
              <span className={styles.heroSubTitleTextHtml}>
                A <b>CMS</b> and <b>Static Site Generator</b> for academic websites.
              </span>
            </p>
            {/*
            <img
              alt={translate({ message: 'SciPages' })}
              className={styles.heroLogo}
              src={useBaseUrl('/img/logo.png')}
            />
            */}
          </div>

          <div>
            <a className="margin--xs" href="https://github.com/scipages/scipages/actions" target="_blank">
              <img src="https://github.com/scipages/scipages/workflows/build/badge.svg" alt="build" />
            </a>
            <a className="margin--xs" href="https://github.com/scipages/scipages/blob/main/LICENSE" target="_blank">
              <img src="https://img.shields.io/github/license/scipages/scipages" alt="license" />
            </a>
          </div>

          <div className={clsx('margin-top--md', styles.buttons)}>
            <a
              className={clsx('button button--secondary button--lg margin--sm', styles.githubButton)}
              href="https://github.com/scipages/scipages"
              target="_blank">
              <span className={styles.githubIcon}></span> <span>GitHub</span>
            </a>
            <Link
              className={clsx('button button--info button--lg margin--sm')}
              to={useBaseUrl('download')}>
              Download
            </Link>
            <Link
              className={clsx('button button--primary button--lg margin--sm')}
              to={useBaseUrl('docs/getting-started/intro')}>
              Get Started
            </Link>
          </div>

          {/*
          <div className={clsx('margin-top--md')}>
            <span className={clsx('margin--sm', styles.gitHubStarsButtonWrapper)}>
              <iframe
                className={styles.gitHubStarsButton}
                src="https://ghbtns.com/github-btn.html?user=scipages&amp;repo=scipages&amp;type=star&amp;count=true&amp;size=large"
                width={160}
                height={30}
                title="GitHub Stars"
              />
            </span>
          </div>
          */}

          <div className={clsx('margin-top--md')}>
            ⭐️ If you like SciPages, give it a star on <a className={styles.textUnderlineLink} href="https://github.com/scipages/scipages" target="_blank">GitHub</a> ⭐️
          </div>

          {/*
          <img
            className={clsx('margin-top--lg')}
            alt={translate({ message: 'SciPages' })}
            src={useBaseUrl('/img/scipages-screenshot.png')}
          />
          */}
        </div>
      </div>

      <div className={clsx(styles.announcement, styles.announcementDark)}>
        <div className={styles.announcementInner}>
          SciPages is under active development!<br />Check out the <Link to="https://github.com/scipages/scipages">current progress</Link>.
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
