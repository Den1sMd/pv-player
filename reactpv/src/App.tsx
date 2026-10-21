import { useState } from 'react'
import Player from './components/Player'

function App() {
  const [players, setPlayers] = useState(["Riri", "Fifi", "Loulou"])
  const [addplayer, setAddplayer] = useState("");

  return (
    <>
          <div className='container'>
            {players.map((player) => {
              return <Player players={player}></Player>
            })}
          </div>
    </>
  )
}

export default App
