import { Meta, StoryFn } from "@storybook/react";
import { Button, ButtonProps } from ".";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { FaBeer } from "react-icons/fa"; // Exemplo de ícone, use qualquer ícone da sua escolha.

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    children: { control: "text" },
    leftIcon: { control: "object" },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Botão",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: "Botão com ícone",
  leftIcon: <FaBeer />,
};
