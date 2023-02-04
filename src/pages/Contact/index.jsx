import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Section } from '../../components/Section/styles';
import { Modal } from './styles';
import EventTile from '../../components/EventTile';
import defaultAvatar from '../.././assets/account_circle_black_48dp.svg';
import arrowBack from '../.././assets/arrow_back_ios_white_36dp.svg';
import contactMenu from '../.././assets/more_vert_24dp.svg';

const Contact = ({ events }) => {
    const [menuModalOpen, setMenuModalOpen] = useState(false);
    const location = useLocation();
    const contact = location.state;
    const navigate = useNavigate();

    const menuModalOpenHandler = () => {
        menuModalOpen ? setMenuModalOpen(false) : setMenuModalOpen(true);
    };

    const contactEvents= events.filter((event) => event.contactId === contact.id);

    return (
        <Modal>
            <div className="header">
                <img src={arrowBack} className="arrow-back" onClick={() => navigate(-1)} />
                <h3>Detail</h3>
            </div>
            <div className="modal-content">
                <div className="menu-wrapper">
                    <img src={contactMenu} className="menu-icon" onClick={menuModalOpenHandler} />
                    {menuModalOpen && (
                        <div className="menu">
                            <div>Edit contact</div>
                            <div>Add event</div>
                            <div>Delete contact</div>
                        </div>
                    )}
                </div>
                <Section centered>
                    <img src={defaultAvatar} className="avatar" />
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
        </Modal>
    );
};

export default Contact;
