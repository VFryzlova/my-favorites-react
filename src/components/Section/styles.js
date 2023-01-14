import styled from "styled-components";

export const Section = styled.section`
    text-align: ${props => props.centered ? "center" : "left"};
    margin-bottom: 32px;

    h2 {
        margin-bottom: 16px;
    }
`