//import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import _ from "lodash";

let meta = {
  icons:null,
  categories:null,
  maps:{
    by:{
      /*
        figma_id: {
           ArrowDownRight:{
             name:"...",
             description:"...",
             category: [ {name:"arrow"}, ... ]
           }
        }
     */
      category: {
        "undefined":[]
      }
    }
  }
};

/*
    mapIconsBy([...], "figma_id");

    TODO: Outside of abstracting the category mapping,
          will need to either sort order here or in the query to graphQL for:
          1.Categories
          2.Icons by name
*/
const mapIconsBy = (icons, what) => {
  let map = meta.maps.by[what];
  if(!map) {
    map = meta.maps.by[what] = {};
  }

  _.forEach(icons, function(x) {
    let icon = x.node;

    // IF the key we are trying to map on has a null/undefined value
    if(!icon[what]) {
      // THEN we need to skip it
      return;
    }

    // If icon.figma_id exists in the map
    if(map[icon[what]]) {
      // Hmm...we could just overwrite and ignore
      console.log(icon[what], " already exists as a Figma id")

      return;
    }

    let o = map[icon[what]] = icon;

    // TODO: Break out the category search into it's own function
    //       By doing while were already transforming the icon object,
    //       we avoiding having redundant iterations
    const categories = o.category;
    let category_map = meta.maps.by.category;
    if(categories && categories.length>0) {
      _.forEach(categories, function (category) {
        let thisCategory = category_map[category.name];
        if(!thisCategory) {
          thisCategory = category_map[category.name] = [];
        }

        thisCategory.push(icon.figma_id);
      });
    } else {
      category_map["undefined"].push(icon.figma_id)
    }
  });

  return meta;
}

export const useAllIcons = () => {
  const data = useStaticQuery(
    graphql`
      query getAllIcons {
        allSanityIcons {
          edges {
            node {
              figma_id
              name
              category {
                name
              }
              description
            }
          }
        }
        allSanityIconCategory {
          edges {
            node {
              name
            }
          }
        }
      }
    `
  )

  meta.icons = data.allSanityIcons.edges;
  meta.categories = data.allSanityIconCategory.edges;

  return {
    meta: mapIconsBy(meta.icons, "figma_id")
  };
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
