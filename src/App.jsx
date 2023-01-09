import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/index';
import Login from './pages/Login/index';
import Contacts from './pages/Contacts/index';
import Add from './pages/Add';
import Events from './pages/Events/index';
import Presents from './pages/Presents/index';
import Navigation from './components/Navigation';
import Header from './components/Header';

// if user not logged in, show login page
// after login, redirect to /

const App = () => {
  return (
    <div className='app'>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Contacts />} />
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
