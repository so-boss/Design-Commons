import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityIcons(filter: {figma_id: {eq: "ArrowLeft"}}) {
          edges {
              node {
                  name
                  category {
                      name
                  }
              }
          }
      }
    }
  `)
  return <pre>{JSON.stringify(data, null, 4)}</pre>
}

export default ComponentName

/*
query getIcon {
  allSanityIcons(filter: {figma_id: {eq: "ArrowLeft"}}) {
    edges {
      node {
        name
        category {
          name
        }
      }
    }
  }
}
*/