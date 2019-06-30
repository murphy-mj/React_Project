import React, { Component } from "react";
import "./filterControls.css"

export default class FilterControls extends Component {
    render() {
        return (
            <div className="container-fluid">
            <div className="row bg-warning">
            <div className="col-md-12">
            <h4>
            <span>Filter </span>
            <input type="text" placeholder="Name Search" />
            <span> Select Point of Interest Type: </span>
        <select id="PoiType">
            <option value="all">All</option>
            <option value="rivers">Rivers</option>
            <option value="lakes">Lakes</option>
            <option value="forest">Forests</option>
            <option value="beaches">Beaches</option>
            <option value="stone-structures">Stone Structures</option>
            </select>
            </h4>
            </div>
            </div>
            </div>
    );
    }
}