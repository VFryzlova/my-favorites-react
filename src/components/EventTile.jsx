import { useNavigate } from 'react-router-dom';
import defaultAvatar from '.././assets/account_circle_black_48dp.svg';
import Colors from '../variables/Colors';

const EventTile = ({ event, contacts, vertical }) => {
    const navigate = useNavigate();

    const goToContact = () => {
        const contact = contacts.find((contact) => contact.id === event.contactId);
        navigate(`/modal/contact/${contact}`, { state: contact });
    };

    return (
        <>
            {vertical ? (
                // Vertical Tile (homepage)
                <div style={{ ...styles.tile, ...styles.vertical }} color={event.color} onClick={goToContact}>
                    <div style={{ ...styles.vertical.line, backgroundColor: event.color }}></div>
                    <div style={styles.date}>{event.date.slice(0, -4)}</div>
                    <div style={styles.contact}>
                        <img src={defaultAvatar} />
                        <div>{event.contact}</div>
                    </div>
                    <div>{event.eventName}</div>
                </div>
            ) : (
                // Horizontal Tile (events page)
                <div style={{ ...styles.tile, ...styles.horizontal }} color={event.color} onClick={goToContact}>
                    <div style={{ ...styles.horizontal.line, backgroundColor: event.color }}></div>
                    <div style={styles.info}>
                        <div style={styles.date}>{event.date.slice(0, -4)}</div>
                        <div>{event.eventName}</div>
                    </div>
                    <div style={styles.contact}>
                        <img src={defaultAvatar} />
                        <div>{event.contact}</div>
                    </div>
                </div>
            )}
        </>
    );
};

const styles = {
    tile: {
        flex: '0 0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        textAlign: 'center',
        alignItems: 'center',
        overflowWrap: 'break-word',
        borderRadius: '16px',
        backgroundColor: Colors.white,
        border: `1px solid ${Colors.grey.medium}`,
        boxShadow: '0px 0px 16px 0px rgba(22,73,103,0.2)',
        lineHeight: '18px'
    },
    contact: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '12px',
        padding: '8px 0',
        color: Colors.grey.dark
    },
    horizontal: {
        width: '100%',
        maxWidth: '260px',
        height: '80px',
        padding: '12px',
        marginBottom: '16px',

        line: {
            height: '80%',
            width: '3px',
            borderRadius: '100px',
            marginRight: '12px'
        }
    },
    vertical: {
        width: '120px',
        flexDirection: 'column',
        padding: '12px',
        margin: '16px',

        line: {
            height: '3px',
            width: '60%',
            borderRadius: '100px',
            marginBottom: '12px'
        }
    },
    info: {
        textAlign: 'left',
        flex: '1'
    },
    date: {
        fontSize: '14px',
        color: Colors.grey.dark
    }
};

export default EventTile;
