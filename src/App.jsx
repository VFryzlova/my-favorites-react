import { Link, Routes, Route } from 'react-router-dom'
import Home from './components/Home/index';
import Login from './components/Login/index';
import Contacts from './components/Contacts/index';
import Navigation from './components/Navigation';
import Add from './components/Add';
import Events from './components/Events/index';
import Presents from './components/Presents/index';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/add" element={<Add />} />
        <Route path="/events" element={<Events />} />
        <Route path="/presents" element={<Presents />} />
      </Routes>
      <Link to="/login">Login</Link>
      <Navigation />
    </>
  )
}

export default App
