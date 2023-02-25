import { Link } from "react-router-dom"
import { Section } from '../../components/Section/styles';

const Add = ({contacts}) => {

    return (
        <>
            <Section>
                <Link to="/add-contact"><h2>Add contact</h2></Link>
                <Link to="/add-event" contacts={contacts} ><h2>Add event</h2></Link>
            </Section>
        </>
    );
};

export default Add;
