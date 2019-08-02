import React from 'react'
import { Route, Link } from "react-router-dom";
import BetForm from '../BetForm/Index'
import ListOfGames from '../ListOfGames/Index.js'
import { ApiData } from '../data'

import './Home.css'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        this.getData()
    }
    
    getData = async () => {
        const data = await ApiData()
        this.setState({ data: data.data })
    }
    render() {
        return (
            <div className="background">
                <div className="bg-container">
                    <Route exact path="/" component={() =>
                        <div>
                            <div className="text-container">
                                <h2 className="home-title"> Welcome to Bet That</h2>
                                <p className="home-text">Bet That is a betting calculator to see the returns on the uncomimg Baseball Games</p>
                                <p className="home-text">Click the button below and check out upcoming games odds!!!</p>
                            </div>
                            <div className="path-container">
                                <Link to="/list-of-games">
                                    <button className="path-button">Todays Odds</button>
                                </Link>
                            </div>
                        </div>
                    } />
                    <Route path="/list-of-games" component={() => <ListOfGames games={this.state.data} />} />
                    <Route path="/bet-form" component={(props) => <BetForm {...props} />} />
                </div>
            </div>
        )
    }
}
export default Home