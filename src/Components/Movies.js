import React, { Component } from "react";
import { observer, inject } from "mobx-react"; 
import { observable } from "mobx"; 
import Movie from './Movie';


@inject("store")
@observer
class Movies extends Component {

    render() {
        return (
        <div className='movies-container movies'>
        {this.props.store.movies.map(m =>(<div><Movie movieDetails={m}/></div>))}
        </div>);
    }
}
export default Movies;