import { ButtonHTMLAttributes, ReactNode } from "react";
import { Container } from "./styles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  leftIcon?: ReactNode;
}

export function Button({ children, leftIcon, ...props }: ButtonProps) {
  return (
    <Container {...props}>
      {leftIcon && <span data-testid="icon-container">{leftIcon}</span>}
      {children}
    </Container>
  );
}
