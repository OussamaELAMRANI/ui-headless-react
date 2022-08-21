import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../ui/Button";

export default {
  title: "Example/Button",
  component: Button,
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
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const UiButton = Template.bind({});

UiButton.args = {
  children: "text button",
  size: "md",
};
