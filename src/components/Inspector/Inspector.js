import React, {useContext} from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from "@material-ui/core/Drawer";
import Chip from '@material-ui/core/Chip';

import Divider from '@material-ui/core/Divider';
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import InspectorContext from './../../../src/contexts/InspectorContext';
import './Inspector.scss';
import InspectableContext from "./../../../src/contexts/InspectableContext";
import { LoremIpsum } from "react-lorem-ipsum";
import MapsContext from "./../../../src/contexts/MapsContext";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginRight: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: 0
  }
}));

function getInspectable (inspectable, byThis, maps) {
  const id = inspectable.id;
  if(!id || id.length<1) {
    return false;
  }

  // if(!icon || !maps) {
  //   return false;
  // }
  if(byThis==="all") {
    return maps.figma_id[id];
  }

  const thisKey = maps.figma_id[id][byThis];
  if(!thisKey) {
    if(byThis==="description") {
      return (<LoremIpsum avgSentencesPerParagraph={3} startWithLoremIpsum={false} />)
    }

    return false;
  }

  return thisKey;
}

const Categories = ({categories}) => {
  if(!categories) {
    return false;
  }
  const listItems = categories.map((category, index) =>
    <Chip
      size="small"
      label={category.name}
      key={category.name}
    />
  );

  return (
    <div wrapper="bubbles">
      {listItems}
    </div>
  )
}

function LineHeightIcon(props) {
  const fill = props.fill || 'currentColor';
  const secondaryfill = props.secondaryfill || fill;
  const title = props.title || "line height";

  return (
    <svg height="16" width="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill={secondaryfill}>
        <polyline fill="none" stroke={fill} points="7.5 4.5 7.5 2.5 15.5 2.5 15.5 4.5" strokeLinecap="round"/>
        <line fill={fill} stroke={fill} strokeLinecap="round" x1="11.5" x2="11.5" y1="2.5" y2="10.5"/>
        <line fill={fill} stroke={fill} strokeLinecap="round" x1="9.5" x2="13.5" y1="10.5" y2="10.5"/>
        <line fill={fill} stroke={fill} strokeLinecap="round" x1="7.5" x2="15.5" y1="13.5" y2="13.5"/>
        <polyline stroke={fill} points="0.5 2.5 2.5 0.5 4.5 2.5" strokeLinecap="round"/>
        <polyline stroke={fill} points="0.5 13.5 2.5 15.5 4.5 13.5" strokeLinecap="round"/>
        <line stroke={fill} strokeLinecap="round" x1="2.5" x2="2.5" y1="0.5" y2="15.5"/>
      </g>
    </svg>
  );
};

function FontSizeIcon(props) {
  const fill = props.fill || 'currentColor';
  const secondaryfill = props.secondaryfill || fill;
  const title = props.title || "edit 2";

  return (
    <svg height="16" width="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill={secondaryfill} stroke={secondaryfill} strokeWidth="1">
        <polyline fill="none" points="1.5 2.5 1.5 0.5 15.5 0.5 15.5 2.5" stroke={fill} strokeLinecap="round"/>
        <line fill="none" stroke={fill} strokeLinecap="round" x1="8.5" x2="8.5" y1="0.5" y2="15.5"/>
        <line fill="none" stroke={fill} strokeLinecap="round" x1="5.5" x2="11.5" y1="15.5" y2="15.5"/>
      </g>
    </svg>
  );
};

function WeightScaleIcon(props) {
  const fill = props.fill || 'currentColor';
  const secondaryfill = props.secondaryfill || fill;
  const title = props.title || "weight scale";

  return (
    <svg height="16" width="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <g fill={secondaryfill} stroke={secondaryfill} strokeWidth="1">
        <rect height="15" width="15" fill="none" rx="1" ry="1" stroke={fill} strokeLinecap="round" x="0.5" y="0.5"/>
        <path d="M13.475,8.5a5.5,5.5,0,0,0-10.95,0Z" fill="none" strokeLinecap="round"/>
        <line fill="none" strokeLinecap="round" x1="7.5" x2="9.5" y1="8.5" y2="5.5"/>
      </g>
    </svg>
  );
};

/* TODO: Break out the structures for each type of inspector into
         something more abstract, that auto builds inspectable properties based on whats passed
*/
const Icon = ({selectedItem, maps}) => {
  const item = getInspectable(selectedItem, "all", maps);

  return (
    <>
      <div type="name">
        <span>{getInspectable(selectedItem, "name", maps)}</span>
      </div>
      <div type="figma" label="figma id">
        <span>{getInspectable(selectedItem, "figma_id", maps)}</span>
      </div>
      <div type="description" label="description">
        <span>{getInspectable(selectedItem, "description", maps)}</span>
      </div>
      <div wrapper="categories" label="categories">
        <Categories categories={getInspectable(selectedItem, "category", maps)}/>
      </div>
    </>
  )
}
const Typography = ({selectedItem, maps}) => {
  const item = getInspectable(selectedItem, "all", maps);

  return (
    <>
      <div type="name">
        <span>{getInspectable(selectedItem, "name", maps).long}</span>
      </div>
      <div type="figma" label="figma id">
        <span>{getInspectable(selectedItem, "token", maps)}</span>
      </div>
      <div type="description" label="description">
        <span>{getInspectable(selectedItem, "description", maps)}</span>
      </div>
      <div textstyle="props">
        <div>
          <label alt="font size">
            <FontSizeIcon />
          </label>
          <span suffix="px">{parseInt(item.size)}</span>
        </div>
        <div>
          <label alt="line height">
            <LineHeightIcon />
          </label>
          <span suffix="px">{parseInt(item.lineHeight)}</span>
        </div>
        <div>
          <label alt="weight">
            <WeightScaleIcon />
          </label>
          <span style={{fontWeight: item.weight}}>{item.weight}</span>
        </div>
      </div>
    </>
  )
}

export default function Inspector ({}) {
  const classes = useStyles();
  const theme = useTheme();
  const {isOpen, onOpenInspector, onCloseInspector} = useContext(InspectorContext);

  const {selectedItem} = useContext(InspectableContext);
  const maps = useContext(MapsContext)[selectedItem.type];

  return (
    <div wrapper="drawer" className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={isOpen.isOpen}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div>
          <div drawer="header">
            <IconButton onClick={onCloseInspector}>
              {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <div drawer="body">
            <div wrapper="info">
              {
                selectedItem.type==="icon" &&
                  <Icon selectedItem={selectedItem} maps={maps} />
              }
              {
                selectedItem.type==="typography" &&
                  <Typography selectedItem={selectedItem} maps={maps} />
              }
            </div>
          </div>
          <div drawer="footer"></div>
        </div>
        <Divider />
      </Drawer>
    </div>
  );
}
