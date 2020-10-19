//import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import _ from "lodash";
import {sorter} from './../../src/components/color_utils';

const rename = (obj, key, newKey) => {
  if(_.includes(_.keys(obj), key)) {
    obj[newKey] = _.clone(obj[key], true);

    delete obj[key];
  }

  return obj;
};

export const useSortedColors = (def_id, type) => {
  const data = useStaticQuery(
    graphql`
      query {
        toollabs {
          colors {
            name
            hex
          }
        }
      }
    `
  )

  const unsortedColors = data.toollabs.colors;
  var sortedColors = sorter(def_id, type, unsortedColors);

  _.forEach(sortedColors, function(color) {
    rename(color, 'hex', 'color')
  });

  //console.log(unsortedColors)
  //const sizes = _.map(textStyles, 'fontSize');

  return sortedColors;
}