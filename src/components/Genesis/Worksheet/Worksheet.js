import React, { useState } from 'react';
import { Paper, Divider, Button } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

import Icon from '@material-ui/core/Icon';

// import {limits, maps} from "./data.js";
import {makeStyles} from '@material-ui/core/styles';

//import './../../../../../src/css/custom.scss';
import './Worksheet.scss';
//
// const CardBody = ({children, description}) => {
//   return (
//     <div container="body">
//       <CardContent>
//         {description && (
//           <Typography>
//             {description}
//           </Typography>
//         )}
//         {children}
//       </CardContent>
//     </div>
//   )
// }

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(2),
      width: theme.spacing(120),
      //height: theme.spacing(16),
      padding: theme.spacing(5)
    },
  },
}));

const Worksheet = ({title, summary, children, description_expanded}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(description_expanded);

  function ShowWhat(props) {
    if(props.expanded==="true") {
      return <ShowLess />
    }
    return <ShowMore />
  };
  // onClick={() => setExpanded(prevExpanded => !prevExpanded)}
  function ShowMore() {
    return (
      <Button
        startIcon={<AddCircleIcon />}
        onClick={() => setExpanded("true")}
      >
        Show More
      </Button>
    )
  }
  function ShowLess() {
    return (
      <Button
        startIcon={<RemoveCircleIcon />}
        onClick={() => setExpanded("false")}
      >
        Show Less
      </Button>
    )
  }
  return (
    <div worksheet="container" className={classes.root}>
      <Paper worksheet="section" elevation={5}>
        <div>
          <div section="header">
            <div block="container">
              <div>{title}</div>
              <div>{summary}</div>
            </div>
            <Divider />
          </div>
          <div section="body">
            <div expandable="container" expanded={expanded}>
              <div>
                {children}
              </div>
              <ShowWhat expanded={expanded} />
            </div>
          </div>
          <div section="footer"></div>
        </div>
      </Paper>
    </div>
  );
}

export default Worksheet;