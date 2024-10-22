import { PropsWithChildren } from "react";
import { H1Styled } from "./styles";

export function H1({ children }: PropsWithChildren) {
  return <H1Styled>{children}</H1Styled>;
}
