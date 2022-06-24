export default class Categorias{
    constructor(){
        this.categorias = [];
        this._inscritos = [];
    }

    criarCategoria(nomeCategoria) {
        this.categorias.push(nomeCategoria);
      }

    inscrever(func){
        this._inscritos.push(func);
    }

    notificar(){
        this._inscritos.forEach(func=>func(this.categorias));
    }
}