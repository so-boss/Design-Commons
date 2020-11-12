import React from 'react';

import './DemoText.scss';



//
// // TODO: Redo so we arn't calling getSize 100 times
// const Sizes = ({family, sizes, maps}) => {
//   return (
//     <div>

//     </div>
//   )
// }
const getSize = (maps, figma_id) => {
  return maps.by.figma_id[figma_id];
}
const Items = ({maps, items}) => {
  return (
    <div layout="table">
      {
        items.map((item) => (
          <Item
            title={getSize(maps, item).meta.example_label}
            dummyText={getSize(maps, item).meta.example_content}
            styles={getSize(maps, item)}
          />
        ))
      }
    </div>
  )
}

// TODO: Might be efficient to have css already constructed?
//       fontFamily:styles.family, lineHeight: styles.lineHeight, fontSize: styles.size, fontWeight: styles.weight
const Item = ({title, dummyText, styles}) => {
  console.log(styles);
  const style = {
    fontFamily:styles.family,
    lineHeight: styles.lineHeight,
    fontSize: styles.size,
    fontWeight: styles.weight
  }

  return (
    <div table="row">
      <div type="label" style={style}>{title}</div>
      <div type="dummy" style={style}>{dummyText}</div>
    </div>
  )
}

const DemoText = ({collection, maps, title}) => {
  //const sizes = maps.Definition.by.fontFamily[family];

  return (
    <div type="demotext">
      <Items
        items={collection}
        maps={maps}
        title={title}
      />
    </div>
  )
}
export default DemoText
