import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import { HeaderEl } from './styles'

const getTodaysDate = () => {
    const date = new Date()
    return date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear()
}

const fetchNameDay = async () => {
    const res = await fetch('https://svatky.adresa.info/json')
    return res.json()
}

const Header = () => {
	const { isLoading, isError, data } = useQuery('nameDay', fetchNameDay)

	return (
		<HeaderEl>
			<Link to="/login">Login</Link>
			<h1>Hello!</h1>
			<p>It is {getTodaysDate()}</p>
			<p className="name-day">{isLoading || isError ? '' : data[0].name + ' has a name-day'}</p>
			<input type="search" placeholder="Search.." />
		</HeaderEl>
	)
}

export default Header
