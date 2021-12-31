import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { tipo, valor, click, enviar, change } = this.props;
        return (
            <button className='button' type={tipo} onClick={click} onSubmit={enviar} onChange={change}>
                {valor}
            </button>
        );
    }
}

export default Button;