import { useState } from 'react';
import ContactModal from '../../components/ContactModal';
import { ContactRowEl } from './styles';

const ContactRow = ({contact, clearSearch}) => {
  const [modalOpen, setModalOpen] = useState(false)

  const openModalHandler = () => { setModalOpen(true) }

  const closeModalHandler = () => { 
    setModalOpen(false) 
    clearSearch && clearSearch()
  }

  return (
    <>
    <ContactRowEl onClick={openModalHandler}>{contact.firstName} {contact.lastName}</ContactRowEl>
    {modalOpen && <ContactModal contact={contact} onBack={closeModalHandler}/>}
    </>
  )
}

export default ContactRow