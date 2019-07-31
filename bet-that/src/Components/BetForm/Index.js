import React from 'react'
import BetInput from '../BetInput/Index'

import data from "../data"

import './BetForm.css'

class BetForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            odds: data,
            pick: "",
        }
    }
    render(){
        const handleClick =()=>{
            console.log('working')
        }
        return (
            <div className="background">
                <div className="form-container">
                    <p>Choose Side</p>
                    <button onClick={handleClick}>{this.props.location.state.team1} {this.props.location.state.team1Odds}</button>
                    <button>{this.props.location.state.team2} {this.props.location.state.team2Odds}</button>
                    <BetInput/>
                </div>
            </div>
        )
    }
}

export default BetForm