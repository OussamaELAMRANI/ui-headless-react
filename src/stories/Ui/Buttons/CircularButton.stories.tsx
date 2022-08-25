import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CircularButton } from "@/component/CtaButtons";
import { AddIcon } from "@/icon/AddIcon";

export default {
  title: "Example/Button",
  component: CircularButton,
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
} as ComponentMeta<typeof CircularButton>;

const Template: ComponentStory<typeof CircularButton> = (args) => (
  <CircularButton {...args}>
    <AddIcon fill={"#fff"} />
  </CircularButton>
);

export const Circluar = Template.bind({});

Circluar.args = {};
