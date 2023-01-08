import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderEl } from './styles';

// TODO: fetch today's name day
const Header = () => {
    
    // Today's date
    const date = new Date(),
    dateFormatted = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear()

    return (
    <HeaderEl>
        <div className="today">
            <Link to="/login">Login</Link>
            <h1 className="hi">Hello!</h1>
            <p className="date">It is {dateFormatted}</p>
            <p className="nameDay">Vendy has a name-day</p>
            <input type="search" name="" id="" placeholder="Search.." />    
        </div>    
    </HeaderEl>
    )
}

export default Header