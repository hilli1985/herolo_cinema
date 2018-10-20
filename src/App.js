import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movies from './Components/Movies';
import AddMovie from './Components/AddMovie';



class App extends Component {
  
  render() {
    return (
      <div className="App">
      <div className="cinema-header">Herolo Cinema 
      <AddMovie/>
      </div>
      <Movies/>
      <div className="cinema-footer">Edited By Hilla</div>
      </div>
      );
    }
  }
  
  export default App;
  