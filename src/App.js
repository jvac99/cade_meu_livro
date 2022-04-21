import './App.css';
import React, { Component } from 'react';
import { Livros } from './features/Livros/Livros'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Livros />
      </div>
    );
  }
}