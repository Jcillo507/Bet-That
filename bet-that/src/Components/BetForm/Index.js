import React from 'react'
import BetInput from '../BetInput/Index'

import data from "../data"

import './BetForm.css'

class BetForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            odds: data,
        }
    }

render(){
        return (
            <div className="background">
                <div className="form-container">
                    <p>Choose Side</p>
                    <button>{this.state.odds.data[0].teams[0]} {this.state.odds.data[0].sites[0].odds.h2h[0]}</button>
                    <button>{this.state.odds.data[0].teams[1]}  {this.state.odds.data[0].sites[0].odds.h2h[1]}</button>
                    <BetInput/>
                </div>
            </div>
        )
    }
}

export default BetForm