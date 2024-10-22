import { PropsWithChildren } from "react";
import { PStyled } from "./styles";

export function P({ children }: PropsWithChildren) {
  return <PStyled>{children}</PStyled>;
}
