import { Routes, Route } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchDb } from './fetchers/fetchDb';
import Home from './pages/Home/index';
import Login from './pages/Login/index';
import Contacts from './pages/Contacts/index';
import Add from './pages/Add/index';
import AddContact from './pages/AddContact/index';
import AddEvent from './pages/AddEvent/index';
import Events from './pages/Events/index';
import Presents from './pages/Presents/index';
import Contact from './pages/Contact/index';
import Navigation from './components/Navigation';
import Header from './components/Header';

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
                    <Route path="/contacts">
                        <Route index element={<Contacts contacts={contacts} />} />
                        <Route path=":id" element={<Contact events={events} />} />
                    </Route>
                    <Route path="/add" element={<Add contacts={contacts} />} />
                    <Route path="/add-contact" element={<AddContact />} />
                    <Route path="/add-event" element={<AddEvent contacts={contacts} />} />
                    <Route path="/events" element={<Events events={events} />} />
                    <Route path="/presents" element={<Presents />} />
                </Routes>
            </main>
            <Navigation />
        </div>
    );
};

export default App;

// TODO
// prevent adding event without filling all info
// style search
// dob of contact will be stored in db formatted
// TypeScript
// lazy load import
// if user not logged in, show login page
// after login, redirect to /

// FIXME
// Scroll to top after clik on menu
// adding events works on second click
