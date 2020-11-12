import React from "react"

import {Typography} from 'antd';
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from '@material-ui/core/Box';
import {FontSize, TextStyle, Typeface, AntPage, DemoText} from "./../../../src/components/"
import { useTypography } from './../../../src/hooks/use-typography.js';
import './../../../src/css/custom.scss'
const { Paragraph, Title } = Typography;


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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function Home() {
  const typography = useTypography(null, "definition");
  const [value, setValue] = React.useState(0);
  const [value2, setValue2] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
  };

  return (
    <AntPage>
      <div>
        <Paper square>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="secondary"
            aria-label="platform size"
          >
            <Tab label="Desktop / Large" />
            <Tab label="Mobile / Small" />
          </Tabs>
        </Paper>
        <TabSection value={value} index={0}>
          <DemoText
            title="Desktop/Large"
            collection={typography.maps.CSAA.by.size.Large.concat(typography.maps.CSAA.by.size.Desktop)}
            maps={typography.maps}
          />
        </TabSection>
        <TabSection value={value} index={1}>
          <DemoText
            title="Mobile/Small"
            collection={typography.maps.CSAA.by.size.Small.concat(typography.maps.CSAA.by.size.Mobile)}
            maps={typography.maps}
          />
        </TabSection>
      </div>

      <Title level={4}>Definitions: Font Families</Title>
      <div>
        <Paper square>
          <Tabs
            value={value2}
            onChange={handleChange2}
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="secondary"
            aria-label="platform size"
          >
            <Tab label="RT Raleway" />
            <Tab label="Cabin" />
          </Tabs>
        </Paper>
        <TabSection value={value2} index={0}>
          <div row="typefaces">
            <Typeface typefaces={useTypography("rtraleway").typefaces} />
          </div>
          <FontSize
            family="RTRaleway"
            maps={typography.maps}
          />
          <TextStyle
            family="RTRaleway"
            maps={typography.maps}
          />
        </TabSection>
        <TabSection value={value2} index={1}>
          <div row="typefaces">
            <Typeface typefaces={useTypography("cabin").typefaces} />
          </div>
          <FontSize
            family="Cabin"
            maps={typography.maps}
          />
          <TextStyle
            family="Cabin"
            maps={typography.maps}
          />
        </TabSection>
      </div>
    </AntPage>
  )
}

/*
      <Paragraph>The CSAA color palette is aligned with color use in web applications and support for accessibility. The colors below constitute the expanded color palette for CSAA. Text colors displayed in light or dark tints represent CSAA's recommended accessible pairing with the color.</Paragraph>
 */