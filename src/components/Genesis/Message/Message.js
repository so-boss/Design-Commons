import React from 'react';
import PropTypes from 'prop-types';
import './Message.scss';
import InfoIcon from "@material-ui/icons/Info";

const Message = ({message, data}) => {
  const lexicon = [
    {regex: /MAXLIMITAMT/g, map: "max"},
    {regex: /COVERAGETYPE/g, map: "type"}
  ]

  function mergeData(content, data) {
    if(!content) {
      return "";
    }
    let mergedContent = content;
    _.each(lexicon, function(o) {
      mergedContent = mergedContent.replace(o.regex, data[o.map]);
    })

    return mergedContent;
  }

  return (
    <div alert="container">
      <InfoIcon />
      <div>{mergeData(message, data)}</div>
    </div>
  )
}

Message.propTypes = {};

Message.defaultProps = {
  message:""
};

export default Message;
