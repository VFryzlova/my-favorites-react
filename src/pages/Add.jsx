import { Link } from 'react-router-dom';
import { Section } from '../styles/section';
import Colors from '../variables/Colors';
import defaultAvatar from '.././assets/account_circle_black_48dp.svg';

const Add = ({ contacts }) => {
    return (
        <Section centered style={styles.wrapper}>
            <Link to="/modal/add/contact">
                <div style={styles.addBox}>
                    <img src={defaultAvatar} />
                    Add contact
                </div>
            </Link>
            <Link to="/modal/add/event" contacts={contacts}>
                <div style={styles.addBox}>
                    <img src={defaultAvatar} />
                    Add event
                </div>
            </Link>
        </Section>
    );
};

const styles = {
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        gap: '32px',
        justifyContent: 'center'
    },
    addBox: {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        width: '160px',
        padding: '12px',
        borderRadius: '16px',
        backgroundColor: Colors.white,
        border: `1px solid ${Colors.grey.medium}`,
        boxShadow: '0px 0px 16px 0px rgba(22,73,103,0.2)',
        fontSize: '16px',
        fontWeight: 'bold'
    }
};

export default Add;
