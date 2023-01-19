import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query'
import Home from './pages/Home/index';
import Login from './pages/Login/index';
import Contacts from './pages/Contacts/index';
import Add from './pages/Add';
import Events from './pages/Events/index';
import Presents from './pages/Presents/index';
import Contact from './pages/Contact/index';
import Navigation from './components/Navigation';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop/index';
import { fetchDb } from './fetchers/fetchDb';

// if user not logged in, show login page
// after login, redirect to /

// TODO: 
// - after going back from contact page, scroll to top
// - correct path to contact page from contacts page
// - caching

const App = () => {
  const [data, setData] = useState([])
  const { isLoading, isError } = useQuery('contacts', fetchDb, { onSuccess: setData})

  if (isLoading) return <p>Loading..</p>
	if (isError) return <p>Something went wrong</p>

  return (
    <div className='app'>
      <Header contacts={data.contactsData}  />
      <main>
        <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contacts" element={<Contacts contacts={data.contactsData} />} />
            <Route path="/:id" element={<Contact />} />
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
