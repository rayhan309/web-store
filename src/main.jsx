import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { Router } from './router/Router'
import Loading from './componetns/Loading'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<Loading />}><RouterProvider router={Router}/></Suspense>
  </StrictMode>,
)
