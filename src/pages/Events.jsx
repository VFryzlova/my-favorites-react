import { Section } from '../styles/section';
import EventTile from '../components/EventTile';

const Events = ({ events, contacts }) => {
    return (
        <Section>
            <h2>Events</h2>
            {events?.map((event) => (
                <EventTile key={event.id} event={event} contacts={contacts} />
            ))}
        </Section>
    );
};

export default Events;
