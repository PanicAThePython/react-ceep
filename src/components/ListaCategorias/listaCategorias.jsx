import React, { Component } from 'react';
import './style.css';

class ListaCategorias extends Component {

    _handleEventoInput(e) {
        if (e.keyCode === 13) {
            this.props.criarCategoria(e.target.value)
        }
    }

    render() {
        return (
            <section>
                <ul className='categorias'>
                    {this.props.categorias.map((categoria, index) => {
                        return <li className='categorias__item' key={index}>{categoria}</li>
                    })}
                </ul>
                <input type="text" placeholder='Adicionar categoria...' onKeyUp={this._handleEventoInput.bind(this)} />
            </section>
        )
    }
}

export default ListaCategorias