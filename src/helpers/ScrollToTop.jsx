import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    
    useEffect(() => {
        document.querySelector('#root').scrollIntoView(
            {
                behavior: 'smooth'
            },
            500
        );
    }, [pathname]);

    return null;
};

export default ScrollToTop;
