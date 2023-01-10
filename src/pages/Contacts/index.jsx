import { useQuery } from 'react-query'
import { fetchContacts } from '../../fetchers/fetchContacts';
import { Section } from '../../components/Section/styles'
import ContactRow from '../../components/ContactRow';

const Contacts = () => {
	const { isLoading, isError, data} = useQuery('contacts', fetchContacts)

	if (isLoading) return <p>Loading..</p>
	if (isError) return <p>Something went wrong</p>

	return (
		<Section>
		<h2>My contacts</h2>
			{data?.map(contact => <ContactRow key={contact.id} contact={contact} />)}
		</Section>
	)
}

export default Contacts
