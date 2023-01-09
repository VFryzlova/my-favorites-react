import styled from "styled-components";
import Colors from "../../variables/Colors";

export const HeaderEl = styled.header`
    background: ${Colors.linear.blue};
    color: ${Colors.white};
    margin-bottom: -32px;
    padding: 32px 32px 64px;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    // Logout link
    a {
        color: ${Colors.white};
    }

    .name-day {
        height: 25px;
    }

    // Search
    input {
        all: unset;
        background-color: ${Colors.transparent.white};
        height: 2.5rem;
        width: 80%;  
        border-radius: 2rem;
        padding: 0 1rem;

        &::placeholder {
            color: rgba(255,255,255, 0.4);
        }
    }   
`