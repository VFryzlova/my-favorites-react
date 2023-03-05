import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { GlobalStyles } from './styles/globalStyles';
import App from './App';
import ScrollToTop from './helpers/ScrollToTop';

const auth = getAuth();



signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    const user = userCredential.user;

    if (user) {
        const queryClient = new QueryClient({
            defaultOptions: {
                queries: {
                    staleTime: Infinity,
                    cacheTime: Infinity
                }
            }
        });

        ReactDOM.createRoot(document.getElementById('root')).render(
            <React.StrictMode>
                <QueryClientProvider client={queryClient}>
                    <BrowserRouter>
                        <ScrollToTop />
                        <GlobalStyles />
                        <App />
                    </BrowserRouter>
                    {/* <ReactQueryDevtools /> */}
                </QueryClientProvider>
            </React.StrictMode>
        );
    }
});
