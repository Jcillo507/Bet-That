
import React from 'react';
import BetInput from '../BetInput/Index';

import './BetForm.css';

class BetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // odds: ApiData,
      userPick: [],
    };
  }

  render() {
    const handleClickOne = () => {
      this.setState({
        userPick: this.props.location.state.team1Odds,
      });
    
    };
    const handleClickTwo = () => {
      this.setState({
        userPick: this.props.location.state.team2Odds,
      });
    };
    return (
      <div className="background">
        <div className="form-container">
          <p className="form-title-text">Choose who you think would win</p>
          <p className="form-prompt ">Enter the amount you would wager?</p>
          <button className="form-button" onClick={handleClickOne}>
            <span className="form-team">{this.props.location.state.team1}</span>
            <span className="form-odds">{(this.props.location.state.team1Odds).toFixed(4)}</span>
          </button>
          <button className="form-button" onClick={handleClickTwo}>
            <span className="form-team">{this.props.location.state.team2}</span>
            <span className="form-odds">{(this.props.location.state.team2Odds).toFixed(4)}</span>
          </button>
          <BetInput
            userPick={this.state.userPick}
          />
        </div>
      </div>
    );
  }
}

export default BetForm;
