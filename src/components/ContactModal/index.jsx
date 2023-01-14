import { useQuery } from 'react-query'
import { Section } from '../Section/styles'
import { Modal } from './styles'
import Colors from "../../variables/Colors";
import Icon from '../Icon';
import EventTile from '../EventTile';
import { fetchContactEvents } from '../../fetchers/fetchContactEvents'

const ContactModal = ({contact, onBack}) => {
    const backHandler = () => { onBack() }

    const { isLoading, isError, data: events } = useQuery(['contactEvents', contact.id], fetchContactEvents)

	if (isLoading) return <p>Loading..</p>
	if (isError) return <p>Something went wrong</p>

    return (
        <Modal>
            <i className="arrow-back" onClick={backHandler}><Icon type="arrow-back" size={32} color={Colors.grey.dark} /></i>
            <Section centered>
                <h2>{contact.firstName} {contact.lastName}</h2>
                <p>*21.9.1994, 28 let</p>
            </Section>
            <Section centered>
                <h2>Events</h2>
                {events.map(event => <EventTile key={event.id} event={event} />)}
            </Section>
        </Modal>
    )
}

export default ContactModal