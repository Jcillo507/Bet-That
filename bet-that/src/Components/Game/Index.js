import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Game.css'


const Game = (props)=>{
    return(
        <Router>
            <div className ="game-container">
                <Link className="link" to="./BetForm">
                    <button className="button">
                        <div className="team-container">
                            <p className="team">{props.team1}</p>
                            <p className="team">{props.team2}</p>
                        </div>
                        <p className="time">{props.time}</p>
                        <div className="odds-container">
                            <p className="team-odds">{props.team1Odds}</p>
                            <p className="team-odds">{props.team2Odds}</p>
                        </div>
                    </button>
                </Link>
                <Route path="./Components/BetForm"/>
            </div>
         </Router>
    )
}



export default Game