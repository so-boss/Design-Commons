import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import Worksheet from "../components/Genesis/Worksheet/Worksheet.js"

export default {
  title: 'Coverages/Messaging',
  //component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

//const Template: Story<PageProps> = (args) => <Page {...args} />;
// export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

export const One = () => {

  return (
      <Worksheet />
  )
}