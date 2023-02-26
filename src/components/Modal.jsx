import { useNavigate, Outlet } from 'react-router-dom';
import arrowBack from '.././assets/arrow_back_ios_white_36dp.svg';
import Colors from "../variables/Colors";

const Modal = () => {
    const navigate = useNavigate();

    return (
        <div style={styles.modal}>
            <div style={styles.header}>
                <img src={arrowBack} style={styles.arrowBack} onClick={() => navigate(-1)} />
            </div>
            <div style={styles.modalContent}>
                <Outlet />
            </div>
        </div>
    )
}

const styles = {
    modal: {
        position: 'fixed',
        top: '0',
        maxWidth: '700px',
        width: '100%',
        height: '100%',
        margin: '0 auto',
        backgroundColor: Colors.white
    },
    header: {
        backgroundColor: Colors.blue.dark,
        padding: '24px 24px 48px',
        marginBottom: '-32px',
        color: Colors.white,
        display: 'flex',
        alignItems: 'center'
    },
    arrowBack: {
        marginRight: '24px',
        width: '24px'
    },
    modalContent: {
        borderTopLeftRadius: '32px',
        borderTopRightRadius: '32px',
        paddingTop: '24px',
        backgroundColor: Colors.white,
        position: 'relative',
    }
}

export default Modal