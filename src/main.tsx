import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'   // 改成引入 globals.css
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
