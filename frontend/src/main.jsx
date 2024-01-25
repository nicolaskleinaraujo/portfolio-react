import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Language Provider
import { LangProvider } from './context/LangContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LangContextProvider>
      <App />
    </LangContextProvider>
  </React.StrictMode>,
)
