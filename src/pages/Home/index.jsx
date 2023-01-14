import { useQuery } from 'react-query'
import { fetchDb } from '../../fetchers/fetchDb'
import { Section } from '../../components/Section/styles'
import ContactRow from '../../components/ContactRow'
import EventTile from '../../components/EventTile'
import { EventTilesBox } from './styles'

const Home = () => {
	const { isLoading, isError, data } = useQuery('contacts', fetchDb)

	if (isLoading) return <p>Loading..</p>
	if (isError) return <p>Something went wrong</p>

	//console.log(data);

	return (
		<>
		<Section>
			<h2>Upcoming events</h2>
			<EventTilesBox>
				{data.eventsData?.map(event => <EventTile key={event.id} event={event} />)}
			</EventTilesBox>
		</Section>
		<Section>
			<h2>My contacts</h2>
			{data.contactsData?.map(contact => <ContactRow key={contact.id} contact={contact} />)}
		</Section>
		</>
	)
}

export default Home
