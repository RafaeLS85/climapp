import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// React.StrictMode renders components twice
// https://stackoverflow.com/questions/60618844/react-hooks-useeffect-is-called-twice-even-if-an-empty-array-is-used-as-an-ar

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
)
