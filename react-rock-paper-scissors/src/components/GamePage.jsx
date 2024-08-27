import React, { useContext } from 'react'
import ParentContext from '../ParentContext'

const GamePage = ({children}) => {

// const check = useContext(ParentContext);

// console.log(check)

  return (
    <div className='flex items-center flex-col justify-center'>
        <h1 className='text-center text-4xl'>ROCK-PAPER-SCISSORS</h1>
      {children}
      </div>
  )
}

export default GamePage