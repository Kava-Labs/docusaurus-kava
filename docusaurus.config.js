// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kava',
  tagline: 'Kava',
  url: 'https://your-docusaurus-test-site.com',
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
        title: '',
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
            href: 'https://twitter.com/kava_labs',
            label: 'Twitter',
            position: 'right',
          },
        ],
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
