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

function parseTextstyle(textstyle) {
  let o = {
    dictionary:"",    // CSAA, Defintion
    definition:"",    // Pretitle, Title, RTRaleway
    size:"",          // Small, Large, Desktop, XXL
    variation:null      // R, B
  };

  let split_text = textstyle.split(/\/|-|—/ig);
  o.dictionary=split_text[0];
  o.defintion=split_text[1];
  o.size=split_text[2];
  o.variation=split_text[3]||o.variation;

  return o;
}

const getTextStyles = (textstyles, type) => {
  let fontSizes = {};
  _.forEach(textstyles, function(textstyle) {
    let family = fontSizes[textstyle.fontFamily.value];
    if (!family) {
      family = fontSizes[textstyle.fontFamily.value] = [];
    }

    const parsedStyle = parseTextstyle(textstyle.name);
    let name;
    if(type==="fontSizes") {
      name = parsedStyle.defintion;
    } else {
      name = {};
      let short = name.short = parsedStyle.size;

      if(maps.sizes[short]) {
        name.long = maps.sizes[short];
      } else {
        name.long = parsedStyle.defintion + " " + short;
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

export const useTypography = (filterFor, dictionary) => {
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

  return {
    typefaces: getTypefaces(data.toollabs.typefaces, filterFor),
    fontsizes: getTextStyles(data.toollabs.textstyles, "FontSizes"),
    textstyles: getTextStyles(data.toollabs.textstyles, dictionary)
  };
}