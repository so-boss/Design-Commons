import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import Worksheet from "../components/Genesis/Worksheet/Worksheet.js"

export default {
  title: 'Messaging',
  //component: Button,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as Meta;

export const UninsuredMotoristA = () => {
  return (
    <Worksheet>
      {[
        {
          title: "Uninsured Motorist Bodily Injury",
          summary: "Covers you if the at-fault driver is uninsured",
          description_expanded: "false",
          alert_upper:"true",
          description: [
            "<p>If you are in an accident where the legally liable driver does not have liability insurance. For example a coverage of $50K / $100K would pay up to $50,000 for an individual, and up to $100,000 for all people injured or killed in that single accident.</p>",
            "<p>Your health insurance may help pay for your medical bills, but consider increasing this coverage if you're concerned about lost wages from your job as you recover.</p>"
          ]
        }
      ]}
    </Worksheet>
  )
}

export const UninsuredMotoristB = () => {
    return (
      <Worksheet>
        {[
          {
            title: "Uninsured Motorist Bodily Injury",
            summary: "Covers you if the at-fault driver is uninsured",
            description_expanded: "false",
            alert_lower:"true",
            description: [
              "<p>If you are in an accident where the legally liable driver does not have liability insurance. For example a coverage of $50K / $100K would pay up to $50,000 for an individual, and up to $100,000 for all people injured or killed in that single accident.</p>",
              "<p>Your health insurance may help pay for your medical bills, but consider increasing this coverage if you're concerned about lost wages from your job as you recover.</p>"
            ]
          }
        ]}
      </Worksheet>
    )
}