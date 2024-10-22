import { createGlobalStyle } from "styled-components";
import { DS_Colors } from "../DS/colors";

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
        -webkit-font-smoothing: antialiased;
        font-size: 14px;
    }

    body {
        background-image: url(./background.webp);
        height: 100vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    button {
        cursor: pointer;
        border: 0;
    }

    :root {
      --primary: ${DS_Colors.primary[900]};
      --white: ${DS_Colors.white};
      --black: ${DS_Colors.black};
    }
`;
