import { EventTileEl, EventTileElVertical, EventTileElHorizontal } from './styles';
import defaultAvatar from '../.././assets/account_circle_black_48dp.svg';

const EventTile = ({ event, vertical }) => {
    return (
        <>
            {vertical ? (
                <EventTileElVertical as={EventTileEl}>
                    <div className="event-date">{event.date.slice(0, -4)}</div>
                    <div className="event-contact">
                        <img src={defaultAvatar} />
                        <div>{event.contact}</div>
                    </div>
                    <div className="event-name">{event.eventName}</div>
                </EventTileElVertical>
            ) : (
                <EventTileElHorizontal as={EventTileEl}>
                    <div className="event-info">
                        <div className="event-date">{event.date.slice(0, -4)}</div>
                        <div className="event-name">{event.eventName}</div>
                    </div>
                    <div className="event-contact">
                        <img src={defaultAvatar} />
                        <div>{event.contact}</div>
                    </div>
                </EventTileElHorizontal>
            )}
        </>
    );
};

export default EventTile;
