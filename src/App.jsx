import { useState } from 'react'
import italiano from './assets/Images/italiano.jpg'

import './App.css'

function App() {
  const [word, setWord] = useState("")
  const [algo, setAlgo] = useState(true)

  const search = () => {
    if (word !== "") {
      setAlgo(false)
    } else {
      alert('Escribe algo')
    }

  }


  return (
    <div className="App">
      <div>
        <input type="text" value={word} onChange={e => setWord(e.target.value)} />
        <button onClick={() => { search() }}>Search</button>
      </div>
      <img src={italiano} className={algo ? 'hide' : 'a'} alt="" />

    </div>
  )
}

export default App
