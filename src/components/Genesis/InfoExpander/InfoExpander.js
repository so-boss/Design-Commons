import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './InfoExpander.scss';
import {Button} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";

const ShowWhat = ({labels, expanded, setExpanded}) => {
  if(expanded==true) {
    return <ShowLess setExpanded={setExpanded}>{labels[1]}</ShowLess>
  }
  return <ShowMore setExpanded={setExpanded}>{labels[0]}</ShowMore>
}

const ShowMore = ({setExpanded, children}) => (
  <Button
    startIcon={<AddCircleIcon />}
    onClick={() => setExpanded(true)}
  >
    {children}
  </Button>
)

const ShowLess = ({setExpanded, children}) => (
  <Button
    startIcon={<RemoveCircleIcon />}
    onClick={() => setExpanded(false)}
  >
    {children}
  </Button>
)

//expanded, setExpanded,
const InfoExpander = ({labels, initially_expanded, children}) => {
  const [expanded, setExpanded] = useState(initially_expanded);


  return (
    <div expandable="container" expanded={expanded.toString()}>
      <div dangerouslySetInnerHTML={{__html: children.join("")}} />
      <ShowWhat
        labels={labels}
        expanded={expanded}
        setExpanded={setExpanded}
      />
    </div>
  );

}

InfoExpander.propTypes = {
  labels: PropTypes.array,
  children: PropTypes.array,
  initially_expanded: PropTypes.bool,
  expanded: PropTypes.bool
};

InfoExpander.defaultProps = {
  labels: ["show more", "show less"],
  initially_expanded: false,
  children: ["<p>...</p>", "<p>...</p>"],
  expanded: false
};

export default InfoExpander;
