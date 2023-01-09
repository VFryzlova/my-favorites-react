import { collection, getDocs } from "firebase/firestore";
import { db } from '.././firebase';

export const fetchContacts = async () => {
	const contactsRef = collection(db, 'contacts')
	const data = await getDocs(contactsRef)
	return data.docs.map(doc => ({...doc.data(), id: doc.id}))
}