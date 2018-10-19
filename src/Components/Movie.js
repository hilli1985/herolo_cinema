import React, { Component } from "react";
import { observer, inject } from "mobx-react"; 
import { observable } from "mobx"; 
import EditMovie from './EditMovie';
import DeleteMovie from './DeleteMovie';



@inject("store")
@observer
class Movie extends Component {
    @observable showEditMovie=false;
    @observable showDeleteMovie=false;
    @observable showMovie=true;

    showMovie = () =>{
        this.showMovie = !this.showMovie;
    }
    
    toggleDeleteMovie=()=>{
        this.showDeleteMovie=!this.showDeleteMovie;
    }
    toggleEditMovie=()=>{
        this.showEditMovie=!this.showEditMovie;
    }
    
    render() {
        // debugger;
        console.log(this.props.movieDetails.year);
        return (!this.showMovie?<div></div>:<div className="movie">Movie
        <div className="movie-details">
            movieDetails:<br/>
            id:{this.props.movieDetails.id}<br/>
            title:{this.props.movieDetails.title}<br/>
            year:{this.props.movieDetails.year}<br/>
            runtime:{this.props.movieDetails.runtime}<br/>
            genres:{this.props.movieDetails.genres.map(g=><span>{g.name} </span>)}<br/>
            director:{this.props.movieDetails.director.name}<br/>
        </div>
        <button onClick={this.toggleEditMovie}>Edit</button>
        <button onClick={this.toggleDeleteMovie}>Delete</button>
        {/* https://react-bootstrap.github.io/components/buttons/ */}
        {this.showEditMovie&&<EditMovie movieId={this.props.movieDetails.id} movieDetails={this.props.movieDetails}/>}
        {this.showDeleteMovie&&<DeleteMovie showMovie={this.showMovie} movieId={this.props.movieDetails.id}/>}
        </div>);
    }
}
export default Movie;