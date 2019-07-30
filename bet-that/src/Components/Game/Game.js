import React from 'react'



const Game = (props)=>{

    
        return(
            <div className ="game-container">
                <button>
                <p>{props.team1}</p>
                <p>{props.team2}</p>
                <p>{props.time}</p>
                <p>{props.team1Odds}</p>
                <p>{props.team2Odds}</p>
                </button>
              
        </div>
    )
}



export default Game