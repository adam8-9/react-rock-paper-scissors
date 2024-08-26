import React, { useEffect, useState } from 'react'

const WinnerResult = ({player1,player2}) => {

  const [winner,setWinner] = useState('')


  //ROCK
  //if p1 = rock and p2 = rock
  //draw

  //if p1 = rock and p2 = scissors
  //p1 wins

  //if p1 = rock and p2 = paper
  //p2 wins

  //PAPER
  //if p1 = paper and p2 = paper
  //draw

  //if p1 = paper and p2 = rock
  //p1 wins

  //if p1 = paper and p2 = scissors
  //p2 wins


  //SCISSORS
  //if p1 = scissors and p2 = scissors
  //draw

  //if p1 = scissors and p2 = paper
  //p1 wins

  //if p1 = scissors and p2 = rock
  //p2 wins

  useEffect(()=>{

      switch(true){
    
        case(player1 == player2):
          setWinner('Draw')
          break;
    
        case(player1 == "rock" && player2 == "scissors"):
          setWinner('Player 1')
          break;
        case(player1 == "rock" && player2 == "paper"):
          setWinner('Player 2')
          break;
    
        case(player1 == "paper" && player2 == "rock"):
          setWinner('Player 1')
          break;
        case(player1 == "paper" && player2 == "scissors"):
          setWinner('Player 2')
          break;
    
        case(player1 == "scissors" && player2 == "paper"):
          setWinner('Player 1')
          break;
        case(player1 == "scissors" && player2 == "rock"):
          setWinner('Player 2')
          break;
    
      }
    
  },[player1,player2])


// winnerLogic(player1,player2)




  return (
    <p className='winner'>
      WINNER:{`${winner}`}
      </p>
  )
}

export default WinnerResult