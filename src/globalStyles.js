import { createGlobalStyle } from "styled-components";
import Colors from "./variables/Colors";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
    }

    body {
        background: ${Colors.grey.dark};
    }

    .app {
        background: ${Colors.white};
        max-width: 700px;
        margin: 0 auto;

        main {
            background: ${Colors.white};
            border-top-left-radius: 32px;
            border-top-right-radius: 32px;
            height: 100vh;
            padding: 32px;
        }
    }
`