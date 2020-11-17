import React from "react";

import {Tag, PageHeader} from 'antd';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

import {pages} from "./../nav";
import {Inspector, Sidebar, Footer} from './../../src/components';
import InspectorContext from './../../src/contexts/InspectorContext';
import IconContext from "../../src/contexts/IconContext";
import MapsContext from "../../src/contexts/MapsContext";
import { useAllIcons } from './../../src/hooks/use-all-icons';

import './../../static/ant/antd.css';
import './../../src/components/AntPage/AntPage.scss';

const Header = ({pageContext, pages, location}) => {
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
      <PageHeader
        title={title}
        className="site-page-header"
        tags={<Tag color={tag.color}>{tag.label}</Tag>}
        avatar={avatar}
        type="page"
      />
    </div>
  )
}

export default function Layout ({pageContext, location, children}) {
  const [isOpen, setOpen] = React.useState({
    isOpen:false
  });

  const handleOpeningInspector = () => {
    setOpen({ isOpen: true });
  };

  const handleClosingInspector = () => {
    setOpen({ isOpen: false });
  };

  const handleToggleInspector = () => {
    if(isOpen.isOpen) {
      setOpen({isOpen:false})
    } else {
      setOpen({isOpen:true})
    }
  };

  const [selectedIcon, setSelected] = React.useState({
    selectedIcon:null,
    maps:null
  });
  const handleSelection = (o) => {
    // let o = selectedIcon;
    // if(id===null) {
    //   o.maps = maps;
    // } else {
    //   o.selectedIcon = id;
    // }
    setSelected(o);
  };

  const {meta} = useAllIcons();

  // TODO: Reduce this context craziness
  return (
    <MapsContext.Provider
      value={{
        icon: meta.maps.by
      }}
    >
      <IconContext.Provider
        value={{
          selectedIcon: selectedIcon,
          onSelection: handleSelection
        }}
      >
        <InspectorContext.Provider
          value={{
            isOpen: isOpen,
            onOpenInspector: handleOpeningInspector,
            onCloseInspector: handleClosingInspector,
            onToggleInspector: handleToggleInspector,
          }}
        >
          <div layout="page">
            <div>
              <Sidebar />
              <div type="page">
                <Header
                  location={location}
                  pages={pages}
                  pageContext={pageContext}
                />
                <div page="body">
                  {children}
                </div>
                <Footer pages={pages}/>
              </div>
            </div>
            <Inspector selectedIcon={selectedIcon}/>
          </div>
        </InspectorContext.Provider>
      </IconContext.Provider>
    </MapsContext.Provider>
  );
}

