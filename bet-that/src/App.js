import React from 'react';
// import axios from 'axios'
import Header from './Components/Base/Header/Index'
import Footer from './Components/Base/Footer/Index'
// import BetForm from './Components/BetForm/Index'
import Home from './Components/Home/Index'


import './App.css';

class App extends React.Component {
  render(){
    // const{data} = apiData
    return (
      <div className="App">
        <Header/>
        <Home/>
        {/* <BetForm />  */}
        <Footer/>
      </div>
    );

  }
}

export default App;
 