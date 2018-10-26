import React, { Component } from "react";
import { observer, inject } from "mobx-react"; 
import Movie from './Movie';


@inject("store")
@observer
class Movies extends Component {

    render() {
        return (
        <div className='movies-container movies'>
        {this.props.store.movies.map(m =>(<Movie key={m.id} movieDetails={m}/>))}
        </div>);
    }
}
export default Movies;