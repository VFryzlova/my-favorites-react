import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { db } from '../firebase';
import { doc, deleteDoc } from 'firebase/firestore';
import { Section } from '../styles/section';
import EventTile from '../components/EventTile';
import defaultAvatar from '.././assets/account_circle_black_48dp.svg';
import contactMenu from '.././assets/more_vert_24dp.svg';
import Colors from '../variables/Colors';

const Contact = ({ events }) => {
    const [menuModalOpen, setMenuModalOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const contact = location.state;

    const menuModalOpenHandler = () => {
        menuModalOpen ? setMenuModalOpen(false) : setMenuModalOpen(true);
    };

    const queryClient = useQueryClient();

    const deleteContact = useMutation({
        mutationFn: (contactRef) => {
            deleteDoc(doc(db, 'contacts', contactRef));
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['dbData']);
            navigate('/');
        }
    });

    const goToAddEventPage = () => {
        navigate('/modal/add/event', { state: contact });
    };

    const contactEvents = events.filter((event) => event.contactId === contact.id);

    return (
        <div>
            <div style={styles.menu}>
                <img src={contactMenu} onClick={menuModalOpenHandler} />
                {menuModalOpen && (
                    <div style={styles.menu.content}>
                        <div>Edit contact</div>
                        <div onClick={() => goToAddEventPage()}>Add event</div>
                        <div onClick={() => deleteContact.mutate(contact.id)}>Delete contact</div>
                    </div>
                )}
            </div>
            <Section centered>
                <img src={defaultAvatar} style={styles.avatar} />
                <h2>
                    {contact.firstName} {contact.lastName}
                </h2>
                <p>*21.9.1994, 28 let</p>
            </Section>
            <Section centered>
                <h2>Events</h2>
                {contactEvents.map((event) => (
                    <EventTile key={event.id} event={event} />
                ))}
            </Section>
        </div>
    );
};

const styles = {
    avatar: {
        width: '120px'
    },
    menu: {
        position: 'absolute',
        right: '12px',
        top: '24px',

        content: {
            position: 'absolute',
            right: '12px',
            top: '24px',
            padding: '24px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            whiteSpace: 'nowrap',
            fontSize: '14px',
            borderRadius: '8px',
            backgroundColor: Colors.white,
            border: `1px solid ${Colors.grey.medium}`,
            boxShadow: '0px 0px 16px 0px rgba(22,73,103,0.2)'
        }
    }
};

export default Contact;
