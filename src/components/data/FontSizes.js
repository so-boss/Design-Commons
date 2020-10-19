//import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import _ from "lodash"

export const useFontSizes = () => {
  const {toollabs} = useStaticQuery(
    graphql`        
      {
        toollabs {
          textstyles {
            fontSize
          }
        }
      }
    `
  )

  const textStyles = toollabs.textstyles;
  const sizes = _.map(textStyles, 'fontSize');

  return sizes;
}