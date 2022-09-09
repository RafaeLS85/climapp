import { useEffect, useState } from 'react'
import './App.css'

function App() {  

  const API_key = import.meta.env.VITE_RAPID_API_KEY
  const [data, setData] = useState()
  const lat = 39.31
  const lon = -74.5

 useEffect(() => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': API_key,
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
  };
  
  fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/cities', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
 }, [])

  return (
    <div>
      olis  
    </div>
  )
}

export default App
