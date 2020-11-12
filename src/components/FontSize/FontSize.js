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

const getSize = (maps, figma_id) => {
  return maps.by.figma_id[figma_id];
}

// TODO: Redo so we arn't calling getSize 100 times
const Sizes = ({family, sizes, maps}) => {
  return (
    <div>
      {
        sizes.reverse().map((size) => (
          <Size
            key={getSize(maps, size).token}
            name={getSize(maps, size).name}
            token={getSize(maps, size).token}
            size={getSize(maps, size).size}
            family={family.toLowerCase()}
          />
        ))
      }
    </div>
  )
}

const FontSize = ({family, maps}) => {
  const sizes = maps.Definition.by.fontFamily[family];

  return (
    <div font="size">
      <Sizes sizes={sizes} family={family} maps={maps}/>
      {/*<span>{family}</span>*/}
    </div>
  )
}
export default FontSize
