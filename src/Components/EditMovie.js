import React, { Component } from "react";
import { observer, inject } from "mobx-react"; 
import { observable, action } from "mobx"; 



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
     
    @action closeEditMovie = ()=>{
        this.showMe = !this.showMe; 
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
        let movieDetails = this.props.movieDetails;
        console.log(movieDetails);
        return (!this.showMe?<div></div>:<div className=''>EditMovie
        <form onSubmit={this.onSubmit}>
        id:   <input type="text" name="id"  value={this.id} onChange={this.handleChange}/><br/>
        title:<input type="text" name="title" value={this.title} onChange={this.handleChange}/><br/>
        year:<input type="text" name="year" value={this.year} onChange={this.handleChange}/><br/>
        runtime:<input type="text" name="runtime" value={this.runtime} onChange={this.handleChange}/><br/>
        genres: <input type="text" name="genres" value={this.genres} onChange={this.handleChange}/><br/>
        director:<input type="text" name="director" property="director" value={this.director} onChange={this.handleChange}/><br/>
        <input type="submit" value="Save" />
        </form>
        <button onClick={this.closeEditMovie}>Cancel</button>
        </div>);
    }
}
export default EditMovie;