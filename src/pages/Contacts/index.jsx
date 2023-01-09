import { useQuery } from 'react-query'
import { fetchContacts } from '../../fetchers/fetchContacts';
import { Section } from '../../components/Section/styles'
import ContactRow from '../../components/ContactRow';

const Contacts = () => {
	const { isLoading, isError, isFetched, data} = useQuery('contacts', fetchContacts)

	return (
		<Section>
		<h2>My contacts</h2>
		<div className="contact-list">
			{isLoading && <p>Loading..</p>}
			{isError && <p>Something went wrong</p>}
			{isFetched && data.map(contact => <ContactRow key={contact.id} contact={contact} />)}
		</div>
		</Section>
	)
}

export default Contacts
