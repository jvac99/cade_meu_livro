import React, { Component } from 'react';
import './Input.css';

export class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        const { label, tipo, onChange } = this.props;

        return (
            <div className="Input">
                <label> {label} </label>
                <input type={tipo} onChange={onChange} ></input>
            </div>
        );

    }

}