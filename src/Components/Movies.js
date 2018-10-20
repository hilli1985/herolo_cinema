import React, { Component } from "react";
import { observer, inject } from "mobx-react"; 
import { observable } from "mobx"; 
import Movie from './Movie';
import AddMovie from './AddMovie';

@inject("store")
@observer
class Movies extends Component {

    @observable showAddMovie = false;
    
    toggleAddMovie = () => {
        this.showAddMovie = !this.showAddMovie;
    }
    
    render() {
        return (<div className='movies'>
        <div>
        <button onClick={this.toggleAddMovie}>Add</button>
        {this.showAddMovie&&<AddMovie/>}
        </div>
        Movies
        {this.props.store.movies.map(m =>(<div><Movie movieDetails={m}/></div>))}
        </div>);
    }
}
export default Movies;