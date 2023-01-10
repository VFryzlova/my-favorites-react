import { Section } from '../Section/styles'
import { Modal } from './styles'

const ContactModal = ({contact, onBack}) => {
    const backHandler = () => { onBack() }

    return (
        <Modal>
            <div onClick={backHandler}>Back</div>
            <h2>{contact.firstName} {contact.lastName}</h2>
            <Section>

            </Section>
        </Modal>
    )
}

export default ContactModal