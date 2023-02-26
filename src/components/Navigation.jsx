import React from 'react';
import { Link } from 'react-router-dom';
import Colors from '../variables/Colors';
import Icon from './Icon';

const Navigation = () => {
    const iconSize = 32;
    const iconColor = Colors.white;

    return (
        <nav style={styles.nav}>
            <Link to="/" style={styles.nav.a}>
                <Icon type="home" size={iconSize} color={iconColor} />
            </Link>
            <Link to="/contacts" style={styles.nav.a}>
                <Icon type="contacts" size={iconSize} color={iconColor} />
            </Link>
            <Link to="/modal/add" style={styles.nav.a}>
                <Icon type="add" size={52} color={Colors.green} />
            </Link>
            <Link to="/events" style={styles.nav.a}>
                <Icon type="events" size={iconSize} color={iconColor} />
            </Link>
            <Link to="/presents" style={styles.nav.a}>
                <Icon type="presents" size={iconSize} color={iconColor} />
            </Link>
        </nav>
    );
};

const styles = {
    nav: {
        position: 'fixed',
        bottom: '0',
        width: '100%',
        maxWidth: '700px',
        background: Colors.blue.dark,
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 12px',

        a: {
            color: Colors.white,
            lineHeight: '100%',
            padding: '8px',
            display: 'flex',
            alignItems: 'center'
        }
    }
};

export default Navigation;
