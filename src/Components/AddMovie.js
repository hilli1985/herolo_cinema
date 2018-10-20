import React, { Component } from "react";
import { observer, inject } from "mobx-react"; 
import { observable, action } from "mobx"; 



@inject("store")
@observer
class AddMovie extends Component {
    @observable showMe = true;
    @observable id = '';
    @observable title = '';
    @observable runtime = '';
    @observable genres = '';
    @observable director = '';
    @observable year = '';
    

     
    @action closeAddMovie = ()=>{
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
        this.closeAddMovie();

    }

    @action handleChange = (e) =>{
        this[e.target.name] = e.target.value;
    }
    
    render() {
        let movieDetails = this.props.movieDetails;
        console.log(movieDetails);
        return (!this.showMe?<div></div>:<div className=''>Add New Movie
        <form onSubmit={this.onSubmit}>
        <input type="text" name="id"  value={this.id} onChange={this.handleChange} placeholder='id'/><br/>
        <input type="text" name="title" value={this.title} onChange={this.handleChange} placeholder='title'/><br/>
        <input type="text" name="year" value={this.year} onChange={this.handleChange} placeholder='year'/><br/>
        <input type="text" name="runtime" value={this.runtime} onChange={this.handleChange} placeholder='runtime'/><br/>
        <input type="text" name="genres" value={this.genres} onChange={this.handleChange} placeholder='genres'/><br/>
        <input type="text" name="director" property="director" value={this.director} onChange={this.handleChange} placeholder='director'/><br/>
        <input type="submit" value="Add New" />
        </form>
        <button onClick={this.closeAddMovie}>Cancel</button>
        </div>);
    }
}
export default AddMovie;