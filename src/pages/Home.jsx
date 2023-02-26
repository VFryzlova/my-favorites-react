import { Section } from '../styles/section';
import ContactRow from '../components/ContactRow';
import EventTile from '../components/EventTile';

const Home = ({ contacts, events }) => {
    return (
        <>
            <h2 style={styles.title}>Upcoming events</h2>
            <div style={styles.events}>
                {events?.map((event) => (
                    <EventTile vertical key={event.id} event={event} />
                ))}
            </div>
            <Section>
                <h2>My contacts</h2>
                {contacts?.map((contact) => (
                    <ContactRow key={contact.id} contact={contact} />
                ))}
            </Section>
        </>
    );
};

const styles = {
    title: {
        padding: '0 32px'
    },
    events: {
        display: 'flex',
        overflowX: 'auto',
        padding: '0 16px',
        marginBottom: '24px',
    }
}

export default Home;
