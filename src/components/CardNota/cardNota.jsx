import React, { Component } from "react";
import './style.css';

export default class CardNota extends Component {
  render() {
    return (
      <section>
        <header>
          <h3 className="item__titulo">{this.props.titulo}</h3>
        </header>
        <p className="item__conteudo">
         {this.props.texto}
        </p>
      </section>
    );
  }
}
