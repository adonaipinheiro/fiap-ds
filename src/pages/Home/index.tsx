import { FaSignInAlt } from "react-icons/fa";
import { DS_Button } from "../../DS/components";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <DS_Button state="default" rightIcon={<FaSignInAlt />}>
        Entrar
      </DS_Button>
      <DS_Button state="outline" rightIcon={<FaSignInAlt />}>
        Registrar
      </DS_Button>
    </Container>
  );
}
