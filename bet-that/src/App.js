import React from 'react';
import './App.css';
// import axios from 'axios'
// import Game from './Components/Game/Game'
import Data from './data.js'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      odds: Data,  
    }
    console.log(this.state.odds.data[0].teams[0])
    console.log(this.state.odds.data[0].teams[1])
  }
  // const team1 = this.state.odds.data[0].teams[0]
  
  // componentDidMount() {
    //   // console.log(Data)
    // }
    render(){
    return (
      <div className="App">
        {/* <Game value={team1}/> */}
        hello
      </div>
    );

  }
}

export default App;
 