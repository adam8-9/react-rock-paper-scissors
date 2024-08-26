import React, { useContext } from 'react'
import ParentContext from '../ParentContext'

const GamePage = ({children}) => {

// const check = useContext(ParentContext);

// console.log(check)

  return (
    <div className='home'>
        <h1>ROCK-PAPER-SCISSORS</h1>
      {children}
      </div>
  )
}

export default GamePage