import React, { Component } from "react";
import { observer, inject } from "mobx-react"; 
import { observable, action } from "mobx"; 
import { Modal } from 'react-bootstrap';



@inject("store")
@observer
class AddMovie extends Component {
    @observable showMe = false;
    @observable id = '';
    @observable title = '';
    @observable runtime = '';
    @observable genres = '';
    @observable director = '';
    @observable year = '';
    
    
    
    @action toggleAddMovie = ()=>{
        this.showMe = !this.showMe; 
    }
    
    @action onSubmit = (e) =>{
        e.preventDefault();
        let newMovie = {
            id : this.id,
            title : this.title,
            year : this.year,
            genres : this.genres,
            runtime : this.runtime,
            director : this.director
        }
        this.props.store.addMovie(newMovie);
        this.toggleAddMovie();
        
    }
    
    @action handleChange = (e) =>{
        this[e.target.name] = e.target.value;
    }
    
    render() {
        let movieDetails = this.props.movieDetails;
        console.log(movieDetails);
        return (!this.showMe?
            <div className="add-movie-close"><div className="span-add-movie" >Add New</div>
            <button className="btn-add-movie" onClick={this.toggleAddMovie}>🔽</button>
            </div>:
            <div>
            <div className="add-movie-close"><span className="span-add-movie" >Add New</span><button className="btn-add-movie" onClick={this.toggleAddMovie}>🔼</button></div>
            <div className="add-modal">
            <Modal.Dialog>
            <Modal.Header closeButton onClick={this.toggleAddMovie}>
            <Modal.Title>Add New Movie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form className="form-group" onSubmit={this.onSubmit}>
            <div className="input-group edt-mdl-gr"><input className="form-control input-sm" type="text" name="id"  value={this.id} onChange={this.handleChange} placeholder='id'/></div>
            <div className="input-group edt-mdl-gr"><input className="form-control input-sm" type="text" name="title"  value={this.title} onChange={this.handleChange} placeholder='title'/></div>
            <div className="input-group edt-mdl-gr"><input className="form-control input-sm" type="text" name="year"  value={this.year} onChange={this.handleChange}placeholder='year' /></div>
            <div className="input-group edt-mdl-gr"><input className="form-control input-sm" type="text" name="runtime"  value={this.runtime} onChange={this.handleChange} placeholder='runtime'/></div>
            <div className="input-group edt-mdl-gr"><input className="form-control input-sm" type="text" name="genres"  value={this.genres} onChange={this.handleChange} placeholder='genres'/></div>
            <div className="input-group edt-mdl-gr"><input className="form-control input-sm" type="text" name="director"  value={this.director} onChange={this.handleChange} placeholder='director'/></div>
            <input className="btn btn-primary edit-modal-btn" type="submit" value="Save" />
            <button className="btn btn-secondary edit-modal-btn" onClick={this.closeEditMovie}>Cancel</button>
            </form>
            </Modal.Body>
            </Modal.Dialog>
            </div>
            </div>);
        }
    }
    export default AddMovie;