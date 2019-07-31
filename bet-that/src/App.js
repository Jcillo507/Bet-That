import React from 'react';
import './App.css';
// import axios from 'axios'
import ListOfGames from './Components/ListOfGames/Index'
import Header from './Components/Header/Index'
import Footer from './Components/Footer/Index'
import BetForm from './Components/BetForm/Index'
import apiData from './Components/data'


class App extends React.Component {
  render(){
    const{data} = apiData
    return (
      <div className="App">
        <Header/>
        <ListOfGames games={data}/>
        <BetForm />
        <Footer/>
      </div>
    );

  }
}

export default App;
 