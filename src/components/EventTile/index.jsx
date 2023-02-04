import { useQuery } from 'react-query';
import { fetchContactEvent } from '../../fetchers/fetchContactEvent';
import { EventTileEl, EventTileElVertical, EventTileElHorizontal } from './styles';
import defaultAvatar from '../.././assets/account_circle_black_48dp.svg';

const EventTile = ({ event, vertical }) => {
    const { isLoading, isError, data: contact } = useQuery(['contactEvent', event.contactId], fetchContactEvent);

    if (isLoading) return <p>Loading..</p>;
    if (isError) return <p>Something went wrong</p>;;

    return (
        <>
            {vertical ? (
                <EventTileElVertical as={EventTileEl}>
                    <div className="event-date">21.1.</div>
                    <div className="event-contact">
                        <img src={defaultAvatar} />
                        <div>
                            {contact.firstName} {contact.lastName[0] + '.'}
                        </div>
                    </div>
                    <div className="event-name">{event.eventName}</div>
                </EventTileElVertical>
            ) : (
                <EventTileElHorizontal as={EventTileEl}>
                    <div className="event-info">
                        <div className="event-date">21.1.</div>
                        <div className="event-name">{event.eventName}</div>
                    </div>
                    <div className="event-contact">
                        <img src={defaultAvatar} />
                        <div>
                            {contact.firstName} {contact.lastName[0] + '.'}
                        </div>
                    </div>
                </EventTileElHorizontal>
            )}
        </>
    );
};

export default EventTile;
