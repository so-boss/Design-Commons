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
import IconContext from "./../../../src/contexts/IconContext";
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

function getIcon (icon, byThis, maps) {

  const id = icon.selectedIcon;
  if(!id || id.length<1) {
    return false;
  }

  if(!icon || !maps) {
    return false;
  }

  console.log("getICON", maps, id)
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
      key={category}
    />
  );

  return (
    <div wrapper="bubbles">
      {listItems}
    </div>
  )
}

export default function Inspector ({selectedIcon}) {
  const classes = useStyles();
  const theme = useTheme();
  const {isOpen, onOpenInspector, onCloseInspector} = useContext(InspectorContext);
  const maps = useContext(MapsContext).icon;

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
              <div type="name">
                <span>{getIcon(selectedIcon, "name", maps)}</span>
              </div>
              <div type="figma" label="figma id">
                <span>{getIcon(selectedIcon, "figma_id", maps)}</span>
              </div>
              <div type="description" label="description">
                <span>{getIcon(selectedIcon, "description", maps)}</span>
              </div>
              <div wrapper="categories" label="categories">
                <Categories categories={getIcon(selectedIcon, "category", maps)}/>
              </div>
            </div>
          </div>
          <div drawer="footer"></div>
        </div>
        <Divider />
      </Drawer>
    </div>
  );
}
