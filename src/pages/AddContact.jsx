import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { Section } from '../styles/section';
import { Form } from '../styles/form';

const AddContact = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const contactMutation = useMutation({
        mutationFn: (updatedData) => {
            addDoc(collection(db, 'contacts'), updatedData);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['dbData']);
        }
    });

    return (
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
                    contactMutation.mutate(contactformDataObj);
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
    );
};

export default AddContact;
