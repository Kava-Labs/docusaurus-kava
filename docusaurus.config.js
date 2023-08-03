// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kava',
  tagline: 'Kava',
  url: 'https://docs.kava.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/kava.svg',
  organizationName: 'kava labs', // Usually your GitHub org/user name.
  projectName: 'Kava Documentation', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Kava-Labs/docusaurus-kava',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Developer Docs',
        logo: {
          alt: 'Kava Logo',
          src: 'img/kava.svg',
        },
        items: [
          {
            href: 'https://github.com/Kava-Labs',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://discord.gg/JJYnuCx',
            label: 'Discord',
            position: 'right',
          },
          {
            href: 'https://twitter.com/KAVA_CHAIN',
            label: 'Twitter',
            position: 'right',
          },
        ],
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

      // https://docusaurus.io/docs/search#connecting-algolia
      algolia: {
        // The application ID provided by Algolia
        appId: 'FPOTVYBQZ6',
        // Public API key: it is safe to commit it
        apiKey: '05e2d0ec6c72b1b2b826330148aef3d6',
        // Index name provided by Algolia
        indexName: 'kava',

        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push.
        // Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Algolia search parameters
        searchParameters: {},

        insights: false, // Optional, automatically send insights when user interacts with search results
        // container: '### REPLACE ME WITH A CONTAINER (e.g. div) ###',
        debug: false, // Set debug to true if you want to inspect the modal
      },
    }),
};

module.exports = config;
