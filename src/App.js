import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movies from './Components/Movies';


class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="cinema-header">Welcome To Herolo Cinema</div>
      <div className="App-header">
      </div>
      <div className="cinema-footer">Edited By Hilla</div>
      <Movies/>
      </div>
      );
    }
  }
  
  export default App;
  