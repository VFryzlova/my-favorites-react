import React from 'react'
import { Link } from "react-router-dom"
import { Nav } from './styles';

const Navigation = () => {
  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/contacts">Contacts</Link>
      <Link to="/add">Add</Link>
      <Link to="/events">Events</Link>
      <Link to="/presents">Presents</Link>
    </Nav>
  )
}

export default Navigation