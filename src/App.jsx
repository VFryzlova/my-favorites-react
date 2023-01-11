import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query'
import Home from './pages/Home/index';
import Login from './pages/Login/index';
import Contacts from './pages/Contacts/index';
import Add from './pages/Add';
import Events from './pages/Events/index';
import Presents from './pages/Presents/index';
import Navigation from './components/Navigation';
import Header from './components/Header';
import { fetchContacts } from './fetchers/fetchContacts';

// if user not logged in, show login page
// after login, redirect to /

const App = () => {
  const [contacts, setContacts] = useState([])
  const { isLoading, isError } = useQuery('contacts', fetchContacts, { onSuccess: setContacts})

  if (isLoading) return <p>Loading..</p>
	if (isError) return <p>Something went wrong</p>

  return (
    <div className='app'>
      <Header contacts={contacts}  />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Contacts contacts={contacts} />} />
          <Route path="/add" element={<Add />} />
          <Route path="/events" element={<Events />} />
          <Route path="/presents" element={<Presents />} />
        </Routes>
      </main>
      <Navigation />
    </div>
  )
}

export default App
