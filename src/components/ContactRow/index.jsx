import { useState } from 'react';
import ContactModal from '../../components/ContactModal';

const ContactRow = ({contact}) => {
  const [modalOpen, setModalOpen] = useState(false)
  const openModalHandler = () => { setModalOpen(true) }
  const closeModalHandler = () => { setModalOpen(false) }

  return (
    <>
    <div onClick={openModalHandler}>{contact.firstName} {contact.lastName}</div>
    {modalOpen && <ContactModal contact={contact} onBack={closeModalHandler}/>}
    </>
  )
}

export default ContactRow