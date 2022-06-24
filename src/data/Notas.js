export default class ArrayNotas{

    constructor(){
        this.notas = [];
        this._inscritos = [];
    }
    inscrever(func){
        this._inscritos.push(func);
    }

    notificar(){
        this._inscritos.forEach(func=>func(this.categorias));
    }

    criarNota(titulo, texto, categoria) {
        const novaNota = new Nota(titulo, texto, categoria);
        console.log(novaNota, this.notas)
        this.notas.push(novaNota);
    };

    deletarNota(index){
        this.notas.splice(index, 1);
    }
}

class Nota{
    constructor(titulo, texto, categoria){
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria;
    }
}