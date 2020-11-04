import React from "react";
// import { ContextProviderComponent } from "./Context";

import {Tag, PageHeader} from 'antd';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Button from '@material-ui/core/Button';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import { Link } from "gatsby";

import {pages} from "./../nav";

import './../../static/ant/antd.css';
import './../../src/components/AntPage/AntPage.scss';

//TODO: Fix this ugliness before I cry anymore (at least it performs decent)
const Item = ({labelText, iconID, type, link}) => (
  <Button href={link}>
    {iconID &&
      <img src={"/icons/"+iconID+".svg"} />
    }
    {
      type
        ? (
          <Typography variant="body1">
            {labelText}
          </Typography>
        )
        : (
          <Typography variant="body2">
            {labelText}
          </Typography>
        )
    }
  </Button>
)

const NavItem = ({labelText, iconID, type, link, ...rest}) => {
  return (
    <TreeItem
      label={
        <div nav="item">
          <Item
            labelText={labelText}
            iconID={iconID}
            type={type}
            link={link}
          />
        </div>
      }
      {...rest}
    />
  )
}

const useNavStyles = makeStyles({
  root: {
    // height: 240,
    flexGrow: 1,
    //maxWidth: 400
  }
});

// TODO: Generate this from nav.js
const Nav = () => {
  const classes = useNavStyles();

  return (
    <TreeView
      className={classes.root}
      defaultExpanded={['1']}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      <NavItem
        nodeId="1"
        labelText="Guidelines"
        type="category"
      >
        <NavItem
          nodeId="2"
          labelText="Color"
          iconID="color"
          link="/guidelines/color"
        />
        <NavItem
          nodeId="3"
          labelText="Typography"
          iconID="typography2"
          link="/guidelines/typography"
        />
        <NavItem
          nodeId="4"
          labelText="Icons"
          iconID="vector"
          link="/guidelines/icons"
        />
      </NavItem>
    </TreeView>
  );
};

const Sidebar = ({children}) => (
  <div type="sidebar">
    <div>
      <div sidebar="header">
        <img src="/img/aaa-logo.svg" />
      </div>
      <div sidebar="body">
        {children}
      </div>
      <div sidebar="footer"></div>
    </div>
  </div>
);

const Header = ({pages, pathname, location}) => {
  if(!pathname) {
    pathname = location.pathname;
  }
  let page;
  if(!pathname) {
    page = pages["404"];
  } else {
    let cleanpath = pathname.replace(/\//g, "");

    page = pages[cleanpath];
  }

  console.log(pages, page, pathname)

  // let route1 = {
  //   path: 'index',
  //   breadcrumbName: 'Design Guidelines',
  // };
  // if(page.baseRoute) {
  //   route1 = page.baseRoute;
  // }
  //
  // let routes = [
  //   route1
  // ];
  //
  // if(page.title) {
  //   routes.push({
  //     path: 'first',
  //     breadcrumbName: page.title,
  //   })
  // }

  let avatar = {
    shape: 'square',
  };
  if(page && !page.icon) {
    avatar.src = `/icons/sprite/circle.svg`
  } else {
    avatar.src = "/icons/"+page.icon+".svg"
  }

  return (
    <PageHeader
      title={page.title}
      className="site-page-header"
      tags={<Tag color={page.tag.color}>{page.tag.label}</Tag>}
      avatar={avatar}
      type="page"
    />
  )
}

const Footer = ({pages, children}) => {
  return (
    <div page="footer">
      <div layout="columns">
        <div column="1">
          <div type="title">Guidelines</div>
          <div type="links">
            <Link to="/guidelines/color">Color</Link>
            <Link to="/guidelines/typography">Typography</Link>
            <Link to="/guidelines/icons">Icons</Link>
          </div>
        </div>
        <div column="2" />
        <div column="3" />
      </div>
      {children}
    </div>
  )
}

export default function Layout ({location, children}) {

  return (
    <div layout="page">
      <div>
        <Sidebar>
          <Nav />
        </Sidebar>

        <div type="page">
          <Header pathname={location.pathname} pages={pages}/>
          {children}
          <Footer pages={pages}/>
        </div>
      </div>
    </div>
  );
}