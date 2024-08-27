import React, { useEffect } from 'react'
import PlayerOption from './PlayerOption'
import { stringify } from 'postcss'

const PlayerOptions = ({setPlayer1,setPlayer2}) => {

    // when option is clicked
    // take the class/id of clicked item and store in var
    // genereate random selection for computer with sepearate function 
    //use switch to layout all the different combinations for who wins

    const randomChoice = ()=>{
      let randomAnswer = ['rock','paper','scissors']
      let randomNum = Math.floor(Math.random() * 3)

      console.log(randomAnswer[randomNum]) 
     // return randomAnswer[randomNum]
     setPlayer2(randomAnswer[randomNum])
    }

  
    function optionClicked(e){
          let option_id = e.target.parentElement.id || e.target.id

          setPlayer1(option_id)
          console.log(e)

          randomChoice()
    }

    



  return (
    <div className='player_options'>
          
      <div id="rock" className="option" onClick={optionClicked}>
      <h3 className="title">rock</h3 >
      <img className='item_img' src={`src\\assets\\rock.png`} alt="" />
      </div>

      <div id="paper" className="option" onClick={optionClicked} >
      <h3 className="title">paper</h3>
      <img className='item_img' src={`src\\assets\\paper.png`} alt="" />
      </div>

      <div id="scissors" className="option" onClick={optionClicked} >
      <h3 className="title">scissors</h3>
      <img className='item_img' src={`src\\assets\\scissors.png`} alt="" />
      </div>
         
    </div>
  )
}

//when button is clicked check button id (console log it )

// <PlayerOption option={'rock'}/>
// <PlayerOption option={'paper'}/>
// <PlayerOption option={'scissors'}/>


export default PlayerOptions

