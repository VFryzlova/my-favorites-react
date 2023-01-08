import { Link, Routes, Route } from 'react-router-dom'
import { GlobalStyles } from "./styles";
import Home from './pages/Home/index';
import Login from './pages/Login/index';
import Contacts from './pages/Contacts/index';
import Add from './pages/Add';
import Events from './pages/Events/index';
import Presents from './pages/Presents/index';
import Navigation from './components/Navigation';

// if user not logged in, show login page
// after login, redirect to /

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
      <GlobalStyles />
      <Link to="/login">Login</Link>
      <Navigation />
    </>
  )
}

export default App
