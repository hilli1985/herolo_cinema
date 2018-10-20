import React, { Component } from "react";
import { Modal, Button } from 'react-bootstrap';



class Layout extends Component {
    render() { 
        return (<div className="add-modal">
        <Modal.Dialog>
        <Modal.Header closeButton onClick={this.closeEditMovie}>
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
        {/* <input className="btn btn-primary edit-modal-btn" type="submit" value="Save" /> */}
        {/* <button className="btn btn-secondary edit-modal-btn" onClick={this.closeEditMovie}>Cancel</button> */}
        </form>
        </Modal.Body>
        
        <Modal.Footer>
        <Button variant="primary" type="submit">Save</Button>
        <Button variant="secondary" onClick={this.closeEditMovie}>Close</Button>
        </Modal.Footer>
        </Modal.Dialog>
        </div>
        );   
    }}
    
    export default Layout;
    