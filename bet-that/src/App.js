import React from 'react';
// import axios from 'axios'
import Header from './Components/Base/Header/Index'
import Footer from './Components/Base/Footer/Index'
import Home from './Components/Home/Index'
// import BetForm from './Components/BetForm/Index'

import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Header/>
        {/* <BetForm/> */}
        <Home/>
        <Footer/>
      </div>
    );

  }
}

export default App;
 