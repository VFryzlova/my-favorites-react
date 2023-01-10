import { useParams } from "react-router-dom"
import { useQuery } from 'react-query'
import { fetchContact } from '../../fetchers/fetchContact';
import { Section } from '../Section/styles'

const ContactPage = () => {
    const { id } = useParams()
    const { isLoading, isError, data: contact } = useQuery(['contact', id], fetchContact)

    if (isLoading) return <p>Loading..</p>
    if (isError) return <p>Something went wrong</p>

    return (
        <>
        <h2>{contact.firstName} {contact.lastName}</h2>
        <Section>

        </Section>
        </>
    )
}

export default ContactPage