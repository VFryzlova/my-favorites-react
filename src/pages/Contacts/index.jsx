import { Section } from '../../components/Section/styles'
import ContactRow from '../../components/ContactRow';

const Contacts = ({contacts}) => {

	return (
		<Section>
			<h2>My contacts</h2>
			{contacts?.map(contact => <ContactRow key={contact.id} contact={contact} />)}
		</Section>
	)
}

export default Contacts
