import React from "react"

import {Typography} from 'antd';
import {AntPage} from "./../../../src/components/";
import * as icons from "@so.boss/genesis-icon-library"
import _ from "lodash";

//import { makeStyles } from '@material-ui/core/styles';
//import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import ListSubheader from '@material-ui/core/ListSubheader';
// import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';

import { useAllIcons } from './../../../src/hooks/use-all-icons';

import './../../../src/css/custom.scss'
//import {Category} from "@material-ui/icons";

const {Paragraph, Title} = Typography;


const buildIcon = (icon) => {
  return React.createElement(icon);
}

let iconList = null;
const buildIcons = (list) => {
  let a = [];
  _.forEach(icons, function (value, key) {
    let o = {
      id: key
    };
    o.component = value;
    a.push(o);
  })

  return a;
}

// function Thingy(props) {
//   return (
//     <CategoryIcons
//       name={props.name}
//       categoryIcons={props.categoryIcons}
//       maps={props.maps}
//     />
//   )
// }

const Categories = ({categories, maps}) => {
  const categoryItems = categories.map(category => {
    const name = category.node.name;

    let categoryIcons = maps.by.category[name];
    console.log(name, maps, categoryIcons)
    if(categoryIcons && categoryIcons.length>1) {
      return (
        <div categories="wrapper">
          <Category title={name}>
            <IconGrid
              categoryIcons={categoryIcons}
              maps={maps}
            />
          </Category>
        </div>
      )
    }
  })

  return (
    <ul>
      {categoryItems}
    </ul>
  );
}
const Category = ({title, children}) => {
  return (
    <div category="wrapper">
      <div grid="title">
        <span>{title}</span>
      </div>
      {children}
    </div>
  )
}


const IconGrid = ({categoryIcons, maps}) => {
  if (iconList === null) {
    iconList = buildIcons(icons);
  }

  const icon_map = maps.by.figma_id;

  return (
    <div layout="grid">
      {/*<Category title="Category Name"/>*/}
      {/*<hr/>*/}
      <ul>
        {categoryIcons.map((figma_id) => (
          <li key={figma_id}>
            <div>
              <span>
                {buildIcon(icons[figma_id])}
                <span>{icon_map[figma_id].name}</span>
                {
                  icon_map[figma_id].description &&
                    <span>{icon_map[figma_id].description}</span>
                }
              </span>
            </div>
          </li>
        ))}
      </ul>
      <hr/>
    </div>
  );
}


export default function Home() {
  const {meta} = useAllIcons();

  console.log(meta.categories)

  // 1. Iterate through the entire array of (alphabatized) categories,
  // 2. IF a category has a category map
  //      THEN build a category with each member icon
  // console.log(meta)
  return (
    <AntPage>
      <Categories
        categories={meta.categories}
        maps={meta.maps}
      />
    </AntPage>
  )
}