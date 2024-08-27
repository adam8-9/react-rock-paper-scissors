import React, { useContext, useState } from 'react'
import PlayerCard from './PlayerCard'
import ParentContext from '../ParentContext'

const PlayerCards = ({player1_img,player2_img}) => {

  // const check = useContext(ParentContext);


  return (
    <div className="flex justify-center w-full mt-5 ">

    <div className='border-2 border-solid border-black mr-2.5' >
    <h2 className='text-center pt-2'>Player 1</h2>
    <img className='h-52 w-52 p-5' src={`src\\assets\\${player1_img}.png`} alt="" />
    <p className="text-center pb-2">Score:</p>
    </div>

    <div className='border-2 border-solid border-black ml-2.5 ' >
    <h2 className='text-center pt-2'>Player 2</h2>
    <img className='h-52 w-52 p-5' src={`src\\assets\\${player2_img}.png`} alt="" />
    <p className="text-center pb-2">Score:</p>
    </div>

    </div>
  )
}

export default PlayerCards


  {/* <PlayerCard  randomAnswer={randomAnswer} player={'1'}/> */}
  // <PlayerCard   player={'2'}/>