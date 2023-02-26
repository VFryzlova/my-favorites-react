import styled from "styled-components";
import Colors from "../variables/Colors";

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

    .search {
        width: 80%; 
        position: relative;

        input {
            all: unset;
            box-sizing: border-box;
            width: 100%;
            background-color: ${Colors.transparent.white};
            height: 40px; 
            border-radius: 32px;
            padding: 0 16px;

            &::placeholder {
                color: rgba(255,255,255, 0.4);
            }
        }

        .search-dropdown {
            width: 100%;
            position: absolute;
            padding: 16px;
            border-radius: 8px;
            color: ${Colors.black};
            background-color: ${Colors.white};
            border: 1px solid ${Colors.grey.medium};
            box-shadow: 0px 0px 16px 0px rgba(22,73,103,0.2);

            .not-found {
                color: ${Colors.grey.dark};
            }
        }
    }
`