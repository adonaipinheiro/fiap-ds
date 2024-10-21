import { createGlobalStyle } from "styled-components";

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
        --primary: #ED145B;
        --white: #FFFFFF;
        --whiteWithOpacity: #FFFFFF40;
        --black: #000000;
    }
`;
