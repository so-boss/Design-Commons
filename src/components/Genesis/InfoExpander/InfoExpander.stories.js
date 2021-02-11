/* eslint-disable */
import React from 'react';
//import { storiesOf } from '@storybook/react';
import InfoExpander from './InfoExpander';

export default {
  title: "Info Expander",
  component: InfoExpander,
  argTypes: {
    initially_expanded: {
      control: true,
    },
    expanded: {
      table: {
        disable: true
      }
    }
  }
}

const example_text = [
  "<p>Aliquam dictum tortor a sodales feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>",
  "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>"
]

const Template = (args) => {
  return (
    <InfoExpander {...args}>{args.children}</InfoExpander>
  );
}

// Each story then reuses that template
export const Collapsed = Template.bind({});
Collapsed.args = {
  labels: ["show more", "show less"],
  children: example_text,
  expanded: false,
  initially_expanded: false
};

export const Expanded = Template.bind({});
Expanded.args = {
  ...Collapsed.args,
  expanded: true,
  initially_expanded: true
}