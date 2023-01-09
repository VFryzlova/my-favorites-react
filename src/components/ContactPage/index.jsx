import { useParams } from "react-router-dom"

const ContactPage = () => {
    const {id} = useParams()

    return (
        <div>ContactPage {id}</div>
    )
}

export default ContactPage