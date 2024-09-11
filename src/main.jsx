import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Pokemon } from './Pokemon'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Pokemon/>
  </StrictMode>,
)
