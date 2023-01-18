import { useState } from 'react';
import ContactModal from '../../components/ContactModal';
import { ContactRowEl } from './styles';
import defaultAvatar from '../.././assets/account_circle_black_48dp.svg'

const ContactRow = ({contact, clearSearch}) => {
  const [modalOpen, setModalOpen] = useState(false)

  const openModalHandler = () => { setModalOpen(true) }

  const closeModalHandler = () => { 
    setModalOpen(false) 
    clearSearch && clearSearch()
  }

  return (
    <>
    <ContactRowEl onClick={openModalHandler}>
      <img src={defaultAvatar} className="avatar" />
      {contact.firstName} {contact.lastName}
    </ContactRowEl>
    {modalOpen && <ContactModal contact={contact} onBack={closeModalHandler}/>}
    </>
  )
}

export default ContactRow