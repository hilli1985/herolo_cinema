import React, { Component } from 'react';
import './App.css';
import Movies from './Components/Movies';
import AddMovie from './Components/AddMovie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFilm} from '@fortawesome/free-solid-svg-icons'
import { library} from '@fortawesome/fontawesome-svg-core'
library.add(faFilm)



class App extends Component {
  
  render() {
    return (
      <div className="App">
      <div className="cinema-header"><FontAwesomeIcon className='icon' icon="film"/> Herolo Cinema 
      <AddMovie/>
      </div>
      <Movies/>
      <div className="cinema-footer"></div>
      </div>
      );
    }
  }
  
  export default App;
  