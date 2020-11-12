import React from "react";

import {Icon} from "../index";
import "./IconCategories.scss"

let icon_index;

const Icons = ({icons}) => {
  return (
    <div layout="grid">
      <ul>
        {icons.map((figma_id) => (
            <Icon
              key={figma_id + icon_index}
              index={icon_index++}
              figma_id={figma_id}
            />
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
  icon_index = 0;

  const categoryItems = categories.map(category => {
    const name = category.name;

    let categoryIcons = maps.by.category[name];
    if(categoryIcons && categoryIcons.length>1) {
      return (
        <Category
          title={name}
          key={name}
        >
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
