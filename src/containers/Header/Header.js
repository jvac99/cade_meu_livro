import React, { Component } from 'react';
import './Header.css';

export class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { title } = this.props;
        return (
            <div className="Header">
                <span>{title}</span>
            </div>
        );
    }
}