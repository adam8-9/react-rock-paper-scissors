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
    <div className='player' >
    <h2>{`Player ${player}`}</h2>
    <img className='player_image' src={`src\\assets\\${imageSrc}.png`} alt="" />
    <p className={`player${player}_score`}>Score:</p>
    </div>
  )

}

export default PlayerCard