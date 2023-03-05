import { Routes, Route } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchDb } from './fetchers/fetchDb';
import Home from './pages/Home';
import Login from './pages/Login';
import Contacts from './pages/Contacts';
import Add from './pages/Add';
import AddContact from './pages/AddContact';
import AddEvent from './pages/AddEvent';
import Events from './pages/Events';
import Presents from './pages/Presents';
import Contact from './pages/Contact';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Modal from './components/Modal';

const App = () => {
    const dbQuery = useQuery({
        queryKey: ['dbData'],
        queryFn: fetchDb
    });

    if (dbQuery.isLoading) return <p>Loading..</p>;
    if (dbQuery.isError) {
        return <pre>{JSON.stringify(dbQuery.error)}</pre>;
    }

    const { contacts, events } = dbQuery.data;

    return (
        <div className="app">
            <Header contacts={contacts} />
            <main>
                <Routes>
                    <Route path="/" element={<Home contacts={contacts} events={events} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/contacts" element={<Contacts contacts={contacts} />} />
                    <Route path="/modal" element={<Modal />}>
                        <Route path="contact/:id" element={<Contact events={events} />} />
                        <Route path="add" element={<Add contacts={contacts} />} />
                        <Route path="add/contact" element={<AddContact />} />
                        <Route path="add/event" element={<AddEvent contacts={contacts} />} />
                    </Route>
                    <Route path="/events" element={<Events events={events} contacts={contacts}/>} />
                    <Route path="/presents" element={<Presents />} />
                </Routes>
            </main>
            <Navigation />
        </div>
    );
};

export default App;

// TODO:
// prevent adding event without filling all info
// style search
// dob of contact will be stored in db formatted
// TypeScript
// lazy load import
// if user not logged in, show login page
// after login, redirect to /

// FIXME
// add event to contact not working
// Scroll to top after clik on menu
// adding events works on second click
