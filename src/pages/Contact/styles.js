import styled from "styled-components";
import Colors from "../../variables/Colors";

export const Modal = styled.div`
    .menu-wrapper {
        position: absolute;
        right: 12px;
        top: 24px;

        .menu {
            position: absolute;
            right: 12px;
            top: 24px;
            padding: 24px 16px;
            display: flex;
            flex-direction: column;
            gap: 24px;
            white-space: nowrap;
            font-size: 14px;
            border-radius: 8px;
            background-color: ${Colors.white};
            border: 1px solid ${Colors.grey.medium};
            box-shadow: 0px 0px 16px 0px rgba(22,73,103,0.2);
        }
    }

    .avatar {
        width: 120px;
    }
`