import '@so.boss/pixel/dist/module.css';
//import { addDecorator } from '@storybook/react';
//import { withInfo } from '@storybook/addon-info';

// addDecorator(
//   withInfo({
//     header: true,
//   })
// );
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    // withKnobs: {
    //   disabled:false
    // },
    showPanel: true,
  },
  controls: {
    expanded:true
  },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
  },
}