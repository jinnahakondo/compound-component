import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MenuContextProvider from './context/MenuContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MenuContextProvider>
      <App />
    </MenuContextProvider>
  </StrictMode>,
)
