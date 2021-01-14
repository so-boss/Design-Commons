import '@so.boss/pixel/dist/module.css';
//import { addDecorator } from '@storybook/react';
//import { withInfo } from '@storybook/addon-info';

// addDecorator(
//   withInfo({
//     header: true,
//   })
// );

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    withKnobs: {
      disable:true
    },
    showPanel: false
  },
  controls: { disabled: true },
}