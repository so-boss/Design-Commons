import React from 'react';
import './FontSize.scss';

const Size = ({name, token, size}) => {
  console.log(name)
  return (
    <div token={token}>
      <span>{size}</span>
      <span>{name.short||name.long}</span>
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
    <div>
      <Sizes sizes={sizes} />
      <span>{family}</span>
    </div>
  )
}
export default FontSize
