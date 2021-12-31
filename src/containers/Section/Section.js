import React, { Component } from 'react';
import './Section.css';

export class Section extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        const { className, children } = this.props;

        return (

            <div className={className}>
                {children}
            </div>
        );

    }
}