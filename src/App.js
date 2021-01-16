import React, { Component } from 'react';
import List from './components/List';
import Form from './components/Form';
import CategoriesList from './components/CategoriesList';
import './assets/App.css';
import './assets/index.css';
import Categories from './data/Categories';
import ArrayNotes from './data/Notes';

class App extends Component {

  constructor() {
    super();
    this.categories = new Categories();
    this.notes = new ArrayNotes();
  };

  render() {
    return (
      <section className='content'>
        <Form
          categories={this.categories}
          createNote={this.notes.addNote.bind(this.notes)}
        />
        <main className='main-content'>
          <CategoriesList
            addCategory={this.categories.addCategory.bind(this.categories)}
            categories={this.categories}
          />
          <List
            deleteNote={this.notes.deleteNote.bind(this.notes)}
            notes={this.notes} />
        </main>
      </section >
    );
  };
};

export default App;
