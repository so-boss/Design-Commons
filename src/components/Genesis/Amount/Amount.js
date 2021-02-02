import React from 'react';
import PropTypes from 'prop-types';
import './Amount.scss';

const Amount = ({typeOfAmount, prefix, suffix, children}) => (
  <span
    amount={typeOfAmount}
    prefix={prefix}
    suffix={suffix}
  >
    {children}
  </span>
);

Amount.propTypes = {
  prefix: PropTypes.string,
  typeOfAmount: PropTypes.string,
  suffix: PropTypes.string
};

Amount.defaultProps = {
  typeOfAmount: "number",
  prefix: "$",
  suffix: "k",
  children: "100"
};

export default Amount;
