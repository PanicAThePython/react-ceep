import { Component } from "react/cjs/react.production.min";
import FormularioCadastro from "./components/FormularioCadastro/formularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas/listaDeNotas";

class App extends Component {

  constructor(){
    super();
    this.state = {
      notas:[]
    };
  }
  criarNota(titulo, texto) {
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArrayNotas,
    }
    // this.notas.push(novaNota);
    // this.setState({
    //   notas: this.notas,
    // })
    this.setState(novoEstado);
  }
  render() {
    return (
      <section className="bloco-de-notas">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <div className="minhas-notas">
          <h2 className="minhas-notas__titulo">Minhas Notas</h2>
          <ListaDeNotas notas={this.state.notas}/>
        </div>
      </section>
    );
  }
}

export default App;
