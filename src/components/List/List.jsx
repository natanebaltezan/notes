import React, { Component } from 'react';
import Card from '../Card';
import './style.css';

class List extends Component {

  /**
   * Não é necessário declarar o construtor quando não for criado nenhum novo atributo
   * O jsx cria o construtor automaticamente sem precisar declará-lo
  */
  render() {
    return (
      <ul className='list'>
        {this.props.notes.map((note, index) => {
          return (
            <li className='list_item' key={index}>
              <Card
                index={index}
                deleteNote={this.props.deleteNote}
                title={note.title}
                text={note.text} />
            </li>
          );
        })}
      </ul >
    );
  };
};

export default List;