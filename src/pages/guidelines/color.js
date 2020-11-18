import React from "react"
import _ from "lodash";

import {
  Palette,
} from "@lekoarts/gatsby-theme-specimens"
import {AntPage} from "./../../../src/components/";

import { useSortedColors } from './../../../src/hooks/use-sorted-colors';
import './../../../src/css/custom.scss'
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";


const TabSection = ({children, value, index, ...other}) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}

export default function Home() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const neutrals = _.concat(
    useSortedColors("black","brand"),
    useSortedColors("grey","brand"),
    useSortedColors("white","brand")
  )

  return (
    <AntPage>
      <p>The CSAA color palette is aligned with color use in web applications and support for accessibility. The colors below constitute the expanded color palette for CSAA. Text colors displayed in light or dark tints represent CSAA's recommended accessible pairing with the color.</p>
      <div section="title">Brand Colors</div>
      <Palette
        colors={useSortedColors("blue","brand")}
        mode="swatch"
      />

      <Palette
        colors={neutrals}
        mode="swatch"
      />
      <Palette
        colors={useSortedColors("red","brand")}
        mode="swatch"
      />

      <div page="section">
        <Paper square>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            aria-label="color spectrum"
          >
            <Tab label="Blues (actionable)" />
            <Tab label="Greys (readable)" />
            <Tab label="Accents (noticeable)" />
          </Tabs>
        </Paper>
        <TabSection value={value} index={0}>
          <Palette colors={useSortedColors("blue","color")}/>
        </TabSection>
        <TabSection value={value} index={1}>
          <Palette colors={useSortedColors("grey","color")}/>
        </TabSection>
        <TabSection value={value} index={2}>
          <Palette colors={useSortedColors("red","color")}/>
        </TabSection>
      </div>

      <div layout="panel">

      </div>
    </AntPage>
  )
}