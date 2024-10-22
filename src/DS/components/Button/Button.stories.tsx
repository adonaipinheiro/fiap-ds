import { Meta, StoryFn } from "@storybook/react";
import { DS_Button, DS_ButtonProps } from ".";
import { FaSignInAlt } from "react-icons/fa";

export default {
  title: "Components/Button",
  component: DS_Button,
  argTypes: {
    rightIcon: { control: "object" },
    children: { controle: "text" },
    leftIcon: { control: "object" },
    state: { controle: "text" },
  },
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
