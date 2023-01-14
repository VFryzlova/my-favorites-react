import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase';

export const fetchContactEvents = async ({ queryKey }) => {
    const q = query(collection(db, "events"), where("contactId", "==", queryKey[1]));
    const querySnapshot = await getDocs(q);
    const eventsData = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
	return eventsData
}