import { Container } from "./styles";
import { ButtonTypo } from "../../typography";
import type { DS_ButtonProps } from "./types";

export function DS_Button({
  rightIcon,
  leftIcon,
  children,
  state,
  ...props
}: DS_ButtonProps) {
  return (
    <Container state={state} {...props}>
      {leftIcon && <span data-testid="left-icon">{leftIcon}</span>}
      <ButtonTypo>{children}</ButtonTypo>
      {rightIcon && <span data-testid="right-icon">{rightIcon}</span>}
    </Container>
  );
}
