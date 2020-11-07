// eslint-disable-next-line global-require
const remarkPlugins = [require("remark-slug")]

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: "Specimens for the CSAA Design System",
    siteDescription: "Leverage the wide variety of powerful React components to build your insurance ideas.",
    banner: "",
    siteUrl: "https://dev.csaa.design"
  },
  plugins: [
    {
      resolve: "@lekoarts/gatsby-theme-specimens",
      // See the theme"s README for all available options
      options: {
        CMYK: true,
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        // defaultCrumb: optional To create a default crumb
        // see Click Tracking default crumb example below
        // defaultCrumb: {
        //   location: {
        //     pathname: "/guidelines",
        //   },
        //   crumbLabel: "Design Commons",
        //   crumbSeparator: " / ",
        // },
        // usePathPrefix: optional, if you are using pathPrefix above
        //usePathPrefix: '/guidelines',
          useAutoGen: true
      }
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'igrer9ll',
        dataset: 'production',
        // a token with read permissions is required
        // if you have a private dataset
        //token: process.env.MY_SANITY_TOKEN,
      },
    },
    "gatsby-plugin-layout",
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "pages",
    //     path: `${__dirname}/src/markdown-pages/`,
    //   },
    // },
    "gatsby-plugin-sass",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx"],
        remarkPlugins
      },
    },
    "gatsby-plugin-catch-links",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-emotion",
    "gatsby-plugin-theme-ui",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Specimens for Design Systems",
        short_name: "Specimens",
        description: "Leverage the wide variety of powerful React components to build your design system. Display your colors, typography or any other design tokens with ease and focus on the design system itself, not on how to showcase it. Works seamlessly with MDX.",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#5a67d8",
        display: "standalone",
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        headers: {}, // option to add more headers. "Link" headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. "Link" headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cache",
      options: {
        cachePublic: true
      }
    },
    shouldAnalyseBundle && {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        analyzerMode: "static",
        reportFilename: "_bundle.html",
        openAnalyzer: false,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Toollabs",
        fieldName: "toollabs",
        url: "https://xdapi.toolabs.com/graphql",
        headers: {
          "x-toolabs-token": "0781d947-72ac-464f-b46d-aa37c7e4ebb3"
        },
        // Additional options to pass to node-fetch
        fetchOptions: {},
      }
    }
  ].filter(Boolean),
}
