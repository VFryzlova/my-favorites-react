import styled from "styled-components";
import Colors from "../../variables/Colors";

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${Colors.white};

    .header {
        background-color: ${Colors.blue.dark};
        padding: 24px 24px 48px;
        margin-bottom: -32px;
        color: ${Colors.white};
        display: flex;
        align-items: center;

        .arrow-back {
            margin-right: 24px;
            width: 24px;
        }
    }

    .modal-content {
        border-top-left-radius: 32px;
        border-top-right-radius: 32px;
        padding-top: 24px;
        background-color: ${Colors.white};
        position: relative;

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
    }
`