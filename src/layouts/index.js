import React from "react";

import {Tag, PageHeader} from 'antd';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Button from '@material-ui/core/Button';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

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
        <Link to="/">
          <img src="/img/aaa-logo.svg" />
        </Link>
      </div>
      <div sidebar="body">
        {children}
      </div>
      <div sidebar="footer"></div>
    </div>
  </div>
);

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
    <>
      <Breadcrumb
        location={location}
        crumbs={pageContext.breadcrumb.crumbs.slice(1)}
        crumbSeparator=" / "
        // title="Design Commons"
      />
      <PageHeader
        title={title}
        className="site-page-header"
        tags={<Tag color={tag.color}>{tag.label}</Tag>}
        avatar={avatar}
        type="page"
      />
    </>
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

export default function Layout ({pageContext, location, children}) {

  return (
    <div layout="page">
      <div>
        <Sidebar>
          <Nav />
        </Sidebar>

        <div type="page">
          <Header
            location={location}
            pages={pages}
            pageContext={pageContext}
          />
          {children}
          <Footer pages={pages}/>
        </div>
      </div>
    </div>
  );
}

