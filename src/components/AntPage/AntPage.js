import React from "react";

import {
  Tag,
  PageHeader,
  Card,
} from 'antd';
import { makeStyles } from '@material-ui/core/styles';
// import Accordion from '@material-ui/core/Accordion';
// import AccordionSummary from '@material-ui/core/AccordionSummary';
// import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Button from '@material-ui/core/Button';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import './../../../static/ant/antd.css';
import './AntPage.scss';

//import '@site/docs/guidelines.scss';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));



// const Menu = ({classes}) => {
//   return (
//     <div type="menu">
//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1a-content"
//           id="panel1a-header"
//         >
//           <Typography className={classes.heading}>Guidelines</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
//             sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1a-content"
//           id="panel1a-header"
//         >
//           <Typography className={classes.heading}>Color</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
//             sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel2a-content"
//           id="panel2a-header"
//         >
//           <Typography className={classes.heading}>Typography</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
//             sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel3a-content"
//           id="panel3a-header"
//         >
//           <Typography className={classes.heading}>Icons</Typography>
//         </AccordionSummary>
//       </Accordion>
//     </div>
//   )
// }

const useNavStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400
  }
});

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
        </div>
      }
      {...rest}
    />
  )
}

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
  const classes = useStyles();

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


export default function AntPage ({baseRoute, title, icon, summary, children}) {
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
