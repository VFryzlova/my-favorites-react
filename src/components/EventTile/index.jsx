import { useQuery } from 'react-query'
import { fetchContactEvent } from '../../fetchers/fetchContactEvent'
import { EventTileEl } from './styles'

const EventTile = ({event}) => {
    const { isLoading, isError, data: contact } = useQuery(['contactEvent', event.contactId], fetchContactEvent)

	if (isLoading) return <p>Loading..</p>
	if (isError) return <p>Something went wrong</p>

  return (
    <EventTileEl>
        <div>{event.eventName}</div>
        <div>{contact.firstName} {contact.lastName}</div>
    </EventTileEl>
  )
}

export default EventTile