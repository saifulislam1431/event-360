import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "./styles/Nav.css"
import './styles/Header.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='max-w-7xl mx-auto overflow-hidden'>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  </React.StrictMode>
)
