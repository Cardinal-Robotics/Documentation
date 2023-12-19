import {themes as prismThemes} from 'prism-react-renderer';

import type * as Preset from '@docusaurus/preset-classic';
import type {Config} from '@docusaurus/types';

import "dotenv/config";

const config: Config = {
  title: 'Cardinal Robotics',
  tagline: 'FRC Robot Documentation.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://cardinal-robotics.github.io/',
  baseUrl: '/Documentation',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Cardinal-Robotics', // Usually your GitHub org/user name.
  projectName: 'Documentation', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: true,

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
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Cardinal-Robotics/Documentation/blob/main',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Documentation',
      logo: {
        alt: 'SC Cardinal Logo',
        src: 'img/LargerCardinal4C.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'sidebar',
          position: 'left',
          label: 'Programing',
        },
/*         {
          type: 'docSidebar',
          sidebarId: 'electricalSidebar',
          position: 'left',
          label: 'Electrical',
        },
        {
          type: 'docSidebar',
          sidebarId: 'cadSidebar',
          position: 'left',
          label: 'CAD',
        },
        {
          type: 'docSidebar',
          sidebarId: 'etcSidebar',
          position: 'left',
          label: 'Etc...',
        }, */
        {
          href: 'https://github.com/Cardinal-Robotics',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Programming',
              to: '/docs/programming/Lessons',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/frc4269',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/FRC4269',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Main Website',
              href: 'https://stcharlesrobotics.com/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Cardinal-Robotics',
            },
            {
              label: 'Email',
              href: 'mailto:stcharlesrobotics@scprep.org'
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Cardinal Robotics Documentation. Built with Docusaurus.`,
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: true
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
