const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'SciPages',
  tagline: 'A CMS and Static Site Generator for academic websites',
  url: 'https://www.scipages.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'scipages', // Usually your GitHub org/user name.
  projectName: 'https://scipages.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  plugins: [
    'docusaurus-plugin-sass'
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/scipages/scipages.github.io/edit/main',
          lastVersion: 'current',
          versions: {
            current: {
              label: '0.x.x',
            },
          },
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl: 'https://github.com/scipages/scipages.github.io/edit/main',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'G-BKKLQ195F9',
          anonymizeIP: true,
        },
      },
    ],
  ],

  themeConfig: {
    // announcementBar: {
    //   id: 'announcementBar-2',
    //   content:
    //     '⭐️ If you like SciPages, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/scipages/scipages">GitHub</a>! ⭐️',
    // },
    metadata: [{name: 'keywords', content: 'scipages, academic websites, static site generator, cms'}],
    hideableSidebar: true,
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    navbar: {
      title: 'SciPages',
      logo: {
        alt: 'SciPages',
        src: 'img/logo.png',
      },
      hideOnScroll: true,
      items: [
        {
          type: 'doc',
          docId: 'getting-started/intro',
          position: 'right',
          label: 'Documentation',
        },
        {
          to: '/themes',
          label: 'Themes',
          position: 'right'
        },
        {
          to: '/showcase',
          label: 'Showcase',
          position: 'right'
        },
        {
          to: '/download',
          label: 'Download',
          position: 'right'
        },
        // {
        //   href: 'https://github.com/scipages/scipages',
        //   label: 'GitHub',
        //   position: 'right',
        // },
        {
          href: 'https://github.com/scipages/scipages',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository'
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Tutorial',
        //       to: '/docs/intro',
        //     },
        //   ],
        // },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: '/blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/scipages/scipages',
        //     },
        //   ],
        // },
      ],
      logo: {
        alt: 'SciPages Logo',
        src: '/img/logo-white-no-frame.png',
        href: 'https://www.scipages.org/',
      },
      copyright: `Copyright © ${new Date().getFullYear()} SciPages.`,
    },
  },
};
