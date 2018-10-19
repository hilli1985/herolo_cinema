import React, { Component } from "react";
import { observer, inject } from "mobx-react"; 

@inject("store")
@observer
class Movies extends Component {
    render() {
        return (<div className=''>Movies
        <div>OK</div>
        <div>Cancel</div>
        </div>);
    }
}
export default Movies;