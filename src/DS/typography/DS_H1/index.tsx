import { H1 } from "./styles";

interface DS_H1Props {
  text: string;
}

export function DS_H1({ text }: DS_H1Props) {
  return <H1>{text}</H1>;
}
