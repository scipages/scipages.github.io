import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    // Svg: require('../../static/img/undraw_operating_system_re_iqsc.svg').default,
    //Svg: require('../../static/img/undraw_wall_post_re_y78d.svg').default,
    description: (
      <>
        Generate a SEO friendly static website with the press of a button. SciPages lets you focus on your content and it takes care of everything else.
      </>
    ),
  },
  {
    title: 'Multiple Website Types',
    //Svg: require('../../static/img/undraw_social_bio_re_0t9u.svg').default,
    description: (
      <>
        SciPages is focused on academic websites (for <i>personal profiles</i> or <i>research labs</i>, <i>courses</i>, <i>conferences/workshops</i>, etc.). Nevertheless, it can also be used for any other kind of static website.
      </>
    ),
  },
  {
    title: 'Open Source / Cross Platform',
    //Svg: require('../../static/img/undraw_open_source_1qxw.svg').default,
    description: (
      <>
        SciPages is an open source project developed in <a href={'https://github.com/electron/electron'} title={'Electron Github'} target={'_blank'}>Electron</a>, <a href={'https://github.com/microsoft/TypeScript'} title={'TypeScript Github'} target={'_blank'}>TypeScript</a>, <a href={'https://github.com/vuejs/vue'} title={'Vue.js Github'} target={'_blank'}>Vue.js</a>+<a href={'https://github.com/quasarframework/quasar'} title={'Quasar Github'} target={'_blank'}>Quasar</a> and runs on <b>Windows</b>, <b>Linux</b> and <b>macOS</b>.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      {/*
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      */}
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
