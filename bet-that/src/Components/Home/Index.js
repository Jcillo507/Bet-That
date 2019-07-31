import React from 'react'
import { Route, Link } from "react-router-dom";

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
                            <h2> Welcome </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    
                            <div className="path-container">
                            <Link to="/ListOfGames">
                                <button className="path-button">Todays Odds</button>    
                            </Link>
                            </div>
                    </div>
                } /> 
                    <Route path="/ListOfGames" component={() => <ListOfGames games={data} />} />
                </div>
            </div>
    )
}
}
export default Home