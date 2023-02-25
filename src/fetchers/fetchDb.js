import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

export const fetchDb = async () => {
    const contactsRef = collection(db, 'contacts');
    const eventsRef = collection(db, 'events');
    const contactsData = await getDocs(contactsRef);
    const eventsData = await getDocs(eventsRef);
    const contacts = contactsData.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
    }));
    const events = eventsData.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
    }));
    return { contacts, events };
};
