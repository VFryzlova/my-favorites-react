import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider, QueryClient } from 'react-query'
import { GlobalStyles } from "./globalStyles";
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
          <GlobalStyles />
          <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
)
