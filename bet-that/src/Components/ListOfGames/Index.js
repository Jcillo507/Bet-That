import React from 'react'
import Game from '../Game/Index'

import './ListOfGames.css'
import data from "../data"

class ListOfGames extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            odds: data, 
        }   
         
    }
    render(){
        // console.log(this.props)
      const games = this.props.games.map(game=>{
       return ( 
            < Game
               key={game.commence_time }
                team1 = { game.teams[0] }
                team2 = { game.teams[1] }
                time = { game.commence_time }
                team1Odds = { game.sites[0].odds.h2h[0] }
                team2Odds={game.sites[0].odds.h2h[1]}
                />
            )
    }
        )

       return(
           <div className="background">
               <h1 className="game-title">Today's Games</h1>
               <ul>
                  {games}
               {/* <Game 
                    key={this.state.odds.data.length}
                    team1={this.state.odds.data[0].teams[0]}
                    team2={this.state.odds.data[0].teams[1]}
                    time={this.state.odds.data[0].commence_time}
                    team1Odds={this.state.odds.data[0].sites[0].odds.h2h[0]}
                    team2Odds={this.state.odds.data[0].sites[0].odds.h2h[1]}
               /> */}
                   
               </ul>
           </div>
       )
    }
}



export default ListOfGames