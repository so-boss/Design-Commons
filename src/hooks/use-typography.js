import { useStaticQuery, graphql } from "gatsby"
import _ from "lodash";
import {sorter} from './../../src/components/color_utils';
import React from "react";

const rename = (obj, key, newKey) => {
  if(_.includes(_.keys(obj), key)) {
    obj[newKey] = _.clone(obj[key], true);

    delete obj[key];
  }

  return obj;
};


const getTypeface = (typeface) => {
  const split_name = typeface.name.split(" ");
  let weight = parseInt(split_name[1]);
  if (isNaN(weight)) {
    weight = 400; //def weight
  }
  let style = split_name[2].replace(/\(|\)/g, "");

  return {
    family:typeface.value,
    weight:weight,
    style_name:style
  };
};

const getTypefaces = (typefaces) => {
  //const mappedTypefaces = _.map(typefaces, 'value');
  let a = [];
  _.forEach(typefaces, function(typeface) {
    a.push(getTypeface(typeface))
  })

  return a;
}


const getFontSizes = (textstyles) => {
  let fontSizes = {};
  _.forEach(textstyles, function(textstyle) {
    let family = fontSizes[textstyle.fontFamily.value];
    if (!family) {
      family = fontSizes[textstyle.fontFamily.value] = [];
    }
    family.push({
      size:textstyle.fontSize,
      name:textstyle.name.split("-")[1],
      token:textstyle.name
    });
  });

  return fontSizes;
}


export const useTypography = (def_id, type) => {
  const data = useStaticQuery(
    graphql`
      query {
        toollabs {
          typefaces {
            name
            value
          }
          textstyles {
            fontFamily {
              name
              value
            }
            fontSize
            lineHeight
            name
          }
        }
      }
    `
  )

  //const unsortedColors = data.toollabs.colors;
  //var sortedColors = sorter(def_id, type, unsortedColors);

  // _.forEach(sortedColors, function(color) {
  //   rename(color, 'hex', 'color')
  // });

  //console.log(unsortedColors)


  return {
    typefaces: getTypefaces(data.toollabs.typefaces),
    fontSizes: getFontSizes(data.toollabs.textstyles)
  };
}