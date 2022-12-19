class Livro {
    constructor(nome, editora, paginas){
        this.nome = nome
        this.editora = editora
        this.paginas = paginas
    }

    anunciarTitulo(){
        console.log(`Titulo: ${this.nome}`)
    }

    descreverTitulo(){
        console.log(`${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} páginas`)
    }
}

const NodeJS = new Livro("Primeiros passos com NodeJS", "Casa do Código", 195)

NodeJS.anunciarTitulo()
NodeJS.descreverTitulo()

console.log(typeof Livro)

class LivroColecao extends Livro {
    constructor (nome, nomeColecao){
        super(nome)
        this.nomeColecao = nomeColecao
    }

    descreverColecao(){
        console.log(`O livro ${this.nome} faz parte da coleção ${this.nomeColecao}`)
    }
}

const logicaDeProgramacao = new LivroColecao("Logica de Programação", "Comece a programar")

logicaDeProgramacao.descreverColecao()

@testDirectCommit
