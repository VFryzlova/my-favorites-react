import React from 'react'
import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
            <li><Link to="/add">Add</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/presents">Presents</Link></li>
        </ul>
    </nav>
  )
}

export default Navigation