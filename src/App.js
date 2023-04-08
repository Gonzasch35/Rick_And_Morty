import { useState } from 'react'
import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav.jsx' 


function App () {
  const [characters, setCharacter] = useState([])

  const onSearch = (id) => {
    const URL_BASE = 'https://be-a-rym.up.railway.app/api'
    const KEY = '514202f34f23.3315146edc770c0ffe5b'
    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
    .then(response=>response.json())
    .then(data=>{
      if(data.name && !characters.find((char) => char.id === data.id)){
        setCharacter((oldChars) => [...oldChars, data])
      }else{
        window.alert('No hay personajes con ese ID')
      }
    })
  }

  const onClose = (id) => {
    setCharacter(characters.filter((char) => char.id !== id))
  }


  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <Nav
          onSearch={onSearch}
        />
      </div>
      <div>
        <Cards
          characters={characters}
          onClose={onClose}
        />
      </div>
 
    </div>
  )
}

export default App
