import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';

export const fetchDb = async () => {
	const contactsRef = collection(db, 'contacts')
	const eventsRef = collection(db, 'events')
	const contacts = await getDocs(contactsRef)
	const events = await getDocs(eventsRef)
	const contactsData = contacts.docs.map(doc => ({...doc.data(), id: doc.id}))
	const eventsData = events.docs.map(doc => ({...doc.data(), id: doc.id}))
	return {contactsData, eventsData}
}