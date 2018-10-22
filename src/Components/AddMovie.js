import React, { Component } from "react";
import { observer, inject } from "mobx-react"; 
import { observable, action } from "mobx"; 
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons'
import { library} from '@fortawesome/fontawesome-svg-core'
library.add(faPlusSquare)


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
        this.clearModal();
    }
    
    @action onSubmit = (e) =>{
        let movieExist = false;
        e.preventDefault();
        let newMovie = {
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

        movieExist = this.props.store.isMovieExist(this.title);
        if (movieExist){
            alert('Title is already exist, use a different one!')
            return;
        }
        this.props.store.addMovie(newMovie);
        this.clearModal();
        this.toggleAddMovie();
        
    }

    @action clearModal  = () => {
        this.id = '';
        this.title = '';
        this.runtime = '';
        this.genres = '';
        this.director = '';
        this.year = '';
    }

    @action handleChange = (e) =>{
        this[e.target.name] = e.target.value;
    }
    
    render() {
        return (!this.showMe?
            <div className="add-movie">Add New<button className="btn-add-movie" onClick={this.toggleAddMovie}> <FontAwesomeIcon className='icon' icon="plus-square" /></button>
            </div>
            :
            <div>
            <div className="add-movie">Add New<button className="btn-add-movie" onClick={this.toggleAddMovie}> <FontAwesomeIcon className='icon' icon="plus-square" /></button>
            </div>
            <div className="add-modal">
            <Modal.Dialog>
            <Modal.Header closeButton onClick={this.toggleAddMovie}>
            <Modal.Title>Add New Movie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form className="form-group" onSubmit={this.onSubmit}>
            <input className="input-group edt-mdl-gr form-control input-sm" type="text" name="id"  value={this.id} onChange={this.handleChange} placeholder='id'/>
            <input className="input-group edt-mdl-gr form-control input-sm" type="text" name="title"  value={this.title} onChange={this.handleChange} placeholder='title'/>
            <input className="input-group edt-mdl-gr form-control input-sm" type="text" name="year"  value={this.year} onChange={this.handleChange}placeholder='year' />
            <input className="input-group edt-mdl-gr form-control input-sm" type="text" name="runtime"  value={this.runtime} onChange={this.handleChange} placeholder='runtime'/>
            <input className="input-group edt-mdl-gr form-control input-sm" type="text" name="genres"  value={this.genres} onChange={this.handleChange} placeholder='genres'/>
            <input className="input-group edt-mdl-gr form-control input-sm" type="text" name="director"  value={this.director} onChange={this.handleChange} placeholder='director'/>
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