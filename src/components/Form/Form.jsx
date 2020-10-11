import React, { Component } from 'react';
import './style.css';

/**
 * onChange: chama uma função de handler quando o evento for disparado
 * bind: faz a associação de uma referência da instância, permitindo o uso dos atributos da instância
 * preventDefault: impede o reload da página
 * construtor: inicializa os atributos da classe
 * _ antes da função: convenção que indica método privado
 */
class Form extends Component {

  constructor(props) {
    super(props);
    this.title = '';
    this.note = '';
  };

  _handleChangeTitle(event) {
    this.title = event.target.value;
    console.log(this.title);
  };

  _handleChangeNote(event) {
    this.note = event.target.value;
    console.log(this.note);
  };

  _createNote(event) {
    event.preventDefault();
    event.stopPropagation();
    /**
     * create note é um método do app.js que está sendo passado como prop
     * para este componente
     */
    this.props.createNote(this.title, this.note);
  };

  render() {
    return (
      <form className='form'
        onSubmit={this._createNote.bind(this)}
      >
        <input
          type='text'
          placeholder='Título'
          className='form_input'
          onChange={this._handleChangeTitle.bind(this)}
        />
        <textarea
          rows={15}
          placeholder='Criar uma nota...'
          className='form_input'
          onChange={this._handleChangeNote.bind(this)}
        />
        <button className='form_input form_submit'>
          Criar nota
        </button>
      </form >
    );
  };
};

export default Form;