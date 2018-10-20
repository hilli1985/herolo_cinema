import React, { Component } from "react";
import { observer, inject } from "mobx-react"; 
import { observable, action } from "mobx"; 
import { Modal } from 'react-bootstrap';




@inject("store")
@observer
class EditMovie extends Component {
    @observable showMe = true;
    @observable id = '';
    @observable title = '';
    @observable runtime = '';
    @observable genres = '';
    @observable director = '';
    @observable year = '';
    
    componentDidMount =()=>{
        this.id = this.props.movieDetails.id
        this.title = this.props.movieDetails.title;
        this.year = this.props.movieDetails.year;
        this.genres = this.props.movieDetails.genres;
        this.runtime = this.props.movieDetails.runtime;
        this.director = this.props.movieDetails.director;
    }
    
    @action closeEditMovie = ()=> {
        this.props.toggleMe();
        // this.showMe = false; 
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
            // !this.showMe?<div></div>:
            <div className="edit-modal">
            <Modal.Dialog>
            <Modal.Header closeButton onClick={this.closeEditMovie}>
            <Modal.Title>Edit Movie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form className="form-group" onSubmit={this.onSubmit}>
            <div className="input-group edt-mdl-gr"><span className="input-group-text">id</span><input className="form-control input-sm" type="text" name="id"  value={this.id} onChange={this.handleChange}/></div>
            <div className="input-group edt-mdl-gr"><span className="input-group-text">title</span><input className="form-control input-sm" type="text" name="title"  value={this.title} onChange={this.handleChange}/></div>
            <div className="input-group edt-mdl-gr"><span className="input-group-text">year</span><input className="form-control input-sm" type="text" name="year"  value={this.year} onChange={this.handleChange}/></div>
            <div className="input-group edt-mdl-gr"><span className="input-group-text">runtime</span><input className="form-control input-sm" type="text" name="runtime"  value={this.runtime} onChange={this.handleChange}/></div>
            <div className="input-group edt-mdl-gr"><span className="input-group-text">genres</span><input className="form-control input-sm" type="text" name="genres"  value={this.genres} onChange={this.handleChange}/></div>
            <div className="input-group edt-mdl-gr"><span className="input-group-text">director</span><input className="form-control input-sm" type="text" name="director"  value={this.director} onChange={this.handleChange}/></div>
            <input className="btn btn-primary edit-modal-btn" type="submit" value="Save" />
            <button className="btn btn-secondary edit-modal-btn" onClick={this.closeEditMovie}>Cancel</button>
            </form>
            </Modal.Body>
            </Modal.Dialog>
            </div>)
        }
    }
    export default EditMovie;