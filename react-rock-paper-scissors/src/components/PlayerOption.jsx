import React from 'react'

const PlayerOption = ({option}) => {

    // let answerArray = ['rock','paper','scissors']
    let [randomAnswer,setRandomAsnwer] = ''
    // let []

    const randomChoice = ()=>{
        let randomAnswer = ['rock','paper','scissors']
        let randomNum = Math.floor(Math.random() * 3)
         console.log(randomAnswer[randomNum])
        return randomAnswer[randomNum]
    }
   // setRandomAnswer(randomChoice())


  return (
    <div className="option" onClick={()=> randomChoice()} >
    <h3 className="title">{option}</h3>
    <img className='item_img' src={`src\\assets\\${option}.png`} alt="" />
  </div>
  )
}

export default PlayerOption