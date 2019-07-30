import React from 'react';
import './App.css';
// import axios from 'axios'
import ListOfGames from './Components/ListOfGames/ListOfGames'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import apiData from './Components/data'


class App extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     odds: Data,  
  //     team1: Data.data[0].teams[0]
  //   }
  //   console.log(this.state.odds.data[0].teams[0])
  //   console.log(this.state.odds.data[0].teams[1])
  // }
    render(){
      const{data} = apiData
    return (
      <div className="App">
        <Header/>
        <ListOfGames games={data}/>
        <Footer/>
      </div>
    );

  }
}

export default App;
 