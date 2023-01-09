import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from "react-query";
import { HeaderEl } from './styles';

const Header = () => {

    const getTodaysDate = () => {
        const date = new Date()
        const test = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear()
        return test
    }

    // Get today's name day
    const { isLoading, isError, data } = useQuery("test", async () => {
        const res = await fetch('https://svatky.adresa.info/json')
            return res.json();
    })
    
    return (
    <HeaderEl>
        <div className="today">
            <Link to="/login">Login</Link>
            <h1 className="hi">Hello!</h1>
            <p className="date">It is {getTodaysDate()}</p>
            <p className="nameDay">{isLoading || isError ? '' : data[0].name + ' has a name-day'} </p>
            <input type="search" name="" id="" placeholder="Search.." />    
        </div>    
    </HeaderEl>
    )
}

export default Header