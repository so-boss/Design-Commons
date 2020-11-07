import React from "react"
import {graphql, useStaticQuery} from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
      {
          allSanityIcons(filter: {category: {elemMatch: {name: {eq: "arrows"}}}}) {
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
  allSanityIcons(filter: {category: {elemMatch: {name: {eq: "arrows"}}}}) {
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