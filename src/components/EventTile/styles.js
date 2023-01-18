import styled from "styled-components";
import Colors from "../../variables/Colors";

export const EventTileEl = styled.div`
    flex: 0 0 auto;
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    overflow-wrap: break-word;
    border-radius: 16px;
    background-color: ${Colors.white};
    border: 1px solid ${Colors.grey.medium};
    box-shadow: 0px 0px 16px 0px rgba(22,73,103,0.2);
    line-height: 18px;

    .event-contact {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 12px;
        padding: 8px 0;
        color: ${Colors.grey.dark}
    }
`

export const EventTileElVertical = styled(EventTileEl)`
    width: 120px;
    height: 160px;
    flex-direction: column;
    padding: 12px;
    margin: 16px;
`

export const EventTileElHorizontal = styled(EventTileEl)`
    width: 100%;
    max-width: 260px;
    height: 80px;
    padding: 12px 18px;
    margin-bottom: 16px;

    .event-info {
        text-align: left;

        .event-date {
            font-size: 14px;
            color: ${Colors.grey.dark}
        }

        .event-name {
            padding-top: 8px;
        }
    }
`