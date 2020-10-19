import React from 'react';
import './FontSize.scss';

const Size = ({name, token, size}) => {
  console.log(name)
  return (
    <div token={token}>
      <div>
        <span style={{fontSize: size}}>a</span>
        <label>{parseInt(size)}</label>
      </div>
      <label>{name.short||name.long}</label>
    </div>
  )
};

const Sizes = ({sizes}) => {
  return (
    <div>
      {
        sizes.map((size) => (
          <Size
            name={size.name}
            token={size.token}
            size={size.size}
          />
        ))
      }
    </div>
  )
}

const FontSize = ({family, sizes}) => {
  return (
    <div font="size">
      <Sizes sizes={sizes} />
      {/*<span>{family}</span>*/}
    </div>
  )
}
export default FontSize
