import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase';

export const fetchContactEvent = async ({ queryKey }) => {
    const docRef = doc(db, "contacts", queryKey[1]);
    const docSnap = await getDoc(docRef);
	return docSnap.data()
}