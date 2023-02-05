import { useState, useRef, useEffect } from 'react'
import ContactRow from '../../components/ContactRow'

const Search = ({contacts, formSearch, getEventContact}) => {
    const [searchTerm, setSearchTerm] = useState('')
    const searchRef = useRef()

    const results = searchTerm && 
    contacts.filter(contact =>
        contact.firstName.toLowerCase().startsWith(searchTerm.toLocaleLowerCase()) || 
        contact.lastName.toLowerCase().startsWith(searchTerm.toLocaleLowerCase())
    )

    const handleOnBlur = (e) => {(!searchRef.current.contains(e.target)) && setSearchTerm('')}
	const clearSearch = () => { setSearchTerm('') }

	useEffect(()=> {
		document.addEventListener('mousedown', handleOnBlur)
		return () => {
			document.removeEventListener('mousedown', handleOnBlur)
		}
	}, [])

  return (
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
            ? results.map(result => <ContactRow key={result.id} contact={result} onClick={clearSearch} formSearch={formSearch} getEventContact={getEventContact} />) 
            : <div className='not-found'>Not found..</div>}
        </div>}
    </div>
  )
}

export default Search