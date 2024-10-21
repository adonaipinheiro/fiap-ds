import { Button } from "./styles";

interface DS_ButtonProps {
  text: string;
}

export function DS_Button({ text }: DS_ButtonProps) {
  return <Button>{text}</Button>;
}
