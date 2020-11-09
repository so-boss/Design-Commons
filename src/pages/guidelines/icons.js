import React, {useContext} from "react"

import {Typography} from 'antd';
import {AntPage} from "./../../../src/components/";
import InspectorContext from './../../../src/contexts/InspectorContext';
import * as icons from "@so.boss/genesis-icon-library"
//import _ from "lodash";

import { useAllIcons } from './../../../src/hooks/use-all-icons';
import IconContext from './../../../src/contexts/IconContext';
import './../../../src/css/custom.scss'

const buildIcon = (icon) => {
  return React.createElement(icon);
}

// let iconList = null;
// const buildIcons = (list) => {
//   let a = [];
//   _.forEach(icons, function (value, key) {
//     let o = {
//       id: key
//     };
//     o.component = value;
//     a.push(o);
//   })
//
//   return a;
// }

const Categories = ({categories, maps}) => {
  const categoryItems = categories.map(category => {
    const name = category.name;

    let categoryIcons = maps.by.category[name];
    if(categoryIcons && categoryIcons.length>1) {
      return (
        <Category title={name}>
          <IconGrid
            categoryIcons={categoryIcons}
            maps={maps}
          />
        </Category>
      )
    }
  })

  return (
    <div categories="wrapper">
      {categoryItems}
    </div>
  );
}
const Category = ({title, children}) => {
  return (
    <div category="wrapper">
      <div category="title">
        <span>{title}</span>
      </div>
      {children}
      <hr/>
    </div>
  )
}

const Icon = ({icon_map, figma_id}) => {
  const [isActive, setActive] = React.useState(false);
  return (
    <div
      className={"active"+isActive}
      onClick={() => {
        console.log(isActive)
        setActive(!isActive)
      }}
    >
      <div>
        {buildIcon(icons[figma_id])}
      </div>
      <span truncate="yes">
        {icon_map[figma_id].name}
      </span>
    </div>
  )
}

/*
  {
    icon_map[figma_id].description &&
      <span>{icon_map[figma_id].description}</span>
  }
 */
const IconGrid = ({categoryIcons, maps}) => {
  const icon_map = window.maps = maps.by.figma_id;
  const {isOpen, onOpenInspector, onCloseInspector} = useContext(InspectorContext);
  const {selectedIcon, onSelection} = useContext(IconContext);
  return (
    <div layout="grid">
      <ul>
        {categoryIcons.map((figma_id) => (
            <li
              key={figma_id}
              onClick={() => {
                onOpenInspector();
                onSelection(figma_id);
              }}
            >
              <Icon icon_map={icon_map} figma_id={figma_id} />
            </li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  const {meta} = useAllIcons();

  return (
      <AntPage>
        <Categories
          categories={meta.categories}
          maps={meta.maps}
        />
      </AntPage>
  )
}