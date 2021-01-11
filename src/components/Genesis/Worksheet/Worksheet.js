import React, { useState } from 'react';
import { Paper, Divider, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
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

export default function Worksheet() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  return (
    <div worksheet="container" className={classes.root}>
      <Paper worksheet="section" elevation={5}>
        <div>
          <div section="header">
            <div block="container">
              <div>Bodily Injury</div>
              <div>Covers the injuries of others if you’re at fault</div>
            </div>
            <Divider />
          </div>
          <div section="body">
            <div expandable="container" expanded={expanded.toString()}>
              <div>
                <p>For example, if you rear-end someone, and they need medical care, a $25K/ $50K bodily injury liability limit would pay up to $25,000 for an individual, and up to $50,000 for all people injured in that single accident. This coverage also pays for legal defense costs if you’re sued.</p>
                <p>Consider increasing your liability limits if you have assets such as a home to protect from a lawsuit.</p>
              </div>
              <Button
                variant="text"
                startIcon={<AddIcon />}
                onClick={() => setExpanded(prevExpanded => !prevExpanded)}
              >
                Show More
              </Button>
            </div>
          </div>
          <div section="footer"></div>
        </div>
      </Paper>
    </div>
  );
}