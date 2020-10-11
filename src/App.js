import React, { Component } from 'react';
import List from './components/List';
import Form from './components/Form';
import './assets/App.css';
import './assets/index.css';

class App extends Component {
  /**
   * 
  */
  constructor() {
    super();
    this.state = {
      notes:[]
    };
  };
  createNote(title, text) {
    const newNote = { title, text };
    const newArrayNotes = [...this.state.notes,newNote]
    const newState = {
      notes: newArrayNotes
    };
    this.setState(newState);
  };

  /**
   * notes é uma propriedade da Lista de Notas
   * this.notes é um atributo do objeto pai (app js)
   */
  render() {
    return (
      <section className='content'>
        <Form createNote={this.createNote.bind(this)} />
        <List notes={this.state.notes} />
      </section >
    );
  };
};

export default App;
