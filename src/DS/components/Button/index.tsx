import { ButtonHTMLAttributes, ReactNode } from "react";
import { Container } from "./styles";
import { ButtonTypo } from "../../typography";

export interface DS_ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  state: "default" | "outline";
}

export function DS_Button({
  rightIcon,
  leftIcon,
  children,
  state,
  ...props
}: DS_ButtonProps) {
  return (
    <Container state={state} {...props}>
      {leftIcon && leftIcon}
      <ButtonTypo>{children}</ButtonTypo>
      {rightIcon && rightIcon}
    </Container>
  );
}
