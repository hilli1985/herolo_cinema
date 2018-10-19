import React, { Component } from "react";
import { observer, inject } from "mobx-react"; 



@inject("store")
@observer
class EditMovie extends Component {
    render() {
        return (<div className=''>deleteMovie
        <div>OK</div>
        <div>Cancel</div>
        </div>);
    }
}
export default EditMovie;