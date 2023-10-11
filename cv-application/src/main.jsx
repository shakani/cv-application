import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Biodata from './components/Biodata.jsx'
import Education from './components/Education.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Biodata />
    <Education />
  </React.StrictMode>,
)
