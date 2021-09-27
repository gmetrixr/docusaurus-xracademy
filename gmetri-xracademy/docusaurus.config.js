const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'GMetri XR Academy',
  tagline: 'Building no-code intelligent XR',
  //This is necessary to be able to host this page at https://www.gmetri.com/help
  //This should generally be without the /help part acc. to docusaurs docs. https://docusaurus.io/docs/next/docusaurus.config.js#url
  url: 'https://www.gmetri.com',
  //https://docusaurus.io/docs/next/docusaurus.config.js#baseurl
  //This is the content root. Used for making relative URLs. This should be /help/ only
  baseUrl: '/xracademy/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://s.vrgmetri.com/gb-web/portal-docs/assets/img/favicon.ico',
  organizationName: 'gmetrixr', // Usually your GitHub org/user name.
  projectName: 'xracademy', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Going to docs on mode. https://docusaurus.io/docs/next/docs-introduction#docs-only-mode
          routeBasePath: '/',
          // Please change this to your repo.
          editUrl: 'https://github.com/gmetrixr/xracademy/edit/main/gmetri-xracademy/',
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl: 'https://github.com/gmetrixr/docusaurus-docs/edit/main/gmetri-docs/',
        // },
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
        title: 'GMetri XR Academy',
        logo: {
          alt: 'GMetri',
          src: 'https://s.vrgmetri.com/gb-web/portal-docs/assets/img/logo.png',
          srcDark: 'https://s.vrgmetri.com/gb-web/portal-docs/assets/img/logo-white.png'
        },
        items: [
          {href: 'https://www.gmetri.com/help/', label: 'Help Center', position: 'left'},
          {href: 'https://www.gmetri.com/docs/', label: 'Documentation', position: 'left'},
          {
            type: 'doc',
            docId: 'intro',
            label: 'XR Academy',
            position: 'left',
          },
          {href: 'https://www.gmetri.com', label: 'GMetri.com', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Resources',
            items: [
              {
                label: 'Website',
                // to: '/docs/intro',
                href: 'https://www.gmetri.com'
              },
              {
                label: 'Blog',
                href: 'https://www.gmetri.com/justaboutreal'
              },
              {
                label: 'Community',
                href: 'https://community.gmetri.com'
              },
              {
                label: 'Github',
                href: 'https://github.com/gmetrixr'
              },
              {
                label: 'Contact Us',
                href: 'https://www.gmetri.com/contactus'
              }
            ],
          },
          {
            title: 'Follow Us',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/GMetriXR',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/gmetri',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/GMetriXR',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/GMetriXR',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UC1t63AtGiMM2wUGLQ5qVkoA',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Terms of Service',
                href: 'https://www.gmetri.com/termsofservice',
              },
              {
                label: 'Privacy Policy',
                href: 'https://www.gmetri.com/privacypolicy',
              },
              {
                label: 'Fair use Policy',
                href: 'https://www.gmetri.com/acceptableusepolicy',
              },
              {
                label: 'Cookie Policy',
                href: 'https://www.gmetri.com/cookiepolicy',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} GMetri Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
