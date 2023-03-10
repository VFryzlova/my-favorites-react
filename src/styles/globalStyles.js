import { createGlobalStyle } from 'styled-components';
import Colors from '../variables/Colors';

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
    }
    
    a {
        text-decoration: none;
    }

    .app {
        background: ${Colors.white};
        max-width: 700px;
        margin: 0 auto;

        main {
            background: ${Colors.white};
            border-top-left-radius: 32px;
            border-top-right-radius: 32px;
            padding-top: 32px;
            padding-bottom: 68px;
        }
    }
`;
