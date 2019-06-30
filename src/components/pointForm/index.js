import React, { Component } from 'react';
import './pointForm.css';

export default class Form extends Component {
    render() {
        return (
            <form  className="form bg-dark text-light">
            <h3>Add a Point of Interest</h3>
        <div className="form-group">
            <input type="text"
        className="form-control"
        placeholder="Title"></input>
            </div>
            <div className="form-group">
            <input type="text"
        className="form-control"
        placeholder="Promotor"></input>
            </div>
            <div className="form-group">
            <input type="text"
        className="form-control"
        placeholder="Link"></input>
            </div>
            <button type="submit" className="btn btn-primary">Add Point</button>
            </form>
    );
    }
}