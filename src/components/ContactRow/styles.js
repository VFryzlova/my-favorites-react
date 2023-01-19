import styled from "styled-components";
import Colors from "../../variables/Colors";

export const ContactRowEl = styled.div`
    padding-bottom: 8px;
    display: flex;
    align-items: center;
    color: ${Colors.black};

    .avatar {
        padding-right: 8px;
        width: 42px;
    }
`;