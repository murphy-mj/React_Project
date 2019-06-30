import React, { Component } from "react";
import "./point.css";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Point extends Component {
    render() {
        return (
            <div className="col-sm-3">
            <div className="card">
            <img
        className="card-img-tag center "
        alt={this.props.point.name}
        src={this.props.point.picture.thumbnail}
        />
        <div className="card-body">
            <h5 className="card-title ">
            {`${this.props.point.name.first} ${
                this.props.point.name.last
                }`}
    </h5>
        <p key="email">
            <FontAwesomeIcon icon={["fas", "envelope"]} />
        <span> {this.props.point.email}</span>
        </p>
        <p key="phone">
            <FontAwesomeIcon icon={["fas", "phone"]} />
        <span> {this.props.point.phone} </span>
        </p>
        </div>
        <div className="card-footer">
            <div
        className="btn-group d-flex btn-group-justified"
        role="group"
        aria-label="..."
            >
            <button type="button" className={"btn btn-default w-100"}>
            {" Edit "}
            </button>
            <button type="button" className={"btn btn-danger w-100"}>
            {"Delete"}
            </button>
            </div>
            </div>
            </div>
            </div>
    );
    }
}

export default Point;