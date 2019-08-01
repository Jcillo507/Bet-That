import React from 'react'
import BetInput from '../BetInput/Index'

import data from "../data"

import './BetForm.css'

class BetForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            odds: data,
            pickOne: "",
        }
    }
    render(){
        const handleClickOne =()=>{
            this.setState.pickOne = this.props.location.state.team1Odds
            console.log('working bf19',)
        }
        const handleClickTwo = () => {
            console.log('working bg22')
            this.setState.pick = this.props.location.state.team2Odds
        }
        console.log(this.state.pickOne)
        return (
            <div className="background">
                <div className="form-container">
                    <p className="form-text">Choose who you think would win</p>
                    <button className="form-button"onClick={handleClickOne}>
                        <span className="form-team">{this.props.location.state.team1}</span> 
                        <span className="form-odds">{this.props.location.state.team1Odds}</span>
                    </button>
                    <button className="form-button" onClick={handleClickTwo}>
                        <span className="form-team">{this.props.location.state.team2}</span> 
                        <span className="form-odds">{this.props.location.state.team2Odds}</span>
                    </button>
                    <BetInput/>
                </div>
            </div>
        )
    }
}

export default BetForm