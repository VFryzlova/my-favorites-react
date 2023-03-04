import { useState, useRef, useEffect } from 'react';
import ContactRow from './ContactRow';

const Search = ({ contacts, addEvent, getEventContact }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchOpen, setSearchOpen] = useState(false);
    const searchRef = useRef();

    const results =
        searchTerm &&
        contacts.filter(
            (contact) => contact.firstName.toLowerCase().startsWith(searchTerm.toLocaleLowerCase()) || contact.lastName.toLowerCase().startsWith(searchTerm.toLocaleLowerCase())
        );

    const handleOnBlur = (e) => {
        if (!addEvent) {
            !searchRef.current.contains(e.target) && handleSetSearchOpen();
        }
    };

    const handleSetSearchTerm = (e) => {
        setSearchTerm(e.target.value);
        setSearchOpen(true);
    };

    const handleSetSearchOpen = () => {
        setSearchOpen((open) => {
            open ? false : true;
        });
        setSearchTerm('');
    };

    const handleSetSearchOpenEvent = (contact) => {
        setSearchOpen(false);
        setSearchTerm(`${contact.firstName} ${contact.lastName}`);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOnBlur);
        return () => {
            document.removeEventListener('mousedown', handleOnBlur);
        };
    }, []);

    return (
        <div className="search" ref={searchRef}>
            <input type="search" placeholder="Search.." value={searchTerm} onChange={handleSetSearchTerm} />
            {searchOpen ? (
                <div className="search-dropdown">
                    {results.length > 0 ? (
                        results.map((result) => (
                            <ContactRow
                                key={result.id}
                                handleSetSearchOpen={handleSetSearchOpen}
                                handleSetSearchOpenEvent={handleSetSearchOpenEvent}
                                contact={result}
                                addEvent={addEvent}
                                getEventContact={getEventContact}
                            />
                        ))
                    ) : (
                        <div className="not-found">Not found..</div>
                    )}
                </div>
            ) : null}
        </div>
    );
};

export default Search;
