import { Meta, StoryFn } from "@storybook/react";
import { DS_Button } from ".";
import { FaSignInAlt } from "react-icons/fa";
import type { DS_ButtonProps } from "./types";
import { fn } from "@storybook/test";

export default {
  title: "Components/Button",
  component: DS_Button,
  argTypes: {
    rightIcon: { control: "object" },
    children: { controle: "text" },
    leftIcon: { control: "object" },
    state: { controle: "text" },
  },
  args: { onClick: fn() },
} as Meta;

const Template: StoryFn<DS_ButtonProps> = (args) => <DS_Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Entrar",
  state: "default",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: "Entrar",
  state: "default",
  rightIcon: <FaSignInAlt />,
};

export const Outline = Template.bind({});
Outline.args = {
  children: "Entrar",
  state: "outline",
};
