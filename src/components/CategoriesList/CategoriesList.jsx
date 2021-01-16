import React, { Component } from 'react';
import './style.css';

class CategoriesList extends Component {
  constructor() {
    super();
    this.state = { categories: [] };
    this._newCategories = this._newCategories.bind(this);
  };

  componentDidMount() {
    this.props.categories.subscribe(this._newCategories);
  };

  componentWillUnmount() {
    this.props.categories.unsubscribe(this._newCategories);
  };

  _newCategories(categories) {
    this.setState({ ...this.state, categories });
  };

  _handleInputEvent(e) {
    if (e.key === 'Enter') {
      let categoryValue = e.target.value;
      this.props.addCategory(categoryValue);
    }
  }
  render() {
    return (
      <section className='categories'>
        <ul className='categories-list'>
          {this.state.categories.map((category, index) => {
            return (
              <li key={index} className='categories-list-item'>
                {category}
              </li>
            );
          })}
        </ul>
        <input
          type='text'
          className='categories-list-input'
          placeholder='Adicionar categoria...'
          onKeyUp={this._handleInputEvent.bind(this)}
        />
      </section>
    );
  }
}

export default CategoriesList;