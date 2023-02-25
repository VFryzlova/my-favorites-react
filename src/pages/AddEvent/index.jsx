import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../.././firebase';
import { Section } from '../../styles/section';
import Search from '../../components/Search';
import Colors from '../../variables/Colors';
import { ColorsEl, Form } from './styles.js';

const colorArray = Object.values(Colors.eventColors);
const color = colorArray[Math.floor(Math.random() * colorArray.length)];

const AddEvent = ({ contacts }) => {
    const navigate = useNavigate();
    const [eventContact, setEventContact] = useState();
    const [eventColor, setEventColor] = useState(color);

    const queryClient = useQueryClient();

    const eventMutation = useMutation({
        mutationFn: (updatedData) => {
            addDoc(collection(db, 'events'), updatedData);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['dbData']);
        }
    });

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
                        eventMutation.mutate(eventFormDataObj);
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

export default AddEvent;
