import React from "react"
//import { jsx, Theme } from "theme-ui"
// import Table from "./table"
// import useSpecimensConfig from "./hooks/useSpecimensConfig"
// import getValue from "./utils/get-value"
// import theme from "./theme"

/*
type FontSizeProps = {
  fontSizes?: Theme["fontSizes"]
}

const FontSize = ({ fontSizes = undefined }: FontSizeProps) => {
  const specimensConfig = useSpecimensConfig()

  return (
    <Table sx={{ ...theme.typography.fontSize }} columns={[`75px 100px 1fr`]} titles={[`Token`, `Size`, `Preview`]}>
      {fontSizes && Array.isArray(fontSizes) ? (
        fontSizes.map((size, index) => (
          <div key={size}>
            <div>{index}</div>
            <div>{size}</div>
            <div sx={{ fontSize: `${specimensConfig.rootFontSize * getValue(size, specimensConfig.rootFontSize)}px` }}>
              Size {index}
            </div>
          </div>
        ))
      ) : (
        <div sx={{ gridTemplateColumns: `1fr !important` }}>No font sizes defined</div>
      )}
    </Table>
  )
}

_.forEach(fontSizes, function(fontFamily, fontSizes) {
      fontSizes.map((size, index) => (

      )
  });
*/


const FontSize = ({family, sizes}) => {

  return (
    <div>
      <div>
        {
          sizes.map((size) => (
            <div token={size.token}>
              <span>{size.size}</span>
              <span>{size.name}</span>
            </div>
          ))
        }
      </div>
      <span>{family}</span>
    </div>
  )
}
export default FontSize