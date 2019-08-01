import React from 'react';
import Header from './Components/Base/Header/Index'
import Footer from './Components/Base/Footer/Index'
import Home from './Components/Home/Index'


import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Header/>
        <Home/>
        <Footer/>
      </div>
    );

  }
}

export default App;
 