import React, { Component } from "react";
import './style.css'

export default class FormularioCadastro extends Component {

  constructor(props){
    super(props);
    this.titulo = "";
    this.texto = "";
  }

  _handleMudancaTitulo(evento){
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _handleMudancaTexto(evento){
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  _criarNota(evento){
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto);
  }

  render() {
    return (
      <form className="formulario" onSubmit={this._criarNota.bind(this)}>
        <input
          type="text"
          placeholder="*Título"
          className="formulario__titulo"
          onChange={this._handleMudancaTitulo.bind(this)}
          required
        />
        <textarea
          placeholder="*Minhas anotações..."
          className="formulario__notas"
          onChange={this._handleMudancaTexto.bind(this)}
          required
        ></textarea>
        <button type="submit" className="formulario__botao">Criar Nota</button>
      </form>
    );
  }
}
