import { useState } from 'react'
import Allplayers from './components/Allplayers'

function App() {
  const [players, setPlayers] = useState(["Riri", "Fifi", "Loulou"])

  return (
    <>
          <div className='container'>
            {players.map((player) => {
              return <Allplayers key={player} players={player}/>
            })}
          </div>
    </>
  )
}

export default App
