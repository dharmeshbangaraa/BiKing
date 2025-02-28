import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './components/homepage/Homepage'
import Footer from './components/footer/Footer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HomePage />
    <Footer />
  </StrictMode>,
  
)
