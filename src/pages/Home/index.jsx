import { Section } from '../../styles/section';
import ContactRow from '../../components/ContactRow';
import EventTile from '../../components/EventTile';
import { UpcomingEvents } from './styles';

const Home = ({ contacts, events }) => {
    return (
        <>
            <UpcomingEvents>
                <h2>Upcoming events</h2>
                <div className="events-box">
                    {events?.map((event) => (
                        <EventTile vertical key={event.id} event={event} />
                    ))}
                </div>
            </UpcomingEvents>
            <Section>
                <h2>My contacts</h2>
                {contacts?.map((contact) => (
                    <ContactRow key={contact.id} contact={contact} />
                ))}
            </Section>
        </>
    );
};

export default Home;
