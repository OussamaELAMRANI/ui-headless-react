import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FacebookButton } from "../../../component/CtaButtons";

export default {
  title: "Example/Button",
  component: FacebookButton,
  argTypes: {
    variant: {
      options: ["primary", "secondary", "success", "danger", "warning"],
      control: { type: "select" },
      defaultValue: "primary",
    },
    size: {
      options: ["sm", "md", "lg", "xl"],
      control: { type: "select" },
      defaultValue: "md",
    },
    pill: {
      control: "boolean",
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof FacebookButton>;

const Template: ComponentStory<typeof FacebookButton> = (args) => (
  <FacebookButton {...args} />
);

export const Facebook = Template.bind({});

Facebook.args = {};
