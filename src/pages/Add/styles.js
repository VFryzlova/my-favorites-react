import styled from 'styled-components';
import Colors from "../../variables/Colors";

export const ColorsEl = styled.div`
    display: flex;
    gap: 8px;

    .color {
        width: 40px;
        height: 40px;
        border-radius: 100px;
    }

    .color.selected {
        border: 2px solid black;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 24px;

    .form-control {
        display: flex;
        flex-direction: column;

        input {
            all: unset;
            background-color: ${Colors.grey.light};
            height: 40px; 
            border-radius: 32px;
            padding: 0 16px;
        }
    }
`;
