import { Link } from 'react-router-dom';
import defaultAvatar from '.././assets/account_circle_black_48dp.svg';
import Colors from '../variables/Colors';

const ContactRow = ({ contact, addEvent, headerSearch, getEventContact, handleSetSearchOpen }) => {
    return (
        <>
            {addEvent ? (
                <div
                    style={styles.row}
                    onClick={() => {
                        getEventContact(contact);
                        handleSetSearchOpen(contact);
                    }}
                >
                    <img src={defaultAvatar} style={styles.avatar} />
                    {contact.firstName} {contact.lastName}
                </div>
            ) : (
                <Link to={`/modal/contact/${contact.id}`} state={contact}>
                    <div style={styles.row} onClick={() => headerSearch && handleSetSearchOpen()}>
                        <img src={defaultAvatar} style={styles.avatar} />
                        {contact.firstName} {contact.lastName}
                    </div>
                </Link>
            )}
        </>
    );
};

const styles = {
    row: {
        paddingTop: '6px',
        paddingBottom: '6px',
        display: 'flex',
        alignItems: 'center',
        color: Colors.black
    },
    avatar: {
        paddingRight: '8px',
        width: '42px'
    }
};

export default ContactRow;
