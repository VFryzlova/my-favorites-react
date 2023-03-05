import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.centered ? "center" : "stretch"};
    padding: 0 32px 24px;

    h2 {
        margin-bottom: 16px;
    }
`