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
    
    componentDidMount(){
        this.id = this.props.movieDetails.id
        this.title = this.props.movieDetails.title;
        this.year = this.props.movieDetails.year;
        this.runtime = this.props.movieDetails.runtime;
        this.genres = 'this.getGenreString()';
        this.director = this.props.movieDetails.director;
    }

    getGenreString = ()=>{
        // debugger;
        let genreStr='';
        this.props.movieDetails.genres.map(g => genreStr+(g.name));
        //debugger;
        return genreStr;
    }
    
    @action closeEditMovie = ()=>{
        this.showMe = !this.showMe; 
    }
    
    @action onSubmit = (e) =>{
        e.preventDefault();
        let updatedMovie = {}; 
        this.props.store.editMovie(updatedMovie);
    }
    render() {
        let movieDetails = this.props.movieDetails;
        return (!this.showMe?<div></div>:<div className=''>EditMovie
        <form onSubmit={this.onSubmit}>
        id:<input type="text" name="name" property="id" value={this.id} onChange={this.handleChange}/><br/>
        title:<input type="text" name="name" property="title" value={this.title} onChange={this.handleChange}/><br/>
        year:<input type="text" name="name" property="year" value={this.year} onChange={this.handleChange}/><br/>
        runtime<input type="text" name="name" property="runtime" value={this.runtime} onChange={this.handleChange}/><br/>
        genres:<input type="text" name="name" property="genres" value={this.genres}/><br/>
        director:<input type="text" name="name" property="director" value={this.director.name} onChange={this.handleChange}/><br/>
        <input type="submit" value="Save" />
        </form>
        <button onClick={this.closeEditMovie}>Cancel</button>
        </div>);
    }
}
export default EditMovie;