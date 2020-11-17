import React from "react";

import {Tag, PageHeader} from 'antd';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

import {pages} from "./../nav";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import {Inspector, Sidebar, Footer} from './../../src/components';
import InspectorContext from './../../src/contexts/InspectorContext';
import InspectableContext from "../../src/contexts/InspectableContext";
import MapsContext from "../../src/contexts/MapsContext";
import { useAllIcons } from './../../src/hooks/use-all-icons';
import { useTypography } from './../../src/hooks/use-typography.js';

import './../../static/ant/antd.css';
import './../../src/components/AntPage/AntPage.scss';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
          fontFamily:"'RT Raleway', sans-serif"
        },
        body: {
          WebkitFontSmoothing: 'auto',
          fontFamily:"'RT Raleway', sans-serif"
        },
      },
    },
  },
});

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

  const [selectedItem, setSelected] = React.useState({
    id:null,
    type:null,
    index:null
  });
  const handleSelection = (o) => {
    setSelected(o);
  };

  const {meta} = useAllIcons();


  // TODO: Reduce this context craziness
  return (
    <MapsContext.Provider
      value={{
        icon: meta.maps.by,
        typography: useTypography().maps.by
      }}
    >
      <InspectableContext.Provider
        value={{
          selectedItem: selectedItem,
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
              <Inspector selectedItem={selectedItem}/>
            </div>

        </InspectorContext.Provider>
      </InspectableContext.Provider>
    </MapsContext.Provider>
  );
}

