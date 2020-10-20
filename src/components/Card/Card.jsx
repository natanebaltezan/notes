import React, { Component } from 'react';
import './style.css';
import { ReactComponent as DeleteSVG } from '../../assets/img/delete.svg';

class Card extends Component {

  delete() {
    const index = this.props.index;
    this.props.deleteNote(index);
  }
  render() {
    return (
      <section className='card'>
        <header className='card_header'>
          <h3 className='card_title'>{this.props.title}</h3>
          <DeleteSVG
            onClick={this.delete.bind(this)} 
            title='icone-deletar'/>
        </header>
        <p className='card_text'>{this.props.text}</p>
      </section>
    );
  };
};

export default Card;