import { P } from "./styles";

interface DS_PProps {
  text: string;
}

export function DS_P({ text }: DS_PProps) {
  return <P>{text}</P>;
}
