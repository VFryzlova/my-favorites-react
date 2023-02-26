import styled from 'styled-components';
import Colors from '../variables/Colors';

export const ColorPicker = styled.div`
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
