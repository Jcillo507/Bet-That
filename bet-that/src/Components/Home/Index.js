import React from 'react'
import { Route, Link } from "react-router-dom";
import BetForm from '../BetForm/Index'
import ListOfGames from '../ListOfGames/Index.js'
import apiData from '../data'

import './Home.css'

class Home extends React.Component{
    render(){
    const{data} = apiData

        return(
            <div className="background">
                <div className="bg-container">
                    <Route exact path="/" component={() =>
                        <div> 
                            <div className="text-container">
                            <h2 className="home-title"> Welcome to Bet That</h2>
                            <p className="home-text">Bet That helps you determine how much you can win from a bet with the current odds.</p>
                            <p className="home-text">Click the button below and check out today's odds!!!</p>
                            </div>
                    
                            <div className="path-container">
                            <Link to="/list-of-games">
                                <button className="path-button">Todays Odds</button>    
                            </Link>
                            </div>
                    </div>
                } /> 
                    <Route path="/list-of-games" component={() => <ListOfGames games={data} />} />
                    <Route path="/bet-form" component={(props) => <BetForm {...props}/>} />
                </div>
            </div>
    )
}
}
export default Home