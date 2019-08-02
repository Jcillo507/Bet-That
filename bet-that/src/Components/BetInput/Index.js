import React from 'react';
import './BetInput.css';

class BetInput extends React.Component {
  constructor() {
    super();
    this.state = {
      pick: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      pick: e.target.value,
    });
  }

  render() {
    const amountWon = Math.round((this.props.userPick - 1) * this.state.pick);
    return (
      <div>
        <label>
          <span className="input-title">How confident are you?</span>
          <br />
          <span className="input-title">Enter amount below:</span>
        </label>
        <form>
          <input
            className="button-input"
            type="text"
            name="bet-form"
            onChange={this.handleChange}
          />
          <h1>
            <span>
              <p>Total Amount Returned:</p>
            </span>
            <span>
              <p>${amountWon}</p>
            </span>
          </h1>
        </form>
      </div>
    );
  }
}
export default BetInput;
