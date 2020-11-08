import React from "react";

import {
  Tag,
  PageHeader,
} from 'antd';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Button from '@material-ui/core/Button';

//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import './../../../static/ant/antd.css';
import './AntPage.scss';

//import '@site/docs/guidelines.scss';

const NavItem = ({labelText, iconID, type, link, ...rest}) => {
  return (
    <TreeItem
      label={
        <div nav="item">
          <Button href={link}>
            {iconID &&
            <img src={"/icons/"+iconID+".svg"} />
            }
            {
              type &&
                labelText
            }
          </Button>
        </div>
      }
      {...rest}
    />
  )
}

const Nav = () => {

  return (
    <TreeView
      defaultExpanded={['1']}
      // defaultCollapseIcon={}
      // defaultExpandIcon={}
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
          link="/guidelines/color/"
        />
        <NavItem
          nodeId="3"
          labelText="Typography"
          iconID="typography2"
          link="/guidelines/typography/"
        />
        <NavItem
          nodeId="4"
          labelText="Icons"
          iconID="icons"
          link="/guidelines/icons/"
        />
      </NavItem>
    </TreeView>
  );
};

const Sidebar = ({children}) => {
  return (
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
}


export default function Sidebar ({baseRoute, title, icon, summary, children}) {
  const Content = ({ children }) => {
    return (
      <div style={{ flex: 1 }}>{children}</div>
    )
  }

  let route1 = {
    path: 'index',
    breadcrumbName: 'Design Guidelines',
  };
  if(baseRoute) {
    route1 = baseRoute;
  }

  let routes = [
    route1
  ];

  if(title) {
    routes.push({
      path: 'first',
      breadcrumbName: title,
    })
  }

  let avatar = {
    src: `/icons/sprite/${icon}.svg`,
    shape: 'square',
  };
  if(!icon) {
    avatar.src = `/icons/sprite/circle.svg`
  }

  return (
    <div layout="page">
      <div>
        <Sidebar>
          <Nav />
        </Sidebar>
        <div type="page">
          <PageHeader
            title={title}
            className="site-page-header"
            tags={<Tag color="blue">Under Development</Tag>}
            avatar={avatar}
            breadcrumb={{routes}}
            type="page"
          >
            <Content summary={summary}>{children}</Content>
          </PageHeader>
        </div>
      </div>
    </div>
  );
}
