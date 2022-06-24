import { Component } from "react/cjs/react.production.min";
import FormularioCadastro from "./components/FormularioCadastro/formularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas/listaDeNotas";
import ListaCategorias from "./components/ListaCategorias/listaCategorias";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
      categorias:[],
    };
  }

  criarCategoria(nomeCategoria) {
    const novoArrayCat = [...this.state.categorias, nomeCategoria];
    const novoEstado = {
      ...this.state,
      categorias: novoArrayCat
    };
    this.setState(novoEstado);
  }

  criarNota(titulo, texto, categoria) {
    const novaNota = { titulo, texto, categoria };
    console.log(novaNota)
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas,
    };
    // this.notas.push(novaNota);
    // this.setState({
    //   notas: this.notas,
    // })
    this.setState(novoEstado);
  }

  deletarNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({ notas: arrayNotas });
  }

  render() {
    return (
      <section className="bloco-de-notas">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} categorias={this.state.categorias}/>
        <div className="minhas-notas">
          <h2 className="minhas-notas__titulo">Minhas Notas</h2>
          <section className="sessao__categorias">
            <h4 className="categorias__titulo">Categorias</h4>
            <ListaCategorias categorias={this.state.categorias} criarCategoria={this.criarCategoria.bind(this)}/>
          </section>

          <ListaDeNotas
            notas={this.state.notas}
            apagarNota={this.deletarNota.bind(this)}
          />
        </div>
      </section>
    );
  }
}

export default App;
