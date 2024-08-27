import React, { useContext } from 'react'
import ParentContext from '../ParentContext'

const GamePage = ({children}) => {

// const check = useContext(ParentContext);

// console.log(check)

  return (
    <div className='flex items-center flex-col justify-center w-full'>
        <h1 className='text-center text-4xl pt-4'>ROCK-PAPER-SCISSORS</h1>
      {children}
      </div>
  )
}

export default GamePage