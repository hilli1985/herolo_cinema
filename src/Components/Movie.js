import React, { Component } from "react";
import { observer, inject } from "mobx-react"; 



@inject("store")
@observer
class Movie extends Component {
    render() {
        return (<div className=''>Movie
        <div>OK</div>
        <div>Cancel</div>
        </div>);
    }
}
export default Movie;