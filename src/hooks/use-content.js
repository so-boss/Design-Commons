//import React from "react"
import { useStaticQuery, graphql } from "gatsby"



export const useContent = () => {
  const data = useStaticQuery(
    graphql`
            query MyQuery {
  allSanityContent(sort: {order: ASC, fields: name}) {
    nodes {
      description
      name
    }
  }
}`
  )



  return data.allSanityContent.nodes
}

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
