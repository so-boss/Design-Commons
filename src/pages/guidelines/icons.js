import React from "react"

import {Typography} from 'antd';
import {AntPage} from "./../../../src/components/";
import * as icons from "@so.boss/genesis-icon-library"
import _ from "lodash";

//import { makeStyles } from '@material-ui/core/styles';
//import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import ListSubheader from '@material-ui/core/ListSubheader';
// import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';

import './../../../src/css/custom.scss'

const { Paragraph, Title } = Typography;

//let i = 0;

const buildIcon = (icon) => {
  return React.createElement(icon);
}


// //key={++i+"icon"}
// const allIcons = a.map((icon, key) =>
//
// );
let iconList = null;
const buildIcons = (list) => {
  let a = [];
  _.forEach(icons, function(value, key) {
    let o = {
      id: key
    };
    o.component = value;
    a.push(o);
  })

  return a;
}


const Category = ({title}) => {
  return (
    <div grid="title">
      <span>{title}</span>
    </div>
  )
}

const IconGrid = ({}) => {
  if(iconList===null) {
    iconList = buildIcons(icons);
  }
  return (
    <div layout="grid">
      <Category title="Category Name" />
      <hr />
      <ul>
        {iconList.map((icon) => (
          <li key={icon.id}>
            <div>
              <span>
                {buildIcon(icon.component)}
              </span>
            </div>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}


export default function Home() {

  return (
    <AntPage>
      <IconGrid iconList={iconList}/>
    </AntPage>
  )
}