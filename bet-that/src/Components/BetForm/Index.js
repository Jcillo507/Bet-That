import React from 'react'
import data from "../data"

class BetForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            odds: data,
        }

    }
render(){
        return (
            <div>
                <button>{this.state.odds.data[0].teams[0]} {this.state.odds.data[0].sites[0].odds.h2h[0]}</button>
                <button>{this.state.odds.data[0].teams[1]}  {this.state.odds.data[0].sites[0].odds.h2h[1]}</button>
            </div>
        )
    }
}




export default BetForm