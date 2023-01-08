import styled from "styled-components";
import Colors from "../../variables/Colors";

export const Nav = styled.nav`
    position: fixed;
    bottom: 0;
    width: 100%;
    max-width: 700px;
    background: ${Colors.blue.dark};
    display: flex;
    justify-content: space-between;
    padding: 0 12px;

    a {
        color: ${Colors.white};
        text-decoration: none;
        line-height: 100%;
        padding: 8px;
        display: flex;
        align-items: center;
    }
`;