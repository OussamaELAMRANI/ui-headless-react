import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../ui/Button";

export default {
  title: "Example/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  variant: "primary",
  children: "text button",
  size: "md"
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: "text button",
};

export const Large = Template.bind({});
Large.args = {
  size: "xl",
  children: "text button",
};

export const Small = Template.bind({});
Small.args = {
  size: "sm",
  children: "text button",
};
