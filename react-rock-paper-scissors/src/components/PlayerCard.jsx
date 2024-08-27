import React, { useContext, useEffect, useState } from 'react'
import ParentContext from '../ParentContext'

const PlayerCard = ({player='2'}) => {


    // const randomAnswer = useContext(ParentContext)
    // console.log(randomAnswer)

    const randomAnswer = useContext(ParentContext);
    const localAns = randomAnswer;

//   console.log(randomAnswer)

    let [imageSrc,setImageSrc] = useState('')
    setImageSrc( player == '2' ?  localAns : '4')
//    console.log(imageSrc)

  return (
    <div className='flex flex-row w-1/2' >
    <h2 className='text-4xl'>{`Player ${player}`}</h2>
    <img className='p' src={`src\\assets\\${imageSrc}.png`} alt="" />
    <p className='text-red-200'>Score:</p>
    </div>
  )

}

export default PlayerCard