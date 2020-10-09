module.exports = {
  title: 'csaa design docs',
  tagline: '',
  url: 'http://dev.csaa.design',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'so-boss', // Usually your GitHub org/user name.
  projectName: 'Design-Commons', // Usually your repo name.
  themeConfig: {
    //disableDarkMode: true,
    navbar: {
      // title: 'Design Commons',
      logo: {
        alt: 'My Site Logo',
        src: 'img/aaa-logo.svg',
      },
      items: [
        {
          to: 'docs/guidelines/color',
          activeBasePath: 'docs',
          label: 'Design',
          position: 'left',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Design Guidelines',
          items: [
            {
              label: 'Color',
              to: 'docs/guidelines/color',
            },
            {
              label: 'Typography',
              to: 'docs/guidelines/typography',
            }
          ],
        },
      ],
      //copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    colorMode:{
      disableSwitch: true
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          //homePageId: '/',
          // slug: "/",
          sidebarPath: require.resolve('./sidebars.js'),
          //path: 'design',
          admonitions: {},
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
  ],
  themes: []
};
