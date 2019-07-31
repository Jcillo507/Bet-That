import React from 'react'

class BetInput extends React.Component{
    constructor(){
        super()
        this.state = { 
            betAmount : "",
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){ 
        this.setState({
            betAmount: e.target.value
            })
    }
    render(){
        return( 
            <div>
                <label> Input Bet Amount</label>
                <form>
                    <input type="text"  name="bet-form"  onChange={this.handleChange}/>
                    <h1>{this.state.betAmount}</h1>
                </form>
             </div> 
    )
}
}
export default BetInput


