import { useState } from 'react'
import PlayerCards from './components/PlayerCards'
import PlayerOptions from './components/PlayerOptions'
import WinnerResult from './components/WinnerResult'
import GamePage from './components/GamePage'
import ParentContext from './ParentContext'


function App() {
  const [player1_img,setPlayer1_img] = useState("paper")
  const [player2_img,setPlayer2_img] = useState("rock")




  return (
    // <ParentContext.Provider value={randomAnswer}>
      <GamePage>
        <PlayerCards 
          player1_img={player1_img}
          player2_img={player2_img}
        />
        <PlayerOptions 
        setPlayer1={setPlayer1_img}
        setPlayer2={setPlayer2_img}
        />
        <WinnerResult
           player1={player1_img}
           player2={player2_img}
        />
      </GamePage>
    // </ParentContext.Provider>
  )


}

export default App
