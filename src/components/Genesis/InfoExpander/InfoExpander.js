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
  /** Two "labels" that appear in the actionable space */
  labels: PropTypes.array,
  /** A list of HTML tags passed as "children". typically each item contains text content wrapped with in paragraph. */
  children: PropTypes.array.isRequired,
  /** Determines how the info should be initially viewed; either fully exposed or totally hidden. */
  initially_expanded: PropTypes.bool,
  /** Manages the live state of the Expanded. This is initally set by "initially_expanded" prop */
  expanded: PropTypes.bool
};

InfoExpander.defaultProps = {
  labels: ["show more", "show less"],
  initially_expanded: false,
  children: ["<p>...</p>", "<p>...</p>"],
  expanded: false
};

export default InfoExpander;
