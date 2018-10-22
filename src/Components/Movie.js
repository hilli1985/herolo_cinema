import React, { Component } from "react";
import { observer, inject } from "mobx-react"; 
import { observable } from "mobx"; 
import EditMovie from './EditMovie';
import DeleteMovie from './DeleteMovie';
import { Badge, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPencilAlt,faTrashAlt,faClock} from '@fortawesome/free-solid-svg-icons'
import { library} from '@fortawesome/fontawesome-svg-core'
library.add(faPencilAlt,faTrashAlt,faClock)



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
    
    getGenreStr = () => {
        let genres = this.props.movieDetails.genres;
        return(genres.split(',').join(', '));
    }
    
    
    
    render() {
        this.getGenreStr();
        return (!this.showMovie?<div></div>:
            <div key={this.props.movieDetails.id} className="item-container movie">
            <div className="movie-buttons">
            <button onClick={this.toggleEditMovie}><FontAwesomeIcon className='icon' icon="pencil-alt" /></button>
            <button onClick={this.toggleDeleteMovie}><FontAwesomeIcon className='icon' icon="trash-alt" /></button>
            </div>
            <div className="movie-title">{this.props.movieDetails.title}</div>
            <div className="movie-body">
            <img className="movie-circle" src={this.props.movieDetails.poster} alt="Smiley face" height="100%" width="100%"></img>
            <div className="movie-details">
            <Badge variant="warning">{this.props.movieDetails.year}</Badge><br/>
            <Alert className="alert-movie" variant='dark'>
            <FontAwesomeIcon className='icon' icon="clock" /> {this.props.movieDetails.runtime}<br/><br/>
            Director: {this.props.movieDetails.director}<br/>
            Genres: {this.getGenreStr()}
            </Alert>
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