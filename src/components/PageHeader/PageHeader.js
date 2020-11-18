import React from 'react';

import {Breadcrumb} from "gatsby-plugin-breadcrumb";
import {PageTitle} from './../../../src/components';

import './PageHeader.scss';

export default function PageHeader ({pageContext, pages, location}) {
  let cleanpath = location.pathname.replace(/\//g, "");
  let page = pages[cleanpath];
  if(!page) {
    return false;
  }

  let avatar = {
    shape: 'square',
  };

  if(!page) {
    let page = {
      title:"",
      summary:"",
      icon:"color",
      tag:{
        color:"blue",
        label:"Under Development"
      }
    }
  }

  const {title, icon, tag} = page;

  if(page) {
    if(page.icon) {
      avatar.src = "/icons/"+page.icon+".svg"
    }
  } else {
    avatar.src = `/icons/sprite/circle.svg`
  }
  return (
    <div page="header">
      <Breadcrumb
        location={location}
        crumbs={pageContext.breadcrumb.crumbs.slice(1)}
        crumbSeparator=" / "
      />

      <PageTitle
        icon={avatar}
        title={title}
        tag={tag}
      />
    </div>
  )
}