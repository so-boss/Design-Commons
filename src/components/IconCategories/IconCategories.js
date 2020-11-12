import React, {useContext} from "react";

import {Icon} from "../index";
import "./IconCategories.scss"

const Icons = ({icons}) => {
  return (
    <div layout="grid">
      <ul>
        {icons.map((figma_id) => (
          <li
            key={figma_id}
          >
            <Icon figma_id={figma_id} />
          </li>
        ))}
      </ul>
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

export default function IconCategories ({categories, maps}) {
  const categoryItems = categories.map(category => {
    const name = category.name;

    let categoryIcons = maps.by.category[name];
    if(categoryIcons && categoryIcons.length>1) {
      return (
        <Category title={name}>
          <Icons icons={categoryIcons} />
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
