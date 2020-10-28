import React from "react";

import {
  Tag,
  PageHeader,
  Card,
} from 'antd';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
// import MailIcon from '@material-ui/icons/Mail';
// import DeleteIcon from '@material-ui/icons/Delete';
// import Label from '@material-ui/icons/Label';
// import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
// import InfoIcon from '@material-ui/icons/Info';
// import ForumIcon from '@material-ui/icons/Forum';
// import LocalOfferIcon from '@material-ui/icons/LocalOffer';
// import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// import ArrowRightIcon from '@material-ui/icons/ArrowRight';

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



const Menu = ({classes}) => {
  return (
    <div type="menu">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Guidelines</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Color</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Typography</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Icons</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  )
}

const Sidebar = ({}) => {
  const classes = useStyles();

  return (
    <div type="sidebar">
      <div>
        <div sidebar="header">
          <img src="/img/aaa-logo.svg" />
        </div>
        <div sidebar="body">
          <Menu classes={classes}/>
        </div>
        <div sidebar="footer"></div>
      </div>
    </div>
  );
}


export default function AntPage ({title, icon, summary, children}) {
  const Content = ({ children }) => {
    return (
      <div style={{ flex: 1 }}>{children}</div>
    )
  }
  let routes = [
    {
      path: 'index',
      breadcrumbName: 'Design Guidelines',
    }
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
        <Sidebar></Sidebar>
        <PageHeader
          title={title}
          className="site-page-header"
          tags={<Tag color="blue">Under Development</Tag>}
          avatar={avatar}
          breadcrumb={{routes}}
        >
          <Content summary={summary}>{children}</Content>
        </PageHeader>
      </div>
    </div>
  );
}
