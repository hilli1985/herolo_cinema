import React, { Component } from "react";
import { observer, inject } from "mobx-react"; 
import Movie from './Movie';

@inject("store")
@observer
class Movies extends Component {
    render() {
        return (<div className='movies'>
        <div>add movie
        <button onClick={this.toggleEditMovie}>Add</button>
        </div>
        Movies
        {this.props.store.movies.map(m =>(<div><Movie movieDetails={m}/></div>))}
        </div>);
    }
}
export default Movies;