import React from 'react'
import Game from '../Game/Game'
import data from "../data"

class ListOfGames extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            odds: data, 
        }   
         
    }
    render(){
        console.log(this.props)
      const games = this.props.games.map(odds =>
        <Game 
        key={odds.index}
        team1={odds.team1}
        team2={odds.team2}
        time={odds.time}
        team1Odds={odds.team1Odds}
        team2Odds={odds.team2Odds}
        />
        )

       return(
           <div>
               <h1>Today's Games</h1>
               <ul>
                  {games}
               {/* <Game 
                    key={this.state.odds.data.length}
                    team1={this.state.odds.}
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