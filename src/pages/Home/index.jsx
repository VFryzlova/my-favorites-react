import { useQuery } from 'react-query'
import { fetchContacts } from '../../fetchers/fetchContacts'
import { Section } from '../../components/Section/styles'
import ContactRow from '../../components/ContactRow'

const Home = () => {
	const { isLoading, isError, isFetched, data } = useQuery('contacts', fetchContacts)

	if (isLoading) return <p>Loading..</p>
	if (isError) return <p>Something went wrong</p>

	return (
		<>
		<Section>
			<h2>Upcoming events</h2>
		</Section>
		<Section>
			<h2>My contacts</h2>
			{data?.map(contact => <ContactRow key={contact.id} contact={contact} />)}
		</Section>
		</>
	)
}

export default Home
