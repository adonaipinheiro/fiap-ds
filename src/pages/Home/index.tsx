import { FaArrowLeft } from "react-icons/fa";
import { Button } from "../../DS/components";
import { DS_H1 } from "../../DS/typography";
import { DS_Button } from "../../DS/typography/DS_Button";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <DS_H1 text="Test" />
      <Button onClick={() => console.log("a")} leftIcon={<FaArrowLeft />}>
        <DS_Button text="Entrar" />
      </Button>
    </Container>
  );
}
