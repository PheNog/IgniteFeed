import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


ReactDOM.createRoot(document.getElementById('root')!).render(////exclamação avisa o TypeScript que realmente existe / ReactDom.createRoot define qual elemento vai ser o raiz da aplicação
  <React.StrictMode>                             
    <App />
  </React.StrictMode>
)
