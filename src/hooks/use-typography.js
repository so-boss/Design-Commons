import { useStaticQuery, graphql } from "gatsby"
import _ from "lodash";
// import {sorter} from './../../src/components/color_utils';
import maps from "./../../src/components/data/maps";

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

const getTypefaces = (typefaces, filterFor) => {
  let a = [];
  _.forEach(typefaces, function(typeface) {
    if(filterFor) {
      if(typeface.value.toLowerCase()===filterFor.toLowerCase()) {
        a.push(getTypeface(typeface))
      }
    } else {
      a.push(getTypeface(typeface))
    }
  })

  return a;
}


const getTextStyles = (textstyles, type) => {
  let fontSizes = {};
  _.forEach(textstyles, function(textstyle) {
    let family = fontSizes[textstyle.fontFamily.value];
    if (!family) {
      family = fontSizes[textstyle.fontFamily.value] = [];
    }

    let name;
    if(type==="fontSizes") {
      name = textstyle.name.split("-")[1]||textstyle.name;
    } else {
      name = {};
      let short = name.short = textstyle.name.split("-")[1]||textstyle.name;

      if(maps.sizes[short]) {
        name.long = maps.sizes[short];
      } else {
        name.long = short;
      }
    }

    family.push({
      ...getTypeface(textstyle.fontFamily),
      size:textstyle.fontSize,
      lineHeight:textstyle.lineHeight,
      name:name,
      token:textstyle.name
    });
  });

  return fontSizes;
}

export const useTypography = (filterFor) => {
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
    typefaces: getTypefaces(data.toollabs.typefaces, filterFor),
    fontsizes: getTextStyles(data.toollabs.textstyles, "FontSizes"),
    textstyles: getTextStyles(data.toollabs.textstyles)
  };
}