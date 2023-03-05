import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyBBqdhJtSEJgnrws4OHG_xBXlVLRHIrDro',
    authDomain: 'my-favorites-react.firebaseapp.com',
    projectId: 'my-favorites-react',
    storageBucket: 'my-favorites-react.appspot.com',
    messagingSenderId: '3609965070',
    appId: '1:3609965070:web:c637f125c7847e576e425f'
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
