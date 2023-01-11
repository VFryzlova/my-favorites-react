import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useState, useRef, useEffect } from 'react'
import ContactRow from '../../components/ContactRow'
import { fetchNameDay } from '../.././fetchers/fetchNameDay'
import { HeaderEl } from './styles'

const getTodaysDate = () => {
    const date = new Date()
    return date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear()
}

const Header = ({contacts}) => {
	const [searchTerm, setSearchTerm] = useState('');
	const { isLoading, isError, data } = useQuery('nameDay', fetchNameDay)
	const searchRef = useRef()

	const handleOnBlur = (e) => {(!searchRef.current.contains(e.target)) && setSearchTerm('')}
	const clearSearch = () => { setSearchTerm('') }

	useEffect(()=> {
		document.addEventListener('mousedown', handleOnBlur)
		return () => {
			document.removeEventListener('mousedown', handleOnBlur)
		}
	}, [])

	const results = searchTerm && 
		contacts.filter(contact =>
			contact.firstName.toLowerCase().startsWith(searchTerm.toLocaleLowerCase()) || 
			contact.lastName.toLowerCase().startsWith(searchTerm.toLocaleLowerCase())
		)

	return (
		<HeaderEl>
			<Link to="/login">Login</Link>
			<h1>Hello!</h1>
			<p>It is {getTodaysDate()}</p>
			<p className="name-day">
				{isLoading || isError ? '' : data[0].name + ' has a name-day'}
			</p>
			<div className="search" ref={searchRef}>
				<input 
					type="search" 
					placeholder="Search.." 
					value={searchTerm} 
					onChange={e => setSearchTerm(e.target.value)}
					/>
				{searchTerm && 
				<div className="search-dropdown"> 
					{results.length > 0 
					? results.map(result => <ContactRow key={result.id} contact={result} clearSearch={clearSearch}/>) 
					: <div className='not-found'>Not found..</div>}
				</div>}
			</div>

		</HeaderEl>
	)
}

export default Header
