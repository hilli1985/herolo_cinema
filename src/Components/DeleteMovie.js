import React, { Component } from "react";
import { observer, inject } from "mobx-react"; 
import { observable, action } from "mobx"; 


@inject("store")
@observer
class DeleteMovie extends Component {
    @observable showMe=true;

    @action closeDeleteMovie=()=>{
        this.showMe = !this.showMe; 
    }
    @action deleteMovie=()=>{
        this.props.store.deleteMovie(this.props.movieId);
        this.props.showMovie();
    }
    render() {
        return (!this.showMe?<div></div>:<div className=''>DeleteMovie
        <button onClick={this.deleteMovie}>OK</button>
        <button onClick={this.closeDeleteMovie}>Cancel</button>
        </div>);
    }
}
export default DeleteMovie;