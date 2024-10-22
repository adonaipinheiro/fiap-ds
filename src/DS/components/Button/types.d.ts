import { ButtonHTMLAttributes } from "react";

export interface DS_ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  state: "default" | "outline";
}
