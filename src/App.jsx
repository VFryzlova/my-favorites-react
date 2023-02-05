import { Routes, Route } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchDb } from './fetchers/fetchDb';
import Home from './pages/Home/index';
import Login from './pages/Login/index';
import Contacts from './pages/Contacts/index';
import Add from './pages/Add';
import Events from './pages/Events/index';
import Presents from './pages/Presents/index';
import Contact from './pages/Contact/index';
import Navigation from './components/Navigation';
import Header from './components/Header';

// TODO
// style search
// dob of contact will be stored in db formatted
// Event color in db
// TypeScript
// useMutation for adding new itmes to DB
// invalidate data after change
// after adding new contact/event, use data from cache and navigate to contact profile
// lazy load import
// if user not logged in, show login page
// after login, redirect to /

// FIXME
// Scroll to top after clik on menu
// adding events works on second click

const App = () => {
    const { isLoading, isError, data, refetch } = useQuery(['contacts', 'events'], fetchDb);

    if (isLoading) return <p>Loading..</p>;
    if (isError) return <p>Something went wrong</p>;

    return (
        <div className="app">
            <Header contacts={data.contactsData} />
            <main>
                <Routes>
                    <Route path="/" element={<Home contacts={data.contactsData} events={data.eventsData} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/contacts">
                        <Route index element={<Contacts contacts={data.contactsData} />} />
                        <Route path=":id" element={<Contact events={data.eventsData} />} />
                    </Route>
                    <Route path="/add" element={<Add contacts={data.contactsData} refetch={refetch} />} />
                    <Route path="/events" element={<Events events={data.eventsData} />} />
                    <Route path="/presents" element={<Presents />} />
                </Routes>
            </main>
            <Navigation />
        </div>
    );
};

export default App;
