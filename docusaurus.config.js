// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FEAST',
  tagline: 'Filipino Engineering Association of Toronto',
  favicon: 'img/logo.ico',

  // Set the production url of your site here
  url: 'https://uoftfeast.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/FEAST-Website/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'uoftfeast', // Usually your GitHub org/user name.
  projectName: 'FEAST-Website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'logo.png',
      navbar: {
        title: 'FEAST',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          {
            to: '/docs/events',
            label: 'Events',
            position: 'left'
          },
          {
            to: '/docs/team',
            label: 'Team',
            position: 'left'
          },
          {
            to: '/docs/photos',
            label: 'Photos',
            position: 'left'
          },
          {
            to: '/docs/contact',
            label: 'Join Us',
            position: 'left'
          },
          
          //{to: '/blog', label: 'Blog', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'More',
            items: [
              {
                label: 'Events',
                to: '/docs/events',
              },
            ],
          },
          {
            title: 'Socials',
            items:           
              [
                {
                  html: 
                    `
                    <a href="mailto:filipino.uoftengineering@gmail.com" target="_blank" rel="noreferrer noopener" aria-label="Email">
                      <img src="img/email-logo.png" alt="Email" style="width: 40px; height: 40px;" />
                    </a>

                    <a href="https://www.instagram.com/uoft_feast/" target="_blank" rel="noreferrer noopener" aria-label="Instagram">
                      <img src="img/instagram-logo.png" alt="Instagram" style="width: 40px; height: 40px;" />
                    </a>

                    <a href="https://discord.gg/sYA6uAjQwT" target="_blank" rel="noreferrer noopener" aria-label="Discord">
                      <img src="img/discord-logo.png" alt="Discord" style="width: 40px; height: 40px;" />
                    </a>

                    `,
                },
            ],
          },
        ],
        copyright: `FEAST ${new Date().getFullYear()}`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
