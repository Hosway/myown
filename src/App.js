import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import First from './Components/First'
import Second from './Components/Second'

class App extends Component {
  render() {
    return (
      <div className="App">
       <img src={logo} className="App-logo" alt="logo" />

       <First />

       <div>
         <h2>h2 heading, second div</h2>
       </div>

       <Second />
      </div>
    );
  }
}

export default App;
