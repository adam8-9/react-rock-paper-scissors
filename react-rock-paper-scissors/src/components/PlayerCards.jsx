import React, { useContext, useState } from 'react'
import PlayerCard from './PlayerCard'
import ParentContext from '../ParentContext'

const PlayerCards = ({player1_img,player2_img}) => {

  // const check = useContext(ParentContext);


  return (
    <div className="flex w-1/2 mt-5 border-solid">

    <div className='player' >
    <h2>Player 1</h2>
    <img className='player_image' src={`src\\assets\\${player1_img}.png`} alt="" />
    <p className={`player1_score`}>Score:</p>
    </div>

    <div className='player' >
    <h2>Player 2</h2>
    <img className='player_image' src={`src\\assets\\${player2_img}.png`} alt="" />
    <p className={`player2_score`}>Score:</p>
    </div>

    </div>
  )
}

export default PlayerCards


  {/* <PlayerCard  randomAnswer={randomAnswer} player={'1'}/> */}
  // <PlayerCard   player={'2'}/>