import React from 'react';
import PropTypes from 'prop-types';
import './Item.scss';
import Amount from "../Amount/Amount";
import {Dropdown} from "semantic-ui-react";

const SingleValueItem = ({value}) => (
  <Amount>{value[0]}</Amount>
)

const TwoValueItem = ({value}) => (
  <>
    <Amount>{value[0]}</Amount>
    <span type="spacer" separator="/"></span>
    <Amount>{value[1]}</Amount>
  </>
)

const Item = ({type, children, ...rest}) => {

  return (
    <div type={type==="dropdown" ? "" : "item"} {...rest}>
      {(()=> {
        if(children.length<2) {
          return <SingleValueItem value={children}/>;
        } else {
          return <TwoValueItem value={children}/>;
        }
      })()}
    </div>
  )

}

Item.propTypes = {
  children: PropTypes.array
};

Item.defaultProps = {
  type: "item"
};

export default Item;
