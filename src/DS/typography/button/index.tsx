import { PropsWithChildren } from "react";
import { ButtonStyled } from "./styles";

export function ButtonTypo({ children }: PropsWithChildren) {
  return <ButtonStyled>{children}</ButtonStyled>;
}
