
module.exports = {
  title: 'csaa design docs',
  tagline: '',
  url: 'https://github.com/so-boss',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'so-boss', // Usually your GitHub org/user name.
  projectName: 'Design-Commons', // Usually your repo name.
  themeConfig: {
    disableDarkMode: true,
    navbar: {
      // title: 'Design Commons',
      logo: {
        alt: 'My Site Logo',
        src: 'img/aaa-logo.svg',
      },
      links: [
        {
          to: 'docs/guidelines/color',
          activeBasePath: 'docs',
          label: 'Styleguide',
          position: 'left',
        },
        // {
        //   to: 'blog',
        //   label: 'Web UI',
        //   position: 'left'
        // },
        // {
        //   to: 'blog',
        //   label: 'Pixel',
        //   position: 'left'
        // },
        {
          href: 'https://github.com/so-boss/Design-Commons',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Style Guidelines',
          items: [
            {
              label: 'Color',
              to: 'docs/guidelines/color',
            },
            {
              label: 'Typography',
              to: 'docs/guidelines/typography',
            },
          ],
        },
        // {
        //   title: 'Brands & Products',
        //   items: [
        //     {
        //       label: 'MyPolicy',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Quote',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Insurance Portal',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Mobilitas',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //   ],
        // },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: 'blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/facebook/docusaurus',
        //     },
        //   ],
        // },
      ],
      //copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'color',
          sidebarPath: require.resolve('./sidebars.js'),
          //path: 'design',
        },
        blog: {

          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
  plugins: [require.resolve('docusaurus-plugin-sass')],
  themes: [require.resolve('@docusaurus/theme-live-codeblock')]
};
