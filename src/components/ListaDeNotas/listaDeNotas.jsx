import React, { Component } from "react";
import CardNota from "../CardNota";
import './style.css'

export default class ListaDeNotas extends Component {

  render() {
    return (
      <ul className="notas">
        {this.props.notas.map((nota, index) => {
          return (
            <li className="notas__item" key={index}>
              <CardNota titulo={nota.titulo} texto={nota.texto}/>
            </li>
          );
        })}
      </ul>
    );
  }
}
