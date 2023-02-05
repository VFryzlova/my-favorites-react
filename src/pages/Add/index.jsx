import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../.././firebase';
import { Section } from '../../components/Section/styles';
import Search from '../../components/Search';
import Colors from '../../variables/Colors';
import { ColorsEl, Form } from './styles.js';

const colorArray = Object.values(Colors.eventColors);
const color = colorArray[Math.floor(Math.random() * colorArray.length)];

const Add = ({ contacts, refetch }) => {
    const navigate = useNavigate();
    const [eventContact, setEventContact] = useState();
    const [eventColor, setEventColor] = useState(color);

    const addContact = async (contactformDataObj) => {
        await addDoc(collection(db, 'contacts'), contactformDataObj);
    };

    const addEvent = async (eventFormDataObj) => {
        await addDoc(collection(db, 'events'), eventFormDataObj);
    };

    const getEventContact = (eventContact) => {
        const name = `${eventContact.firstName} ${eventContact.lastName[0]}.`;
        eventContact.name = name;
        setEventContact(eventContact);
    };

    // Event colors
    const handleSetEventColor = (color) => {
        setEventColor(color);
    };

    const selectColor = (e, color) => {
        const selected = document.querySelector('.selected');
        selected ? selected.classList.remove('selected') : '';
        e.target.classList.add('selected');
        handleSetEventColor(color);
    };

    return (
        <>
            <Section>
                <h2>Add contact</h2>
                <Form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const formData = new FormData(e.target);
                        const contactformDataObj = {
                            firstName: formData.get('firstName') ?? '',
                            lastName: formData.get('lastName') ?? ''
                        };
                        addContact(contactformDataObj);
                        refetch();
                        navigate('/contacts');
                    }}
                >
                    <div className="form-control">
                        <label htmlFor="firstName">First name</label>
                        <input id="firstName" name="firstName" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="lastName">Last name</label>
                        <input id="lastName" name="lastName" />
                    </div>
                    <div className="form-control">
                        <button type="submit">Add contact</button>
                    </div>
                </Form>
            </Section>

            <Section>
                <h2>Add event</h2>
                <Form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const formData = new FormData(e.target);
                        const eventFormDataObj = {
                            eventName: formData.get('eventName') ?? '',
                            date: (function () {
                                const date = new Date(formData.get('date'));
                                return date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
                            })(),
                            contact: eventContact.name,
                            contactId: eventContact.id,
                            color: eventColor
                        };
                        addEvent(eventFormDataObj);
                        refetch();
                        navigate('/');
                    }}
                >
                    <div className="form-control">
                        <label htmlFor="eventName">Event name</label>
                        <input id="eventName" name="eventName" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="date">Date</label>
                        <input id="date" name="date" type="date" />
                    </div>
                    <Search contacts={contacts} formSearch={true} getEventContact={getEventContact} />
                    <ColorsEl className="ColorsEl">
                        {colorArray.map((color) => (
                            <div className="color" key={color} style={{ backgroundColor: color }} onClick={(e) => selectColor(e, color)}></div>
                        ))}
                    </ColorsEl>
                    <div className="form-control">
                        <button type="submit">Add event</button>
                    </div>
                </Form>
            </Section>
        </>
    );
};

export default Add;
