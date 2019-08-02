import React from 'react';
import './Game.css';


const Game = props => (
  <div className="game-container">
    <button className="button">
      <div className="team-container">
        <p className="team">{props.team1}</p>
        <p className="team">{props.team2}</p>
      </div>
      {/* <p className="time">{props.time}</p> */}
      <div className="odds-container">
        <p className="team-odds">{props.team1Odds}</p>
        <p className="team-odds">{props.team2Odds}</p>
      </div>
    </button>
  </div>
);


export default Game;
