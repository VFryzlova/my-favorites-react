import styled from "styled-components";
import Colors from "../../variables/Colors";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    margin: 32px 0;

    .form-control {
        display: flex;
        flex-direction: column;
    }
`;