import React from 'react';
//import PropTypes from 'prop-types';
//import './Wrapper.scss';

//const Wrapper = ({ id, type, children, ...rest }) => {
export default function Wrapper({ id, type, children, wrapping, ...rest }){
  return (
    <div wrapping={wrapping} id={id} type={type} {...rest}>
      {children}
    </div>
  )
}

// Wrapper.defaultProps = {
//
// };
//
// Wrapper.propTypes = {
//   children: PropTypes.any,
//   id: PropTypes.string,
//   type: PropTypes.string
// };
