import React, { Component } from "react";
import { observer, inject } from "mobx-react"; 
import { observable } from "mobx"; 
import EditMovie from './EditMovie';
import DeleteMovie from './DeleteMovie';
import { Badge, Alert } from 'react-bootstrap';


@inject("store")
@observer
class Movie extends Component {
    @observable showEditMovie=false;
    @observable showDeleteMovie=false;
    @observable showMovie=true;
    
    showMovie = () => {
        this.showMovie = !this.showMovie;
    }
    
    toggleDeleteMovie = () =>{
        this.showDeleteMovie=!this.showDeleteMovie;
        console.log('delete');
    }
    toggleEditMovie = () =>{
        this.showEditMovie=!this.showEditMovie;
    }
    
    render() {
        return (!this.showMovie?<div></div>:
            <div className="item-container movie">
            <div className="movie-buttons">
            <button onClick={this.toggleEditMovie}>✏</button>
            <button onClick={this.toggleDeleteMovie}>🗑</button>
            </div>
            <div className="movie-title">{this.props.movieDetails.title}</div>
            <div className="movie-body">
            <img className="movie-circle" src={this.props.movieDetails.poster} alt="Smiley face" height="100%" width="100%"></img>
            <div className="movie-details">
            <Badge variant="warning">{this.props.movieDetails.year}</Badge><br/><br/>
            <div className="alert-movie"><Alert variant='dark'>
            {this.props.movieDetails.genres}<br/>
            director:{this.props.movieDetails.director}<br/><br/>
            ⌚{this.props.movieDetails.runtime}
            </Alert></div>
            </div>    
            </div>
            {this.showEditMovie && <EditMovie toggleMe={this.toggleEditMovie} movieId={this.props.movieDetails.id} movieDetails={this.props.movieDetails}/>}
            {this.showDeleteMovie && <DeleteMovie toggleMe={this.toggleDeleteMovie} showMovie={this.showMovie} movieId={this.props.movieDetails.id}/>}
            <br/>
            <div className='movie-title'>id:{this.props.movieDetails.id}</div>
            </div>);
        }
    }
    export default Movie;