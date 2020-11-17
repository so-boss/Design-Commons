import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css, Global } from "@emotion/core"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          banner
          siteDescription
          siteTitle
          siteUrl
        }
      }
    }
  `)

  const meta = site.siteMetadata

  return (
    <React.Fragment>
      <Helmet>
        <html lang="en" />
        <title>{meta.siteTitle}</title>
        <meta name="description" content={meta.siteDescription} />
        <meta name="image" content={meta.banner} />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1, user-scalable=no" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="lekoarts.de" />
        <meta property="og:url" content={meta.siteUrl} />
        <meta property="og:title" content={meta.siteTitle} />
        <meta property="og:description" content={meta.siteDescription} />
        <meta property="og:image" content={meta.banner} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.siteTitle} />
        <meta name="twitter:description" content={meta.siteDescription} />
        <meta name="twitter:image" content={meta.banner} />
      </Helmet>
      <Global
        styles={css`
          *::before,
          *::after {
            box-sizing: border-box;
          }
          ::selection {
            color: #fff;
            background-color: #3490dc;
          }
          html {
            font-size: 16px;
            -webkit-text-size-adjust: 100%;
            font-family: "RT Raleway", sans-serif;
          }
         body {
            //styleName: CSAA / Body / Large - R;
            font-family: "RT Raleway", sans-serif;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: 25px;
            color:#0b1421;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
     
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            margin-top: 2rem !important;
            margin-bottom: 1rem !important;
          }
          h3 {
            margin-top: 6rem !important;
          }
          
          a {
            color:initial;
          }

          .sizes-table {
            > div:not(:first-of-type) {
              padding-top: 0.5rem !important;
              padding-bottom: 0.5rem !important;
            }
          }
          pre {
            padding: 0.75rem;
            border-radius: 0.25rem;
            font-size: 1rem;
            overflow: auto;
          }
          code {
            background-color: rgb(30, 30, 30);
            color: white;
            padding: 0.25rem 0.5rem;
            border-radius: 0.25rem;
            font-size: 1rem;
            margin-left: 0.25rem;
            margin-right: 0.25rem;
          }
        `}
      />
      <main>
        {children}
      </main>
    </React.Fragment>
  )
}

export default Layout
