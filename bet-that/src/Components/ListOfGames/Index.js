import React from 'react'
import { Link } from "react-router-dom";

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
        const games = this.props.games.map(game=>{
            return ( 
                <Link className="link" to={{
                    pathname: '/bet-form',
                    state: {
                        team1 : game.teams[0] ,
                        team2 :  game.teams[1] ,
                        team1Odds : game.sites[0].odds.h2h[0] ,
                        team2Odds: game.sites[0].odds.h2h[1] 
                    }
                }}>
                < Game
                    key={game.commence_time }
                    team1 = { game.teams[0] }
                    team2 = { game.teams[1] }
                    time = { game.commence_time }
                    team1Odds = { game.sites[0].odds.h2h[0] }
                    team2Odds={game.sites[0].odds.h2h[1]}
                />
                </Link>
                )
            }
            )
            return(
                <div className="background">
                    <div className="game-container">
                        <h1 className="game-title">Today's Games</h1>
                    <ul>
                        {games}   
                    </ul>
                    </div>
                </div>
            )
    }
}

export default ListOfGames
