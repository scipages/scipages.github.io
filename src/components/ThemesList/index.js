import React from 'react';
import clsx from 'clsx';

function ThemeItem({title, description, link_demo, link_github}) {
  return (
    <div className="col col--4 margin-bottom--md">
      <div className="card">
        <div className="card__image">
          <img
            src="https://images.unsplash.com/photo-1506624183912-c602f4a21ca7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt={title + ' Theme'}
            title={title + ' Theme'}/>
        </div>
        <div className="card__body">
          <h4>{title}</h4>
          <small>
            {description}
          </small>
        </div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            <a
              className="button button--primary"
              href={link_demo}
              target="_blank"
              title={title + ' Demo'}>
              Demo
            </a>
            <a
              className="button button--secondary"
              href={link_github}
              target="_blank"
              title={title + ' GitHub'}>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ThemesList({themes}) {
  const themeItems = themes.map((theme, index) =>
    <ThemeItem key={index} {...theme} />
  );

  return (
    <div className="row">
      {themeItems}
    </div>
  );
}
