import React from "react";

import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Button from '@material-ui/core/Button';

import './Sidebar.scss';

const Item = ({labelText, iconID, type, link}) => (
  <Button href={link}>
    {iconID &&
    <img src={"/icons/"+iconID+".svg"} />
    }
    <span>{labelText}</span>
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

const Nav = () => {

  return (
    <TreeView
      defaultExpanded={['1']}
      // defaultCollapseIcon={<ExpandMoreIcon />}
      // defaultExpandIcon={<ChevronRightIcon />}
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

export default function Sidebar ({children}) {

  return (
    <div type="sidebar">
      <div>
        <div sidebar="header">
          <img src="/img/aaa-logo.svg" />
        </div>
        <div sidebar="body">
          <Nav />
        </div>
        <div sidebar="footer"></div>
      </div>
    </div>
  );
}
