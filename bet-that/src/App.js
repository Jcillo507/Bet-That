import React from 'react';
import './App.css';
// import axios from 'axios'
import ListOfGames from './Components/ListOfGames/ListOfGames'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import apiData from './Components/data'


class App extends React.Component {

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
 