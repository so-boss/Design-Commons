import { useStaticQuery, graphql } from "gatsby"
import _ from "lodash";
import maps from "./../../src/components/data/maps";

const dictionaries = {
  init:false,
  CSAA:{
    by:{
      size:{}
    }
  },
  Definition :{
    by:{
      fontFamily:{}
    }
  },
  by: {
    figma_id: {}
  }
}

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

  let split_text = textstyle.replace(/\s/ig, "").split(/\/|-|—/ig);
  o.dictionary=split_text[0];
  o.definition=split_text[1];
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
      name = parsedStyle.definition;
    } else {
      name = {};
      let short = name.short = parsedStyle.size;

      if(maps.sizes[short]) {
        name.long = maps.sizes[short];
      } else {
        name.long = parsedStyle.definition + " " + short;
      }
    }


    let parsedTextStyle = {
      ...getTypeface(textstyle.fontFamily),
      size:textstyle.fontSize,
      lineHeight:textstyle.lineHeight,
      name:name,
      token:textstyle.name
    };

    family.push(parsedTextStyle);
  });

  return fontSizes;
}

const getMaps = (toollabs) => {
  if(dictionaries.init===true) {
    return dictionaries;
  }

  _.forEach(toollabs.textstyles, function(textstyle) {
    const parsedStyle = parseTextstyle(textstyle.name);
    const dictionary = dictionaries[parsedStyle.dictionary];
    console.log("dictionary", dictionary)
    let map;
    if(parsedStyle.dictionary==="CSAA") {
      map = dictionary.by.size;
      let bySize = map[parsedStyle.size];
      if(!bySize) {
        bySize = map[parsedStyle.size] = [];
      }
      map = bySize;
    } else {
      map = dictionary.by.fontFamily;
      let byFontFamily = map[parsedStyle.definition];
      if(!byFontFamily) {
        byFontFamily = map[parsedStyle.definition] =[];
      }
      map = byFontFamily;
    }

    let name = {};
    let short = name.short = parsedStyle.size;

    if(maps.sizes[short]) {
      name.long = maps.sizes[short];
    } else {
      name.long = parsedStyle.definition + " " + short;
    }

    dictionaries.by.figma_id[textstyle.name] = {
      ...getTypeface(textstyle.fontFamily),
      size:textstyle.fontSize,
      lineHeight:textstyle.lineHeight,
      name:name,
      token:textstyle.name
    };
    map.push(textstyle.name);
  });

  dictionaries.init = true;
  return dictionaries;
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
    maps: getMaps(data.toollabs),
    typefaces: getTypefaces(data.toollabs.typefaces, filterFor),
    fontsizes: getTextStyles(data.toollabs.textstyles, "FontSizes"),
    textstyles: getTextStyles(data.toollabs.textstyles, dictionary)
  };
}