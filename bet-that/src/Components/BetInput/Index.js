import React from 'react'
import './BetInput.css'

class BetInput extends React.Component{
    constructor(){
        super()
        this.state = { 
            pick : "",
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){ 
        this.setState({
            pick: e.target.value
            })
    }
    render(){
        return( 
            <div>
                <label>
                    <span className="input-title">How confident are you?</span>
                    <br></br>
                    <span className="input-title">Enter amount below:</span></label>
                <form>
                    <input type="text"  
                    name="bet-form"  
                    onChange={this.handleChange}/>
                    <h1>
                        <span>
                            <p>Amount you can win:</p>
                        </span>
                        <span>
                            {this.state.pick}
                        </span>
                    </h1>

                </form>
             </div> 
        )
    }
}
export default BetInput
