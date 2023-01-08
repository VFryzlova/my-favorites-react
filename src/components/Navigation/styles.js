import styled from "styled-components";
import Colors from "../../variables/Colors";

export const Nav = styled.nav`
    background: ${Colors.blue.dark};
    display: flex;
    justify-content: space-between;
    padding: 0 24px;

    a {
        color: ${Colors.white};
        text-decoration: none;
        padding: 8px;
    }
`;