import React, { Component } from "react";
import { observer, inject } from "mobx-react"; 
import { observable, action } from "mobx"; 
import { Modal, Button } from 'react-bootstrap';

@inject("store")
@observer
class DeleteMovie extends Component {

    @action deleteMovie=()=>{
        this.props.store.deleteMovie(this.props.movieId);
        this.props.toggleMe();
        this.props.showMovie();
    }
    render() {
        return (
        <div className='delete-modal'>
              <Modal.Dialog>
            <Modal.Header closeButton onClick={this.closeDeleteMovie}>
            <Modal.Title>Delete Movie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <p>Do You To Delete This Movie?</p>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="primary" onClick={this.deleteMovie}>OK</Button>
            <Button variant="secondary" onClick={this.props.toggleMe}>Cancel</Button>
            </Modal.Footer>
            </Modal.Dialog>
        </div>);
    }
}
export default DeleteMovie;