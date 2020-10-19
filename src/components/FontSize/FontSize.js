import React from 'react';

import './FontSize.scss';

const Size = ({family, name, token, size}) => {
  return (
    <a href={"#"+family+"_"+name.short}>
      <div token={token}>
        <div font="letter">
          <span style={{fontSize: size}}>a</span>
        </div>
        <div>
          <div>
            <label>{parseInt(size)}</label>
            <label>{name.short||name.long}</label>
          </div>
        </div>
      </div>
    </a>
  )
};

const Sizes = ({family, sizes}) => {
  return (
    <div>
      {
        sizes.reverse().map((size) => (
          <Size
            name={size.name}
            token={size.token}
            size={size.size}
            family={family.toLowerCase()}
          />
        ))
      }
    </div>
  )
}

const FontSize = ({family, sizes}) => {
  return (
    <div font="size">
      <Sizes sizes={sizes} family={family}/>
      {/*<span>{family}</span>*/}
    </div>
  )
}
export default FontSize
