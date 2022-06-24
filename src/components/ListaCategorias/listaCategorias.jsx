import React, { Component } from 'react';
import './style.css';

class ListaCategorias extends Component {
    constructor(){
        super();
        this.state = {categorias:[]}
    }

    componentDidMount(){
        this.props.categorias.inscrever(this._novasCategorias.bind(this));
    }

    _novasCategorias(categorias){
        this.setState({...this.state, categorias})
    }

    _handleEventoInput(e) {
        if (e.keyCode === 13) {
            this.props.criarCategoria(e.target.value)
        }
    }

    render() {
        return (
            <section>
                <ul className='categorias'>
                    {this.state.categorias.map((categoria, index) => {
                        return <li className='categorias__item' key={index}>{categoria}</li>
                    })}
                </ul>
                <input type="text" placeholder='Adicionar categoria...' onKeyUp={this._handleEventoInput.bind(this)} />
            </section>
        )
    }
}

export default ListaCategorias