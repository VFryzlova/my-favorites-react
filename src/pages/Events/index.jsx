import { useQuery } from 'react-query'
import { fetchDb } from '../../fetchers/fetchDb'
import { Section } from '../../components/Section/styles'
import EventTile from '../../components/EventTile'

const Events = () => {
  const { isLoading, isError, data } = useQuery('events', fetchDb)

	if (isLoading) return <p>Loading..</p>
	if (isError) return <p>Something went wrong</p>

  return (
    <>
    <Section>
      <h2>Events</h2>
      {data.eventsData?.map(event => <EventTile key={event.id} event={event} />)}
    </Section>
    </>
  )
}

export default Events