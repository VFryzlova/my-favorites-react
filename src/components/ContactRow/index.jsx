import { Link } from "react-router-dom"

const ContactRow = ({contact}) => {
  return (
    <div>
      <Link to={`/contacts/${contact.id}`}>{contact.firstName} {contact.lastName}</Link>
    </div>
  )
}

export default ContactRow