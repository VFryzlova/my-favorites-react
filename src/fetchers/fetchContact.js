import { getDoc, doc } from "firebase/firestore";
import { db } from '.././firebase';

export const fetchContact = async ({ queryKey }) => {
	const contactRef = doc(db, 'contacts', queryKey[1])
	const contact = await getDoc(contactRef)
	return contact.data()
}