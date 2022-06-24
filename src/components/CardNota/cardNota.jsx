import React, { Component } from "react";
import './style.css';
import {ReactComponent as Delete} from '../../assets/delete.svg';

export default class CardNota extends Component {

  apagar(){
    this.props.apagarNota(this.props.index)
  }

  componentDidMount(){
    console.log(this.props)
  }

  render() {
    return (
      <section>
        <header>
          <h3 className="item__titulo">{this.props.titulo}</h3>
          <Delete onClick={this.apagar.bind(this)}/>
          <h4>{this.props.categoria}</h4>
        </header>
        <p className="item__conteudo">
         {this.props.texto}
        </p>
      </section>
    );
  }
}
