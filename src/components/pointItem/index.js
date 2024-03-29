import React, { Component, Fragment } from 'react';
import './pointItem.css';
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Index extends Component {
    render() {
        let line = this.props.post.link ? (
            <a href={this.props.post.link}>{this.props.post.title}</a>
    ) : (
        <span>{this.props.post.title}</span>
    );
        return (
            <Fragment>
            <span className="ptr" >
            <FontAwesomeIcon icon={["fas", "thumbs-up"]} size="2x" />
            {` ${this.props.post.upvotes}`}
    </span>
        <span className="pointitem">
            {line}
            <span>
            <a href="/">Comments</a>
            </span>
            </span>
            <p className="author">{this.props.post.author}</p>
            </Fragment>
    );
    }
}
