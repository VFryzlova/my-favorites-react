import { Link } from "react-router-dom"

const ContactRow = ({contact}) => {
  return (
    <Link to={`/contacts/${contact.id}`}>{contact.firstName} {contact.lastName}</Link>
  )
}

export default ContactRow