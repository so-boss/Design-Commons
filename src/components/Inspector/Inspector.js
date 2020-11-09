import React, {useContext} from "react";

//import clsx from "clsx";
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

// const AppBar = ({}) => {
//   return (
//     <AppBar
//       position="fixed"
//     >
//       <Toolbar>
//         <Typography variant="h6" noWrap>
//           Persistent drawer
//         </Typography>
//         <IconButton
//           color="inherit"
//           aria-label="open drawer"
//           edge="end"
//           onClick={handleDrawerOpen}
//         >
//           <MenuIcon />
//         </IconButton>
//       </Toolbar>
//     </AppBar>
//   )
// }

export default function Inspector ({}) {
  const classes = useStyles();
  const theme = useTheme();
  const {isOpen, onDrawerOpen, onDrawerClose} = useContext(InspectorContext);

  //const inspector = useContext(InspectorContext);
  // const [open, setOpen] = React.useState(false);
  //
  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };
  //
  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

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
            <IconButton onClick={onDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <div drawer="body">
            <div wrapper="info">
              <div type="name">
                <span>flower rose</span>
              </div>
              <div type="figma" label="figma id">
                <span>flower-rose</span>
              </div>
              <div type="description" label="description">
                <span>An icon is a glyph used to represent something else. Icons can represent accessibility standards</span>
              </div>
              <div wrapper="categories" label="categories">
                <div wrapper="bubbles">
                  <Chip size="small" label="arrows" />
                  <Chip size="small" label="misc" />
                  <Chip size="small" label="navigation" />
                </div>
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
