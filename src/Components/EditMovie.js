import React, { Component } from "react";
import { observer, inject } from "mobx-react"; 
import { observable, action } from "mobx"; 
import { Modal } from 'react-bootstrap';



@inject("store")
@observer
class EditMovie extends Component {
    @observable showMe = true;
    @observable title = '';
    @observable runtime = '';
    @observable genres = '';
    @observable director = '';
    @observable year = '';
    
    componentDidMount =()=>{
        this.title = this.props.movieDetails.title;
        this.year = this.props.movieDetails.year;
        this.genres = this.props.movieDetails.genres;
        this.runtime = this.props.movieDetails.runtime;
        this.director = this.props.movieDetails.director;
    }
    
    @action closeEditMovie = ()=> {
        this.props.toggleMe();
    }
    
    @action onSubmit = (e) =>{
        e.preventDefault();
        let updatedMovie = {
            id : this.id,
            title : this.title,
            year : this.year,
            genres : this.genres,
            runtime : this.runtime,
            director : this.director
        }
        
        if (this.title==='') {
            alert('Title is cannot be empty!')
            return;
        }

        let movieExist = this.props.store.isMovieExist(this.title,'edit',this.id);
        if (movieExist){
            alert('Title is already exist, use a different one!')
            return;
        }
        this.props.store.editMovie(updatedMovie,this.props.movieId);
        this.closeEditMovie();
        
    }
    
    setGenreToArray = () => {
        let array = this.genres.toString().split(",");
        return array.map(a =>({name:a}));
    }
    
    
    @action handleChange = (e) =>{
        this[e.target.name] = e.target.value;
    }
    
    
    render() {
        return (
            <div className="edit-modal">
            <Modal.Dialog>
            <Modal.Header closeButton onClick={this.closeEditMovie}>
            <Modal.Title>Edit Movie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form className="form-group" onSubmit={this.onSubmit}>
            <div className="input-group edt-mdl-gr"><span className="input-span input-group-text">Title:</span><input className="input-span-right form-control input-sm" type="text" name="title"  value={this.title} onChange={this.handleChange}/></div>
            <div className="input-group edt-mdl-gr"><span className="input-span input-group-text">Year:</span><input className="input-span-right form-control input-sm" type="text" name="year"  value={this.year} onChange={this.handleChange}/></div>
            <div className="input-group edt-mdl-gr"><span className="input-span input-group-text">Runtime:</span><input className="input-span-right form-control input-sm" type="text" name="runtime"  value={this.runtime} onChange={this.handleChange}/></div>
            <div className="input-group edt-mdl-gr"><span className="input-span input-group-text">Genres:</span><input className="input-span-right form-control input-sm" type="text" name="genres"  value={this.genres} onChange={this.handleChange}/></div>
            <div className="input-group edt-mdl-gr"><span className="input-span input-group-text">Director:</span><input className="input-span-right form-control input-sm" type="text" name="director"  value={this.director} onChange={this.handleChange}/></div>
            <input className="btn btn-primary edit-modal-btn" type="submit" value="Save" />
            <button className="btn btn-secondary edit-modal-btn" onClick={this.closeEditMovie}>Cancel</button>
            </form>
            </Modal.Body>
            </Modal.Dialog>
            </div>)
        }
    }
    export default EditMovie;