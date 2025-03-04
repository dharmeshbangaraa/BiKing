import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './components/homepage/Homepage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HomePage />
    {/* <Footer /> */}
  </StrictMode>,
  
)
