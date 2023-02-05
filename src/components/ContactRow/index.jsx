import { Link } from 'react-router-dom';
import { ContactRowEl } from './styles';
import defaultAvatar from '../.././assets/account_circle_black_48dp.svg';

const ContactRow = ({ contact, formSearch, getEventContact }) => {
    return (
        <>
            {formSearch ? (
                <ContactRowEl onClick={() => {
                    getEventContact(contact)}
                    
                    }>
                    <img src={defaultAvatar} className="avatar" />
                    {contact.firstName} {contact.lastName}
                </ContactRowEl>
            ) : (
                <Link to={`/contacts/${contact.id}`} state={contact}>
                    <ContactRowEl>
                        <img src={defaultAvatar} className="avatar" />
                        {contact.firstName} {contact.lastName}
                    </ContactRowEl>
                </Link>
            )}
        </>
    );
};

export default ContactRow;
