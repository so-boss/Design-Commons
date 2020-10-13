//import React from "react"
import { useStaticQuery, graphql } from "gatsby"
 import _ from "lodash"

export const useFontSizes = () => {
  const data = useStaticQuery(
    graphql`
        query getFontSizes {
          toollabs {
            textstyles {
              fontSize
            }
          }
        }
    `
  )

  const textStyles = data.toollabs.textstyles;
  const sizes = _.map(textStyles, 'fontSize');

  return {sizes: sizes};
}