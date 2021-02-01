import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';

import Worksheet from "../components/Genesis/Worksheet/Worksheet.js"

export default {
  title: 'Experiments/Week 2',
  decorators: [withDesign],
} as Meta;

export const TaskA = () => {
  return (
        <Worksheet
          indicatorMethod="alert"
          initialSelections={{
            max_max: [1000,1000],
            bodily_injury: [100,300],
            property_damage: [100],
            uninsured_bodily: [100,300],
            underinsured_bodily: [100,300],
            uninsured_property: [100]
          }}
        >
          {[
            {
              id: "bodily_injury",
              title: "Bodily Injury",
              summary: "Covers the injuries of others if you’re at fault",
              limitSelectorType: "bodily",
              initialLimit:3, //[100,300],
              limited: {
                by: "bodily_injury"
              },
              description_expanded: "false",
              description: [
                "<p>For example, if you rear-end someone, and they need medical care, a $25K/ $50K bodily injury liability limit would pay up to $25,000 for an individual, and up to $50,000 for all people injured in that single accident. This coverage also pays for legal defense costs if you’re sued.</p>",
                "<p>Consider increasing your liability limits if you have assets such as a home to protect from a lawsuit.</p>"
              ]
            },
            {
              id: "property_damage",
              title: "Property Damage",
              summary: "Covers the property of others if you’re at fault",
              limitSelectorType: "property",
              initialLimit:3, //[100],
              limited: {
                by: "bodily_injury"
              },
              description_expanded: "false",
              alert_upper: "Max Limit MAXLIMITAMT. Increase your COVERAGETYPE limits to get more Property Damage coverage.",
              description: [
                "<p>Pays for damage you cause to the property of others when you’re involved in a covered automobile accident. This includes damage to the other person's car or other property. This coverage also pays for legal defense costs if the insured is sued.</p>"
              ]
            },
            {
              id: "uninsured_bodily",
              title: "Uninsured Motorist Bodily Injury",
              summary: "Covers you if the at-fault driver is uninsured",
              limitSelectorType: "bodily",
              initialLimit:3, //[100,300],
              limited: {
                by: "bodily_injury"
              },
              description_expanded: "false",
              alert_upper: "Max Limit 100k person / 300K incident. Increase your Bodily Injury limits to get more Uninsured Motorist Bodily Injury coverage.",
              description: [
                "<p>If you are in an accident where the legally liable driver does not have liability insurance. For example a coverage of $50K / $100K would pay up to $50,000 for an individual, and up to $100,000 for all people injured or killed in that single accident.</p>",
                "<p>Your health insurance may help pay for your medical bills, but consider increasing this coverage if you're concerned about lost wages from your job as you recover.</p>"
              ]
            },
            {
              id: "underinsured_bodily",
              title: "Underinsured Motorist Bodily Injury",
              summary: "Covers you if the at-fault driver is underinsured",
              limitSelectorType: "bodily",
              initialLimit:3, //[100,300],
              limited:{
                by:"bodily_injury"
              },
              description_expanded: "false",
              alert_upper: "Max Limit 100k person / 300K incident. Increase your Bodily Injury limits to get more Underinsured Motorist Bodily Injury coverage.",
              description: [
                "<p>If you are in an accident where the legally liable driver does not have liability insurance or their coverage is inadequate. For example a coverage of $50K / $100K would pay up to $50,000 for an individual, and up to $100,000 for all people injured or killed in that single accident.</p>",
                "<p>Your health insurance may help pay for your medical bills, but consider increasing this coverage if you're concerned about lost wages from your job as you recover.</p>"
              ]
            },
            {
              id: "uninsured_property",
              title: "Uninsured Property Damage",
              summary: "Covers the property of others if you’re at fault",
              limitSelectorType: "property",
              initialLimit:3, //[100],
              limited: {
                by: "property_damage"
              },
              description_expanded: "false",
              alert_upper: "Max Limit 100K incident. Increase your Property Damage limits to get more Uninsured Property Damage coverage.",
              description: [
                "<p>If you are in an accident where the legally liable driver does not have liability insurance or their coverage is inadequate. For example a coverage of $50K / $100K would pay up to $50,000 for an individual, and up to $100,000 for all people injured or killed in that single accident.</p>",
                "<p>Your health insurance may help pay for your medical bills, but consider increasing this coverage if you're concerned about lost wages from your job as you recover.</p>"
              ]
            }
          ]}
        </Worksheet>
  )
}

TaskA.parameters = {
  design: {
    type:"figma",
    url:"https://www.figma.com/proto/d6EzLIwn2w7VGa1CXH9dnr/Concepts?node-id=73%3A15557&viewport=839%2C-7562%2C0.6652882695198059&scaling=min-zoom"
  }
}