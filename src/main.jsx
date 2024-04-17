import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MyContext from './context/MyContext.jsx'
import './styles/routes/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyContext>
      <App />
    </MyContext>
  </React.StrictMode>,
)
