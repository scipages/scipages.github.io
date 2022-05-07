import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link'

export default ({ content }) => {
  return (
    <div className={clsx(styles.osList, 'container')}>
      <div className="row">
        <div className={clsx('col')}>
          <div className="card">
            <div className="card__body">
              <Link to={content.windows.link} className={styles.osIconLink}>
                <img className={styles.osIconImg} src="/img/svgs/windows.svg" alt="Windows"/>
              </Link>
            </div>
            <div className="card__footer">
              <Link to={content.windows.link}>
                <h3>
                  {content.windows.title}
                  <br/>
                  {content.windows.title2}
                </h3>
              </Link>
            </div>
          </div>
        </div>
        <div className={clsx('col')}>
          <div className="card">
            <div className="card__body">
              <Link to={content.linux.link} className={styles.osIconLink}>
                <img className={styles.osIconImg} src="/img/svgs/linux.svg" alt="Linux"/>
              </Link>
            </div>
            <div className="card__footer">
              <Link to={content.linux.link}>
                <h3>
                  {content.linux.title}
                  <br/>
                  {content.linux.title2}
                </h3>
              </Link>
            </div>
          </div>
        </div>
        <div className={clsx('col')}>
          <div className="card">
            <div className="card__body">
              <Link to={content.macos.link} className={styles.osIconLink}>
                <img className={styles.osIconImg} src="/img/svgs/apple.svg" alt="macOS"/>
              </Link>
            </div>
            <div className="card__footer">
              <Link to={content.macos.link}>
                <h3>
                  {content.macos.title}
                  <br/>
                  {content.macos.title2}
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
